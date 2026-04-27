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
      const queryMatch =
        !normalized ||
        tile.name.toLowerCase().includes(normalized) ||
        tile.family.toLowerCase().includes(normalized) ||
        tile.tags.some((tag) => tag.toLowerCase().includes(normalized));

      return familyMatch && queryMatch;
    });
  }, [family, query]);

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Flavor Library</SectionEyebrow>
            <SectionHeading>Search and filter flavor families.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 760 }}>
              Use search and family filters to quickly narrow your options. If you need a custom match, send us your target profile.
            </p>

            <div className="flavor-tools">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="input"
                aria-label="Search flavor, family, or tag"
              />
              <div className="filter-pills flavor-family-filters">
                {families.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFamily(option)}
                    className={`filter-pill ${family === option ? "active" : ""}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="flavor-grid flavor-grid-tight">
              {filteredFlavors.map((tile) => (
                <a key={tile.name} href="/contact" className="flavor-card flavor-card-tight">
                  <img src={tile.image} alt={tile.name} />
                  <div className="flavor-overlay" />
                  <div className="flavor-family"><div className="flavor-badge">{tile.family}</div></div>
                  <div className="flavor-content">
                    <h3>{tile.name}</h3>
                    <div className="flavor-tag-row">
                      {tile.tags.map((tag) => (
                        <span key={tag} className="flavor-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="mini-link">Request sample</div>
                  </div>
                </a>
              ))}
            </div>

            {filteredFlavors.length === 0 && (
              <div className="showcase" style={{ marginTop: 16 }}>
                <SectionHeading>No exact match found.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Adjust filters or contact us for a custom flavor match.
                </p>
                <Link href="/contact" className="cta-btn" style={{ marginTop: 20 }}>Contact The Flavor Factory</Link>
              </div>
            )}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container showcase">
            <SectionEyebrow>Need custom matching?</SectionEyebrow>
            <SectionHeading>Share your target profile and application.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 800 }}>
              Our team can build custom liquid or powder flavors based on your benchmark, processing needs, and timeline.
            </p>
            <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
