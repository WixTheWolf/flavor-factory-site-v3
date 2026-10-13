import { demoFlavors } from "@/data/demo-flavors";
import { flavorFamilyDetails } from "@/data/flavor-family-details";

export const SITE_STATS = {
  combinedYearsExperience: 60,
  sampleLeadTimeDays: "3-5",
  // Each liquid or powder version counts as a profile.
  flavorProfileCount: demoFlavors.reduce((total, flavor) => total + flavor.formats.length, 0),
  flavorFamilyCount: flavorFamilyDetails.length,
} as const;