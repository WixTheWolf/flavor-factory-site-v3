"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { industries } from "@/data/industries";
import { industryFormFields } from "@/data/industry-form-fields";
import { useShortlist } from "@/lib/shortlist";
import { normalizeIndustryKey } from "@/lib/industry-utils";
import styles from "./sample-request-form.module.css";

const SAMPLE_REQUEST_EMAIL = "samples@flavorfactory.net";

const REGULATORY_FIELDS = [
  ["kosher", "Kosher"],
  ["halal", "Halal"],
  ["ttbCompliant", "TTB Compliant"],
  ["alcoholFree", "Alcohol-Free"],
  ["nonGmo", "Non-GMO"],
  ["organicCompliant", "Organic Compliant"],
] as const;

function field(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

export function SampleRequestForm({ initialIndustry = "" }: { initialIndustry?: string }) {
  const normalizedInitial = normalizeIndustryKey(initialIndustry) || initialIndustry;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "validationError" | "deliveryError">("idle");
  const [industry, setIndustry] = useState(normalizedInitial);
  const [detailsOpen, setDetailsOpen] = useState(false);
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
    }
  }, [mounted, shortlist]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!humanConfirmed) {
      setStatus("validationError");
      return;
    }

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

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
        trackEvent("request_sample_form_error", { reason: "api_delivery_error" });
        setStatus("deliveryError");
        return;
      }

      trackEvent("request_sample_form_error", { reason: `api_${response.status}` });
      setStatus("validationError");
    } catch {
      trackEvent("request_sample_form_error", { reason: "network_error" });
      setStatus("deliveryError");
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
        <h2>Required to start a sample request</h2>
        <p>These fields let us verify the company and prepare a usable sample brief before we contact you.</p>
      </div>

      <label className="form-field">
        <span>First name *</span>
        <input className="input" required name="firstName" autoComplete="given-name" placeholder="First name" maxLength={80} />
      </label>
      <label className="form-field">
        <span>Last name *</span>
        <input className="input" required name="lastName" autoComplete="family-name" placeholder="Last name" maxLength={80} />
      </label>
      <label className="form-field">
        <span>Email address *</span>
        <input className="input" required name="email" autoComplete="email" type="email" placeholder="you@company.com" maxLength={254} />
      </label>
      <label className="form-field">
        <span>Company name *</span>
        <input className="input" required name="company" autoComplete="organization" placeholder="Company name" maxLength={160} />
      </label>
      <label className="form-field form-field-wide">
        <span>Company website *</span>
        <input className="input" required name="companyWebsite" type="url" inputMode="url" autoComplete="url" placeholder="https://www.company.com" maxLength={300} />
      </label>

      <label className="form-field">
        <span>Product application *</span>
        <select
          className="input"
          required
          name="industry"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
        >
          <option value="" disabled>Select an application</option>
          {industries.map((item) => <option key={item.key} value={item.key}>{item.name}</option>)}
          <option value="other">Other application</option>
        </select>
      </label>
      {industry === "other" && (
        <label className="form-field">
          <span>Describe the application *</span>
          <input className="input" required name="otherApplication" placeholder="Seasoning, sauce, pet treat, or another product" maxLength={160} />
        </label>
      )}
      <label className="form-field form-field-wide">
        <span>Flavor(s) requested *</span>
        <textarea
          className="textarea"
          required
          name="flavorTarget"
          rows={2}
          placeholder="Strawberry, lime, peppermint, vanilla, etc."
          defaultValue={shortlistNote}
          key={shortlistNote}
          maxLength={500}
        />
      </label>
      <label className="form-field">
        <span>Flavor format *</span>
        <select className="input" required name="format" defaultValue="">
          <option value="" disabled>Select a format</option>
          <option>Water Soluble</option>
          <option>Oil Soluble</option>
          <option>Powder</option>
          <option>Emulsion</option>
          <option>Extract</option>
        </select>
      </label>
      <label className="form-field">
        <span>Flavor label goal *</span>
        <select className="input" required name="declaration" defaultValue="">
          <option value="" disabled>Select a label goal</option>
          <option>Natural</option>
          <option>WONF</option>
          <option>N&amp;A</option>
          <option>Artificial</option>
          <option>No Preference/Flexible</option>
        </select>
      </label>

      <div className="form-section-heading form-field-wide">
        <h2>Shipping address</h2>
        <p>Samples will ship to this address unless you tell us otherwise in the notes.</p>
      </div>

      <label className="form-field form-field-wide">
        <span>Street *</span>
        <input className="input" required name="street" autoComplete="street-address" placeholder="Street address" maxLength={200} />
      </label>
      <label className="form-field">
        <span>City *</span>
        <input className="input" required name="city" autoComplete="address-level2" placeholder="City" maxLength={120} />
      </label>
      <label className="form-field">
        <span>State / Province *</span>
        <input className="input" required name="state" autoComplete="address-level1" placeholder="State or province" maxLength={120} />
      </label>
      <label className="form-field">
        <span>ZIP / Postal code *</span>
        <input className="input" required name="postalCode" autoComplete="postal-code" placeholder="ZIP or postal code" maxLength={40} />
      </label>
      <label className="form-field">
        <span>Country *</span>
        <input className="input" required name="country" autoComplete="country-name" defaultValue="United States" maxLength={100} />
      </label>

      <div className="form-optional-section">
        <button
          type="button"
          className="form-optional-toggle"
          aria-expanded={detailsOpen ? "true" : "false"}
          onClick={() => setDetailsOpen((value) => !value)}
        >
          <span>Additional project details <small>(optional)</small></span>
          <span className="form-optional-arrow" aria-hidden="true">{detailsOpen ? "-" : "+"}</span>
        </button>
        <p className="form-optional-hint">Add anything you already know. More detail can help us choose a stronger first direction.</p>

        {detailsOpen && (
          <div className="form-optional-fields">
            <label className="form-field">
              <span>Phone <small>(optional)</small></span>
              <input className="input" name="phone" autoComplete="tel" placeholder="Best number to reach you" maxLength={50} />
            </label>
            <label className="form-field">
              <span>Finished product / base <small>(optional)</small></span>
              <input className="input" name="productBase" placeholder="Sparkling drink, protein shake, gummy, mouthwash, etc." maxLength={240} />
            </label>

            <fieldset className={`${styles.regulatoryGroup} form-field-wide`}>
              <legend className={styles.regulatoryLegend}>Other regulatory / label requirements <small>(optional)</small></legend>
              <div className={styles.regulatoryOptions}>
                {REGULATORY_FIELDS.map(([name, label]) => (
                  <label className={styles.regulatoryOption} key={name}>
                    <input type="checkbox" name={name} value="yes" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="form-field">
              <span>Estimated annual flavor volume <small>(optional)</small></span>
              <input className="input" name="projectScale" inputMode="decimal" placeholder="Example: 5,000" maxLength={80} />
            </label>
            <label className="form-field">
              <span>Volume unit <small>(optional)</small></span>
              <select className="input" name="volumeUnit" defaultValue="LBS">
                <option>LBS</option>
                <option>KGS</option>
                <option>GALS</option>
              </select>
            </label>
            <label className="form-field">
              <span>Target timeline <small>(optional)</small></span>
              <input className="input" name="timeline" placeholder="Sample deadline or production timing" maxLength={160} />
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
              <span>Target use level <small>(optional)</small></span>
              <input className="input" name="useLevel" placeholder="Only if known" maxLength={100} />
            </label>

            {industrySpecificFields.map((question) => (
              <label className="form-field" key={question.name}>
                <span>{question.label} <small>(optional)</small></span>
                <input className="input" name={question.name} placeholder={question.placeholder} maxLength={240} />
              </label>
            ))}

            <label className="form-field form-field-wide">
              <span>Additional notes <small>(optional)</small></span>
              <textarea
                className="textarea"
                name="notes"
                rows={5}
                placeholder="Describe the project, desired flavor characteristics, current or past flavor challenges, a different sample shipping address, or anything else that would help us understand the request."
                maxLength={4000}
              />
            </label>
          </div>
        )}
      </div>

      <p className="sample-file-note">Have a spec, label, or benchmark file? Mention it in the notes and we will tell you where to send it.</p>
      <div className="sample-utility">
        <p>A real person from our team will review the company and project brief before the request moves to R&amp;D.</p>
        <label className={`${styles.humanProof} ${humanConfirmed ? styles.humanProofChecked : ""}`}>
          <input
            type="checkbox"
            checked={humanConfirmed}
            onChange={(event) => {
              setHumanConfirmed(event.target.checked);
              if (event.target.checked && status === "validationError") setStatus("idle");
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
        {status === "validationError" && (
          <span className="form-error" role="status">
            Complete every required field, confirm you&apos;re human, and try again.
          </span>
        )}
        {status === "deliveryError" && (
          <span className="form-error" role="status">
            We couldn&apos;t send your request right now. Please try again. If the problem continues, email{" "}
            <a href={`mailto:${SAMPLE_REQUEST_EMAIL}`}>{SAMPLE_REQUEST_EMAIL}</a>.
          </span>
        )}
      </div>
    </form>
  );
}
