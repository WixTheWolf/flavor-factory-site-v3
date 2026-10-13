"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { demoFlavors } from "@/data/demo-flavors";
import { matchesQuery, searchableText } from "@/lib/filter-flavors";
import { flavorHref } from "@/lib/flavor-labels";

export function FlavorSearch404() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];

    return demoFlavors.filter((flavor) => matchesQuery(searchableText(flavor), term)).slice(0, 5);
  }, [query]);

  return (
    <div className="not-found-search">
      <label htmlFor="flavor-404-search">Search flavor library</label>
      <input
        id="flavor-404-search"
        className="input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try vanilla, citrus, bakery, mint"
      />
      {results.length > 0 && (
        <div className="footer-links">
          {results.map((flavor) => (
            <Link href={flavorHref(flavor)} key={flavor.id}>
              {flavor.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
