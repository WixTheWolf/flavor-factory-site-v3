import type { Flavor, FlavorFilters } from "@/lib/types";

const industryLabels: Record<string, string> = {
  bakery: "bakery baked goods",
  beverage: "beverage drink",
  confectionery: "confectionery candy sweets",
  dairy: "dairy yogurt ice cream milk",
  nutraceutical: "nutraceutical functional protein vitamin electrolyte supplement",
  "oral-care": "oral care oralcare mouthwash toothpaste breath",
  pharmaceutical: "pharmaceutical pharma medicated",
  popcorn: "popcorn snack",
};

/** Words people search for that the library spells differently, or that mean a group of flavors. */
const queryAliases: Record<string, string[]> = {
  mouthwash: ["mouth wash", "oral care", "toothpaste"],
  oralcare: ["oral care", "mouthwash", "toothpaste"],
  soda: ["cola", "root beer", "cream soda", "ginger beer"],
  pop: ["cola", "root beer", "cream soda"],
  gummy: ["gummies", "gummy bear"],
  gummies: ["gummy", "gummy bear"],
  syrup: ["cola", "root beer", "cough syrup", "maple", "pancake"],
  custom: ["signature", "match", "masking"],
  masking: ["masking", "signature", "custom"],
  berry: ["strawberry", "blueberry", "raspberry", "blackberry", "currant", "cranberry", "acai", "boysenberry"],
  citrus: ["orange", "lemon", "lime", "grapefruit", "yuzu", "mandarin", "tangerine", "calamansi", "bergamot"],
  choc: ["chocolate", "cocoa", "mocha", "brownie"],
  chocolate: ["cocoa", "mocha", "brownie"],
  coffee: ["espresso", "mocha", "cold brew"],
  cooling: ["mint", "menthol", "wintergreen", "peppermint", "spearmint"],
  tea: ["chai", "matcha", "earl grey", "jasmine", "hibiscus"],
  nut: ["almond", "hazelnut", "pecan", "peanut", "pistachio", "walnut", "macadamia", "praline"],
  nuts: ["almond", "hazelnut", "pecan", "peanut", "pistachio", "walnut", "macadamia", "praline"],
  spice: ["cinnamon", "ginger", "cardamom", "clove", "nutmeg", "chai", "pumpkin spice"],
  savory: ["savory", "culinary", "bbq", "ranch", "cheddar", "chicken", "beef"],
  snack: ["popcorn", "seasoning", "cheddar", "nacho", "ranch"],
  kids: ["pediatric", "bubble gum", "cotton candy", "grape candy"],
};

export function normalizeSearch(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
}

function compact(value: string) {
  return normalizeSearch(value).replace(/\s+/g, "");
}

/**
 * Everything a search can match for one flavor, normalized once. Adjacent words are also joined
 * ("mouth wash" also reads "mouthwash") so either spelling finds it.
 */
export function searchableText(flavor: Pick<Flavor, "name" | "family" | "formats" | "declarationType" | "rawNames" | "aliases" | "productTypes" | "applications" | "signals">) {
  const words = normalizeSearch(
    [
      flavor.name,
      flavor.family,
      ...flavor.formats,
      flavor.declarationType,
      ...flavor.rawNames,
      ...flavor.aliases,
      ...flavor.productTypes,
      ...flavor.applications,
      // Only what the product name itself points to: a family's typical uses would make
      // "toothpaste" find every citrus flavor. The application filter covers those.
      ...flavor.signals.map((industry) => industryLabels[industry] ?? industry),
    ].join(" "),
  ).split(" ");
  const joined = words.slice(1).map((word, index) => words[index] + word);
  // Words stay in order so phrases ("n and a", "cold brew") still match; joined pairs go after them.
  return ` ${words.join(" ")} ${[...new Set(joined)].join(" ")} `;
}

/** Words match from their start, so "lemon" finds lemonade but "cola" never finds chocolate. */
function hasWordStart(text: string, term: string) {
  const value = normalizeSearch(term);
  return value.length > 0 && text.includes(` ${value}`);
}

/** True when the whole query, or every word of it (or an alias of each), starts a word in the text. */
export function matchesQuery(text: string, search: string) {
  const query = normalizeSearch(search);
  if (!query) return true;
  const whole = [query, compact(search), ...(queryAliases[compact(search)] ?? [])];
  if (whole.some((item) => hasWordStart(text, item))) return true;
  const words = query.split(" ").filter((word) => word.length > 1 && !STOP_WORDS.has(word));
  if (words.length === 0) return false;
  return words.every((word) => [word, ...(queryAliases[word] ?? [])].some((item) => hasWordStart(text, item)));
}

const STOP_WORDS = new Set(["and", "the", "of", "with", "for", "flavor", "flavors", "flavour", "type"]);

function distance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = current;
    }
  }
  return row[b.length];
}

/** Close spellings for a search with no results: "vanila" suggests Vanilla. */
export function suggestNames(names: string[], search: string, limit = 3) {
  const words = normalizeSearch(search).split(" ").filter((word) => word.length >= 4);
  if (words.length === 0) return [];
  const scored = names
    .map((name) => {
      const nameWords = normalizeSearch(name).split(" ");
      const score = words.reduce((total, word) => {
        const best = Math.min(...nameWords.map((candidate) => distance(word, candidate.slice(0, word.length + 1))));
        return total + best;
      }, 0);
      return { name, score };
    })
    .filter((item) => item.score <= Math.max(1, Math.floor(words.join("").length / 5)))
    .sort((a, b) => a.score - b.score || a.name.length - b.name.length);
  return scored.slice(0, limit).map((item) => item.name);
}

type Filterable = Pick<Flavor, "familySlug" | "formats" | "declarations" | "industries">;

export function matchesFilters(flavor: Filterable, filters: FlavorFilters) {
  return (
    (filters.family === "All" || flavor.familySlug === filters.family) &&
    (filters.format === "All" || flavor.formats.includes(filters.format)) &&
    (filters.declarationType === "All" || flavor.declarations.includes(filters.declarationType)) &&
    (filters.industry === "All" || flavor.industries.includes(filters.industry))
  );
}

export function filterFlavors(flavors: Flavor[], filters: FlavorFilters) {
  return flavors.filter((flavor) => matchesFilters(flavor, filters) && matchesQuery(searchableText(flavor), filters.search));
}
