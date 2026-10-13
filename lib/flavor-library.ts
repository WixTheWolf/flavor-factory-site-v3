import { demoFlavors } from "@/data/demo-flavors";
import { familyMedia, flavorFamilyDetails } from "@/data/flavor-family-details";
import { accentFor } from "@/data/flavor-palette";
import { swatchFor } from "@/data/flavor-swatches";
import { searchableText } from "@/lib/filter-flavors";
import type { Flavor } from "@/lib/types";
import { flavorHref, type FamilySummary, type LibraryItem } from "@/lib/flavor-labels";

export { DECLARATION_LABELS, INDUSTRY_LABELS, flavorHref, type FamilySummary, type LibraryItem } from "@/lib/flavor-labels";

export function toLibraryItem(flavor: Flavor): LibraryItem {
  return {
    id: flavor.id,
    name: flavor.name,
    family: flavor.family,
    familySlug: flavor.familySlug,
    formats: flavor.formats,
    declarations: flavor.declarations,
    industries: flavor.industries,
    href: flavorHref(flavor),
    swatch: swatchFor(flavor.name, flavor.familySlug),
    text: searchableText(flavor),
  };
}

export function libraryItems(flavors: Flavor[] = demoFlavors) {
  return flavors.map(toLibraryItem);
}

export function familySummaries(): FamilySummary[] {
  return flavorFamilyDetails.map((family) => ({
    slug: family.slug,
    name: family.name,
    count: demoFlavors.filter((flavor) => flavor.familySlug === family.slug).length,
    image: familyMedia(family.slug).image,
    accent: accentFor(family.slug),
    intro: family.intro.split(". ")[0].replace(/\.$/, "") + ".",
  }));
}

export function getFlavor(familySlug: string, id: string) {
  return demoFlavors.find((flavor) => flavor.familySlug === familySlug && flavor.id === id);
}

export function flavorsInFamily(familySlug: string) {
  return demoFlavors.filter((flavor) => flavor.familySlug === familySlug);
}

const GENERIC_WORDS = new Set(["flavor", "candy", "cream", "tea", "base", "and", "the", "sweet", "fresh", "natural", "custom", "profile"]);

/**
 * Other library flavors that share a named ingredient with this one: Lemon finds Lemon Lime,
 * Lemonade and Lemon Pound Cake; Strawberry finds nothing it doesn't name.
 */
export function flavorsSharingIngredient(flavor: Flavor, limit = 6) {
  const words = flavor.name
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((word) => word.length > 2 && !GENERIC_WORDS.has(word));
  if (words.length === 0) return [];
  const pattern = new RegExp(`\\b(${words.join("|")})`, "i");
  return demoFlavors
    .filter((other) => other.id !== flavor.id && pattern.test(other.name))
    .sort((a, b) => a.name.length - b.name.length || a.name.localeCompare(b.name))
    .slice(0, limit);
}

/** Neighbours in the same family, starting after this flavor so each page links to different ones. */
export function moreInFamily(flavor: Flavor, exclude: string[] = [], limit = 8) {
  const family = flavorsInFamily(flavor.familySlug);
  const start = family.findIndex((item) => item.id === flavor.id);
  const ordered = [...family.slice(start + 1), ...family.slice(0, Math.max(start, 0))];
  return ordered.filter((item) => !exclude.includes(item.id)).slice(0, limit);
}
