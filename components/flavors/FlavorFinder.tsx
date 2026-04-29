"use client";

import { useMemo, useState } from "react";
import { demoFlavors } from "@/data/demo-flavors";
import type { FlavorFilters, IndustryKey } from "@/lib/types";
import { filterFlavors } from "@/lib/filter-flavors";
import { StickySearchBar } from "@/components/layout/StickySearchBar";
import { FinderControls } from "@/components/flavors/FinderControls";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { Button } from "@/components/ui/Button";
import { recommendedByIndustry } from "@/lib/recommendations";

const shortcutIndustries: IndustryKey[] = ["bakery", "oral-care", "nutraceutical", "dairy", "syrup", "popcorn"];

const formatComparison = {
  Liquid: "Best for syrups, beverages, dairy systems, and applications needing rapid incorporation.",
  Powder: "Best for dry blends, nutraceutical formats, and shelf-stable systems.",
};

const quickFilters = ["Liquid Explorer", "Powder Explorer"] as const;
const flavorHighlights = ["Grouped variants", "Industry recommendations", "Technical traceability"] as const;
const storyPoints = ["Search by clean name or raw alias", "Filter by family, format, and application", "Request samples from shortlisted matches"] as const;
const familyDescriptors: Record<string, string> = {
  Citrus: "Bright, juicy, and high-impact top notes.",
  Berry: "Ripe red and dark berry profiles for bold fruit character.",
  Tropical: "Lush, vibrant fruit notes with modern beverage appeal.",
  "Orchard Fruit": "Crisp apple-and-pear style profiles with clean finish.",
  "Stone Fruit": "Soft, aromatic peach/apricot/plum style flavor direction.",
  Melons: "Fresh melon profiles with sweet, cooling lift.",
  "Vanilla & Cream": "Round, indulgent, creamy foundations for bakery and dairy.",
  "Chocolate & Brown Notes": "Cocoa, caramel, and roasted sweetness for depth.",
  "Coffee & Beverage": "Coffeehouse, cola, soda, and beverage-ready profiles.",
  "Mint & Cooling": "Cooling mint systems for oral care and refreshment.",
  "Nut & Praline": "Toasted nut and praline styles with warm richness.",
  "Spice & Warmth": "Comforting spice notes for bakery and seasonal profiles.",
  "Dessert & Bakery": "Dessert-forward profiles built for indulgence.",
  "Candy & Confectionery": "Playful confectionery direction for gummies and sweets.",
  "Savory & Culinary": "Savory systems for culinary and snack applications.",
  "Botanical & Tea": "Herbal, tea-inspired, and aromatic botanical notes.",
  "Custom / Signature": "Match, create, and signature briefs tailored to your brand.",
};

function industryLabel(value: IndustryKey) {
  return value.replace("-", " ");
}

