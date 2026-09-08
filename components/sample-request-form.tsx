"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { industries } from "@/data/industries";
import { industryFormFields } from "@/data/industry-form-fields";
import { useShortlist } from "@/lib/shortlist";
import { normalizeIndustryKey } from "@/lib/industry-utils";
import styles from "./sample-request-form.module.css";

const SAMPLE_REQUEST_EMAIL = "samples@flavorfactory.net";

function field(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

function optionalIndustryLines(formData: FormData) {
  const industryKey = normalizeIndustryKey(field(formData, "industry"));
  const fields = industryKey ? industryFormFields[industryKey] ?? [] : [];
  const lines = fields
    .map((question) => {
      const value = field(formData, question.name);
      return value ? `${question.label}: ${value}` : null;
    })
    .filter(Boolean) as string[];

  const otherApplication = field(formData, "otherApplication");
  if (otherApplication) lines.unshift(`Other application detail: ${otherApplication}`);

  return lines;
}

function mailtoUrl(formData: FormData) {
  const company = field(formData, "company");
  const name = field(formData, "name");
  const industryLines = optionalIndustryLines(formData);
  const subject = `Sample request: ${company || name || "Website inquiry"}`;
  const body = [
    "New sample request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${field(formData, "email")}`,
    `Phone: ${field(formData, "phone") || "Not provided"}`,
    `Shipping address: ${field(formData, "shippingAddress")}`,
    `Product application: ${field(formData, "industry") || "Not provided"}`,
    `Finished product base: ${field(formData, "productBase") || "Not provided"}`,
    `Flavor direction: ${field(formData, "flavorTarget") || "Not provided"}`,
    `Preferred format: ${field(formData, "format") || "Not provided"}`,
    `Label goal: ${field(formData, "declaration") || "Not provided"}`,
    `Primary challenge: ${field(formData, "challenge") || "Not provided"}`,
    `Benchmark or existing flavor: ${field(formData, "benchmark") || "Not provided"}`,
    `Project scale: ${field(formData, "projectScale") || "Not provided"}`,
    `Target use level: ${field(formData, "useLevel") || "Not provided"}`,
    `Timeline: ${field(formData, "timeline") || "Not provided"}`,
    ...(industryLines.length ? ["", "Application-specific details:", ...industryLines] : []),
    "",
    "Project notes:",
    field(formData, "notes") || "Not provided",
  ].join("\n");

  return `mailto:${SAMPLE_REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function SampleRequestForm({ initialIndustry = "" }: { initialIndustry?: string }) {
  const normalizedInitial = normalizeIndustryKey(initialIndustry) || initialIndustry;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">("idle");
  const [industry, setIndustry] = useState(normalizedInitial);
  const [detailsOpen, setDetailsOpen] = useState(Boolean(normalizedInitial));
  const [formStartedAt, setFormStartedAt] = useState("");
  const [humanConfirmed, setHumanConfirmed] = useState(false);
  const [shortlistNote, setShortlistNote] = useState("");
  const { items: shortlist, clear: clearShortlist, mounted } = useShortlist();
  const started = useRef(false);

  const industryKey = normalizeIndustryKey(industry);
  const industrySpecificFields = industryKey ? industryFormFields[industryKey] ?? [] : [];

  useEffect(() => {
    setFormStartedAt(String(Date.now()));
  }, []);

  useEffect(() => {
    if (mounted && shortlist.length > 0) {
      setShortlistNote(shortlist.map((item) => `${item.name} (${item.format})`).join(", "));
      setDetailsOpen(true);
    }
  }, [mounted, shortlist]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!humanConfirmed) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (shortlist.length > 0) {
      const shortlistLine = `Shortlisted profiles: ${shortlist.map((item) => `${item.name} (${item.format})`).join(", ")}`;
      const existingNotes = field(formData, "notes");
      formData.set("notes", existingNotes ? `${shortlistLine}\n\n${existingNotes}` : shortlistLine);
    }

    try {
      const response = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        trackEvent("request_sample_form_submit", {
          industry: field(formData, "industry") || "not provided",
          shortlistCount: shortlist.length,
        });
        setStatus("sent");
        clearShortlist();
        const redirectIndustry = normalizeIndustryKey(field(formData, "industry")) || field(formData, "industry");
        window.location.href = redirectIndustry
          ? `/request-samples/confirmation?industry=${encodeURIComponent(redirectIndustry)}`
          : "/request-samples/confirmation";
        return;
      }

      if (response.status >= 500) {
        trackEvent("request_sample_form_error", { reason: "api_fallback" });
        window.location.href = mailtoUrl(formData);
        setStatus("fallback");
        return;
      }

      trackEvent("request_sample_form_error", { reason: `api_${response.status}` });
      setStatus("error");
    } catch {
      trackEvent("request_sample_form_error", { reason: "network_error" });
      window.location.href = mailtoUrl(formData);
      setStatus("fallback");
    }
  }

  function trackStart() {
    if (started.current) return;
    started.current = true;
    trackEvent("request_sample_form_start");
  }

  return (
    <form className="form-grid" onFocus={trackStart} onSubmit={onSubmit}>
      <input type="hidden" name="formStartedAt" value={formStartedAt} />
      <input type="hidden" name="humanConfirmed" value={humanConfirmed ? "yes" : ""} />

      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label>Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {mounted && shortlist.length > 0 && (
        <div className="shortlist-form-panel">
          <div className="shortlist-form-label">
            {shortlist.length} flavor{shortlist.length === 1 ? "" : "s"} in your request
          </div>
          <div className="shortlist-form-chips">
            {shortlist.map((item) => (
              <span className="shortlist-chip" key={item.id}>
                {item.name}
                <span className="shortlist-chip-format">{item.format}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="form-section-heading form-field-wide">
        <h2>Four fields are required</h2>
        <p>Name, company, email, and shipping address. Everything else is optional.</p>
      </div>

      <label className="form-field">
        <span>Name *</span>
        <input className="input" required name="name" autoComplete="name" placeholder="Your name" maxLength={120} />
      </label>
      <label className="form-field">
        <span>Company name *</span>
        <input className="input" required name="company" autoComplete="organization" placeholder="Company name" maxLength={160} />
      </label>
      <label className="form-field form-field-wide">
        <span>Email *</span>
        <input className="input" required name="email" autoComplete="email" type="email" placeholder="you@company.com" maxLength={254} />
      </label>
      <label className="form-field form-field-wide">
        <span>Shipping address *</span>
        <textarea className="textarea" required name="shippingAddress" autoComplete="street-address" rows={2} placeholder="Street, city, state, ZIP code, and country if outside the U.S." maxLength={500} />
      </label>

      <div className="form-optional-section">
        <button
          type="button"
          className="form-optional-toggle"
          aria-expanded={detailsOpen ? "true" : "false"}
          onClick={() => setDetailsOpen((value) => !value)}
        >
          <span>Add project details <small>(optional)</small></span>
          <span className="form-optional-arrow" aria-hidden="true">{detailsOpen ? "-" : "+"}</span>
        </button>
        <p className="form-optional-hint">Add what you know now. Our team can follow up for anything missing.</p>

        {detailsOpen && (
          <div className="form-optional-fields">
            <label className="form-field">
              <span>Phone <small>(optional)</small></span>
              <input className="input" name="phone" autoComplete="tel" placeholder="Best number to reach you" maxLength={50} />
            </label>
            <label className="form-field">
              <span>Product application <small>(optional)</small></span>
              <select
                className="input"
                name="industry"
                value={industry}
                onChange={(event) => setIndustry(event.target.value)}
              >
                <option value="">Select an application</option>
                {industries.map((item) => <option key={item.key} value={item.key}>{item.name}</option>)}
                <option value="other">Other application</option>
              </select>
            </label>
            {industry === "other" && (
              <label className="form-field">
                <span>Describe the application <small>(optional)</small></span>
                <input className="input" name="otherApplication" placeholder="Seasoning, pet treat, sauce, or another product" maxLength={160} />
              </label>
            )}
            <label className="form-field">
              <span>Flavor direction <small>(optional)</small></span>
              <input className="input" name="flavorTarget" placeholder="Fresh mint, tropical fruit, vanilla, or another direction" defaultValue={shortlistNote} key={shortlistNote} maxLength={240} />
            </label>
            <label className="form-field">
              <span>Desired format <small>(optional)</small></span>
              <select className="input" name="format" defaultValue="">
                <option value="">Not sure yet</option>
                <option>Liquid</option>
                <option>Powder</option>
                <option>Oil-soluble</option>
                <option>Emulsion</option>
              </select>
            </label>
            <label className="form-field">
              <span>Target timeline <small>(optional)</small></span>
              <input className="input" name="timeline" placeholder="Sample deadline or production timing" maxLength={160} />
            </label>
            <label className="form-field form-field-wide">
              <span>Project notes <small>(optional)</small></span>
              <textarea className="textarea" name="notes" placeholder="Anything useful about the product, flavor, base, or challenge" maxLength={4000} />
            </label>
            <label className="form-field">
              <span>Finished product base <small>(optional)</small></span>
              <input className="input" name="productBase" placeholder="Water, dairy, protein, oil, syrup, dough, or another base" maxLength={240} />
            </label>
            <label className="form-field">
              <span>Label goal <small>(optional)</small></span>
              <select className="input" name="declaration" defaultValue="">
                <option value="">Not sure yet</option>
                <option>Natural</option>
                <option>Natural and artificial</option>
                <option>Artificial</option>
                <option>Organic-compliant</option>
                <option>Kosher</option>
                <option>Halal</option>
              </select>
            </label>
            <label className="form-field">
              <span>Primary challenge <small>(optional)</small></span>
              <select className="input" name="challenge" defaultValue="">
                <option value="">Select if applicable</option>
                <option>Masking</option>
                <option>Heat stability</option>
                <option>Sweetness balance</option>
                <option>Bitterness</option>
                <option>Cooling</option>
                <option>Mouthfeel</option>
                <option>Supplier match</option>
                <option>Cost target</option>
                <option>Production scale-up</option>
                <option>Other</option>
              </select>
            </label>
            <label className="form-field">
              <span>Benchmark or existing flavor <small>(optional)</small></span>
              <input className="input" name="benchmark" placeholder="Product, supplier flavor, or reference profile" maxLength={240} />
            </label>
            <label className="form-field">
              <span>Estimated scale <small>(optional)</small></span>
              <input className="input" name="projectScale" placeholder="Pilot run, first production run, or annual volume" maxLength={160} />
            </label>
            <label className="form-field">
              <span>Target use level <small>(optional)</small></span>
              <input className="input" name="useLevel" placeholder="Only if known" maxLength={100} />
            </label>
            {industrySpecificFields.map((question) => (
              <label className="form-field" key={question.name}>
                <span>{question.label} <small>(optional)</small></span>
                <input className="input" name={question.name} placeholder={question.placeholder} maxLength={240} />
              </label>
            ))}
          </div>
        )}
      </div>

      <p className="sample-file-note">Have a spec, label, or benchmark file? Mention it in the notes and we will tell you where to send it.</p>
      <div className="sample-utility">
        <p>A real person from our team will review your request and follow up by email.</p>
        <label className={`${styles.humanProof} ${humanConfirmed ? styles.humanProofChecked : ""}`}>
          <input
            type="checkbox"
            checked={humanConfirmed}
            onChange={(event) => {
              setHumanConfirmed(event.target.checked);
              if (event.target.checked && status === "error") setStatus("idle");
            }}
          />
          <span className={styles.humanProofBox} aria-hidden="true">{humanConfirmed ? "✓" : ""}</span>
          <span className={styles.humanProofCopy}>
            <strong>I&apos;m human</strong>
            <small>Secure bot protection runs in the background.</small>
          </span>
        </label>
        <button type="submit" className="cta-btn" disabled={status === "sending" || !humanConfirmed}>
          {status === "sending" ? "Sending..." : humanConfirmed ? "Request Samples" : "Confirm you're human"}
        </button>
        {status === "fallback" && <span className="form-success" role="status">Email draft opened for {SAMPLE_REQUEST_EMAIL}.</span>}
        {status === "error" && <span className="form-error" role="status">Confirm you&apos;re human, check the required fields, and try again.</span>}
      </div>
    </form>
  );
}
