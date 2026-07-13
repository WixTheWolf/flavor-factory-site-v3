import { demoFlavors } from "@/data/demo-flavors";
import { flavorFamilyDetails } from "@/data/flavor-family-details";

export const SITE_STATS = {
  combinedYearsExperience: 60,
  sampleLeadTimeDays: "3-5",
  flavorProfileCount: demoFlavors.length,
  flavorFamilyCount: flavorFamilyDetails.length,
} as const;