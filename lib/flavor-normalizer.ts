import { rawFlavorProducts } from "@/data/raw-flavor-products";
import type { DeclarationType, Flavor, FlavorFormat, IndustryKey } from "@/lib/types";

const declarationMatchers: Array<{ type: DeclarationType; patterns: RegExp[] }> = [
  { type: "Natural & Artificial", patterns: [/\bN&A\b/, /\bNAT\s*&\s*ART\b/, /\bNATURAL\s*&\s*ARTIFICIAL\b/] },
  { type: "Natural", patterns: [/\bNAT\b/, /\bNATURAL\b/, /\bPURE\b/] },
  { type: "Artificial", patterns: [/\bART\b/, /\bARTIFICIAL\b/] },
];

const productTypeMatchers = [
  "OIL",
  "EMULSION",
  "EXTRACT",
  "BASE",
  "CONCENTRATE",
  "CONC",
  "POWDER",
  "BLEND",
] as const;

const familyMatchers: Array<{ family: string; patterns: RegExp[] }> = [
  { family: "Citrus", patterns: [/ORANGE|LEMON|LIME|GRAPEFRUIT|CITRUS/i] },
  { family: "Berry", patterns: [/STRAWBERRY|BLUEBERRY|RASPBERRY|BLACKBERRY|BERRY|CHERRY/i] },
  { family: "Vanilla", patterns: [/VANILLA|VANILLIN/i] },
  { family: "Chocolate", patterns: [/CHOCOLATE|COCOA|MOCHA/i] },
  { family: "Mint", patterns: [/MINT|PEPPERMINT|SPEARMINT/i] },
  { family: "Tropical", patterns: [/MANGO|PINEAPPLE|COCONUT|TROPICAL|BANANA|PASSION ?FRUIT/i] },
  { family: "Nut", patterns: [/ALMOND|HAZELNUT|PECAN|NUT/i] },
  { family: "Spice", patterns: [/CINNAMON|SPICE|GINGER|CLOVE/i] },
  { family: "Savory", patterns: [/CHICKEN|BEEF|BBQ|RANCH|TOMATO|SAVORY|BROTH/i] },
  { family: "Dessert", patterns: [/CARAMEL|BROWN SUGAR|BUTTERSCOTCH|MARSHMALLOW|CHEESECAKE|CUSTARD|CREAM/i] },
  { family: "Beverage", patterns: [/COLA|SODA|ROOT BEER|FRUIT PUNCH|PUNCH|ENERGY DRINK/i] },
];

type ParsedFlavor = {
  rawName: string;
  displayName: string;
  family: string;
  format: FlavorFormat;
  declarationType: DeclarationType;
  productType: string;
  strength?: string;
  industries: IndustryKey[];
  applications: string[];
};

function titleCase(input: string) {
  return input
    .toLowerCase()
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .replace(/\bBbq\b/g, "BBQ");
}

function getDeclarationType(raw: string): DeclarationType {
  const matches = declarationMatchers
    .filter(({ patterns }) => patterns.some((pattern) => pattern.test(raw)))
    .map((item) => item.type);

  if (matches.length === 0) return "Mixed";
  if (matches.includes("Natural") && matches.includes("Artificial")) return "Natural & Artificial";
  return matches[0];
}

function getProductType(raw: string) {
  const found = productTypeMatchers.find((item) => new RegExp(`\\b${item}\\b`, "i").test(raw));
  if (!found) return "Blend";
  if (found === "CONC") return "Concentrate";
  return titleCase(found);
}

function getFormat(raw: string, productType: string): FlavorFormat {
  if (/\bPOWDER\b/i.test(raw) || productType === "Powder") return "Powder";
  return "Liquid";
}

function getStrength(raw: string) {
  const match = raw.match(/\b(1-\d+|10X|[0-9]+-FOLD)\b/i);
  return match?.[1]?.toUpperCase();
}

function cleanDisplayName(raw: string) {
  const cleaned = raw
    .replace(/\([^)]*\)/g, " ")
    .replace(/\b(N&A|NAT|ART|NATURAL|ARTIFICIAL|PURE|WONF)\b/gi, " ")
    .replace(/\b(FLAVOR|FLAVOUR|OIL|EMULSION|EXTRACT|BASE|CONCENTRATE|CONC|POWDER|BLEND)\b/gi, " ")
    .replace(/\b(1-\d+|10X|[0-9]+-FOLD)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  return titleCase(cleaned || raw);
}

