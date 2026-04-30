import type { Flavor, IndustryKey } from "@/lib/types";

const industryFamilyPriority: Record<IndustryKey, string[]> = {
  bakery: ["Vanilla & Cream", "Chocolate & Brown Notes", "Orchard Fruit", "Stone Fruit", "Spice & Warmth"],
  confectionery: ["Candy & Confectionery", "Berry", "Citrus", "Tropical", "Chocolate & Brown Notes"],
  dairy: ["Vanilla & Cream", "Berry", "Chocolate & Brown Notes", "Stone Fruit", "Tropical"],
  nutraceutical: ["Berry", "Citrus", "Tropical", "Vanilla & Cream", "Mint & Cooling"],
  "oral-care": ["Mint & Cooling", "Spice & Warmth", "Botanical & Tea", "Citrus", "Custom & Signature"],
  pharmaceutical: ["Berry", "Cherry", "Citrus", "Mint & Cooling", "Custom & Signature"],
  popcorn: ["Savory & Culinary", "Chocolate & Brown Notes", "Dessert & Bakery", "Nut & Praline"],
  syrup: ["Coffee & Beverage", "Citrus", "Berry", "Tropical", "Vanilla & Cream"],
  savory: ["Savory & Culinary", "Spice & Warmth", "Botanical & Tea", "Citrus"],
};

export function recommendedByIndustry(flavors: Flavor[], industry: IndustryKey) {
  const priority = industryFamilyPriority[industry] ?? [];

  return flavors
    .filter((flavor) => flavor.industries.includes(industry))
    .sort((a, b) => {
      const familyScore = (priority.indexOf(a.family) === -1 ? 99 : priority.indexOf(a.family)) - (priority.indexOf(b.family) === -1 ? 99 : priority.indexOf(b.family));
      if (familyScore !== 0) return familyScore;
      return b.variantCount - a.variantCount;
    })
    .slice(0, 6);
}

export function splitByFormat(flavors: Flavor[]) {
  return {
    liquids: flavors.filter((f) => f.format === "Liquid"),
    powders: flavors.filter((f) => f.format === "Powder"),
  };
}
