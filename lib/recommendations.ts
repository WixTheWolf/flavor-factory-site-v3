import type { Flavor, IndustryKey } from "@/lib/types";

export function recommendedByIndustry(flavors: Flavor[], industry: IndustryKey) {
<<<<<<< HEAD
  return flavors.filter((flavor) => flavor.industries.includes(industry)).slice(0, 6);
=======
  return flavors
    .filter((flavor) => flavor.industries.includes(industry))
    .sort((a, b) => b.variantCount - a.variantCount)
    .slice(0, 6);
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
}

export function splitByFormat(flavors: Flavor[]) {
  return {
    liquids: flavors.filter((f) => f.format === "Liquid"),
    powders: flavors.filter((f) => f.format === "Powder"),
  };
}
