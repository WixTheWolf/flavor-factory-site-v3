import type { Flavor, FlavorFilters } from "@/lib/types";

const industryLabels: Record<string, string> = {
  bakery: "bakery baked goods",
  beverage: "beverage drink soda tea coffee lemonade punch",
  confectionery: "confectionery candy sweets",
  dairy: "dairy yogurt ice cream milk",
  nutraceutical: "nutraceutical functional protein vitamin electrolyte supplement",
  "oral-care": "oral care oralcare mouthwash mouth wash toothpaste breath",
  pharmaceutical: "pharmaceutical pharma medicated cough syrup",
  popcorn: "popcorn kettle corn snack",
  syrup: "syrup beverage drinks soda fountain",
  savory: "savory culinary seasoning sauce snack",
};

const queryAliases: Record<string, string[]> = {
  mouthwash: ["mouth wash", "oral care", "toothpaste", "mint"],
  oralcare: ["oral care", "mouthwash", "toothpaste"],
  beverage: ["drink", "soda", "tea", "coffee", "lemonade", "punch"],
  gummy: ["gummies", "gummy bear"],
  gummies: ["gummy", "gummy bear"],
  syrup: ["beverage", "soda", "cola", "root beer", "fountain"],
  custom: ["signature", "match", "masking", "proprietary"],
  berry: ["strawberry", "blueberry", "raspberry", "blackberry", "black currant", "cranberry"],
  citrus: ["orange", "lemon", "lime", "grapefruit", "yuzu", "mandarin"],
};

function normalizeSearch(value: string) {
  return value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
}

function compact(value: string) {
  return normalizeSearch(value).replace(/\s+/g, "");
}

function searchableText(flavor: Flavor) {
  return normalizeSearch(
    [
      flavor.name,
      flavor.family,
      flavor.format,
      flavor.declarationType,
      flavor.notes,
      ...flavor.rawNames,
      ...flavor.aliases,
      ...flavor.productTypes,
      ...flavor.profile,
      ...flavor.applications,
      ...flavor.industries,
      ...flavor.industries.map((industry) => industryLabels[industry] ?? industry),
    ].join(" "),
  );
}

export function filterFlavors(flavors: Flavor[], filters: FlavorFilters) {
  const query = normalizeSearch(filters.search);
  const compactQuery = compact(filters.search);
  const expandedQueries = query
    ? [query, ...(queryAliases[compactQuery] ?? []), ...(queryAliases[query] ?? [])].map(normalizeSearch)
    : [];

  return flavors.filter((flavor) => {
    const text = searchableText(flavor);
    const compactText = text.replace(/\s+/g, "");
    const queryMatch = !query || expandedQueries.some((item) => text.includes(item) || compactText.includes(compact(item)));

    const familyMatch = filters.family === "All" || flavor.family === filters.family;
    const formatMatch = filters.format === "All" || flavor.format === filters.format;
    const industryMatch = filters.industry === "All" || flavor.industries.includes(filters.industry);
    const declarationMatch = filters.declarationType === "All" || flavor.declarationType === filters.declarationType;
    const productTypeMatch = filters.productType === "All" || flavor.productTypes.includes(filters.productType);
    const useCaseMatch =
      filters.useCase === "All" || flavor.industries.includes(filters.useCase as Flavor["industries"][number]) || flavor.applications.includes(filters.useCase);

    return queryMatch && familyMatch && formatMatch && industryMatch && declarationMatch && productTypeMatch && useCaseMatch;
  });
}
