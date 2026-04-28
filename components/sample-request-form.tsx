"use client";

import { useState, type FormEvent } from "react";

export function SampleRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="form-grid" style={{ marginTop: 18 }} onSubmit={onSubmit}>
      <input className="input" required placeholder="Name" />
      <input className="input" required placeholder="Company" />
      <input className="input" required type="email" placeholder="Email" />
      <input className="input" placeholder="Phone" />
      <input className="input" placeholder="Industry" />
      <input className="input" placeholder="Flavor target" />
      <select className="input"><option>Preferred format</option><option>Liquid</option><option>Powder</option><option>Both</option></select>
      <input className="input" placeholder="Timeline" />
      <textarea className="textarea" placeholder="Application and profile notes" />
      <div className="sample-utility">
        <button type="submit" className="cta-btn">Submit Request</button>
        {submitted && <span style={{ fontSize: 13, opacity: 0.8 }}>Thanks — we&apos;ll follow up soon.</span>}
      </div>
    </form>
  );
}
