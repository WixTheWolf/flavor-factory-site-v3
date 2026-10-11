"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT } from "@/lib/contact";
import { useShortlist } from "@/lib/shortlist";
import s from "./QuickSampleRequest.module.css";

/** Values must match QUICK_FORMATS in app/api/sample-request/route.ts. */
const FORMATS = ["Liquid", "Powder", "Not sure"] as const;

/** Read by the detailed form so people never type the same thing twice. */
export const QUICK_REQUEST_STORAGE_KEY = "ff-quick-request";

type Status = "idle" | "sending" | "sent" | "invalid" | "tooMany" | "deliveryError";

type Props = {
  /** Where the form sits, for analytics and the email we receive, e.g. "homepage". */
  location: string;
  initialIndustry?: string;
  title?: string;
};

function value(form: FormData, name: string) {
  return String(form.get(name) || "").trim();
}

/**
 * The fastest way to ask for samples: four fields, one click, sent straight to our sample inbox.
 * Specs and shipping are confirmed by reply, or added with the detailed form.
 */
export function QuickSampleRequest({ location, initialIndustry = "", title = "Request samples" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [startedAt, setStartedAt] = useState("");
  const [interacted, setInteracted] = useState(false);
  const [sentTo, setSentTo] = useState({ name: "", email: "" });
  const { items: shortlist, clear: clearShortlist, mounted } = useShortlist();
  const tracked = useRef(false);
  const doneRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => setStartedAt(String(Date.now())), []);

  // The confirmation is shorter than the form, so bring it into view (and to screen readers).
  useEffect(() => {
    if (status !== "sent" || !doneRef.current) return;
    doneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    doneRef.current.focus({ preventScroll: true });
  }, [status]);

  const shortlistText = mounted && shortlist.length
    ? shortlist.map((item) => `${item.name} (${item.format})`).join(", ")
    : "";

  function markInteraction() {
    if (!interacted) setInteracted(true);
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("request_sample_form_start", { type: "quick", location });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const invalid = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea"))
      .find((control) => !control.checkValidity());
    if (invalid) {
      invalid.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setStatus("sending");

    try {
      const response = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        trackEvent("request_sample_form_submit", { type: "quick", location, shortlistCount: shortlist.length });
        try {
          sessionStorage.setItem(QUICK_REQUEST_STORAGE_KEY, JSON.stringify({
            name: value(data, "name"),
            email: value(data, "email"),
            company: value(data, "company"),
            phone: value(data, "phone"),
            flavorTarget: value(data, "flavorTarget"),
          }));
        } catch {
          // Storage unavailable (private mode); the detailed form just starts empty.
        }
        clearShortlist();
        setSentTo({ name: value(data, "name").split(/\s+/)[0], email: value(data, "email") });
        setStatus("sent");
        return;
      }

      trackEvent("request_sample_form_error", { type: "quick", reason: `api_${response.status}` });
      setStatus(response.status === 429 ? "tooMany" : response.status >= 500 ? "deliveryError" : "invalid");
    } catch {
      trackEvent("request_sample_form_error", { type: "quick", reason: "network_error" });
      setStatus("deliveryError");
    }
  }

  if (status === "sent") {
    return (
      <div className={s.card} role="status" ref={doneRef} tabIndex={-1}>
        <CheckCircle2 className={s.doneIcon} size={40} aria-hidden="true" />
        <h3 className={s.title}>Request sent{sentTo.name ? `, ${sentTo.name}` : ""}.</h3>
        <p className={s.lede}>
          A real person on our Norco team will reply to <strong>{sentTo.email}</strong> to confirm the details and where to ship your samples.
        </p>
        <Link
          href="/request-samples?details=1"
          className={s.more}
          onClick={() => trackEvent("request_sample_click", { location: `${location} quick sent` })}
        >
          Want them faster? Add specs and shipping now
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <form
      className={s.card}
      onSubmit={onSubmit}
      onFocus={markInteraction}
      onPointerDown={markInteraction}
      onKeyDown={markInteraction}
      noValidate
      aria-labelledby={titleId}
    >
      <input type="hidden" name="requestType" value="quick" />
      <input type="hidden" name="sourcePage" value={location} />
      <input type="hidden" name="formStartedAt" value={startedAt} />
      <input type="hidden" name="humanConfirmed" value={interacted ? "yes" : ""} />
      {initialIndustry && <input type="hidden" name="industry" value={initialIndustry} />}
      <div aria-hidden="true" className={s.trap}>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label>Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className={s.head}>
        <h3 id={titleId} className={s.title}>{title}</h3>
        <span className={s.badge}>About 1 minute</span>
      </div>

      <div className={s.grid}>
        <label className="form-field">
          <span>Your name *</span>
          <input className="input" name="name" required minLength={2} maxLength={161} autoComplete="name" placeholder="First and last name" />
        </label>
        <label className="form-field">
          <span>Work email *</span>
          <input className="input" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@company.com" />
        </label>
        <label className="form-field">
          <span>Company *</span>
          <input className="input" name="company" required minLength={2} maxLength={160} autoComplete="organization" placeholder="Company name" />
        </label>
        <label className="form-field">
          <span>Phone <small>(optional)</small></span>
          <input className="input" name="phone" type="tel" maxLength={50} autoComplete="tel" placeholder="Best number" />
        </label>
        <label className={`form-field ${s.wide}`}>
          <span>What are you making, and which flavors? *</span>
          <textarea
            className={`textarea ${s.textarea}`}
            name="flavorTarget"
            required
            minLength={3}
            maxLength={500}
            rows={3}
            placeholder="Example: protein shake, need vanilla and chocolate"
            defaultValue={shortlistText}
            key={shortlistText}
          />
        </label>
        <fieldset className={`${s.formats} ${s.wide}`}>
          <legend>Format <small>(optional)</small></legend>
          <div>
            {FORMATS.map((format) => (
              <label key={format}>
                <input type="radio" name="format" value={format} />
                <span>{format}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button type="submit" className={`btn-gold btn-lg ${s.submit}`} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Sample Request"}
        {status !== "sending" && <ArrowRight size={18} aria-hidden="true" />}
      </button>

      {status === "invalid" && (
        <p className="form-error" role="alert">Check your name, company, and work email, then try again.</p>
      )}
      {status === "tooMany" && (
        <p className="form-error" role="alert">
          We already have a few requests from you today. Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> to add more.
        </p>
      )}
      {status === "deliveryError" && (
        <p className="form-error" role="alert">
          We couldn&apos;t send that just now. Try again, or email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      )}

      <p className={s.foot}>
        Goes straight to our sample team. Need to send full specs?{" "}
        <Link href="/request-samples?details=1" onClick={() => trackEvent("request_sample_click", { location: `${location} quick detailed` })}>
          Use the detailed form
        </Link>
        .
      </p>
    </form>
  );
}