export function FlavorFinder() {
  const [filters, setFilters] = useState<FlavorFilters>({
    search: "",
    family: "All",
    format: "All",
    industry: "All",
    declarationType: "All",
    productType: "All",
    useCase: "All",
  });

  const families = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.family))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.industries))).sort(), []);
  const useCases = useMemo(() => Array.from(new Set([...demoFlavors.flatMap((item) => item.industries), ...demoFlavors.flatMap((item) => item.applications)])).sort(), []);
  const results = useMemo(() => filterFlavors(demoFlavors, filters), [filters]);
  const curatedFamilies = useMemo(
    () =>
      families.map((family) => {
        const inFamily = demoFlavors.filter((item) => item.family === family);
        const representatives = Array.from(new Set(inFamily.map((item) => item.name))).slice(0, 6);
        return {
          family,
          descriptor: familyDescriptors[family] ?? "Curated profiles with custom options available.",
          count: inFamily.length,
          representatives,
        };
      }),
    [families],
  );
  const recommended = useMemo(
    () => (filters.industry === "All" ? [] : recommendedByIndustry(demoFlavors, filters.industry).slice(0, 3)),
    [filters.industry],
  );

  return (
    <section>
      <StickySearchBar value={filters.search} onChange={(search) => setFilters((prev) => ({ ...prev, search }))} />

      <div className="finder-surface" style={{ marginTop: 12 }}>
        <div className="section-head" style={{ marginBottom: 14 }}>
          <div>
            <div className="eyebrow">Flavor Collections</div>
            <h3 style={{ margin: "8px 0 0", fontSize: "1.4rem" }}>Start with a family. Then narrow quickly.</h3>
          </div>
        </div>
        <div className="strength-grid three-col" style={{ marginBottom: 18 }}>
          {curatedFamilies.map((collection) => (
            <article key={collection.family} className="strength-card" style={{ minHeight: 220 }}>
              <div className="eyebrow">{collection.count} grouped profiles</div>
              <h3 style={{ marginTop: 8 }}>{collection.family}</h3>
              <p style={{ marginTop: 8 }}>{collection.descriptor}</p>
              <div className="showcase-pills" style={{ marginTop: 8 }}>
                {collection.representatives.slice(0, 3).map((item) => (
                  <span className="soft-pill" key={item}>{item}</span>
                ))}
              </div>
              <button className="light-btn" style={{ marginTop: 12 }} onClick={() => setFilters((prev) => ({ ...prev, family: collection.family }))}>
                Explore {collection.family}
              </button>
            </article>
          ))}
        </div>

        <FinderControls
          filters={filters}
          families={families}
          industries={industries}
          useCases={useCases}
          onChange={setFilters}
        />

        <div className="showcase-pills" style={{ marginTop: 14 }}>
          {quickFilters.map((item) => (
            <button
              key={item}
              className={`soft-pill ${(item === "Liquid Explorer" ? filters.format === "Liquid" : filters.format === "Powder") ? "active-chip" : ""}`}
              onClick={() => setFilters((p) => ({ ...p, format: item === "Liquid Explorer" ? "Liquid" : "Powder" }))}
            >
              {item}
            </button>
          ))}
          {shortcutIndustries.map((item) => (
            <button key={item} className={`soft-pill ${filters.industry === item ? "active-chip" : ""}`} onClick={() => setFilters((prev) => ({ ...prev, industry: item }))}>
              {industryLabel(item)}
            </button>
          ))}
        </div>

        <div className="showcase-pills" style={{ marginTop: 10 }}>
          {flavorHighlights.map((item) => (
            <span key={item} className="soft-pill">{item}</span>
          ))}
        </div>

        <div className="finder-meta">
          <span>{results.length} matching flavors</span>
          <button
            className="light-btn"
            onClick={() =>
              setFilters({ search: "", family: "All", format: "All", industry: "All", declarationType: "All", productType: "All", useCase: "All" })
            }
          >
            Reset filters
          </button>
        </div>

        <div className="guidance-grid">
          <article className="guidance-card">
            <h3>Liquid guidance</h3>
            <p>{formatComparison.Liquid}</p>
          </article>
          <article className="guidance-card">
            <h3>Powder guidance</h3>
            <p>{formatComparison.Powder}</p>
          </article>
        </div>
        <ul style={{ margin: "10px 0 0", opacity: 0.78, paddingLeft: 20 }}>
          {storyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      {recommended.length > 0 && (
        <section className="section" style={{ paddingTop: 18, paddingBottom: 12 }}>
          <div className="showcase">
            <div className="eyebrow">Recommended for your industry</div>
            <div className="strength-grid three-col" style={{ marginTop: 12 }}>
              {recommended.map((item) => (
                <article key={item.id} className="strength-card">
                  <div className="eyebrow">{item.family}</div>
                  <h3 style={{ fontSize: "1.25rem" }}>{item.name}</h3>
                  <p>{item.notes}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="section" style={{ paddingTop: 18 }}>
        <div className="strength-grid three-col">{results.map((item) => <FlavorCard key={item.id} flavor={item} />)}</div>

        {results.length === 0 && (
          <div className="showcase" style={{ marginTop: 18 }}>
            <h3>No exact match found yet.</h3>
            <p className="section-subtext">
              Try broadening filters, changing format, or selecting an industry chip above. If you have a specific target, submit a sample request and we’ll recommend the fastest path.
            </p>
            <Button href="/request-samples">Request Samples</Button>
          </div>
        )}
      </div>
    </section>
  );
}
