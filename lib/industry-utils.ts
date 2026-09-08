import { industries } from "@/data/industries";
import type { IndustryKey } from "@/lib/types";

const industryKeys = new Set(industries.map((item) => item.key));

export function normalizeIndustryKey(value: string): IndustryKey | "" {
  const compact = value.toLowerCase().trim().replace(/\+/g, "-").replace(/_/g, "-");
  const slug = compact.replace(/\s+/g, "-");

  if (industryKeys.has(slug as IndustryKey)) {
    return slug as IndustryKey;
  }

  const byName = industries.find(
    (item) =>
      item.name.toLowerCase() === compact ||
      item.name.toLowerCase().replace(/\s+/g, "-") === slug ||
      item.key.replace(/-/g, " ") === compact.replace(/-/g, " "),
  );

  return byName?.key ?? "";
}

export function industryLabel(value: string) {
  const key = normalizeIndustryKey(value);
  if (!key) return value.trim();
  return industries.find((item) => item.key === key)?.name ?? value.trim();
}