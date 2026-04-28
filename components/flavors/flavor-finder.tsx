"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { FlavorRecord } from "@/lib/flavor-library";

type Props = {
  flavors: FlavorRecord[];
};

const industryShortcuts = [
  "bakery",
  "oral-care",
  "nutraceutical",
  "dairy",
  "syrup",
  "confectionery",
  "pharmaceutical",
  "popcorn",
];

export function FlavorFinder({ flavors }: Props) {
  const [query, setQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const families = ["All", ...Array.from(new Set(flavors.map((x) => x.family))).sort()];
  const industries = ["All", ...Array.from(new Set(flavors.flatMap((x) => x.industries))).sort()];

  const filtered = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return flavors.filter((flavor) => {
      const queryMatch =
        !needle ||
        flavor.name.toLowerCase().includes(needle) ||
        flavor.keywords.some((k) => k.toLowerCase().includes(needle)) ||
        flavor.notes.toLowerCase().includes(needle);
      const familyMatch = selectedFamily === "All" || flavor.family === selectedFamily;
      const formatMatch = selectedFormat === "All" || flavor.format === selectedFormat;
      const industryMatch = selectedIndustry === "All" || flavor.industries.includes(selectedIndustry);
      return queryMatch && familyMatch && formatMatch && industryMatch;
    });
  }, [flavors, query, selectedFamily, selectedFormat, selectedIndustry]);

  return (
    <>
      <div className="finder-toolbar">
        <input className="input" placeholder="Search flavor name, profile, or notes" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="input" value={selectedFamily} onChange={(e) => setSelectedFamily(e.target.value)}>
          {families.map((f) => <option key={f}>{f}</option>)}
        </select>
        <select className="input" value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
          {["All", "Liquid", "Powder"].map((f) => <option key={f}>{f}</option>)}
        </select>
        <select className="input" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}>
          {industries.map((f) => <option key={f}>{f}</option>)}
        </select>
      </div>

      <div className="showcase-pills" style={{ marginTop: 16 }}>
        {industryShortcuts.map((slug) => (
          <button key={slug} className={`soft-pill ${selectedIndustry === slug ? "active-chip" : ""}`} onClick={() => setSelectedIndustry(slug)}>
            Best for {slug.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="flavor-grid" style={{ marginTop: 24, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {filtered.map((flavor) => (
          <article key={flavor.id} className="strength-card">
            <div className="eyebrow">{flavor.format}</div>
            <h3 style={{ marginTop: 8 }}>{flavor.name}</h3>
            <p>{flavor.notes}</p>
            <div className="showcase-pills" style={{ marginTop: 14 }}>
              <span className="soft-pill">{flavor.family}</span>
              {flavor.industries.slice(0, 2).map((industry) => <span key={industry} className="soft-pill">{industry}</span>)}
            </div>
            <p style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>Applications: {flavor.applications.join(", ") || "Custom usage"}</p>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="showcase" style={{ marginTop: 24 }}>
          <h3>No direct match yet.</h3>
          <p className="section-subtext">Try a broader family, switch between Liquid and Powder, or ask us for a custom flavor match.</p>
          <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
            <button className="light-btn" onClick={() => { setQuery(""); setSelectedFamily("All"); setSelectedFormat("All"); setSelectedIndustry("All"); }}>
              Clear filters
            </button>
            <Link href="/request-samples" className="cta-btn">Request Samples</Link>
          </div>
        </div>
      )}
    </>
  );
}
