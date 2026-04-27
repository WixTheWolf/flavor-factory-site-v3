import type { LucideIcon } from "lucide-react";
import { Beaker, Candy, Clock3, CupSoda, Leaf, Pill, ShieldCheck, Sparkles, Truck, Waves } from "lucide-react";

export type Pathway = {
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

export const navLinks = [
  { label: "Industries", href: "/#pathways" },
  { label: "Flavor Finder", href: "/#finder" },
  { label: "Why Us", href: "/#strengths" },
  { label: "Flavor Library", href: "/flavors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Quality", href: "/#quality" },
  { label: "Request Samples", href: "/contact" },
];

export const pathways: Pathway[] = [
  {
    title: "Food & Beverage",
    subtitle: "Flavor systems for drinks, mixes, syrups, and beverage innovation.",
    image: "/images/flavor-factory/path-food-beverage.jpg",
    tag: "Fast-moving categories",
    icon: CupSoda,
  },
  {
    title: "Bakery",
    subtitle: "Warm, indulgent, and baked-good-ready flavor development.",
    image: "/images/flavor-factory/path-bakery.jpg",
    tag: "Comfort + craveability",
    icon: Sparkles,
  },
  {
    title: "Confectionery",
    subtitle: "Candy, chocolate, fruit, and novelty flavor experiences.",
    image: "/images/flavor-factory/path-confectionery.jpg",
    tag: "Fun, bold, memorable",
    icon: Candy,
  },
  {
    title: "Nutraceutical",
    subtitle: "Functional flavor systems that help products taste better.",
    image: "/images/flavor-factory/path-nutraceutical.jpg",
    tag: "Masking + support",
    icon: Leaf,
  },
  {
    title: "Oral Care",
    subtitle: "Mint, cooling, freshness, and clean sensory design.",
    image: "/images/flavor-factory/path-oral-care.jpg",
    tag: "Freshness systems",
    icon: Waves,
  },
  {
    title: "Pharmaceutical",
    subtitle: "Reliable flavor support for demanding applications.",
    image: "/images/flavor-factory/path-pharmaceutical.jpg",
    tag: "Precision applications",
    icon: Pill,
  },
];

export const strengths: Strength[] = [
  {
    title: "Low Minimums",
    text: "Easy to get started without oversized commitments.",
    icon: Beaker,
  },
  {
    title: "Fast Turnaround",
    text: "Responsive timelines that keep product teams moving.",
    icon: Clock3,
  },
  {
    title: "Consistent Quality",
    text: "Reliable flavor performance from sample to production.",
    icon: ShieldCheck,
  },
  {
    title: "Family-Owned Service",
    text: "Real people, direct communication, and personal accountability.",
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

export const applications = [
  { name: "Beverages", image: "/images/flavor-factory/application-beverage.jpg" },
  { name: "Bakery", image: "/images/flavor-factory/application-bakery.jpg" },
  { name: "Confectionery", image: "/images/flavor-factory/application-confectionery.jpg" },
  { name: "Nutraceutical", image: "/images/flavor-factory/application-nutraceutical.jpg" },
  { name: "Oral Care", image: "/images/flavor-factory/application-oral-care.jpg" },
  { name: "Pharmaceutical", image: "/images/flavor-factory/application-pharmaceutical.jpg" },
  { name: "Gummies", image: "/images/flavor-factory/application-gummy.jpg" },
  { name: "Popcorn", image: "/images/flavor-factory/application-popcorn.jpg" },
  { name: "Dairy", image: "/images/flavor-factory/application-dairy.jpg" },
  { name: "Sauces & Savory", image: "/images/flavor-factory/application-sauces-savory.jpg" },
];

export const formatOptions = ["Liquid", "Powder"];
export const goalOptions = ["Masking", "Sweetness Support", "Cooling", "Top Notes", "Creamy Body", "Fruit Profiles"];
export const applicationOptions = ["Beverages", "Bakery", "Confectionery", "Nutraceutical", "Oral Care", "Pharmaceutical", "Gummies", "Popcorn", "Dairy", "Sauces & Savory"];

export const qualityBadges = ["GMP", "ISO 22000", "Halal", "Kosher", "FDA Registered"];
