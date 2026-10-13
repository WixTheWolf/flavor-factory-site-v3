import { demoFlavors } from "@/data/demo-flavors";
import { flavorFamilyDetails } from "@/data/flavor-family-details";

export const SITE_STATS = {
  combinedYearsExperience: 60,
  sampleLeadTimeDays: "3-5",
  // Flavors in the library; a flavor offered in liquid and powder counts once.
  flavorCount: demoFlavors.length,
  flavorFamilyCount: flavorFamilyDetails.length,
} as const;