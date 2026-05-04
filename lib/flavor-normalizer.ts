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
  { family: "Citrus", patterns: [/ORANGE|LEMON|LIME|GRAPEFRUIT|CITRUS|YUZU|MANDARIN|CALAMANSI|TANGERINE/i] },
  { family: "Berry", patterns: [/STRAWBERRY|BLUEBERRY|RASPBERRY|BLACKBERRY|BLACK CURRANT|CRANBERRY|BERRY|CHERRY|ACAI|POMEGRANATE/i] },
  { family: "Tropical", patterns: [/MANGO|PINEAPPLE|COCONUT|TROPICAL|BANANA|PASSION ?FRUIT|GUAVA|PINA|PIÑA|DRAGON FRUIT|LYCHEE|KIWI|PAPAYA|TAMARIND/i] },
  { family: "Orchard Fruit", patterns: [/APPLE|PEAR/i] },
  { family: "Stone Fruit", patterns: [/PEACH|APRICOT|PLUM/i] },
  { family: "Melons", patterns: [/WATERMELON|CANTALOUPE|HONEYDEW|MELON/i] },
  { family: "Vanilla & Cream", patterns: [/VANILLA|VANILLIN|CREAM|YOGURT|CUSTARD|CHEESECAKE|BAVARIAN|COOKIES/i] },
  { family: "Chocolate & Brown Notes", patterns: [/CHOCOLATE|COCOA|MOCHA|CARAMEL|BROWN SUGAR|MAPLE|BUTTERSCOTCH|TOFFEE|BROWNIE|HONEY/i] },
  { family: "Coffee & Beverage", patterns: [/COFFEE|ESPRESSO|COLD BREW|COLA|SODA|ROOT BEER|ENERGY DRINK|PUNCH|GINGER BEER|HORCHATA/i] },
  { family: "Mint & Cooling", patterns: [/MINT|PEPPERMINT|SPEARMINT|WINTERGREEN|COOL|MOUTH ?WASH/i] },
  { family: "Nut & Praline", patterns: [/ALMOND|HAZELNUT|PECAN|PEANUT|PISTACHIO|PRALINE|WALNUT|MACADAMIA|SESAME|NUT/i] },
  { family: "Spice & Warmth", patterns: [/CINNAMON|SPICE|GINGER|CLOVE|CHAI/i] },
  { family: "Dessert & Bakery", patterns: [/MARSHMALLOW|BAKERY|PANCAKE|BUTTER|COOKIE|TIRAMISU|RED VELVET|BIRTHDAY CAKE/i] },
  { family: "Candy & Confectionery", patterns: [/GUMMY|COTTON CANDY|BUBBLE GUM|BLUE RASPBERRY|SOUR|CANDY|CONFECTION/i] },
  { family: "Savory & Culinary", patterns: [/CHICKEN|BEEF|BBQ|RANCH|TOMATO|SAVORY|BROTH|GARLIC|JALAPENO|CHEDDAR|CHEESE|NACHO|BASIL|WASABI|PAPRIKA|MISO/i] },
  { family: "Botanical & Tea", patterns: [/TEA|MATCHA|BOTANICAL|HERBAL|HIBISCUS|LAVENDER|JASMINE|ROSE|ELDERFLOWER|CITRUS PEEL/i] },
  { family: "Custom & Signature", patterns: [/MASKING|CUSTOM|MATCH|SIGNATURE/i] },
];

