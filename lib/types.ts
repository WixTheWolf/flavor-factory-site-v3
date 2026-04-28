export type FlavorFormat = "Liquid" | "Powder";

export type IndustryKey =
  | "bakery"
  | "confectionery"
  | "dairy"
  | "nutraceutical"
  | "oral-care"
  | "pharmaceutical"
  | "popcorn"
  | "syrup";

export type Industry = {
  key: IndustryKey;
  name: string;
  heroImage: string;
  summary: string;
  applications: string[];
};

export type Flavor = {
  id: string;
  name: string;
  family: string;
  format: FlavorFormat;
  industries: IndustryKey[];
  applications: string[];
  profile: string[];
  notes: string;
};

export type FlavorFilters = {
  search: string;
  family: string;
  format: "All" | FlavorFormat;
  industry: "All" | IndustryKey;
};
