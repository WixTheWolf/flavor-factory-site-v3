"use client";

import { useMemo, useState } from "react";
import { demoFlavors } from "@/data/demo-flavors";
import type { FlavorFilters, IndustryKey } from "@/lib/types";
import { filterFlavors } from "@/lib/filter-flavors";
import { StickySearchBar } from "@/components/layout/StickySearchBar";
import { FinderControls } from "@/components/flavors/FinderControls";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { Button } from "@/components/ui/Button";

const quickIndustry: IndustryKey[] = ["bakery", "oral-care", "nutraceutical", "dairy", "syrup", "popcorn"];

export function FlavorFinder() {
  const [filters, setFilters] = useState<FlavorFilters>({ search: "", family: "All", format: "All", industry: "All" });

  const families = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.family))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.industries))).sort(), []);
  const results = useMemo(() => filterFlavors(demoFlavors, filters), [filters]);

  return (
    <section>
      <StickySearchBar value={filters.search} onChange={(search) => setFilters((prev) => ({ ...prev, search }))} />

      <div className="finder-surface" style={{ marginTop: 12 }}>
        <FinderControls filters={filters} families={families} industries={industries} onChange={setFilters} />

        <div className="showcase-pills" style={{ marginTop: 14 }}>
          <button className={`soft-pill ${filters.format === "Liquid" ? "active-chip" : ""}`} onClick={() => setFilters((p) => ({ ...p, format: "Liquid" }))}>Liquid Explorer</button>
          <button className={`soft-pill ${filters.format === "Powder" ? "active-chip" : ""}`} onClick={() => setFilters((p) => ({ ...p, format: "Powder" }))}>Powder Explorer</button>
          {quickIndustry.map((item) => (
            <button key={item} className={`soft-pill ${filters.industry === item ? "active-chip" : ""}`} onClick={() => setFilters((prev) => ({ ...prev, industry: item }))}>
              Best for {item}
            </button>
          ))}
        </div>

        <div className="finder-meta">
          <span>{results.length} matching flavors</span>
          <button className="light-btn" onClick={() => setFilters({ search: "", family: "All", format: "All", industry: "All" })}>Reset filters</button>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 18 }}>
        <div className="strength-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
          {results.map((item) => <FlavorCard key={item.id} flavor={item} />)}
        </div>

        {results.length === 0 && (
          <div className="showcase" style={{ marginTop: 18 }}>
            <h3>No exact match found.</h3>
            <p className="section-subtext">Try broadening your filters, switching format, or request a custom recommendation from our team.</p>
            <Button href="/request-samples">Request Samples</Button>
          </div>
        )}
      </div>
    </section>
  );
}
