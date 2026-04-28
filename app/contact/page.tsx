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
    productType: "",
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
        <section className="section" style={{ paddingBottom: 80 }}>
          <div className="container simple-panel">
            <SectionEyebrow>Contact Us Today</SectionEyebrow>
            <SectionHeading>Request Samples</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 700 }}>
              Send your product type, target flavor, format, and timeline. Our team will review your project and follow up.
            </p>
            <div className="form-grid">
              <input value={form.name} onChange={(e) => update("name", e.target.value)} aria-label="Name" className="input" placeholder="Name" />
              <input value={form.company} onChange={(e) => update("company", e.target.value)} aria-label="Company" className="input" placeholder="Company" />
              <input value={form.email} onChange={(e) => update("email", e.target.value)} aria-label="Email" className="input" placeholder="Email" />
              <input value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-label="Phone" className="input" placeholder="Phone" />
              <input value={form.productType} onChange={(e) => update("productType", e.target.value)} aria-label="Product type" className="input" placeholder="Product type" />
              <input value={form.format} onChange={(e) => update("format", e.target.value)} aria-label="Liquid or powder" className="input" placeholder="Liquid or powder" />
              <input value={form.flavor} onChange={(e) => update("flavor", e.target.value)} aria-label="Target flavor" className="input" placeholder="Target flavor" />
              <input value={form.application} onChange={(e) => update("application", e.target.value)} aria-label="Application" className="input" placeholder="Application" />
              <input value={form.timeline} onChange={(e) => update("timeline", e.target.value)} aria-label="Timeline" className="input" placeholder="Timeline" />
              <textarea value={form.message} onChange={(e) => update("message", e.target.value)} aria-label="Project notes" className="textarea" placeholder="Project notes" />
            </div>
            <div className="sample-utility">
              <button className="cta-btn">Submit Request</button>
              <div style={{ fontSize: 14, color: "rgba(17,17,17,.6)" }}>samples@flavorfactory.net • (951) 273-9877</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
