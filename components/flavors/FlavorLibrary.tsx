"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import { FlavorTileGrid } from "@/components/flavors/FlavorTile";
import { matchesFilters, matchesQuery, suggestNames } from "@/lib/filter-flavors";
import { INDUSTRY_LABELS, type FamilySummary, type LibraryItem } from "@/lib/flavor-labels";
import { useShortlist } from "@/lib/shortlist";
import { trackEvent } from "@/lib/analytics";
import type { DeclarationType, FlavorFilters, FlavorFormat, IndustryKey } from "@/lib/types";
import s from "./FlavorLibrary.module.css";

type Props = {
  items: LibraryItem[];
  families: FamilySummary[];
  profileCount: number;
};

const EMPTY: FlavorFilters = { search: "", family: "All", format: "All", declarationType: "All", industry: "All" };
const PAGE = 48;

const FORMATS: Array<{ value: FlavorFilters["format"]; label: string }> = [
  { value: "All", label: "Any" },
  { value: "Liquid", label: "Liquid" },
  { value: "Powder", label: "Powder" },
];

const DECLARATIONS: Array<{ value: FlavorFilters["declarationType"]; label: string; param: string }> = [
  { value: "All", label: "Any", param: "" },
  { value: "Natural", label: "Natural", param: "natural" },
  { value: "Natural & Artificial", label: "N&A", param: "na" },
  { value: "Artificial", label: "Artificial", param: "artificial" },
];

const INDUSTRIES = Object.keys(INDUSTRY_LABELS) as IndustryKey[];
const SUGGESTIONS = ["Strawberry", "Vanilla", "Mint", "Cold brew", "Mango", "Cheddar", "Masking"];

/** Filters live in the URL, so a narrowed list can be shared or bookmarked. */
function readUrl(families: FamilySummary[]): FlavorFilters {
  const params = new URLSearchParams(window.location.search);
  const family = params.get("family") ?? "";
  const format = params.get("format") ?? "";
  const label = params.get("label") ?? "";
  const use = params.get("use") ?? "";
  return {
    search: (params.get("q") ?? params.get("search") ?? "").trim().slice(0, 80),
    family: families.some((item) => item.slug === family) ? family : "All",
    format: (FORMATS.find((item) => item.value.toLowerCase() === format)?.value ?? "All") as FlavorFilters["format"],
    declarationType: (DECLARATIONS.find((item) => item.param && item.param === label)?.value ?? "All") as FlavorFilters["declarationType"],
    industry: INDUSTRIES.includes(use as IndustryKey) ? (use as IndustryKey) : "All",
  };
}

