"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { flavorFamilies } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const forms = ["All", ...Array.from(new Set(flavorFamilies.map((item) => item.family)))];

export default function FlavorsPage() {
  const [query, setQuery] = useState("");
  const [form, setForm] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();

    return flavorFamilies.filter((item) => {
      const formMatch = form === "All" || item.family === form;
      const queryMatch =
        !normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.family.toLowerCase().includes(normalized) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalized));

      return formMatch && queryMatch;
    });
  }, [form, query]);

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Our Flavors</SectionEyebrow>
            <SectionHeading>Search and filter our flavor catalog.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 900 }}>
              Our extensive catalog of flavors along with our team&apos;s ability to develop and customize products for each customer allows our flavors to be used in any application.
              We offer flavors in all forms including Extracts, Concentrates, Emulsions, Oils, and Powders, and more.
            </p>

            <div className="flavor-tools">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input"
                aria-label="Search flavors"
                placeholder="Search flavor name, form, or example"
              />
              <div className="filter-pills flavor-family-filters" style={{ marginTop: 12 }}>
                {forms.map((option) => (
                  <button
                    key={option}
                    onClick={() => setForm(option)}
                    className={`filter-pill ${form === option ? "active" : ""}`}
                    style={{ borderColor: "rgba(17,17,17,.15)", color: "#111", background: "white" }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container">
            <div className="flavor-grid flavor-grid-tight" style={{ gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
              {filtered.map((item) => (
                <article key={item.name} className="strength-card" style={{ borderRadius: 20, padding: 18 }}>
                  <div style={{ height: 8, borderRadius: 999, background: "#fee2e2", marginBottom: 12 }} />
                  <h3 style={{ fontSize: "1rem", margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: "8px 0 0", fontSize: 14, color: "rgba(17,17,17,.7)", fontWeight: 700 }}>{item.family}</p>
                  <div className="showcase-pills" style={{ marginTop: 14 }}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="soft-pill" style={{ fontSize: 12 }}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="showcase" style={{ marginTop: 18 }}>
                <SectionHeading>No exact match found.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 12 }}>Contact us and we can build a custom match for your product.</p>
              </div>
            )}

            <div className="showcase" style={{ marginTop: 24 }}>
              <SectionEyebrow>Need a custom flavor?</SectionEyebrow>
              <SectionHeading>Request samples and tell us your target profile.</SectionHeading>
              <Link href="/contact" className="cta-btn" style={{ marginTop: 20 }}>Request Samples</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
