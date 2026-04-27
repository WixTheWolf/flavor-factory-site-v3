import type { LucideIcon } from "lucide-react";
import { Beaker, Candy, Clock3, CupSoda, Leaf, Pill, ShieldCheck, Sparkles, Truck, Waves } from "lucide-react";

export type Pathway = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  icon: LucideIcon;
};

export type Strength = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ApplicationFormat = {
  name: string;
  description: string;
  image: string;
};

export type FlavorLibraryItem = {
  name: string;
  family: string;
  format: "Liquid" | "Powder" | "Liquid & Powder";
  tags: string[];
  description: string;
  image: string;
};

export const navLinks = [
  { label: "Industries", href: "/#pathways" },
  { label: "Applications", href: "/applications" },
  { label: "Flavor Finder", href: "/#finder" },
  { label: "Flavor Library", href: "/flavors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request Samples", href: "/contact" },
];

export const pathways: Pathway[] = [
  {
    slug: "beverage",
    title: "Food & Beverage Brands",
    subtitle: "Support for product teams building new drink, syrup, and mix launches.",
    image: "/images/flavor-factory/path-food-beverage.jpg",
    tag: "Brand + co-manufacturing support",
    icon: CupSoda,
  },
  {
    slug: "bakery",
    title: "Bakery & Snack Producers",
    subtitle: "Flavor systems for baked goods, fillings, coatings, and dry blends.",
    image: "/images/flavor-factory/path-bakery.jpg",
    tag: "Sweet baked profiles",
    icon: Sparkles,
  },
  {
    slug: "confectionery",
    title: "Confectionery Companies",
    subtitle: "Candy and chocolate flavor development for established and growing lines.",
    image: "/images/flavor-factory/path-confectionery.jpg",
    tag: "Candy and novelty lines",
    icon: Candy,
  },
  {
    slug: "nutraceutical",
    title: "Nutraceutical Brands",
    subtitle: "Masking and flavor balancing for wellness products with challenging actives.",
    image: "/images/flavor-factory/path-nutraceutical.jpg",
    tag: "Masking + palatability",
    icon: Leaf,
  },
  {
    slug: "oral-care",
    title: "Oral Care Manufacturers",
    subtitle: "Cooling, mint, and freshness systems for everyday oral care formulas.",
    image: "/images/flavor-factory/path-oral-care.jpg",
    tag: "Freshness-focused",
    icon: Waves,
  },
  {
    slug: "pharmaceutical",
    title: "Pharmaceutical Teams",
    subtitle: "Reliable flavor support for liquid and powder delivery formats.",
    image: "/images/flavor-factory/path-pharmaceutical.jpg",
    tag: "Performance + consistency",
    icon: Pill,
  },
];

export const strengths: Strength[] = [
  {
    title: "Low Minimums",
    text: "Start projects without large opening orders.",
    icon: Beaker,
  },
  {
    title: "Fast Turnaround",
    text: "Quick sample timelines to keep launches moving.",
    icon: Clock3,
  },
  {
    title: "Consistent Quality",
    text: "Reliable flavor performance from first sample through production.",
    icon: ShieldCheck,
  },
  {
    title: "Family-Owned Service",
    text: "Direct communication with a team that takes ownership.",
    icon: Truck,
  },
];

export const flavorTiles = [
  { name: "Vanilla", family: "Warm / creamy", image: "/images/flavor-factory/flavor-vanilla.jpg" },
  { name: "Berry", family: "Juicy / vibrant", image: "/images/flavor-factory/flavor-berry.jpg" },
  { name: "Citrus", family: "Bright / crisp", image: "/images/flavor-factory/flavor-citrus.jpg" },
  { name: "Chocolate", family: "Rich / indulgent", image: "/images/flavor-factory/flavor-chocolate.jpg" },
  { name: "Caramel", family: "Sweet / deep", image: "/images/flavor-factory/flavor-caramel.jpg" },
  { name: "Mint", family: "Cooling / clean", image: "/images/flavor-factory/flavor-mint.jpg" },
];

