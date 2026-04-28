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

const quickIndustry: IndustryKey[] = ["bakery", "oral-care", "nutraceutical", "dairy", "syrup", "popcorn"];

const formatGuidance = {
  Liquid: "Best for syrups, beverages, dairy systems, and applications needing rapid incorporation.",
  Powder: "Best for dry blends, nutraceutical formats, and shelf-stable systems.",
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
  const declarationTypes = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.declarationType))).sort(), []);
  const productTypes = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.productTypes))).sort(), []);
  const useCases = useMemo(() => Array.from(new Set([...demoFlavors.flatMap((item) => item.industries), ...demoFlavors.flatMap((item) => item.applications)])).sort(), []);
  const results = useMemo(() => filterFlavors(demoFlavors, filters), [filters]);
  const recommended = useMemo(
    () => (filters.industry === "All" ? [] : recommendedByIndustry(demoFlavors, filters.industry).slice(0, 3)),
    [filters.industry],
  );

  return (
    <section>
      <StickySearchBar value={filters.search} onChange={(search) => setFilters((prev) => ({ ...prev, search }))} />

      <div className="finder-surface" style={{ marginTop: 12 }}>
        <FinderControls
          filters={filters}
          families={families}
          industries={industries}
          declarationTypes={declarationTypes}
          productTypes={productTypes}
          useCases={useCases}
          onChange={setFilters}
        />

        <div className="showcase-pills" style={{ marginTop: 14 }}>
          <button className={`soft-pill ${filters.format === "Liquid" ? "active-chip" : ""}`} onClick={() => setFilters((p) => ({ ...p, format: "Liquid" }))}>
            Liquid Explorer
          </button>
          <button className={`soft-pill ${filters.format === "Powder" ? "active-chip" : ""}`} onClick={() => setFilters((p) => ({ ...p, format: "Powder" }))}>
            Powder Explorer
          </button>
          {quickIndustry.map((item) => (
            <button key={item} className={`soft-pill ${filters.industry === item ? "active-chip" : ""}`} onClick={() => setFilters((prev) => ({ ...prev, industry: item }))}>
              {industryLabel(item)}
            </button>
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
            <p>{formatGuidance.Liquid}</p>
          </article>
          <article className="guidance-card">
            <h3>Powder guidance</h3>
            <p>{formatGuidance.Powder}</p>
          </article>
        </div>
      </div>

      {recommended.length > 0 && (
        <section className="section" style={{ paddingTop: 18, paddingBottom: 12 }}>
          <div className="showcase">
            <div className="eyebrow">Recommended for your industry</div>
            <div className="strength-grid three-col" style={{ marginTop: 12 }}>
              {recommended.map((item) => (
                <article key={item.id} className="strength-card">
                  <div className="eyebrow">{item.format} • {item.declarationType}</div>
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
