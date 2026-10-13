import type { DeclarationType, FlavorFormat, IndustryKey } from "@/lib/types";

// Kept apart from lib/flavor-library so client components can use these without bundling the catalog.

/** What the library's client components need for one flavor: no notes, so the page bundle stays small. */
export type LibraryItem = {
  id: string;
  name: string;
  family: string;
  familySlug: string;
  formats: FlavorFormat[];
  declarations: DeclarationType[];
  industries: IndustryKey[];
  href: string;
  swatch: [string, string];
  text: string;
};

export type FamilySummary = {
  slug: string;
  name: string;
  count: number;
  image: string;
  accent: string;
  intro: string;
};

export const INDUSTRY_LABELS: Record<IndustryKey, string> = {
  bakery: "Bakery",
  beverage: "Beverage",
  confectionery: "Confectionery",
  dairy: "Dairy & frozen",
  nutraceutical: "Nutraceutical",
  "oral-care": "Oral care",
  pharmaceutical: "Pharmaceutical",
  popcorn: "Popcorn & snacks",
};

export const DECLARATION_LABELS: Record<DeclarationType, string> = {
  Natural: "Natural",
  "Natural & Artificial": "N&A",
  Artificial: "Artificial",
  Mixed: "Mixed",
};

export function flavorHref(flavor: { id: string; familySlug: string }) {
  return `/flavors/${flavor.familySlug}/${flavor.id}`;
}
