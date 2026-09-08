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
  id: string;
  name: string;
  rawNames: string[];
  aliases: string[];
  family: string;
  format: FlavorFormat;
  declarationType: DeclarationType;
  productTypes: string[];
  strengths: string[];
  variantCount: number;
  industries: IndustryKey[];
  applications: string[];
  profile: string[];
  notes: string;
};

export type FlavorFilters = {
  search: string;
  family: string;
  format: "All" | FlavorFormat;
  declarationType: "All" | DeclarationType;
  productType: "All" | string;
  useCase: "All" | string;
  industry: "All" | IndustryKey;
};
