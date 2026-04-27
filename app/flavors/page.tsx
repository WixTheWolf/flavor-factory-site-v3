"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { flavorLibrary } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const familyFilters = ["All", "Vanilla", "Berry", "Citrus", "Chocolate", "Caramel", "Mint"] as const;
const formatFilters = ["All", "Liquid", "Powder", "Liquid & Powder"] as const;

export default function FlavorsPage() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<(typeof familyFilters)[number]>("All");
  const [format, setFormat] = useState<(typeof formatFilters)[number]>("All");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return flavorLibrary.filter((item) => {
      const matchesFamily = family === "All" || item.family === family;
      const matchesFormat = format === "All" || item.format === format;
      const haystack = `${item.name} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
      const matchesQuery = term.length === 0 || haystack.includes(term);
      return matchesFamily && matchesFormat && matchesQuery;
    });
  }, [family, format, query]);

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Flavor Library</SectionEyebrow>
            <SectionHeading>Expanded flavor library for liquid and powder development.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 760 }}>
              Search by keyword, filter by family, and sort by format to quickly find a profile close to your target.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container library-panel">
            <div className="library-filters">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input"
                aria-label="Search flavor library"
              />
              <div className="library-pill-group">
                {familyFilters.map((item) => (
                  <button key={item} className={`filter-pill ${family === item ? "active" : ""}`} onClick={() => setFamily(item)}>{item}</button>
                ))}
              </div>
              <div className="library-pill-group">
                {formatFilters.map((item) => (
                  <button key={item} className={`filter-pill ${format === item ? "active" : ""}`} onClick={() => setFormat(item)}>{item}</button>
                ))}
              </div>
            </div>

            <div className="library-count">{filtered.length} flavors</div>

            <div className="library-grid">
              {filtered.map((item) => (
                <article key={item.name} className="library-card">
                  <img src={item.image} alt={item.name} />
                  <div className="library-card-body">
                    <div className="library-row">
                      <h3>{item.name}</h3>
                      <span className="soft-pill">{item.format}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className="library-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="soft-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 ? <p className="section-subtext">No matches found. Try a broader family or format filter.</p> : null}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container showcase">
            <SectionEyebrow>Need a match?</SectionEyebrow>
            <SectionHeading>Send your target profile and we will build a custom sample.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 800 }}>
              If you need a specific benchmark, upload details through our contact form and our team will recommend the right next sample set.
            </p>
            <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
