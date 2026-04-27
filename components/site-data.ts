import type { LucideIcon } from "lucide-react";
import { Beaker, Candy, Clock3, CupSoda, Factory, Leaf, Pill, ShieldCheck, Truck, Waves } from "lucide-react";

export type Pathway = {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  icon: LucideIcon;
  href: string;
};

export type Strength = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const navLinks = [
  { label: "Markets", href: "/industries" },
  { label: "Applications", href: "/applications" },
  { label: "Flavor Finder", href: "/#finder" },
  { label: "Flavor Library", href: "/flavors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Quality", href: "/#quality" },
];

export const pathways: Pathway[] = [
  {
    title: "Food & Beverage Brands",
    subtitle: "Support for beverage teams, mix houses, and food brands that need dependable flavor systems.",
    image: "/images/flavor-factory/path-food-beverage.jpg",
    tag: "Brand manufacturing",
    icon: CupSoda,
    href: "/industries/beverage",
  },
  {
    title: "Bakery Manufacturers",
    subtitle: "Flavor development for bakery producers building consistent flavor in mixes, fillings, and finished goods.",
    image: "/images/flavor-factory/path-bakery.jpg",
    tag: "Baked goods",
    icon: Factory,
    href: "/industries/bakery",
  },
  {
    title: "Confectionery Makers",
    subtitle: "Built for candy and confectionery companies that need fruit, chocolate, mint, and novelty profiles.",
    image: "/images/flavor-factory/path-confectionery.jpg",
    tag: "Candy programs",
    icon: Candy,
    href: "/industries/confectionery",
  },
  {
    title: "Nutraceutical Brands",
    subtitle: "Flavor support for teams developing functional products and active nutrition lines.",
    image: "/images/flavor-factory/path-nutraceutical.jpg",
    tag: "Functional products",
    icon: Leaf,
    href: "/industries/nutraceutical",
  },
  {
    title: "Oral Care Companies",
    subtitle: "Freshness and mint systems for oral care formulas where clean finish and consistency matter.",
    image: "/images/flavor-factory/path-oral-care.jpg",
    tag: "Freshness systems",
    icon: Waves,
    href: "/industries/oral-care",
  },
  {
    title: "Pharma Product Teams",
    subtitle: "Reliable liquid and powder flavor options for pharmaceutical and adjacent wellness programs.",
    image: "/images/flavor-factory/path-pharmaceutical.jpg",
    tag: "Regulated categories",
    icon: Pill,
    href: "/industries/pharmaceutical",
  },
];

export const strengths: Strength[] = [
  {
    title: "Low Minimums",
    text: "Start projects without oversized commitments.",
    icon: Beaker,
  },
  {
    title: "Fast Turnaround",
    text: "Quick sample timelines to keep launches moving.",
    icon: Clock3,
  },
  {
    title: "Consistent Quality",
    text: "Reliable flavor performance from sample to production.",
    icon: ShieldCheck,
  },
  {
    title: "Family-Owned Service",
    text: "Direct communication and accountability from a working team.",
    icon: Truck,
  },
];

export const flavorTiles = [
  { name: "Vanilla", family: "Warm / creamy", image: "/images/flavor-factory/flavor-vanilla.jpg", tags: ["Dairy", "Bakery", "Custard"] },
  { name: "Berry", family: "Juicy / vibrant", image: "/images/flavor-factory/flavor-berry.jpg", tags: ["Beverage", "Gummy", "Candy"] },
  { name: "Citrus", family: "Bright / crisp", image: "/images/flavor-factory/flavor-citrus.jpg", tags: ["RTD", "Sparkling", "Concentrate"] },
  { name: "Chocolate", family: "Rich / indulgent", image: "/images/flavor-factory/flavor-chocolate.jpg", tags: ["Bakery", "Shake", "Confection"] },
  { name: "Caramel", family: "Sweet / deep", image: "/images/flavor-factory/flavor-caramel.jpg", tags: ["Coffee", "Dairy", "Dessert"] },
  { name: "Mint", family: "Cooling / clean", image: "/images/flavor-factory/flavor-mint.jpg", tags: ["Oral Care", "Hard Candy", "Chewable"] },
] as const;

export const applications = [
  { name: "Ready-to-Drink Beverages", image: "/images/flavor-factory/application-beverage.jpg" },
  { name: "Bakery Mixes & Fillings", image: "/images/flavor-factory/application-bakery.jpg" },
  { name: "Confectionery Pieces", image: "/images/flavor-factory/application-confectionery.jpg" },
  { name: "Nutraceutical Powders", image: "/images/flavor-factory/application-nutraceutical.jpg" },
  { name: "Oral Care Products", image: "/images/flavor-factory/application-oral-care.jpg" },
  { name: "Pharmaceutical Syrups", image: "/images/flavor-factory/application-pharmaceutical.jpg" },
  { name: "Gummies & Chews", image: "/images/flavor-factory/application-gummy.jpg" },
  { name: "Snack Seasonings", image: "/images/flavor-factory/application-popcorn.jpg" },
  { name: "Dairy Systems", image: "/images/flavor-factory/application-dairy.jpg" },
  { name: "Sauces & Savory Bases", image: "/images/flavor-factory/application-sauces-savory.jpg" },
];

export const formatOptions = ["Liquid", "Powder"];
export const goalOptions = ["Masking", "Sweetness Support", "Cooling", "Top Notes", "Creamy Body", "Fruit Profiles"];
export const applicationOptions = [
  "RTD Beverages",
  "Dry Mixes",
  "Gummies",
  "Hard Candy",
  "Bakery Fillings",
  "Dairy Bases",
  "Snack Seasonings",
  "Syrups",
  "Chewables",
  "Oral Care",
];

export const qualityBadges = ["GMP", "ISO 22000", "Halal", "Kosher", "FDA Registered"];
