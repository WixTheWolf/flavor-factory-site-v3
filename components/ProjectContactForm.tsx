"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

const SAMPLE_EMAIL = "samples@flavorfactory.net";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

function value(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

function mailtoUrl(formData: FormData) {
  const name = value(formData, "name");
  const company = value(formData, "company");
  const subject = `Project request: ${company || name || "Website inquiry"}`;
  const body = [
    "New project request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${value(formData, "email")}`,
    `Phone: ${value(formData, "phone") || "Not provided"}`,
    `Product type: ${value(formData, "productType") || "Not provided"}`,
    `Target flavor: ${value(formData, "flavorTarget") || "Not provided"}`,
    "",
    "Project details:",
    value(formData, "notes") || "Not provided",
  ].join("\n");

  return `mailto:${SAMPLE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  "rounded-2xl border border-[#12382B]/10 bg-[#F4EFE5] px-4 py-3 text-base text-[#1E1E1A] outline-none transition placeholder:text-[#645f55]/45 focus:border-[#C6843A]";

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#12382B]">{label}</span>
      <input
        className={inputClass}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        autoComplete={autoComplete}
      />
    </label>
  );
}

export function ProjectContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: value(formData, "name"),
      company: value(formData, "company"),
      email: value(formData, "email"),
      phone: value(formData, "phone"),
      industry: value(formData, "productType"),
      flavorTarget: value(formData, "flavorTarget"),
      notes: value(formData, "notes"),
    };

    try {
      const response = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      window.location.href = mailtoUrl(formData);
      setStatus("fallback");
    } catch {
      window.location.href = mailtoUrl(formData);
      setStatus("fallback");
    }
  }

  return (
    <form
      id="project-form"
      className="rounded-[2.5rem] border border-[#12382B]/10 bg-white/78 p-7 shadow-[0_24px_80px_rgba(30,30,26,0.08)] md:p-9"
      onSubmit={onSubmit}
    >
      <div className="border-b border-[#12382B]/10 pb-7">
        <p className="eyebrow">Start a Project</p>
        <h2 className="display-title mt-4 text-4xl">Project details</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#645f55]">
          A few specifics help us route the request and respond with a practical next step.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required autoComplete="name" />
        <Field label="Company" name="company" placeholder="Company name" required autoComplete="organization" />
        <Field label="Email" name="email" placeholder="name@company.com" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" placeholder="Optional" type="tel" autoComplete="tel" />
        <Field label="Product Type" name="productType" placeholder="Beverage, gummy, sauce, etc." />
        <Field label="Target Flavor" name="flavorTarget" placeholder="Citrus, vanilla, savory, masking, etc." />
      </div>

      <label className="mt-5 grid gap-2">
        <span className="text-sm font-semibold text-[#12382B]">Project Details</span>
        <textarea
          name="notes"
          placeholder="Application, target profile, constraints, label needs, timeline, sample goals..."
          rows={7}
          className={`${inputClass} resize-none`}
        />
      </label>

      <Button type="submit" className="mt-7 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit Project"}
      </Button>

      <div className="mt-5 min-h-6 text-xs leading-6 text-[#645f55]" aria-live="polite">
        {status === "sent" ? (
          <p className="font-semibold text-[#12382B]">Sent to {SAMPLE_EMAIL}.</p>
        ) : status === "fallback" ? (
          <p>Email draft opened for {SAMPLE_EMAIL}. Send it from your email client to complete the request.</p>
        ) : status === "error" ? (
          <p>Please email {SAMPLE_EMAIL} directly.</p>
        ) : (
          <p>For time-sensitive sample requests, email the project summary directly and include your application, target flavor, and timeline.</p>
        )}
      </div>
    </form>
  );
}
