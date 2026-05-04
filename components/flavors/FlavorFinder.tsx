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
  { name: "Citrus", direction: "Clean, bright directions for beverage, confectionery, bakery, and functional products.", examples: ["Orange", "Lemon Lime", "Yuzu"] },
  { name: "Berry", direction: "Sweet, tart, jammy, or candy-style berry profiles for a wide range of applications.", examples: ["Strawberry", "Black Currant", "Raspberry"] },
  { name: "Tropical", direction: "Ripe fruit directions for beverages, gummies, syrups, and application-specific blends.", examples: ["Pineapple", "Mango", "Passion Fruit"] },
  { name: "Orchard Fruit", direction: "Fresh, baked, candied, or beverage-style apple and pear profiles.", examples: ["Green Apple", "Pear", "Apple Pie"] },
  { name: "Stone Fruit", direction: "Peach, apricot, and cherry directions with room for natural, candy, or baked profiles.", examples: ["Peach", "Apricot", "Dark Sweet Cherry"] },
  { name: "Vanilla & Cream", direction: "Vanilla, cream, custard, and sweet dairy notes for indulgent products.", examples: ["Vanilla Bean", "Custard", "Sweet Cream"] },
  { name: "Chocolate & Brown Notes", direction: "Cocoa, caramel, toffee, maple, cookie, and roasted profiles.", examples: ["Chocolate", "Caramel", "Brownie Batter"] },
  { name: "Mint & Cooling", direction: "Mint, cooling, and freshness systems for oral care, candy, and refreshment.", examples: ["Peppermint", "Spearmint", "Wintergreen"] },
  { name: "Coffee & Beverage", direction: "Coffeehouse, soda, punch, root beer, and syrup-ready directions.", examples: ["Cold Brew", "Cola", "Root Beer"] },
  { name: "Nut & Praline", direction: "Toasted, creamy, roasted, and praline-style nut character.", examples: ["Almond", "Hazelnut", "Peanut Butter"] },
  { name: "Botanical & Tea", direction: "Tea, floral, herbal, and functional-product flavor directions.", examples: ["Matcha", "Hibiscus", "Lavender"] },
  { name: "Candy & Confectionery", direction: "High-impact profiles for gummies, hard candy, chews, and novelty sweets.", examples: ["Blue Raspberry", "Cotton Candy", "Sour Apple"] },
  { name: "Savory & Culinary", direction: "Snack, sauce, seasoning, coating, and culinary-style profiles.", examples: ["BBQ", "Ranch", "Jalapeno Lime"] },
  { name: "Custom & Signature", direction: "Custom, matching, masking, reformulation, and proprietary profile work.", examples: ["Custom Fruit", "Masking", "Profile Match"] },
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
          <h2>Start with a family, narrow by application, then request samples.</h2>
          <p>
            This page shows common flavor directions and searchable starting points. If you do not see the exact profile, we can likely develop or match it.
          </p>
        </div>
        <p className="flavor-format-note">
          Flavors can be developed in liquid or powder formats, with natural, natural and artificial, artificial, or custom requirements depending on the project.
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
            <h3>Common starting points</h3>
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
            <h3>Not seeing the exact profile? Ask us.</h3>
            <p>
              Share the target flavor, application, format, declaration needs, and any benchmark product. We can recommend a close starting point, match a current flavor, or develop something custom.
            </p>
            <Button href="/request-samples">Request a custom flavor</Button>
          </div>
        )}
      </div>
    </section>
  );
}
