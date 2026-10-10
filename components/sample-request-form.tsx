"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
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

// Values must match ALLOWED_FORMATS and ALLOWED_LABEL_GOALS in app/api/sample-request/route.ts.
const FORMATS = ["Water Soluble", "Oil Soluble", "Powder", "Emulsion", "Extract", "Not sure, recommend one"] as const;
const LABEL_GOALS = ["Natural", "WONF", "N&A", "Artificial", "No Preference/Flexible"] as const;

const STEP_LABELS = ["Your project", "Specs & shipping"] as const;

type Status = "idle" | "sending" | "sent" | "validationError" | "needsHuman" | "deliveryError";
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function field(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

export function SampleRequestForm({ initialIndustry = "" }: { initialIndustry?: string }) {
  const normalizedInitial = normalizeIndustryKey(initialIndustry) || initialIndustry;
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<1 | 2>(1);
  const [invalidGroup, setInvalidGroup] = useState("");
  const [industry, setIndustry] = useState(normalizedInitial);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [formStartedAt, setFormStartedAt] = useState("");
  const [humanConfirmed, setHumanConfirmed] = useState(false);
  const [shortlistNote, setShortlistNote] = useState("");
  const { items: shortlist, clear: clearShortlist, mounted } = useShortlist();
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const stepOneRef = useRef<HTMLDivElement>(null);
  const stepTwoRef = useRef<HTMLDivElement>(null);

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

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /** Returns the first invalid control inside a step, or null when the step is complete. */
  function firstInvalid(container: HTMLElement | null) {
    if (!container) return null;
    const controls = Array.from(container.querySelectorAll<Field>("input, select, textarea"));
    return controls.find((control) => !control.checkValidity()) ?? null;
  }

  function reportInvalid(control: Field) {
    if (control instanceof HTMLInputElement && control.type === "radio") {
      setInvalidGroup(control.name);
      control.closest("fieldset")?.scrollIntoView({ behavior: "smooth", block: "center" });
      control.focus({ preventScroll: true });
      return;
    }
    control.reportValidity();
  }

  function goToStepTwo() {
    const invalid = firstInvalid(stepOneRef.current);
    if (invalid) {
      reportInvalid(invalid);
      return;
    }
    setInvalidGroup("");
    setStep(2);
    trackEvent("request_sample_step_complete", { step: 1, industry: industry || "not provided" });
    window.setTimeout(scrollToForm, 30);
  }

  function goToStepOne() {
    setStep(1);
    window.setTimeout(scrollToForm, 30);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const invalidOne = firstInvalid(stepOneRef.current);
    if (invalidOne) {
      setStep(1);
      window.setTimeout(() => reportInvalid(invalidOne), 30);
      return;
    }

    const invalidTwo = firstInvalid(stepTwoRef.current);
    if (invalidTwo) {
      reportInvalid(invalidTwo);
      return;
    }

    if (!humanConfirmed) {
      setStatus("needsHuman");
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

  function clearGroupError(name: string) {
    if (invalidGroup === name) setInvalidGroup("");
  }

  return (
    <form ref={formRef} className={styles.form} onFocus={trackStart} onSubmit={onSubmit} noValidate>
      <input type="hidden" name="formStartedAt" value={formStartedAt} />
      <input type="hidden" name="humanConfirmed" value={humanConfirmed ? "yes" : ""} />

      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label>Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <ol className={styles.stepper} aria-label="Sample request progress">
        {STEP_LABELS.map((label, index) => {
          const number = index + 1;
          const state = step === number ? "current" : step > number ? "done" : "todo";
          return (
            <li key={label} className={styles.stepperItem} data-state={state} aria-current={state === "current" ? "step" : undefined}>
              <span className={styles.stepperDot} aria-hidden="true">
                {state === "done" ? <Check size={14} /> : number}
              </span>
              <span>
                <small>Step {number} of 2</small>
                {label}
              </span>
            </li>
          );
        })}
        <li className={styles.stepperBar} aria-hidden="true">
          <span style={{ transform: `scaleX(${step === 1 ? 0.5 : 1})` }} />
        </li>
      </ol>

      {/* Step 1: who you are and what you're making */}
      <div ref={stepOneRef} className={`form-grid ${styles.step}`} hidden={step !== 1}>
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
          <h2>Tell us about you and your product</h2>
          <p>We use this to confirm the company and point your sample at the right application.</p>
        </div>

        <label className="form-field">
          <span>First name *</span>
          <input className="input" required minLength={2} name="firstName" autoComplete="given-name" placeholder="First name" maxLength={80} />
        </label>
        <label className="form-field">
          <span>Last name *</span>
          <input className="input" required minLength={2} name="lastName" autoComplete="family-name" placeholder="Last name" maxLength={80} />
        </label>
        <label className="form-field">
          <span>Work email *</span>
          <input className="input" required name="email" autoComplete="email" type="email" placeholder="you@company.com" maxLength={254} />
        </label>
        <label className="form-field">
          <span>Company name *</span>
          <input className="input" required minLength={2} name="company" autoComplete="organization" placeholder="Company name" maxLength={160} />
        </label>
        <label className="form-field form-field-wide">
          <span>Company website *</span>
          <input
            className="input"
            required
            name="companyWebsite"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="company.com"
            pattern="\S+\.\S+"
            title="Enter your company website, like company.com"
            maxLength={300}
          />
        </label>

        <fieldset className={`${styles.chipGroup} form-field-wide`} data-invalid={invalidGroup === "industry" ? "true" : undefined}>
          <legend>What are you making? *</legend>
          <div className={styles.chips}>
            {industries.map((item) => (
              <label className={styles.chip} key={item.key}>
                <input
                  type="radio"
                  name="industry"
                  value={item.key}
                  required
                  checked={industry === item.key}
                  onChange={() => {
                    setIndustry(item.key);
                    clearGroupError("industry");
                  }}
                />
                <span>{item.name}</span>
              </label>
            ))}
            <label className={styles.chip}>
              <input
                type="radio"
                name="industry"
                value="other"
                required
                checked={industry === "other"}
                onChange={() => {
                  setIndustry("other");
                  clearGroupError("industry");
                }}
              />
              <span>Something else</span>
            </label>
          </div>
          {invalidGroup === "industry" && <p className={styles.groupError}>Choose the closest application.</p>}
        </fieldset>

        {industry === "other" && (
          <label className="form-field form-field-wide">
            <span>Describe the application *</span>
            <input className="input" required name="otherApplication" placeholder="Seasoning, sauce, pet treat, or another product" maxLength={160} />
          </label>
        )}

        <label className="form-field form-field-wide">
          <span>Flavor(s) requested *</span>
          <textarea
            className="textarea"
            required
            minLength={2}
            name="flavorTarget"
            rows={2}
            placeholder="Strawberry, lime, peppermint, vanilla, etc."
            defaultValue={shortlistNote}
            key={shortlistNote}
            maxLength={500}
          />
        </label>

        <div className={`${styles.stepNav} form-field-wide`}>
          <button type="button" className="btn-gold btn-lg" onClick={goToStepTwo}>
            Continue to specs &amp; shipping
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <span className={styles.stepHint}>One more short step after this.</span>
        </div>
      </div>

      {/* Step 2: specs, shipping, and send */}
      <div ref={stepTwoRef} className={`form-grid ${styles.step}`} hidden={step !== 2}>
        <div className="form-section-heading form-field-wide">
          <h2>Specs and where to send samples</h2>
          <p>Not sure on format? Pick &quot;Not sure&quot; and we will recommend one for your base.</p>
        </div>

        <fieldset className={`${styles.chipGroup} form-field-wide`} data-invalid={invalidGroup === "format" ? "true" : undefined}>
          <legend>Flavor format *</legend>
          <div className={styles.chips}>
            {FORMATS.map((format) => (
              <label className={styles.chip} key={format}>
                <input type="radio" name="format" value={format} required onChange={() => clearGroupError("format")} />
                <span>{format}</span>
              </label>
            ))}
          </div>
          {invalidGroup === "format" && <p className={styles.groupError}>Choose a format, or &quot;Not sure, recommend one&quot;.</p>}
        </fieldset>

        <fieldset className={`${styles.chipGroup} form-field-wide`} data-invalid={invalidGroup === "declaration" ? "true" : undefined}>
          <legend>Flavor label goal *</legend>
          <div className={styles.chips}>
            {LABEL_GOALS.map((goal) => (
              <label className={styles.chip} key={goal}>
                <input type="radio" name="declaration" value={goal} required onChange={() => clearGroupError("declaration")} />
                <span>{goal}</span>
              </label>
            ))}
          </div>
          <p className={styles.groupHint}>WONF: natural with other natural flavors. N&amp;A: natural and artificial.</p>
          {invalidGroup === "declaration" && <p className={styles.groupError}>Choose a label goal, or &quot;No Preference/Flexible&quot;.</p>}
        </fieldset>

        <div className="form-section-heading form-field-wide">
          <h2>Shipping address</h2>
          <p>Samples ship here unless you tell us otherwise in the notes.</p>
        </div>

        <label className="form-field form-field-wide">
          <span>Street *</span>
          <input className="input" required minLength={4} name="street" autoComplete="street-address" placeholder="Street address" maxLength={200} />
        </label>
        <label className="form-field">
          <span>City *</span>
          <input className="input" required minLength={2} name="city" autoComplete="address-level2" placeholder="City" maxLength={120} />
        </label>
        <label className="form-field">
          <span>State / Province *</span>
          <input className="input" required minLength={2} name="state" autoComplete="address-level1" placeholder="State or province" maxLength={120} />
        </label>
        <label className="form-field">
          <span>ZIP / Postal code *</span>
          <input className="input" required minLength={3} name="postalCode" autoComplete="postal-code" placeholder="ZIP or postal code" maxLength={40} />
        </label>
        <label className="form-field">
          <span>Country *</span>
          <input className="input" required minLength={2} name="country" autoComplete="country-name" defaultValue="United States" maxLength={100} />
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

        <p className="sample-file-note form-field-wide">Have a spec, label, or benchmark file? Mention it in the notes and we will tell you where to send it.</p>

        <div className={`${styles.submitRow} form-field-wide`}>
          <label className={`${styles.humanProof} ${humanConfirmed ? styles.humanProofChecked : ""} ${status === "needsHuman" ? styles.humanProofError : ""}`}>
            <input
              type="checkbox"
              checked={humanConfirmed}
              onChange={(event) => {
                setHumanConfirmed(event.target.checked);
                if (event.target.checked && (status === "validationError" || status === "needsHuman")) setStatus("idle");
              }}
            />
            <span className={styles.humanProofBox} aria-hidden="true">{humanConfirmed ? "✓" : ""}</span>
            <span className={styles.humanProofCopy}>
              <strong>I&apos;m human</strong>
              <small>Secure bot protection runs in the background.</small>
            </span>
          </label>

          <div className={styles.submitActions}>
            <button type="submit" className="btn-gold btn-lg" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send My Sample Request"}
              {status !== "sending" && <ArrowRight size={18} aria-hidden="true" />}
            </button>
            <button type="button" className={styles.back} onClick={goToStepOne}>
              <ArrowLeft size={16} aria-hidden="true" />
              Back
            </button>
          </div>

          <p className={styles.reviewNote}>A real person from our team reviews every request before it moves to R&amp;D.</p>

          {status === "needsHuman" && (
            <span className="form-error" role="status">
              Tick &quot;I&apos;m human&quot; to send your request.
            </span>
          )}
          {status === "validationError" && (
            <span className="form-error" role="status">
              Something in the form needs another look. Check each required field and try again.
            </span>
          )}
          {status === "deliveryError" && (
            <span className="form-error" role="status">
              We couldn&apos;t send your request right now. Please try again. If the problem continues, email{" "}
              <a href={`mailto:${SAMPLE_REQUEST_EMAIL}`}>{SAMPLE_REQUEST_EMAIL}</a>.
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