export const flavorLibrary: FlavorLibraryItem[] = [
  { name: "Madagascar Vanilla", family: "Vanilla", format: "Liquid & Powder", tags: ["Dairy", "Bakery"], description: "Round vanilla body with clean finish.", image: "/images/flavor-factory/flavor-vanilla.jpg" },
  { name: "French Vanilla Custard", family: "Vanilla", format: "Liquid", tags: ["Ice cream", "RTD"], description: "Rich custard note with smooth sweetness.", image: "/images/flavor-factory/flavor-vanilla.jpg" },
  { name: "Strawberry Bright", family: "Berry", format: "Liquid & Powder", tags: ["Gummies", "Beverage"], description: "Fresh strawberry top note and juicy finish.", image: "/images/flavor-factory/flavor-berry.jpg" },
  { name: "Blueberry Jam", family: "Berry", format: "Powder", tags: ["Dry mix", "Bakery"], description: "Cooked blueberry character for baked systems.", image: "/images/flavor-factory/flavor-berry.jpg" },
  { name: "Wild Berry Blend", family: "Berry", format: "Liquid", tags: ["Syrup", "Candy"], description: "Balanced raspberry-blackberry profile.", image: "/images/flavor-factory/flavor-berry.jpg" },
  { name: "Lemon Zest", family: "Citrus", format: "Liquid & Powder", tags: ["Beverage", "Nutraceutical"], description: "Sharp lemon peel top note with clean fade.", image: "/images/flavor-factory/flavor-citrus.jpg" },
  { name: "Orange Cream", family: "Citrus", format: "Liquid", tags: ["Dairy", "Confection"], description: "Sweet orange with creamy body support.", image: "/images/flavor-factory/flavor-citrus.jpg" },
  { name: "Pink Grapefruit", family: "Citrus", format: "Powder", tags: ["Drink mix", "Functional"], description: "Crisp citrus bite for active products.", image: "/images/flavor-factory/flavor-citrus.jpg" },
  { name: "Milk Chocolate", family: "Chocolate", format: "Liquid & Powder", tags: ["Bakery", "Protein"], description: "Smooth cocoa profile with rounded sweetness.", image: "/images/flavor-factory/flavor-chocolate.jpg" },
  { name: "Dark Cocoa", family: "Chocolate", format: "Powder", tags: ["Dry blend", "Bars"], description: "Deeper cocoa character for robust systems.", image: "/images/flavor-factory/flavor-chocolate.jpg" },
  { name: "Mocha Chocolate", family: "Chocolate", format: "Liquid", tags: ["RTD", "Coffee"], description: "Chocolate profile tuned with coffee notes.", image: "/images/flavor-factory/flavor-chocolate.jpg" },
  { name: "Classic Caramel", family: "Caramel", format: "Liquid & Powder", tags: ["Bakery", "Candy"], description: "Toasted sugar profile with warm finish.", image: "/images/flavor-factory/flavor-caramel.jpg" },
  { name: "Salted Caramel", family: "Caramel", format: "Liquid", tags: ["Beverage", "Dessert"], description: "Balanced sweet-salt character for indulgent formulas.", image: "/images/flavor-factory/flavor-caramel.jpg" },
  { name: "Burnt Caramel", family: "Caramel", format: "Powder", tags: ["Dry mix", "Sauce"], description: "Darker caramel direction for depth.", image: "/images/flavor-factory/flavor-caramel.jpg" },
  { name: "Peppermint Crisp", family: "Mint", format: "Liquid & Powder", tags: ["Oral care", "Candy"], description: "Clean cooling profile with strong lift.", image: "/images/flavor-factory/flavor-mint.jpg" },
  { name: "Spearmint Smooth", family: "Mint", format: "Liquid", tags: ["Toothpaste", "Gum"], description: "Gentle mint body with long freshness.", image: "/images/flavor-factory/flavor-mint.jpg" },
  { name: "Cooling Mint", family: "Mint", format: "Powder", tags: ["Functional", "Chewables"], description: "Focused cooling support for active formats.", image: "/images/flavor-factory/flavor-mint.jpg" },
  { name: "Berry-Mint Fusion", family: "Mint", format: "Liquid", tags: ["Beverage", "Novelty"], description: "Fruit-forward mint profile for unique launches.", image: "/images/flavor-factory/flavor-mint.jpg" },
];

export const applications: ApplicationFormat[] = [
  { name: "Ready-to-Drink Beverages", description: "Liquid systems for teas, sodas, waters, and functional RTDs.", image: "/images/flavor-factory/application-beverage.jpg" },
  { name: "Powdered Drink Mixes", description: "Stable powder flavors for instant drink formats.", image: "/images/flavor-factory/application-nutraceutical.jpg" },
  { name: "Gummies & Chews", description: "Flavor impact that holds up in cooked and deposited systems.", image: "/images/flavor-factory/application-gummy.jpg" },
  { name: "Hard Candy & Confections", description: "Bright fruit, mint, and novelty options for candy lines.", image: "/images/flavor-factory/application-confectionery.jpg" },
  { name: "Bakery Fillings & Icings", description: "Warm and indulgent profiles for baked applications.", image: "/images/flavor-factory/application-bakery.jpg" },
  { name: "Dairy & Frozen Desserts", description: "Creamy flavor support for milk-based systems.", image: "/images/flavor-factory/application-dairy.jpg" },
  { name: "Popcorn Seasonings", description: "Sweet and savory flavor directions for coating blends.", image: "/images/flavor-factory/application-popcorn.jpg" },
  { name: "Sauces & Savory Systems", description: "Custom flavor profiles for sauces, marinades, and savory blends.", image: "/images/flavor-factory/application-sauces-savory.jpg" },
  { name: "Oral Care Formats", description: "Freshness profiles for toothpaste, mouthwash, and breath products.", image: "/images/flavor-factory/application-oral-care.jpg" },
  { name: "Syrups & Suspensions", description: "Taste support for pharmaceutical and wellness liquids.", image: "/images/flavor-factory/application-pharmaceutical.jpg" },
];

export const formatOptions = ["Liquid", "Powder"];
export const goalOptions = ["Masking", "Sweetness Support", "Cooling", "Top Notes", "Creamy Body", "Fruit Profiles"];
export const applicationOptions = [
  "RTD Beverages",
  "Powder Drink Mixes",
  "Gummies",
  "Hard Candy",
  "Bakery Mixes",
  "Dairy",
  "Sauces",
  "Oral Care",
  "Syrups",
  "Chewables",
];

export const qualityBadges = ["GMP", "ISO 22000", "Halal", "Kosher", "FDA Registered"];
