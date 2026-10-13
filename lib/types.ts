export type FlavorFormat = "Liquid" | "Powder";
export type DeclarationType = "Natural" | "Natural & Artificial" | "Artificial" | "Mixed";

export type IndustryKey =
  | "bakery"
  | "beverage"
  | "confectionery"
  | "dairy"
  | "nutraceutical"
  | "oral-care"
  | "pharmaceutical"
  | "popcorn";

export type Industry = {
  key: IndustryKey;
  name: string;
  heroImage: string;
  summary: string;
  pressurePoint: string;
  applications: string[];
  ctaLabel: string;
};

export type Flavor = {
  /** URL slug, unique across the library: /flavors/[familySlug]/[id]. */
  id: string;
  name: string;
  rawNames: string[];
  aliases: string[];
  family: string;
  familySlug: string;
  /** Every format the library lists this flavor in. */
  formats: FlavorFormat[];
  declarationType: DeclarationType;
  /** Each label declaration the library lists this flavor under (empty when the name gives none). */
  declarations: DeclarationType[];
  productTypes: string[];
  strengths: string[];
  /** Industries the product name itself points to (toothpaste, cough syrup, popcorn...). */
  signals: IndustryKey[];
  /** Signals plus the family's common applications. Drives the application filter. */
  industries: IndustryKey[];
  applications: string[];
  notes: string;
  /** The library's own note for each format, when it has one. */
  formatNotes: Partial<Record<FlavorFormat, string>>;
};

export type FlavorFilters = {
  search: string;
  /** Family slug, or "All". */
  family: string;
  format: "All" | FlavorFormat;
  declarationType: "All" | DeclarationType;
  industry: "All" | IndustryKey;
};
