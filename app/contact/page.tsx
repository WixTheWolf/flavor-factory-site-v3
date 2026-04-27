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
                  Share your product format, flavor target, and timeline. Our team will follow up with sample recommendations and next steps.
                </p>
                <div className="form-grid">
                  <input aria-label="Name" value={form.name} onChange={(e) => update("name", e.target.value)} className="input" />
                  <input aria-label="Company" value={form.company} onChange={(e) => update("company", e.target.value)} className="input" />
                  <input aria-label="Email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" />
                  <input aria-label="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" />
                  <input aria-label="Industry" value={form.industry} onChange={(e) => update("industry", e.target.value)} className="input" />
                  <input aria-label="Liquid or Powder" value={form.format} onChange={(e) => update("format", e.target.value)} className="input" />
                  <input aria-label="Target Flavor" value={form.flavor} onChange={(e) => update("flavor", e.target.value)} className="input" />
                  <input aria-label="Product Format" value={form.application} onChange={(e) => update("application", e.target.value)} className="input" />
                  <input aria-label="Timeline" value={form.timeline} onChange={(e) => update("timeline", e.target.value)} className="input" />
                  <textarea aria-label="Project Details" value={form.message} onChange={(e) => update("message", e.target.value)} className="textarea" />
                </div>
                <div className="sample-utility">
                  <button className="cta-btn">Submit Request</button>
                  <div style={{ fontSize: 14, color: "rgba(17,17,17,.5)" }}>Fast response from a real team.</div>
                </div>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Contact background" />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Reach out</div>
                  <h3>Custom flavors. Reliable manufacturing. Friendly service.</h3>
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
