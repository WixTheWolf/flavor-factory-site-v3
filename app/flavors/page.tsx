"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { flavorTiles } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const families = ["All", ...Array.from(new Set(flavorTiles.map((tile) => tile.family)))];

export default function FlavorsPage() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");

  const filteredFlavors = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return flavorTiles.filter((tile) => {
      const familyMatch = family === "All" || tile.family === family;
      const queryMatch = !normalized || tile.name.toLowerCase().includes(normalized) || tile.tags.some((tag) => tag.toLowerCase().includes(normalized));
      return familyMatch && queryMatch;
    });
  }, [family, query]);

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container simple-panel">
            <SectionEyebrow>Flavor Library</SectionEyebrow>
            <SectionHeading>Search by flavor family</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              Start with a familiar profile, then request custom matching for your application.
            </p>

            <div className="flavor-tools">
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="input" aria-label="Search flavor" />
              <div className="filter-pills flavor-family-filters">
                {families.map((option) => (
                  <button key={option} onClick={() => setFamily(option)} className={`filter-pill plain ${family === option ? "active" : ""}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0, paddingBottom: 80 }}>
          <div className="container">
            <div className="flavor-grid flavor-grid-tight simple-grid">
              {filteredFlavors.map((tile) => (
                <a key={tile.name} href="/contact" className="flavor-card flavor-card-tight placeholder-card">
                  <div className="placeholder-box">Image Placeholder</div>
                  <div className="flavor-content plain">
                    <h3>{tile.name}</h3>
                    <div className="flavor-tag-row">
                      {tile.tags.map((tag) => (
                        <span key={tag} className="flavor-tag plain">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {filteredFlavors.length === 0 && (
              <div className="simple-panel" style={{ marginTop: 16 }}>
                <SectionHeading>No exact match found</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Adjust filters or contact us for custom flavor matching.
                </p>
                <Link href="/contact" className="cta-btn" style={{ marginTop: 20 }}>Contact The Flavor Factory</Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
