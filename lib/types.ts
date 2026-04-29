export type FlavorFormat = "Liquid" | "Powder";
<<<<<<< HEAD
=======
export type DeclarationType = "Natural" | "Natural & Artificial" | "Artificial" | "Mixed";
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

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
<<<<<<< HEAD
  family: string;
  format: FlavorFormat;
=======
  rawNames: string[];
  aliases: string[];
  family: string;
  format: FlavorFormat;
  declarationType: DeclarationType;
  productTypes: string[];
  strengths: string[];
  variantCount: number;
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
  industries: IndustryKey[];
  applications: string[];
  profile: string[];
  notes: string;
};

export type FlavorFilters = {
  search: string;
  family: string;
  format: "All" | FlavorFormat;
<<<<<<< HEAD
=======
  declarationType: "All" | DeclarationType;
  productType: "All" | string;
  useCase: "All" | string;
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
  industry: "All" | IndustryKey;
};
