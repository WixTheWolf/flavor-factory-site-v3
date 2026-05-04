"use client";

import { useMemo, useRef, useState } from "react";
import { demoFlavors } from "@/data/demo-flavors";
import type { FlavorFilters, IndustryKey } from "@/lib/types";
import { filterFlavors } from "@/lib/filter-flavors";
import { FinderControls } from "@/components/flavors/FinderControls";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { Button } from "@/components/ui/Button";
import { recommendedByIndustry } from "@/lib/recommendations";

type Collection = {
  name: string;
  direction: string;
  examples: string[];
};

const collections: Collection[] = [
  { name: "Citrus", direction: "Bright, juicy, refreshing top notes.", examples: ["Orange", "Lemon Lime", "Yuzu"] },
  { name: "Berry", direction: "Sweet-tart red and dark berry profiles.", examples: ["Strawberry", "Black Currant", "Raspberry"] },
  { name: "Tropical", direction: "Ripe fruit for beverage and candy concepts.", examples: ["Pineapple", "Mango", "Passion Fruit"] },
  { name: "Orchard Fruit", direction: "Fresh, candied, or baked apple and pear.", examples: ["Green Apple", "Pear", "Apple Pie"] },
  { name: "Stone Fruit", direction: "Soft fruit with light tart balance.", examples: ["Peach", "Apricot", "Dark Sweet Cherry"] },
  { name: "Vanilla & Cream", direction: "Smooth creamy sweetness for indulgent products.", examples: ["Vanilla Bean", "Custard", "Sweet Cream"] },
  { name: "Chocolate & Brown Notes", direction: "Cocoa, caramel, toffee, maple, and roasted depth.", examples: ["Chocolate", "Caramel", "Brownie Batter"] },
  { name: "Mint & Cooling", direction: "Clean cooling profiles for oral care and refreshment.", examples: ["Peppermint", "Spearmint", "Wintergreen"] },
  { name: "Coffee & Beverage", direction: "Coffeehouse, soda, punch, and syrup profiles.", examples: ["Cold Brew", "Cola", "Root Beer"] },
  { name: "Nut & Praline", direction: "Toasted, creamy, and praline-style nut character.", examples: ["Almond", "Hazelnut", "Peanut Butter"] },
  { name: "Botanical & Tea", direction: "Herbal, tea, floral, and wellness-positioned notes.", examples: ["Matcha", "Hibiscus", "Lavender"] },
  { name: "Candy & Confectionery", direction: "High-impact profiles for gummies and sweets.", examples: ["Blue Raspberry", "Cotton Candy", "Sour Apple"] },
  { name: "Savory & Culinary", direction: "Snack, sauce, seasoning, and culinary systems.", examples: ["BBQ", "Ranch", "Jalapeno Lime"] },
  { name: "Custom & Signature", direction: "Matching, masking, and proprietary brand profiles.", examples: ["Custom Fruit", "Masking", "Profile Match"] },
];

const initialFilters: FlavorFilters = {
  search: "",
  family: "All",
  format: "All",
  industry: "All",
  declarationType: "All",
  productType: "All",
  useCase: "All",
};

const quickSearches = ["vanilla", "strawberry", "citrus", "mint", "mouthwash", "gummy", "syrup", "popcorn", "custom"];

function industryLabel(value: IndustryKey) {
  return value.replace("-", " ");
}

function filterLabels(filters: FlavorFilters) {
  return [
    filters.search ? `Search: ${filters.search}` : null,
    filters.family !== "All" ? `Family: ${filters.family}` : null,
    filters.industry !== "All" ? `Industry: ${industryLabel(filters.industry)}` : null,
    filters.useCase !== "All" ? `Application: ${filters.useCase}` : null,
    filters.format !== "All" ? `Format: ${filters.format}` : null,
    filters.declarationType !== "All" ? `Declaration: ${filters.declarationType}` : null,
  ].filter(Boolean) as string[];
}

