"use client";

import { useEffect, useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import styles from "./customer-feedback-form.module.css";

const experienceAreas = [
  ["quality", "Flavor / Product Quality"],
  ["consistency", "Product Consistency"],
  ["leadTimes", "Lead Times"],
  ["orderAccuracy", "Order Accuracy"],
  ["onTimeDelivery", "On-Time Delivery"],
  ["communication", "Communication & Responsiveness"],
  ["samplesRd", "Samples & R&D Support"],
  ["technicalRegulatory", "Technical / Regulatory Support"],
  ["easeOfBusiness", "Overall Ease of Doing Business With Us"],
] as const;

const experienceChoices = ["Excellent", "Good", "Fair", "Needs Improvement", "Not Applicable"];
const satisfactionChoices = Array.from({ length: 10 }, (_, index) => index + 1);
const recommendationChoices = Array.from({ length: 11 }, (_, index) => index);

function formValue(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

function Scale({
  name,
  values,
  lowLabel,
  highLabel,
  required = false,
}: {
  name: string;
  values: number[];
  lowLabel: string;
  highLabel: string;
  required?: boolean;
}) {
  return (
    <div className={styles.scaleWrap}>
      <div className={styles.scale} role="radiogroup" aria-label={`${lowLabel} to ${highLabel}`}>
        {values.map((value) => (
          <label className={styles.scaleOption} key={value}>
            <input type="radio" name={name} value={value} required={required} />
            <span>{value}</span>
          </label>
        ))}
      </div>
      <div className={styles.scaleLabels}>
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}

export function CustomerFeedbackForm({ source = "direct" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formStartedAt, setFormStartedAt] = useState("");

  useEffect(() => {
    setFormStartedAt(String(Date.now()));
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/customer-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        setStatus("error");
        trackEvent("customer_feedback_error", { status: response.status });
        return;
      }

      trackEvent("customer_feedback_submit", {
        source: formValue(formData, "source") || "direct",
        satisfaction: formValue(formData, "satisfaction"),
        recommendation: formValue(formData, "recommendation"),
      });
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      trackEvent("customer_feedback_error", { status: "network" });
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.thankYou} role="status">
        <div className={styles.thankYouMark}>✓</div>
        <h2>Thank you.</h2>
        <p>
          We genuinely appreciate the feedback. Our team will review it and use it to improve how we work with our customers.
        </p>
        <p className={styles.signature}>— The Flavor Factory Team</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="formStartedAt" value={formStartedAt} />

      <div aria-hidden="true" className={styles.honeypot}>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label>Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>01</span>
          <div>
            <h2>Your experience</h2>
            <p>A quick read on how we are doing today.</p>
          </div>
        </div>

        <fieldset className={styles.question}>
          <legend>1. Overall, how satisfied are you with The Flavor Factory? <strong>*</strong></legend>
          <Scale
            name="satisfaction"
            values={satisfactionChoices}
            lowLabel="Very dissatisfied"
            highLabel="Extremely satisfied"
            required
          />
        </fieldset>

        <fieldset className={styles.question}>
          <legend>2. How would you rate The Flavor Factory in the following areas? <strong>*</strong></legend>
          <p className={styles.help}>Choose Not Applicable for areas you do not work with directly.</p>
          <div className={styles.matrix}>
            {experienceAreas.map(([key, label]) => (
              <fieldset className={styles.matrixRow} key={key}>
                <legend>{label}</legend>
                <div className={styles.matrixChoices}>
                  {experienceChoices.map((choice) => (
                    <label key={choice}>
                      <input type="radio" name={`rating_${key}`} value={choice} required />
                      <span>{choice}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        </fieldset>

        <label className={styles.question}>
          <span className={styles.label}>3. What is the main reason for the ratings you gave us?</span>
          <span className={styles.help}>Optional — tell us anything that would help us understand your experience.</span>
          <textarea name="ratingReason" rows={4} maxLength={2500} placeholder="What are we getting right? Where are we falling short?" />
        </label>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>02</span>
          <div>
            <h2>Help us improve</h2>
            <p>This is the feedback we value most. Please be as direct as you are comfortable being.</p>
          </div>
        </div>

        <label className={styles.question}>
          <span className={styles.label}>4. If you could change ONE thing about working with The Flavor Factory, what would it be? <strong>*</strong></span>
          <span className={styles.help}>If nothing comes to mind, “nothing” is perfectly fine.</span>
          <textarea name="oneChange" rows={4} required maxLength={2500} placeholder="The one change that would matter most..." />
        </label>

        <label className={styles.question}>
          <span className={styles.label}>5. What, if anything, could cause you to consider moving some or all of your business to another flavor supplier?</span>
          <span className={styles.help}>Optional, but we greatly value your honesty.</span>
          <textarea name="switchingRisk" rows={4} maxLength={2500} placeholder="Price, lead time, service, capabilities, consistency, something else..." />
        </label>

        <label className={styles.question}>
          <span className={styles.label}>6. Is there anything you wish The Flavor Factory offered — or did differently — that would make us more valuable to your company?</span>
          <textarea name="wishList" rows={4} maxLength={2500} placeholder="Products, services, capabilities, support, communication..." />
        </label>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>03</span>
          <div>
            <h2>The big picture</h2>
            <p>One final score, then you are done.</p>
          </div>
        </div>

        <fieldset className={styles.question}>
          <legend>7. How likely are you to recommend The Flavor Factory to another company? <strong>*</strong></legend>
          <Scale
            name="recommendation"
            values={recommendationChoices}
            lowLabel="Not at all likely"
            highLabel="Extremely likely"
            required
          />
        </fieldset>

        <label className={styles.question}>
          <span className={styles.label}>8. Which best describes your role?</span>
          <select name="role" defaultValue="">
            <option value="">Select a role (optional)</option>
            <option>Purchasing / Procurement</option>
            <option>R&D / Product Development</option>
            <option>Quality / Regulatory</option>
            <option>Operations / Supply Chain</option>
            <option>Sales / Marketing</option>
            <option>Executive / Management</option>
            <option>Other</option>
          </select>
        </label>
      </section>

      <section className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionHeading}>
          <span>04</span>
          <div>
            <h2>Optional contact information</h2>
            <p>Leave this blank if you would prefer to remain anonymous.</p>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <label>
            <span>Name</span>
            <input name="name" autoComplete="name" maxLength={120} placeholder="Optional" />
          </label>
          <label>
            <span>Company</span>
            <input name="company" autoComplete="organization" maxLength={160} placeholder="Optional" />
          </label>
          <label className={styles.fullWidth}>
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" maxLength={254} placeholder="Optional — only if you would like us to follow up" />
          </label>
        </div>
      </section>

      <div className={styles.submitArea}>
        <p>
          Your name, company, and email are optional. We do not ask you to sign in to submit feedback.
        </p>
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Submitting..." : "Submit Feedback"}
        </button>
        {status === "error" && (
          <p className={styles.error} role="alert">
            We could not submit your feedback. Please check the required questions and try again.
          </p>
        )}
      </div>
    </form>
  );
}