const familyNotes: Record<string, string> = {
  Citrus: "Bright citrus lift with juicy top notes for beverages, confectionery, bakery fillings, and refreshing systems.",
  Berry: "Recognizable sweet-tart berry character for confectionery, beverages, dairy, nutraceuticals, and masking work.",
  Tropical: "Juicy tropical direction with sunny acidity and ripe fruit impact for drinks, confectionery, syrups, and wellness products.",
  "Orchard Fruit": "Clean apple and pear profiles that can read fresh, candied, baked, or syrup-ready.",
  "Stone Fruit": "Soft peach, apricot, plum, and cherry notes with rounded sweetness and light tart balance.",
  Melons: "Fresh melon sweetness for candy, beverage, and light dairy applications.",
  "Vanilla & Cream": "Smooth creamy sweetness for bakery, dairy, protein, beverage, and indulgent confectionery concepts.",
  "Chocolate & Brown Notes": "Cocoa, caramel, maple, toffee, and roasted brown notes for depth, sweetness, and warmth.",
  "Coffee & Beverage": "Coffeehouse, soda, punch, and syrup-style profiles built for beverage development.",
  "Mint & Cooling": "Clean cooling character for oral care, breath-freshening, confectionery, and functional formats.",
  "Nut & Praline": "Toasted nut, praline, and creamy nut profiles for bakery, chocolate, dairy, and beverage systems.",
  "Spice & Warmth": "Warm spice notes for bakery, seasonal, tea, and comfort-forward profiles.",
  "Dessert & Bakery": "Dessert-inspired sweetness for bakery, dairy, confectionery, and indulgent limited-time ideas.",
  "Candy & Confectionery": "Playful candy notes for chewy candy, hard candy, syrups, and high-impact novelty profiles.",
  "Savory & Culinary": "Culinary flavor systems for snacks, popcorn, seasonings, sauces, and savory bases.",
  "Botanical & Tea": "Botanical, herbal, and tea-inspired profiles for premium beverages and wellness-positioned products.",
  "Custom & Signature": "Custom matching, masking, and proprietary flavor directions shaped around a target brief.",
};

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

function getAliases(displayName: string, rawNames: string[], family: string, applications: string[]) {
  const aliases = new Set<string>();
  const source = `${displayName} ${rawNames.join(" ")} ${family} ${applications.join(" ")}`.toLowerCase();

  aliases.add(displayName.toLowerCase());
  aliases.add(family.toLowerCase());
  applications.forEach((item) => aliases.add(item.toLowerCase()));

  if (/mouth ?wash/.test(source)) aliases.add("mouthwash");
  if (/oral care|toothpaste|mint|wintergreen/.test(source)) aliases.add("oral care");
  if (/syrup|cola|soda|punch|beverage|lemonade|cold brew|espresso|tea|ginger beer|horchata/.test(source)) aliases.add("beverage");
  if (/gummy/.test(source)) aliases.add("gummy");
  if (/popcorn|kettle corn|cheddar/.test(source)) aliases.add("popcorn");
  if (/masking|custom|match|signature/.test(source)) aliases.add("custom");
  if (/protein|vitamin|electrolyte|nutraceutical/.test(source)) aliases.add("functional");

  return [...aliases];
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

  if (/(bakery|cheesecake|pancake|brown sugar|vanilla|cinnamon|cookie|tiramisu|red velvet|birthday cake)/.test(source)) {
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
  if (/(popcorn|kettle corn|butter popcorn|cheddar popcorn|caramel popcorn|white cheddar)/.test(source)) {
    industries.add("popcorn");
    applications.add("Popcorn");
  }
  if (/(syrup|cola|root beer|cream soda|energy drink|beverage|punch|lemonade|cold brew|espresso|tea|ginger beer|horchata|hibiscus|elderflower)/.test(source)) {
    industries.add("syrup");
    applications.add("Beverage & Syrup");
  }
  if (/(savory|bbq|chicken|beef|ranch|tomato|garlic|jalapeno|cheese|nacho|basil|wasabi|paprika|miso)/.test(source)) {
    industries.add("savory");
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

export function buildFlavorCatalog(rawRows: readonly string[] = rawFlavorProducts): Flavor[] {
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
      aliases: getAliases(name, variants.map((item) => item.rawName), family, curatedApplications),
      variantCount: variants.length,
      profile: [
        family.toLowerCase(),
        format.toLowerCase(),
        declarationType.toLowerCase(),
        ...productTypes.map((p) => p.toLowerCase()),
        ...curatedApplications.map((item) => item.toLowerCase()),
      ].slice(0, 8),
      notes: familyNotes[family] ?? "Representative profile with custom variants available for the target application.",
    } satisfies Flavor;
  }).sort((a, b) => a.name.localeCompare(b.name));
}