function writeUrl(filters: FlavorFilters) {
  const params = new URLSearchParams();
  if (filters.search.trim()) params.set("q", filters.search.trim());
  if (filters.family !== "All") params.set("family", filters.family);
  if (filters.format !== "All") params.set("format", filters.format.toLowerCase());
  const label = DECLARATIONS.find((item) => item.value === filters.declarationType)?.param;
  if (label) params.set("label", label);
  if (filters.industry !== "All") params.set("use", filters.industry);
  const query = params.toString();
  window.history.replaceState(window.history.state, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
}

function titleCase(value: string) {
  return value.trim().replace(/\s+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function FlavorLibrary({ items, families, profileCount }: Props) {
  const [filters, setFilters] = useState<FlavorFilters>(EMPTY);
  const filtersRef = useRef<FlavorFilters>(EMPTY);
  const [visible, setVisible] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const searchTracked = useRef("");
  const { add, has, mounted } = useShortlist();

  useEffect(() => {
    const initial = readUrl(families);
    filtersRef.current = initial;
    setFilters(initial);
    if (initial.search) trackEvent("flavor_search", { query: initial.search, location: "link" });
    if (initial.search || initial.family !== "All") {
      window.setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
    }
  }, [families]);

  const update = useCallback((patch: Partial<FlavorFilters>) => {
    const next = { ...filtersRef.current, ...patch };
    filtersRef.current = next;
    setFilters(next);
    writeUrl(next);
    setVisible(PAGE);
    const key = Object.keys(patch).find((name) => name !== "search");
    if (key) trackEvent("flavor_filter_use", { filter: key, value: String(patch[key as keyof FlavorFilters]) });
  }, []);

  const results = useMemo(
    () => items.filter((item) => matchesFilters(item, filters) && matchesQuery(item.text, filters.search)),
    [items, filters],
  );
  // Counts beside each family show what the other filters leave in it.
  const familyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of items) {
      if (matchesFilters(item, { ...filters, family: "All" }) && matchesQuery(item.text, filters.search)) {
        counts[item.familySlug] = (counts[item.familySlug] ?? 0) + 1;
      }
    }
    return counts;
  }, [items, filters]);

  const activeFamily = families.find((family) => family.slug === filters.family);
  const refinements = [filters.format !== "All", filters.declarationType !== "All", filters.industry !== "All"].filter(Boolean).length;
  const anyFilter = refinements > 0 || filters.family !== "All" || filters.search.trim() !== "";
  const shown = results.slice(0, visible);
  const didYouMean = useMemo(
    () => (results.length === 0 && filters.search.trim() ? suggestNames(items.map((item) => item.name), filters.search) : []),
    [results.length, filters.search, items],
  );
  const customName = titleCase(filters.search);
  const customId = `custom-${customName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  function trackSearch() {
    const query = filters.search.trim();
    if (query && query !== searchTracked.current) {
      searchTracked.current = query;
      trackEvent("flavor_search", { query, results: results.length });
    }
  }

  return (
    <section className={s.library} aria-label="Flavor library">
      <div className={s.familyHead}>
        <div>
          <p className="new-eyebrow">Browse by family</p>
          <h2 className={s.title}>
            {items.length} flavors, {profileCount} liquid and powder profiles.
          </h2>
        </div>
        <p className={s.lede}>Pick a family, search for an ingredient, or narrow by format, label and application. Add anything to your sample tray as you go.</p>
      </div>

      <div className={s.families} role="group" aria-label="Flavor families">
        <button
          type="button"
          className={`${s.family} ${s.familyAll}`}
          aria-pressed={filters.family === "All"}
          onClick={() => update({ family: "All" })}
        >
          <span className={s.familyDots} aria-hidden="true">
            {families.slice(0, 4).map((family) => (
              <i key={family.slug} style={{ background: family.accent }} />
            ))}
          </span>
          <span className={s.familyText}>
            <strong>All flavors</strong>
            <small>{Object.values(familyCounts).reduce((total, count) => total + count, 0)}</small>
          </span>
        </button>
        {families.map((family) => {
          const count = familyCounts[family.slug] ?? 0;
          return (
            <button
              key={family.slug}
              type="button"
              className={s.family}
              aria-pressed={filters.family === family.slug}
              onClick={() => update({ family: filters.family === family.slug ? "All" : family.slug })}
              disabled={count === 0 && filters.family !== family.slug}
            >
              <span className={s.familyImage} aria-hidden="true">
                <AppImage src={family.image} alt="" sizes="48px" quality={60} />
              </span>
              <span className={s.familyText}>
                <strong>{family.name}</strong>
                <small>{count}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div className={s.searchRow}>
        <label className={s.search}>
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search flavors</span>
          <input
            type="search"
            value={filters.search}
            placeholder={`Search ${items.length} flavors: strawberry, cold brew, mint...`}
            onChange={(event) => update({ search: event.target.value })}
            onBlur={trackSearch}
            onKeyDown={(event) => event.key === "Enter" && trackSearch()}
            enterKeyHint="search"
            autoComplete="off"
          />
          {filters.search && (
            <button type="button" className={s.clearSearch} onClick={() => update({ search: "" })} aria-label="Clear search">
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </label>
        <button
          type="button"
          className={s.filtersToggle}
          aria-expanded={filtersOpen}
          aria-controls="flavor-filters"
          onClick={() => {
            const opening = !filtersOpen;
            setFiltersOpen(opening);
            // The panel sits above the results; bring it into view when opened from deep in the list.
            if (opening) window.setTimeout(() => document.getElementById("flavor-filters")?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 30);
          }}
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          Filters{refinements > 0 ? ` (${refinements})` : ""}
        </button>
      </div>

      <div id="flavor-filters" className={`${s.filters}${filtersOpen ? ` ${s.filtersOpen}` : ""}`}>
        <fieldset className={s.group}>
          <legend>Format</legend>
          <div className={s.segment}>
            {FORMATS.map((option) => (
              <button key={option.value} type="button" aria-pressed={filters.format === option.value} onClick={() => update({ format: option.value as "All" | FlavorFormat })}>
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className={s.group}>
          <legend>Label</legend>
          <div className={s.segment}>
            {DECLARATIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={filters.declarationType === option.value}
                onClick={() => update({ declarationType: option.value as "All" | DeclarationType })}
                title={option.value === "Natural & Artificial" ? "Natural & Artificial" : undefined}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className={`${s.group} ${s.groupWide}`}>
          <legend>Application</legend>
          <div className={s.chips}>
            {INDUSTRIES.map((industry) => (
              <button
                key={industry}
                type="button"
                aria-pressed={filters.industry === industry}
                onClick={() => update({ industry: filters.industry === industry ? "All" : industry })}
              >
                {INDUSTRY_LABELS[industry]}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={s.results} ref={resultsRef}>
        {activeFamily && (
          <div className={s.familyBanner}>
            <span className={s.bannerImage} aria-hidden="true">
              <AppImage src={activeFamily.image} alt="" sizes="(max-width: 640px) 100vw, 320px" />
            </span>
            <div className={s.bannerCopy}>
              <p className="new-eyebrow">Flavor family</p>
              <h3>{activeFamily.name}</h3>
              <p>{activeFamily.intro}</p>
              <Link href={`/flavors/${activeFamily.slug}`} className={s.bannerLink}>
                Applications, formats and formulator notes
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}

        <div className={s.resultsHead}>
          <p className={s.count} aria-live="polite">
            <strong>{results.length}</strong> {results.length === 1 ? "flavor" : "flavors"}
            {filters.search.trim() && <> for &ldquo;{filters.search.trim()}&rdquo;</>}
          </p>
          {anyFilter && (
            <button type="button" className={s.reset} onClick={() => update(EMPTY)}>
              Clear all
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <>
            <FlavorTileGrid flavors={shown} showFamily={!activeFamily} />
            {shown.length < results.length && (
              <div className={s.more}>
                <button type="button" onClick={() => setVisible(results.length)}>
                  Show all {results.length} flavors
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={s.empty}>
            <h3>{filters.search.trim() ? <>No library match for &ldquo;{filters.search.trim()}&rdquo; yet.</> : "No flavors match all of these filters."}</h3>
            <p>
              The library is a set of starting points, not the limit. Most directions we&apos;re asked for can be developed or matched for your base, format and label.
            </p>
            <div className={s.emptyActions}>
              {filters.search.trim() && (
                <button
                  type="button"
                  className="btn-gold"
                  disabled={mounted && has(customId)}
                  onClick={() => {
                    add({ id: customId, name: customName, family: "Custom request", format: "To be developed" });
                    trackEvent("flavor_add_to_request", { flavor: customName, family: "Custom request" });
                  }}
                >
                  {mounted && has(customId) ? `${customName} is in your tray` : `Add ${customName} as a custom request`}
                </button>
              )}
              <button type="button" className={s.reset} onClick={() => update(EMPTY)}>
                Clear all
              </button>
            </div>
            <div className={s.suggest}>
              <span>{didYouMean.length > 0 ? "Did you mean" : "Try"}</span>
              {(didYouMean.length > 0 ? didYouMean : SUGGESTIONS).map((term) => (
                <button key={term} type="button" onClick={() => update({ ...EMPTY, search: term })}>
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
