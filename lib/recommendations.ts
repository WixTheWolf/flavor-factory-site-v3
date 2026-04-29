import type { Flavor, IndustryKey } from "@/lib/types";

export function recommendedByIndustry(flavors: Flavor[], industry: IndustryKey) {
  return flavors
    .filter((flavor) => flavor.industries.includes(industry))
    .sort((a, b) => b.variantCount - a.variantCount)
    .slice(0, 6);
}

export function splitByFormat(flavors: Flavor[]) {
  return {
    liquids: flavors.filter((f) => f.format === "Liquid"),
    powders: flavors.filter((f) => f.format === "Powder"),
  };
}
