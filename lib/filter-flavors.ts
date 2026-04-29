import type { Flavor, FlavorFilters } from "@/lib/types";

export function filterFlavors(flavors: Flavor[], filters: FlavorFilters) {
  const query = filters.search.trim().toLowerCase();

  return flavors.filter((flavor) => {
    const queryMatch =
      !query ||
      flavor.name.toLowerCase().includes(query) ||
      flavor.family.toLowerCase().includes(query) ||
      flavor.rawNames.some((item) => item.toLowerCase().includes(query)) ||
      flavor.aliases.some((item) => item.includes(query)) ||
      flavor.productTypes.some((item) => item.toLowerCase().includes(query)) ||
      flavor.profile.some((item) => item.toLowerCase().includes(query)) ||
      flavor.notes.toLowerCase().includes(query);

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
