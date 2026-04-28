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
  { label: "Home", href: "/" },
  { label: "Markets", href: "/industries" },
  { label: "Applications", href: "/applications" },
  { label: "Flavors", href: "/flavors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const pathways: Pathway[] = [
  {
    title: "Food & Beverage",
    subtitle: "Custom flavor solutions for beverages, dairy, syrups, and food applications.",
    image: "",
    tag: "All industries",
    icon: CupSoda,
    href: "/industries/beverage",
  },
  {
    title: "Bakery",
    subtitle: "Flavor systems for bakery mixes, fillings, icings, and finished products.",
    image: "",
    tag: "Bakery",
    icon: Factory,
    href: "/industries/bakery",
  },
  {
    title: "Confectionery",
    subtitle: "Oil soluble, water soluble, and powder flavors for candy and gummies.",
    image: "",
    tag: "Candy",
    icon: Candy,
    href: "/industries/confectionery",
  },
  {
    title: "Nutraceutical",
    subtitle: "Flavor support for powders, drink mixes, chewables, and functional products.",
    image: "",
    tag: "Functional",
    icon: Leaf,
    href: "/industries/nutraceutical",
  },
  {
    title: "Oral Care",
    subtitle: "Mint and freshness flavor systems for oral care formulas.",
    image: "",
    tag: "Freshness",
    icon: Waves,
    href: "/industries/oral-care",
  },
  {
    title: "Pharmaceutical",
    subtitle: "Practical flavor options for syrups, suspensions, powder sachets, and chewables.",
    image: "",
    tag: "Healthcare",
    icon: Pill,
    href: "/industries/pharmaceutical",
  },
];

export const strengths: Strength[] = [
  {
    title: "Low Minimum Order",
    text: "We have a low minimum order policy.",
    icon: Beaker,
  },
  {
    title: "Fast Delivery",
    text: "Order lead times are typically 3–5 business days.",
    icon: Clock3,
  },
  {
    title: "Custom Matching",
    text: "Bring your target flavor and we can build toward your profile.",
    icon: ShieldCheck,
  },
  {
    title: "Family-Owned Service",
    text: "Direct communication and responsive support from our working team.",
    icon: Truck,
  },
];

export const flavorTiles = [
  { name: "Vanilla", family: "Classic", image: "", tags: ["Bakery", "Dairy", "Syrup"] },
  { name: "Berry", family: "Fruit", image: "", tags: ["Beverage", "Gummy", "Candy"] },
  { name: "Citrus", family: "Fruit", image: "", tags: ["Beverage", "Concentrate", "Syrup"] },
  { name: "Chocolate", family: "Dessert", image: "", tags: ["Bakery", "Confectionery", "Dairy"] },
  { name: "Caramel", family: "Dessert", image: "", tags: ["Coffee", "Dairy", "Bakery"] },
  { name: "Mint", family: "Fresh", image: "", tags: ["Oral Care", "Candy", "Pharma"] },
] as const;

export const applications = [
  { name: "Beverage", image: "" },
  { name: "Bakery", image: "" },
  { name: "Confectionery", image: "" },
  { name: "Nutraceutical", image: "" },
  { name: "Oral Care", image: "" },
  { name: "Pharmaceutical", image: "" },
  { name: "Popcorn", image: "" },
  { name: "Dairy", image: "" },
  { name: "Syrup", image: "" },
  { name: "Animal Food", image: "" },
];

export const formatOptions = ["Liquid", "Powder"];
export const goalOptions = ["Flavor Match", "Masking", "Sweetness Support", "Cooling", "Top Notes"];
export const applicationOptions = [
  "Beverage",
  "Bakery",
  "Confectionery",
  "Nutraceutical",
  "Oral Care",
  "Pharmaceutical",
  "Popcorn",
  "Dairy",
  "Syrup",
  "Animal Food",
];

export const qualityBadges = ["Documentation Available", "Lot Traceability", "Specification Support", "Consistent Batch Process"];
