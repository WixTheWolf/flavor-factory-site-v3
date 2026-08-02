"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { industries } from "@/data/industries";
import { industryFormFields } from "@/data/industry-form-fields";
import { useShortlist } from "@/lib/shortlist";
import { normalizeIndustryKey } from "@/lib/industry-utils";

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
  if (otherApplication) {
    lines.unshift(`Other application detail: ${otherApplication}`);
  }

  return lines;
}

function mailtoUrl(formData: FormData) {
  const company = field(formData, "company");
  const name = field(formData, "name");
  const subject = `Sample request: ${company || name || "Website inquiry"}`;
  const industryLines = optionalIndustryLines(formData);
  const body = [
    "New sample request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${field(formData, "email")}`,
    `Phone: ${field(formData, "phone") || "Not provided"}`,
    `Shipping address: ${field(formData, "shippingAddress") || "Not provided"}`,
    `Product application: ${field(formData, "industry") || "Not provided"}`,
    `Finished product base: ${field(formData, "productBase") || "Not provided"}`,
    `Flavor target: ${field(formData, "flavorTarget") || "Not provided"}`,
    `Preferred format: ${field(formData, "format") || "Not provided"}`,
    `Label goal: ${field(formData, "declaration") || "Not provided"}`,
    `Primary challenge: ${field(formData, "challenge") || "Not provided"}`,
    `Benchmark or existing flavor: ${field(formData, "benchmark") || "Not provided"}`,
    `Project scale: ${field(formData, "projectScale") || "Not provided"}`,
    `Target use level: ${field(formData, "useLevel") || "Not provided"}`,
    `Timeline: ${field(formData, "timeline") || "Not provided"}`,
    ...(industryLines.length > 0 ? ["", "Application-specific details:", ...industryLines] : []),
    "",
    "Application and profile notes:",
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
  const { items: shortlist, clear: clearShortlist, mounted } = useShortlist();
  const [shortlistNote, setShortlistNote] = useState("");
  const started = useRef(false);

  const industryKey = normalizeIndustryKey(industry);
  const industrySpecificFields = industryKey ? industryFormFields[industryKey] ?? [] : [];

  useEffect(() => {
    setFormStartedAt(String(Date.now()));
  }, []);

  useEffect(() => {
    if (mounted && shortlist.length > 0) {
      const names = shortlist.map((i) => `${i.name} (${i.format})`).join(", ");
      setShortlistNote(names);
    }
  }, [mounted, shortlist]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (shortlist.length > 0) {
      const shortlistLine = `Shortlisted profiles: ${shortlist.map((i) => `${i.name} (${i.format})`).join(", ")}`;
      const existingNotes = field(formData, "notes");
      formData.set("notes", existingNotes ? `${shortlistLine}\n\n${existingNotes}` : shortlistLine);
    }

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        trackEvent("request_sample_form_submit", {
          industry: field(formData, "industry") || "not provided",
          shortlistCount: shortlist.length,
        });
        setStatus("sent");
        form.reset();
        setIndustry(normalizedInitial);
        setShortlistNote("");
        clearShortlist();
        const redirectIndustry = normalizeIndustryKey(field(formData, "industry")) || field(formData, "industry");
        window.location.href = `/request-samples/confirmation?industry=${encodeURIComponent(redirectIndustry)}`;
        return;
      }

      trackEvent("request_sample_form_error", { reason: "api_fallback" });
      window.location.href = mailtoUrl(formData);
      setStatus("fallback");
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
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
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
        <h2>Tell us the essentials</h2>
        <p>Enough detail to understand the product and flavor direction is all we need to start.</p>
      </div>

      <label className="form-field"><span>Name *</span><input className="input" required name="name" autoComplete="name" placeholder="Your name" maxLength={120} /></label>
      <label className="form-field"><span>Company *</span><input className="input" required name="company" autoComplete="organization" placeholder="Company name" maxLength={160} /></label>
      <label className="form-field"><span>Email *</span><input className="input" required name="email" autoComplete="email" type="email" placeholder="name@company.com" maxLength={254} /></label>
      <label className="form-field"><span>Phone</span><input className="input" name="phone" autoComplete="tel" placeholder="Best number to reach you" maxLength={50} /></label>
      <label className="form-field form-field-wide"><span>Shipping address *</span><input className="input" required name="shippingAddress" autoComplete="street-address" placeholder="Street, city, state, zip" maxLength={500} /></label>
      <label className="form-field">
        <span>Product application *</span>
        <select
          className="input"
          required
          name="industry"
          value={industry}
          onChange={(event) => {
            setIndustry(event.target.value);
            if (event.target.value) setDetailsOpen(true);
          }}
        >
          <option value="">Select an application</option>
          {industries.map((item) => (
            <option key={item.key} value={item.key}>{item.name}</option>
          ))}
          <option value="other">Other application</option>
        </select>
      </label>
      {industry === "other" && (
        <label className="form-field">
          <span>Describe the application *</span>
          <input className="input" required name="otherApplication" placeholder="Seasoning, pet treat, sauce, etc." maxLength={160} />
        </label>
      )}
      <label className="form-field"><span>Target flavor direction *</span><input className="input" required name="flavorTarget" placeholder="Profile, family, or target direction" defaultValue={shortlistNote} key={shortlistNote} maxLength={240} /></label>
      <label className="form-field">
        <span>Desired format</span>
        <select className="input" name="format" defaultValue="">
          <option value="">Not sure yet</option>
          <option>Liquid</option><option>Powder</option><option>Oil-soluble</option><option>Emulsion</option>
        </select>
      </label>
      <label className="form-field"><span>Target timeline</span><input className="input" name="timeline" placeholder="Sample deadline or production timing" maxLength={160} /></label>
      <label className="form-field form-field-wide"><span>Project notes</span><textarea className="textarea" name="notes" placeholder="Base, masking needs, processing conditions, or anything else we should know" maxLength={4000} /></label>

      <div className="form-optional-section">
        <button
          type="button"
          className="form-optional-toggle"
          aria-expanded={detailsOpen ? "true" : "false"}
          onClick={() => setDetailsOpen((v) => !v)}
        >
          <span>Add more project details</span>
          <span className="form-optional-arrow" aria-hidden="true">{detailsOpen ? "-" : "+"}</span>
        </button>
        <p className="form-optional-hint">Optional details can help us narrow the first sample direction.</p>

        {detailsOpen && (
          <div className="form-optional-fields">
            <label className="form-field"><span>Finished product base</span><input className="input" name="productBase" placeholder="Water, dairy, protein, oil, syrup, dough..." maxLength={240} /></label>
            <label className="form-field">
              <span>Label goal</span>
              <select className="input" name="declaration" defaultValue="">
                <option value="">Not sure yet</option>
                <option>Natural</option><option>Natural and artificial</option><option>Artificial</option><option>Organic-compliant</option><option>Kosher</option><option>Halal</option>
              </select>
            </label>
            <label className="form-field">
              <span>Primary challenge</span>
              <select className="input" name="challenge" defaultValue="">
                <option value="">Select if applicable</option>
                <option>Masking</option><option>Heat stability</option><option>Sweetness balance</option><option>Bitterness</option><option>Cooling</option><option>Mouthfeel</option><option>Supplier match</option><option>Cost target</option><option>Production scale-up</option><option>Other</option>
              </select>
            </label>
            <label className="form-field"><span>Benchmark or existing flavor</span><input className="input" name="benchmark" placeholder="Product, supplier flavor, or reference profile" maxLength={240} /></label>
            <label className="form-field"><span>Estimated annual usage or scale</span><input className="input" name="projectScale" placeholder="Pilot, first run, annual volume..." maxLength={160} /></label>
            <label className="form-field"><span>Target use level</span><input className="input" name="useLevel" placeholder="If known" maxLength={100} /></label>
            {industrySpecificFields.map((question) => (
              <label className="form-field" key={question.name}>
                <span>{question.label}</span>
                <input className="input" name={question.name} placeholder={question.placeholder} maxLength={240} />
              </label>
            ))}
          </div>
        )}
      </div>

      <p className="sample-file-note">Have a spec, label, or benchmark file? Mention it in the notes and we will tell you where to send it.</p>
      <div className="sample-utility">
        <p>A real person from our team will review your request and follow up by email.</p>
        <button type="submit" className="cta-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Request Samples"}
        </button>
        {status === "sent" && <span className="form-success" role="status">Your sample request has been sent.</span>}
        {status === "fallback" && <span className="form-success" role="status">Email draft opened for {SAMPLE_REQUEST_EMAIL}.</span>}
        {status === "error" && <span className="form-error" role="status">Please email {SAMPLE_REQUEST_EMAIL} directly.</span>}
      </div>
    </form>
  );
}
