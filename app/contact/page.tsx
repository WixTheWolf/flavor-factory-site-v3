"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    format: "",
    flavor: "",
    application: "",
    timeline: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <SectionEyebrow>Contact / Request Samples</SectionEyebrow>
                <SectionHeading>Start your flavor project.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16, maxWidth: 560 }}>
                  Tell us your market, format, and target flavor. We will follow up with recommended sample directions.
                </p>
                <div className="form-grid">
                  <input value={form.name} onChange={(e) => update("name", e.target.value)} aria-label="Name" className="input" />
                  <input value={form.company} onChange={(e) => update("company", e.target.value)} aria-label="Company" className="input" />
                  <input value={form.email} onChange={(e) => update("email", e.target.value)} aria-label="Email" className="input" />
                  <input value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-label="Phone" className="input" />
                  <input value={form.industry} onChange={(e) => update("industry", e.target.value)} aria-label="Market" className="input" />
                  <input value={form.format} onChange={(e) => update("format", e.target.value)} aria-label="Liquid or powder" className="input" />
                  <input value={form.flavor} onChange={(e) => update("flavor", e.target.value)} aria-label="Target flavor" className="input" />
                  <input value={form.application} onChange={(e) => update("application", e.target.value)} aria-label="Product format" className="input" />
                  <input value={form.timeline} onChange={(e) => update("timeline", e.target.value)} aria-label="Timeline" className="input" />
                  <textarea value={form.message} onChange={(e) => update("message", e.target.value)} aria-label="Project notes" className="textarea" />
                </div>
                <div className="sample-utility">
                  <button className="cta-btn">Submit Request</button>
                  <div style={{ fontSize: 14, color: "rgba(17,17,17,.5)" }}>Fast response from a real team.</div>
                </div>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Flavor project planning background" />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Reach out</div>
                  <h3>Custom flavors. Low minimums. Real manufacturing support.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
