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
    product: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <SectionEyebrow>Contact / Request Samples</SectionEyebrow>
                <SectionHeading>Request flavor samples for your product.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  Tell us what you are developing and our team will guide the next step.
                </p>
                <div className="form-grid">
                  <input value={form.name} onChange={(e) => update("name", e.target.value)} aria-label="Name" className="input" placeholder="Name" />
                  <input value={form.company} onChange={(e) => update("company", e.target.value)} aria-label="Company" className="input" placeholder="Company" />
                  <input value={form.email} onChange={(e) => update("email", e.target.value)} aria-label="Email" className="input" placeholder="Email" />
                  <input value={form.phone} onChange={(e) => update("phone", e.target.value)} aria-label="Phone" className="input" placeholder="Phone" />
                  <input value={form.product} onChange={(e) => update("product", e.target.value)} aria-label="Product type" className="input" placeholder="Product type" />
                  <textarea value={form.message} onChange={(e) => update("message", e.target.value)} aria-label="Message" className="textarea" placeholder="Project notes" />
                </div>
                <div className="sample-utility">
                  <button className="cta-btn">Submit Request</button>
                </div>
              </div>
              <div className="sample-right">
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #1f2937 0%, #111827 100%)" }} />
                <div className="bottom-copy">
                  <h3>samples@flavorfactory.net</h3>
                  <p>2058 Second Street, Norco, CA 92860</p>
                  <p>(951) 273-9877</p>
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
