"use client";

import { useMemo, useRef, useState } from "react";
import { demoFlavors } from "@/data/demo-flavors";
import type { FlavorFilters, IndustryKey } from "@/lib/types";
import { filterFlavors } from "@/lib/filter-flavors";
import { FinderControls } from "@/components/flavors/FinderControls";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { recommendedByIndustry } from "@/lib/recommendations";

type Collection = {
  name: string;
  description: string;
  examples: string[];
  image: string;
  imagePosition?: string;
  terms: string[];
};

const collections: Collection[] = [
  {
    name: "Citrus",
    description: "Bright, zesty, and juicy citrus profiles.",
    examples: ["Lemon", "Lime", "Orange", "Grapefruit", "Key Lime"],
    image: "/images/flavor-factory/media%20options/flavor-citrus.jpg",
    imagePosition: "center 45%",
    terms: ["citrus", "lemon", "lime", "orange", "grapefruit", "key lime", "yuzu", "mandarin", "calamansi", "tangerine"],
  },
  {
    name: "Berry",
    description: "Sweet, tart, and naturally vibrant berry profiles.",
    examples: ["Strawberry", "Raspberry", "Blueberry", "Blackberry", "Mixed Berry"],
    image: "/images/flavor-factory/media%20options/flavor-berry.jpg",
    imagePosition: "center 42%",
    terms: ["berry", "strawberry", "raspberry", "blueberry", "blackberry", "mixed berry", "black currant", "cranberry", "cherry", "boysenberry", "acai", "pomegranate"],
  },
  {
    name: "Vanilla",
    description: "Classic, creamy, warm vanilla profiles for sweet applications.",
    examples: ["Vanilla", "French Vanilla", "Vanilla Cream", "Vanilla Bean"],
    image: "/images/flavor-factory/media%20options/flavor-vanilla.jpg",
    imagePosition: "center 48%",
    terms: ["vanilla", "french vanilla", "vanilla cream", "vanilla bean", "cream", "custard"],
  },
  {
    name: "Chocolate",
    description: "Rich, smooth, and indulgent chocolate and cocoa profiles.",
    examples: ["Chocolate", "Cocoa", "Fudge", "Brownie"],
    image: "/images/flavor-factory/media%20options/flavor-chocolate.jpg",
    imagePosition: "center 50%",
    terms: ["chocolate", "cocoa", "fudge", "brownie", "mocha"],
  },
  {
    name: "Tropical",
    description: "Exotic, juicy fruit profiles with bright top notes.",
    examples: ["Mango", "Pineapple", "Passion Fruit", "Guava", "Coconut"],
    image: "/images/flavor-factory/media%20options/flavor-mango.png",
    imagePosition: "center 48%",
    terms: ["tropical", "mango", "pineapple", "passion fruit", "guava", "coconut", "pina colada", "dragon fruit", "banana", "lychee", "kiwi", "papaya", "tamarind"],
  },
  {
    name: "Nutty",
    description: "Warm, roasted, and naturally rich nut profiles.",
    examples: ["Almond", "Hazelnut", "Peanut", "Pistachio", "Butter Pecan"],
    image: "/images/flavor-factory/industry-bakery.png",
    imagePosition: "center 44%",
    terms: ["nutty", "almond", "hazelnut", "peanut", "pistachio", "pecan", "praline", "butter pecan", "walnut", "macadamia", "sesame"],
  },
  {
    name: "Beverage",
    description: "Refreshing profiles for drinks, syrups, and beverage bases.",
    examples: ["Cola", "Coffee", "Energy Drink", "Lemonade", "Tea"],
    image: "/images/flavor-factory/media%20options/application-beverage.jpg",
    imagePosition: "center 45%",
    terms: ["beverage", "syrup", "cola", "coffee", "energy drink", "lemonade", "tea", "cold brew", "root beer", "soda", "punch", "ginger beer", "horchata"],
  },
  {
    name: "Sweet",
    description: "Dessert-style sweetness, brown notes, and confectionery profiles.",
    examples: ["Caramel", "Butterscotch", "Marshmallow", "Pancake Syrup"],
    image: "/images/flavor-factory/media%20options/flavor-caramel.jpg",
    imagePosition: "center 45%",
    terms: ["sweet", "dessert", "caramel", "butterscotch", "marshmallow", "pancake syrup", "toffee", "maple", "cotton candy", "gummy", "honey", "cookie", "tiramisu", "red velvet", "birthday cake"],
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

const quickSearches = ["vanilla", "strawberry", "citrus", "mint", "mouthwash", "gummy", "syrup", "popcorn", "custom"];
const initialVisibleResults = 18;
const visibleResultsStep = 18;

function industryLabel(value: IndustryKey) {
  return value.replace("-", " ");
}

function normalizeCategoryText(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
}

function flavorCategoryText(flavor: (typeof demoFlavors)[number]) {
  return normalizeCategoryText(
    [
      flavor.name,
      flavor.family,
      flavor.notes,
      ...flavor.rawNames,
      ...flavor.aliases,
      ...flavor.productTypes,
      ...flavor.profile,
      ...flavor.applications,
      ...flavor.industries,
    ].join(" "),
  );
}

function matchesCategory(flavor: (typeof demoFlavors)[number], category: Collection | null) {
  if (!category) return true;

  const text = flavorCategoryText(flavor);

  return category.terms.some((term) => {
    const normalizedTerm = normalizeCategoryText(term);
    return new RegExp(`(^|\\s)${normalizedTerm.replace(/\s+/g, "\\s+")}(\\s|$)`).test(text);
  });
}

function filterLabels(filters: FlavorFilters, category: Collection | null) {
  return [
    category ? `Category: ${category.name}` : null,
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
  const [activeCategoryName, setActiveCategoryName] = useState<string | null>(null);
  const [visibleResults, setVisibleResults] = useState(initialVisibleResults);
  const resultsRef = useRef<HTMLDivElement>(null);

  const activeCategory = useMemo(() => collections.find((item) => item.name === activeCategoryName) ?? null, [activeCategoryName]);
  const families = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.family))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.industries))).sort(), []);
  const applications = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.applications))).sort(), []);
  const results = useMemo(() => filterFlavors(demoFlavors, filters).filter((item) => matchesCategory(item, activeCategory)), [activeCategory, filters]);
  const shownResults = useMemo(() => results.slice(0, visibleResults), [results, visibleResults]);
  const activeFilters = useMemo(() => filterLabels(filters, activeCategory), [activeCategory, filters]);
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
    setVisibleResults(initialVisibleResults);
    if (shouldFocus) focusResults();
  }

  function exploreCollection(categoryName: string) {
    setActiveCategoryName(categoryName);
    setVisibleResults(initialVisibleResults);
    focusResults();
  }

  function handleSearch(search: string) {
    updateFilters({ ...filters, search }, search.trim().length > 0);
  }

  function clearFilters() {
    setActiveCategoryName(null);
    updateFilters(initialFilters);
  }

  function clearCategory() {
    setActiveCategoryName(null);
    setVisibleResults(initialVisibleResults);
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

      <div className="flavor-collections">
        <div className="section-head flavor-section-head">
          <div>
            <div className="eyebrow">Flavor Collections</div>
            <h3>Start with a flavor family, then narrow by application, format, or declaration type.</h3>
          </div>
          <button type="button" className={`light-btn ${activeCategory ? "" : "is-active"}`} onClick={clearCategory}>
            View All Flavors
          </button>
        </div>
        <div className="flavor-collection-grid">
          {collections.map((collection) => (
            <button
              type="button"
              key={collection.name}
              className={`flavor-collection-card ${activeCategoryName === collection.name ? "is-active" : ""}`}
              onClick={() => exploreCollection(collection.name)}
            >
              <span className="flavor-collection-image" aria-hidden="true">
                <AppImage
                  src={collection.image}
                  alt=""
                  sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 1180px) 30vw, 22vw"
                  style={{ objectPosition: collection.imagePosition }}
                />
              </span>
              <span className="flavor-collection-copy">
                <span className="flavor-collection-title">{collection.name}</span>
                <span className="flavor-collection-description">{collection.description}</span>
                <span className="flavor-example-chips">
                  {collection.examples.map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </span>
              </span>
            </button>
          ))}
        </div>
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
            {results.length > 0 && (
              <p className="flavor-results-count">
                Showing {shownResults.length} of {results.length}
              </p>
            )}
          </div>
          <Button href="/request-samples" variant="secondary">
            Request Samples
          </Button>
        </div>

        {results.length > 0 ? (
          <>
            <div className="flavor-result-grid">
              {shownResults.map((item) => (
                <FlavorCard key={item.id} flavor={item} />
              ))}
            </div>
            {shownResults.length < results.length && (
              <div className="flavor-load-more">
                <button type="button" className="light-btn" onClick={() => setVisibleResults((current) => current + visibleResultsStep)}>
                  Load More
                </button>
              </div>
            )}
          </>
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
