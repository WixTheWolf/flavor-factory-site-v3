"use client";

import { useMemo, useRef, useState } from "react";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { demoFlavors } from "@/data/demo-flavors";
import type { Flavor, FlavorFilters, IndustryKey } from "@/lib/types";
import { filterFlavors } from "@/lib/filter-flavors";
import { Button } from "@/components/Button";
import { FinderControls } from "@/components/flavors/FinderControls";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { recommendedByIndustry } from "@/lib/recommendations";

type Collection = {
  name: string;
  description: string;
  examples: string[];
  terms: string[];
};

const collections: Collection[] = [
  {
    name: "Citrus",
    description: "Bright, zesty, and juicy citrus profiles.",
    examples: ["Lemon", "Lime", "Orange", "Grapefruit", "Key Lime"],
    terms: ["lemon", "lime", "orange", "grapefruit", "key lime", "yuzu", "mandarin", "calamansi", "tangerine", "citrus"],
  },
  {
    name: "Berry",
    description: "Sweet, tart, and naturally vibrant berry profiles.",
    examples: ["Strawberry", "Raspberry", "Blueberry", "Blackberry", "Mixed Berry"],
    terms: ["strawberry", "raspberry", "blueberry", "blackberry", "mixed berry", "wild berry", "boysenberry", "acai", "pomegranate", "black currant", "cranberry", "cherry"],
  },
  {
    name: "Vanilla",
    description: "Classic, creamy, warm vanilla profiles for sweet applications.",
    examples: ["Vanilla", "French Vanilla", "Vanilla Cream", "Vanilla Bean"],
    terms: ["vanilla", "french vanilla", "vanilla bean", "vanillin"],
  },
  {
    name: "Chocolate",
    description: "Rich, smooth, and indulgent chocolate and cocoa profiles.",
    examples: ["Chocolate", "Cocoa", "Fudge", "Brownie"],
    terms: ["chocolate", "cocoa", "fudge", "brownie", "mocha"],
  },
  {
    name: "Tropical",
    description: "Exotic, juicy fruit profiles with bright top notes.",
    examples: ["Mango", "Pineapple", "Passion Fruit", "Guava", "Coconut"],
    terms: ["mango", "pineapple", "passion fruit", "guava", "coconut", "pina colada", "dragon fruit", "banana", "lychee", "kiwi", "papaya", "tamarind"],
  },
  {
    name: "Nutty",
    description: "Warm, roasted, and naturally rich nut profiles.",
    examples: ["Almond", "Hazelnut", "Peanut", "Pistachio", "Butter Pecan"],
    terms: ["almond", "hazelnut", "peanut", "pistachio", "pecan", "praline", "butter pecan", "walnut", "macadamia", "sesame"],
  },
  {
    name: "Beverage",
    description: "Refreshing profiles for drinks, syrups, and beverage bases.",
    examples: ["Cola", "Coffee", "Energy Drink", "Lemonade", "Tea"],
    terms: ["cola", "coffee", "energy drink", "lemonade", "tea", "cold brew", "espresso", "root beer", "soda", "punch", "ginger beer", "horchata", "matcha", "hibiscus"],
  },
  {
    name: "Sweet",
    description: "Dessert-style sweetness, brown notes, and confectionery profiles.",
    examples: ["Caramel", "Butterscotch", "Marshmallow", "Pancake Syrup"],
    terms: ["caramel", "butterscotch", "marshmallow", "pancake syrup", "toffee", "maple", "cotton candy", "honey", "cookie", "tiramisu", "red velvet", "birthday cake"],
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

const quickSearches = ["vanilla", "strawberry", "orange", "mint", "gummy", "cola", "coffee", "masking"];
const initialVisibleResults = 18;
const visibleResultsStep = 18;

function industryLabel(value: IndustryKey) {
  return value
    .replace("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizeText(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
}

function flavorCollectionText(flavor: Flavor) {
  return normalizeText([flavor.name, ...flavor.rawNames].join(" "));
}

function exactTextMatch(text: string, term: string) {
  const normalizedTerm = normalizeText(term);
  return new RegExp(`(^|\\s)${normalizedTerm.replace(/\s+/g, "\\s+")}(\\s|$)`).test(text);
}

function matchesCollection(flavor: Flavor, category: Collection | null) {
  if (!category) return true;
  const text = flavorCollectionText(flavor);
  return category.terms.some((term) => exactTextMatch(text, term));
}

function filterLabels(filters: FlavorFilters, category: Collection | null) {
  return [
    category ? `Collection: ${category.name}` : null,
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
  const [activeCollectionName, setActiveCollectionName] = useState<string | null>(null);
  const [visibleResults, setVisibleResults] = useState(initialVisibleResults);
  const resultsRef = useRef<HTMLDivElement>(null);

  const activeCollection = useMemo(
    () => collections.find((item) => item.name === activeCollectionName) ?? null,
    [activeCollectionName],
  );
  const families = useMemo(() => Array.from(new Set(demoFlavors.map((item) => item.family))).sort(), []);
  const industries = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.industries))).sort(), []);
  const applications = useMemo(() => Array.from(new Set(demoFlavors.flatMap((item) => item.applications))).sort(), []);
  const results = useMemo(
    () => filterFlavors(demoFlavors, filters).filter((item) => matchesCollection(item, activeCollection)),
    [activeCollection, filters],
  );
  const shownResults = useMemo(() => results.slice(0, visibleResults), [results, visibleResults]);
  const activeFilters = useMemo(() => filterLabels(filters, activeCollection), [activeCollection, filters]);
  const recommended = useMemo(
    () => (filters.industry === "All" ? [] : recommendedByIndustry(demoFlavors, filters.industry).slice(0, 4)),
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

  function chooseCollection(name: string) {
    setActiveCollectionName(name);
    setVisibleResults(initialVisibleResults);
    focusResults();
  }

  function clearAll() {
    setActiveCollectionName(null);
    updateFilters(initialFilters);
  }

  function clearCollection() {
    setActiveCollectionName(null);
    setVisibleResults(initialVisibleResults);
  }

  return (
    <section className="bg-[#F4EFE5] px-6 pb-24 md:px-10 md:pb-28 lg:px-16 lg:pb-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="rounded-[2.5rem] border border-[#12382B]/10 bg-white/60 p-7 shadow-[0_24px_80px_rgba(30,30,26,0.06)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Flavor Finder</p>
              <h2 className="display-title mt-4 text-4xl md:text-6xl">Start broad. Refine quickly.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#645f55]">
                Start with a flavor family, then narrow by application, format, or declaration type. If you do not see the exact profile, we can likely develop or match it.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Profiles", demoFlavors.length.toLocaleString()],
                ["Collections", collections.length.toString()],
                ["Visible", `${Math.min(visibleResults, results.length)} of ${results.length}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.5rem] border border-[#12382B]/10 bg-[#F4EFE5] p-5">
                  <p className="font-serif text-4xl text-[#12382B]">{value}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6843A]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => {
              const isActive = activeCollectionName === collection.name;

              return (
                <button
                  type="button"
                  key={collection.name}
                  className={`group rounded-[1.7rem] border p-5 text-left transition duration-300 ${
                    isActive
                      ? "border-[#12382B] bg-[#12382B] text-white shadow-[0_24px_70px_rgba(18,56,43,0.18)]"
                      : "border-[#12382B]/10 bg-[#F4EFE5]/70 text-[#1E1E1A] hover:-translate-y-1 hover:bg-white"
                  }`}
                  onClick={() => chooseCollection(collection.name)}
                >
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${isActive ? "bg-white/12" : "bg-white"}`}>
                    <Sparkles className={`h-4 w-4 ${isActive ? "text-[#D9D1C3]" : "text-[#C6843A]"}`} aria-hidden="true" />
                  </span>
                  <span className="mt-5 block font-serif text-3xl tracking-[-0.035em]">{collection.name}</span>
                  <span className={`mt-3 block text-sm leading-6 ${isActive ? "text-white/70" : "text-[#645f55]"}`}>{collection.description}</span>
                  <span className="mt-5 flex flex-wrap gap-2">
                    {collection.examples.slice(0, 4).map((example) => (
                      <span
                        key={example}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isActive ? "bg-white/10 text-white/80" : "border border-[#12382B]/10 bg-white text-[#12382B]"
                        }`}
                      >
                        {example}
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="sticky top-[88px] z-30 mt-8 rounded-[2rem] border border-[#12382B]/10 bg-[#F4EFE5]/88 p-5 shadow-[0_20px_70px_rgba(30,30,26,0.08)] backdrop-blur-2xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <label className="grid gap-2">
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6843A]">
                <Search className="h-4 w-4" aria-hidden="true" />
                Search flavors
              </span>
              <input
                className="rounded-2xl border border-[#12382B]/10 bg-white/72 px-4 py-3 text-base text-[#12382B] outline-none transition placeholder:text-[#645f55]/45 focus:border-[#C6843A]"
                placeholder="Try vanilla, strawberry, mint, cola, gummy, masking..."
                value={filters.search}
                onChange={(event) => updateFilters({ ...filters, search: event.target.value }, event.target.value.trim().length > 0)}
              />
            </label>

            <div>
              <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6843A]">
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                Filters
              </p>
              <FinderControls
                filters={filters}
                families={families}
                industries={industries}
                applications={applications}
                onChange={(next) => updateFilters(next)}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-[#12382B]/10 pt-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((item) => (
                <button
                  type="button"
                  key={item}
                  className="rounded-full border border-[#12382B]/10 bg-white/62 px-3 py-1 text-xs font-semibold text-[#12382B] transition hover:border-[#C6843A]/55"
                  onClick={() => updateFilters({ ...filters, search: item }, true)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {activeCollection ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[#12382B] px-3 py-1 text-xs font-semibold text-white"
                  onClick={clearCollection}
                >
                  {activeCollection.name}
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ) : null}
              {activeFilters.filter((item) => !item.startsWith("Collection")).map((item) => (
                <span key={item} className="rounded-full border border-[#12382B]/10 px-3 py-1 text-xs font-medium text-[#645f55]">
                  {item}
                </span>
              ))}
              <button type="button" className="rounded-full border border-[#12382B]/15 px-3 py-1 text-xs font-semibold text-[#12382B]" onClick={clearAll}>
                Clear all
              </button>
            </div>
          </div>
        </div>

        {recommended.length > 0 ? (
          <div className="mt-8 rounded-[2rem] bg-[#12382B] p-6 text-white md:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D9D1C3]">
                  Recommended for {industryLabel(filters.industry as IndustryKey)}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">Common starting points for this industry.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {recommended.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    onClick={() => updateFilters({ ...filters, search: item.name }, true)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-12" ref={resultsRef}>
          <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Matching Profiles</p>
              <h2 className="display-title mt-3 text-4xl md:text-6xl">
                {results.length} result{results.length === 1 ? "" : "s"}
              </h2>
              {results.length > 0 ? (
                <p className="mt-3 text-sm leading-6 text-[#645f55]">
                  Showing {shownResults.length} of {results.length}. Request samples from any profile or send a custom target.
                </p>
              ) : null}
            </div>
            <Button href="/contact#project-form">Request Samples</Button>
          </div>

          {results.length > 0 ? (
            <>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {shownResults.map((item) => (
                  <FlavorCard key={item.id} flavor={item} />
                ))}
              </div>
              {shownResults.length < results.length ? (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    className="rounded-full border border-[#12382B]/15 bg-white/60 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#12382B] transition hover:border-[#12382B]/40 hover:bg-white"
                    onClick={() => setVisibleResults((current) => current + visibleResultsStep)}
                  >
                    Load More
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-[2rem] border border-[#12382B]/10 bg-white/70 p-8 md:p-10">
              <h3 className="display-title text-4xl">Not seeing the exact profile?</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#645f55]">
                Share the target flavor, application, format, declaration needs, and any benchmark product. We can recommend a close starting point, match a current profile, or develop something custom.
              </p>
              <Button href="/contact#project-form" className="mt-7">
                Request Custom Flavor
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
