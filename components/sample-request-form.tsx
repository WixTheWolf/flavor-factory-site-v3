"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useShortlist } from "@/lib/shortlist";

const SAMPLE_REQUEST_EMAIL = "samples@flavorfactory.net";

function field(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

function mailtoUrl(formData: FormData) {
  const company = field(formData, "company");
  const name = field(formData, "name");
  const subject = `Sample request: ${company || name || "Website inquiry"}`;
  const body = [
    "New sample request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${field(formData, "email")}`,
    `Phone: ${field(formData, "phone") || "Not provided"}`,
    `Application or industry: ${field(formData, "industry") || "Not provided"}`,
    `Flavor target: ${field(formData, "flavorTarget") || "Not provided"}`,
    `Preferred format: ${field(formData, "format") || "Not provided"}`,
    `Flavor declaration: ${field(formData, "declaration") || "Not provided"}`,
    `Target use level: ${field(formData, "useLevel") || "Not provided"}`,
    `Timeline: ${field(formData, "timeline") || "Not provided"}`,
    "",
    "Application and profile notes:",
    field(formData, "notes") || "Not provided",
  ].join("\n");

  return `mailto:${SAMPLE_REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function SampleRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">("idle");
  const { items: shortlist, clear: clearShortlist, mounted } = useShortlist();
  const [shortlistNote, setShortlistNote] = useState("");

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

    // Inject shortlisted flavors into the notes field
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
        setStatus("sent");
        form.reset();
        setShortlistNote("");
        clearShortlist();
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
    <form className="form-grid" style={{ marginTop: 18 }} onSubmit={onSubmit}>
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

      <input className="input" required name="name" autoComplete="name" aria-label="Name" placeholder="Name" />
      <input className="input" required name="company" autoComplete="organization" aria-label="Company" placeholder="Company" />
      <input className="input" required name="email" autoComplete="email" type="email" aria-label="Email" placeholder="Email" />
      <input className="input" name="phone" autoComplete="tel" aria-label="Phone" placeholder="Phone" />
      <input className="input" name="industry" aria-label="Application or industry" placeholder="Application or finished product" />
      <input
        className="input"
        name="flavorTarget"
        aria-label="Flavor target"
        placeholder="Flavor direction or benchmark"
        defaultValue={shortlistNote}
        key={shortlistNote}
      />
      <select className="input" name="format" defaultValue="" aria-label="Preferred format">
        <option value="" disabled>Preferred format</option>
        <option>Liquid</option>
        <option>Powder</option>
        <option>Both</option>
      </select>
      <select className="input" name="declaration" defaultValue="" aria-label="Flavor declaration">
        <option value="" disabled>Flavor declaration</option>
        <option>Natural</option>
        <option>Natural and artificial</option>
        <option>Artificial</option>
        <option>Not sure yet</option>
      </select>
      <input className="input" name="useLevel" aria-label="Target use level" placeholder="Target use level, if known" />
      <input className="input" name="timeline" aria-label="Timeline" placeholder="Timeline or sample deadline" />
      <textarea className="textarea" name="notes" aria-label="Application and profile notes" placeholder="Special requirements, process conditions, masking needs, constraints, or project notes" />
      <div className="sample-utility">
        <button type="submit" className="cta-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit Request"}
        </button>
        {status === "sent" && <span className="form-success" role="status">Sent to {SAMPLE_REQUEST_EMAIL}.</span>}
        {status === "fallback" && <span className="form-success" role="status">Email draft opened for {SAMPLE_REQUEST_EMAIL}.</span>}
        {status === "error" && <span className="form-error" role="status">Please email {SAMPLE_REQUEST_EMAIL} directly.</span>}
      </div>
    </form>
  );
}