function normalizeGroupingName(displayName: string) {
  return displayName
    .toLowerCase()
    .replace(/\b(dark|sweet|fresh|cool|toasted|pure|natural)\b/g, " ")
    .replace(/\b(berry masking|masking)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getFamily(raw: string, displayName: string) {
  const source = `${raw} ${displayName}`;
  const match = familyMatchers.find(({ patterns }) => patterns.some((pattern) => pattern.test(source)));
  return match?.family ?? "Other";
}

function getUseCases(raw: string, family: string, format: FlavorFormat) {
  const source = `${raw} ${family}`.toLowerCase();
  const industries = new Set<IndustryKey>();
  const applications = new Set<string>();

  if (/(bakery|cheesecake|pancake|brown sugar|vanilla|cinnamon)/.test(source)) {
    industries.add("bakery");
    applications.add("Bakery");
  }
  if (/(gummy|cotton candy|marshmallow|confection|chocolate|candy)/.test(source)) {
    industries.add("confectionery");
    applications.add("Confectionery");
  }
  if (/(cream|yogurt|milk|dairy)/.test(source)) {
    industries.add("dairy");
    applications.add("Dairy");
  }
  if (/(nutraceutical|protein|vitamin|electrolyte|masking)/.test(source)) {
    industries.add("nutraceutical");
    applications.add("Nutraceutical");
  }
  if (/(toothpaste|mouth wash|oral care|peppermint|spearmint|mint)/.test(source)) {
    industries.add("oral-care");
    applications.add("Oral Care");
  }
  if (/(medicated|cough syrup|pharma|pharmaceutical)/.test(source)) {
    industries.add("pharmaceutical");
    applications.add("Pharmaceutical");
  }
  if (/(popcorn|kettle corn|butter popcorn|cheddar popcorn)/.test(source)) {
    industries.add("popcorn");
    applications.add("Popcorn");
  }
  if (/(syrup|cola|root beer|cream soda|energy drink|beverage|punch)/.test(source)) {
    industries.add("syrup");
    applications.add("Beverage & Syrup");
  }
  if (/(savory|bbq|chicken|beef|ranch|tomato)/.test(source)) {
    applications.add("Savory");
  }

  if (industries.size === 0) industries.add(format === "Powder" ? "nutraceutical" : "bakery");
  if (applications.size === 0) applications.add(format === "Powder" ? "Powder Blend" : "Beverage");

  return { industries: [...industries], applications: [...applications] };
}

function parseRawFlavor(rawName: string): ParsedFlavor {
  const declarationType = getDeclarationType(rawName);
  const productType = getProductType(rawName);
  const format = getFormat(rawName, productType);
  const strength = getStrength(rawName);
  const displayName = cleanDisplayName(rawName);
  const family = getFamily(rawName, displayName);
  const { industries, applications } = getUseCases(rawName, family, format);

  return { rawName, displayName, family, format, declarationType, productType, strength, industries, applications };
}

function slugify(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function buildFlavorCatalog(rawRows = rawFlavorProducts): Flavor[] {
  const parsed = rawRows.map(parseRawFlavor);
  const grouped = new Map<string, ParsedFlavor[]>();

  for (const item of parsed) {
    const normalizedName = normalizeGroupingName(item.displayName) || item.displayName.toLowerCase();
    const key = `${normalizedName}|${item.family}|${item.format}`;
    grouped.set(key, [...(grouped.get(key) ?? []), item]);
  }

  return [...grouped.entries()].map(([key, variants]) => {
    const [, family, format] = key.split("|");
    const name = variants
      .map((v) => v.displayName)
      .sort((a, b) => a.length - b.length)[0];
    const declarationSet = new Set(variants.map((item) => item.declarationType));
    const declarationType = declarationSet.size === 1 ? variants[0].declarationType : "Mixed";
    const productTypes = [...new Set(variants.map((item) => item.productType))];
    const strengths = [...new Set(variants.map((item) => item.strength).filter(Boolean) as string[])];
    const industries = [...new Set(variants.flatMap((item) => item.industries))] as IndustryKey[];
    const applications = [...new Set(variants.flatMap((item) => item.applications))];
    const curatedApplications = applications.slice(0, 3);
    const curatedIndustries = industries.slice(0, 3) as IndustryKey[];

    return {
      id: slugify(`${name}-${format}`),
      name,
      family,
      format: format as FlavorFormat,
      declarationType,
      productTypes,
      strengths,
      industries: curatedIndustries,
      applications: curatedApplications,
      rawNames: variants.map((item) => item.rawName),
      aliases: variants.map((item) => item.displayName.toLowerCase()),
      variantCount: variants.length,
      profile: [family.toLowerCase(), format.toLowerCase(), ...productTypes.map((p) => p.toLowerCase())].slice(0, 4),
      notes: `${name} in ${format.toLowerCase()} format with ${declarationType.toLowerCase()} declaration${strengths.length ? ` and ${strengths.join(", ")} strengths` : ""}.`,
    } satisfies Flavor;
  }).sort((a, b) => a.name.localeCompare(b.name));
}