export function FlavorFinder() {
  const [filters, setFilters] = useState<FlavorFilters>(initialFilters);
  const resultsRef = useRef<HTMLDivElement>(null);

  const families = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.family))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.industries))).sort(), []);
  const applications = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.applications))).sort(), []);
  const results = useMemo(() => filterFlavors(demoFlavors, filters), [filters]);
  const activeFilters = useMemo(() => filterLabels(filters), [filters]);
  const recommended = useMemo(
    () => (filters.industry === "All" ? [] : recommendedByIndustry(demoFlavors, filters.industry).slice(0, 3)),
    [filters.industry],
  );

  function focusResults() {
    window.setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function updateFilters(next: FlavorFilters, shouldFocus = false) {
    setFilters(next);
    if (shouldFocus) focusResults();
  }

  function exploreCollection(family: string) {
    updateFilters({ ...filters, search: "", family }, true);
  }

  function handleSearch(search: string) {
    updateFilters({ ...filters, search }, search.trim().length > 0);
  }

  function clearFilters() {
    updateFilters(initialFilters);
  }

  return (
    <section className="flavor-finder">
      <div className="flavor-intro-panel">
        <div>
          <div className="eyebrow">Flavor Discovery</div>
          <h2>Use the library to get close. Use us to get exact.</h2>
          <p>
            Narrow by taste direction, application, format, and declaration. Then request the profiles that fit the product.
          </p>
        </div>
        <p className="flavor-format-note">
          The library is a starting point. Matching, masking, reformulation, and custom profiles are part of the work.
        </p>
      </div>

      <div className="flavor-search-panel">
        <label className="flavor-search-label" htmlFor="flavor-search">
          Search flavors
        </label>
        <input
          id="flavor-search"
          className="input flavor-search-input"
          placeholder="Try vanilla, strawberry, mouthwash, gummy, syrup, popcorn, or custom"
          value={filters.search}
          onChange={(event) => handleSearch(event.target.value)}
        />
        <div className="flavor-quick-row">
          {quickSearches.map((item) => (
            <button type="button" className="soft-pill" key={item} onClick={() => updateFilters({ ...filters, search: item }, true)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flavor-collections">
        <div className="section-head flavor-section-head">
          <div>
            <div className="eyebrow">Flavor Collections</div>
            <h3>Curated starting points</h3>
          </div>
          <p>Pick a direction and the matching profiles move into view.</p>
        </div>
        <div className="flavor-collection-grid">
          {collections.map((collection) => (
            <article key={collection.name} className={`flavor-collection-card ${filters.family === collection.name ? "is-active" : ""}`}>
              <h4>{collection.name}</h4>
              <p>{collection.direction}</p>
              <div className="flavor-example-line">{collection.examples.join(" / ")}</div>
              <button type="button" className="light-btn" onClick={() => exploreCollection(collection.name)}>
                Explore {collection.name}
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="flavor-controls-panel">
        <FinderControls
          filters={filters}
          families={families}
          industries={industries}
          applications={applications}
          onChange={(next) => updateFilters(next)}
        />

        <div className="flavor-filter-footer">
          <div className="flavor-active-filters">
            {activeFilters.length === 0 ? (
              <span className="flavor-muted">No filters active</span>
            ) : (
              activeFilters.map((item) => (
                <span className="flavor-active-chip" key={item}>
                  {item}
                </span>
              ))
            )}
          </div>
          <button type="button" className="light-btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      </div>

      {recommended.length > 0 && (
        <div className="flavor-recommendation-strip">
          <div>
            <div className="eyebrow">Recommended for {industryLabel(filters.industry as IndustryKey)}</div>
            <p>Common starting points for this industry.</p>
          </div>
          <div className="flavor-recommendation-list">
            {recommended.map((item) => (
              <button type="button" key={item.id} onClick={() => updateFilters({ ...filters, search: item.name }, true)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flavor-results" ref={resultsRef}>
        <div className="flavor-results-head">
          <div>
            <div className="eyebrow">Matching Profiles</div>
            <h3>{results.length} result{results.length === 1 ? "" : "s"}</h3>
          </div>
          <Button href="/request-samples" variant="secondary">
            Request samples
          </Button>
        </div>

        {results.length > 0 ? (
          <div className="flavor-result-grid">
            {results.map((item) => (
              <FlavorCard key={item.id} flavor={item} />
            ))}
          </div>
        ) : (
          <div className="flavor-empty-state">
            <h3>Not seeing the exact profile? That is normal.</h3>
            <p>
              Share the target flavor, application, format, and any benchmark product. We can recommend a close starting point, match a profile, or develop something custom.
            </p>
            <Button href="/request-samples">Request a custom flavor</Button>
          </div>
        )}
      </div>
    </section>
  );
}
