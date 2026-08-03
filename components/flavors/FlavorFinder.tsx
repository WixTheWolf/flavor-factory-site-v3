"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { demoFlavors } from "@/data/demo-flavors";
import type { FlavorFilters, IndustryKey } from "@/lib/types";
import { filterFlavors } from "@/lib/filter-flavors";
import { FinderControls } from "@/components/flavors/FinderControls";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { recommendedByIndustry } from "@/lib/recommendations";
import { trackEvent } from "@/lib/analytics";

type Collection = {
  name: string;
  description: string;
  examples: string[];
  image: string;
  imagePosition?: string;
  familySlug: string;
};

const collections: Collection[] = [
  {
    name: "Citrus",
    familySlug: "citrus",
    description: "Bright, zesty, and juicy citrus profiles.",
    examples: ["Lemon", "Lime", "Orange", "Grapefruit"],
    image: "/images/flavor-factory/flavor-citrus.png",
    imagePosition: "center 60%",
  },
  {
    name: "Berry",
    familySlug: "berry",
    description: "Sweet, tart, and naturally vibrant berry profiles.",
    examples: ["Strawberry", "Raspberry", "Blueberry", "Mixed Berry"],
    image: "/images/flavor-factory/flavor-berry.png",
    imagePosition: "center 55%",
  },
  {
    name: "Vanilla",
    familySlug: "vanilla-cream",
    description: "Classic, creamy, warm vanilla profiles.",
    examples: ["Vanilla", "French Vanilla", "Vanilla Cream", "Vanilla Bean"],
    image: "/images/flavor-factory/powder-ingredient-close-up.png",
    imagePosition: "center center",
  },
  {
    name: "Chocolate",
    familySlug: "chocolate-brown-notes",
    description: "Rich, smooth chocolate and cocoa profiles.",
    examples: ["Chocolate", "Cocoa", "Fudge", "Brownie"],
    image: "/images/flavor-factory/flavor-chocolate.png",
    imagePosition: "center center",
  },
  {
    name: "Tropical",
    familySlug: "tropical",
    description: "Juicy fruit profiles with bright top notes.",
    examples: ["Mango", "Pineapple", "Passion Fruit", "Guava"],
    image: "/images/flavor-factory/flavor-tropical.png",
    imagePosition: "center center",
  },
  {
    name: "Nutty",
    familySlug: "nut-praline",
    description: "Warm, roasted, and naturally rich nut profiles.",
    examples: ["Almond", "Hazelnut", "Pistachio", "Butter Pecan"],
    image: "/images/flavor-factory/flavor-nutty.png",
    imagePosition: "center 40%",
  },
  {
    name: "Beverage",
    familySlug: "coffee-beverage",
    description: "Profiles for drinks, syrups, and beverage bases.",
    examples: ["Cola", "Coffee", "Energy Drink", "Tea"],
    image: "/images/flavor-factory/beverage-editorial.png",
    imagePosition: "center center",
  },
  {
    name: "Sweet",
    familySlug: "dessert-bakery",
    description: "Dessert, brown-note, and confectionery profiles.",
    examples: ["Caramel", "Butterscotch", "Marshmallow", "Maple"],
    image: "/images/flavor-factory/flavor-sweet.png",
    imagePosition: "center center",
  },
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

const quickSearches = ["vanilla", "strawberry", "citrus", "mint", "gummy", "popcorn"];
const initialVisibleResults = 18;
const visibleResultsStep = 18;

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
  const [visibleResults, setVisibleResults] = useState(initialVisibleResults);
  const resultsRef = useRef<HTMLDivElement>(null);

  const families = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.family))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.industries))).sort(), []);
  const applications = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.applications))).sort(), []);
  const results = useMemo(() => filterFlavors(demoFlavors, filters), [filters]);
  const shownResults = useMemo(() => results.slice(0, visibleResults), [results, visibleResults]);
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
    const filterKeys = ["family", "industry", "useCase", "format", "declarationType"] as const;
    const changed = filterKeys.find((key) => next[key] !== filters[key]);

    if (changed) {
      trackEvent("flavor_filter_use", { filter: changed, value: next[changed] });
    }

    setFilters(next);
    setVisibleResults(initialVisibleResults);
    if (shouldFocus) focusResults();
  }

  function handleSearch(search: string) {
    updateFilters({ ...filters, search }, search.trim().length > 0);
  }

  function clearFilters() {
    updateFilters(initialFilters);
  }

  return (
    <section className="flavor-finder">
      <div className="flavor-collections">
        <div className="section-head flavor-section-head">
          <div>
            <div className="eyebrow">Popular Starting Points</div>
            <h3>Browse a flavor family.</h3>
            <p>Choose a familiar direction, or search the full library below. We can also match an existing flavor or develop something custom.</p>
          </div>
        </div>

        <div className="flavor-collection-grid">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={`/flavors/${collection.familySlug}`}
              className="flavor-collection-card"
            >
              <span className="flavor-collection-image" aria-hidden="true">
                <AppImage
                  src={collection.image}
                  alt=""
                  sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 1180px) 45vw, 22vw"
                  style={{ objectPosition: collection.imagePosition }}
                />
              </span>
              <span className="flavor-collection-copy">
                <span className="flavor-collection-title">{collection.name}</span>
                <span className="flavor-collection-description">{collection.description}</span>
                <span className="flavor-example-chips">
                  {collection.examples.map((example) => <span key={example}>{example}</span>)}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flavor-search-workspace">
        <div className="flavor-search-workspace-head">
          <div>
            <div className="eyebrow">Search All Profiles</div>
            <h2>Find a practical starting point.</h2>
            <p>Search by flavor name or narrow the library by format, industry, application, and declaration.</p>
          </div>
        </div>

        <div className="flavor-search-panel">
          <label className="flavor-search-label" htmlFor="flavor-search">Search flavors</label>
          <input
            id="flavor-search"
            className="input flavor-search-input"
            placeholder="Try vanilla, strawberry, mint, gummy, or popcorn"
            value={filters.search}
            onChange={(event) => handleSearch(event.target.value)}
            onBlur={() => filters.search.trim() && trackEvent("flavor_search", { query: filters.search.trim() })}
          />
          <div className="flavor-quick-row" aria-label="Popular searches">
            {quickSearches.map((item) => (
              <button
                type="button"
                className="soft-pill"
                key={item}
                onClick={() => {
                  trackEvent("flavor_search", { query: item, source: "quick_search" });
                  updateFilters({ ...filters, search: item }, true);
                }}
              >
                {item}
              </button>
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
                <span className="flavor-muted">Showing the full library</span>
              ) : (
                activeFilters.map((item) => <span className="flavor-active-chip" key={item}>{item}</span>)
              )}
            </div>
            <button type="button" className="light-btn" onClick={clearFilters}>Clear filters</button>
          </div>
        </div>

        {recommended.length > 0 && (
          <div className="flavor-recommendation-strip">
            <div>
              <div className="eyebrow">Common for {industryLabel(filters.industry as IndustryKey)}</div>
              <p>Useful starting points for this application.</p>
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
      </div>

      <div className="flavor-results" ref={resultsRef}>
        <div className="flavor-results-head">
          <div>
            <div className="eyebrow">Flavor Profiles</div>
            <h3>{results.length} result{results.length === 1 ? "" : "s"}</h3>
            {results.length > 0 && <p className="flavor-results-count">Showing {shownResults.length} of {results.length}</p>}
          </div>
          <Button href="/request-samples">Request a Sample</Button>
        </div>

        {results.length > 0 ? (
          <>
            <div className="flavor-result-grid">
              {shownResults.map((item) => <FlavorCard key={item.id} flavor={item} />)}
            </div>
            {shownResults.length < results.length && (
              <div className="flavor-load-more">
                <button type="button" className="light-btn" onClick={() => setVisibleResults((current) => current + visibleResultsStep)}>
                  Show more flavors
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flavor-empty-state">
            <h3>Not seeing the exact profile?</h3>
            <p>Send us the direction you have in mind. We can recommend a starting point, match a current flavor, or develop something custom.</p>
            <Button href="/request-samples">Request a Sample</Button>
          </div>
        )}
      </div>
    </section>
  );
}
