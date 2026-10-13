import type { Flavor, IndustryKey } from "@/lib/types";

const industryFamilyPriority: Record<IndustryKey, string[]> = {
  bakery: ["vanilla-cream", "chocolate-brown-notes", "orchard-fruit", "stone-fruit", "spice-warmth", "dessert-bakery"],
  beverage: ["citrus", "berry", "tropical", "coffee-beverage", "botanical-tea"],
  confectionery: ["candy-confectionery", "berry", "citrus", "tropical", "chocolate-brown-notes"],
  dairy: ["vanilla-cream", "berry", "chocolate-brown-notes", "stone-fruit", "tropical"],
  nutraceutical: ["custom-signature", "berry", "citrus", "tropical", "vanilla-cream", "mint-cooling"],
  "oral-care": ["mint-cooling", "spice-warmth", "botanical-tea", "citrus", "custom-signature"],
  pharmaceutical: ["custom-signature", "berry", "stone-fruit", "citrus", "mint-cooling"],
  popcorn: ["savory-culinary", "chocolate-brown-notes", "dessert-bakery", "nut-praline"],
};

/**
 * Starting points for an industry: flavors whose own product name points to it first
 * (toothpaste mint for oral care), then the families most used there.
 */
export function recommendedByIndustry(flavors: Flavor[], industry: IndustryKey, limit = 8) {
  const priority = industryFamilyPriority[industry] ?? [];
  const rank = (flavor: Flavor) => {
    const familyRank = priority.indexOf(flavor.familySlug);
    return (flavor.signals.includes(industry) ? 0 : 100) + (familyRank === -1 ? 99 : familyRank);
  };

  return flavors
    .filter((flavor) => flavor.industries.includes(industry))
    .sort((a, b) => rank(a) - rank(b) || b.rawNames.length - a.rawNames.length || a.name.localeCompare(b.name))
    .slice(0, limit);
}
