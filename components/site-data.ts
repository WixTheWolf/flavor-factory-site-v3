import type { LucideIcon } from "lucide-react";
import { Beaker, Clock3, Handshake, Layers, Sparkles, Truck } from "lucide-react";

export type IndustryCard = {
  name: string;
  slug: string;
  summary: string;
};

export type ValueCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Flavors", href: "/flavors" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const proofItems = [
  "Low Minimum Orders",
  "3–5 Business Day Lead Times",
  "Thousands of Flavors",
  "40+ Years Experience",
];

export const industries: IndustryCard[] = [
  { name: "Bakery", slug: "bakery", summary: "Flavor systems for baked goods, fillings, icings, and mixes." },
  { name: "Confectionery", slug: "confectionery", summary: "Practical flavor support for candy, chews, and chocolate products." },
  { name: "Dairy", slug: "dairy", summary: "Profiles for milk-based drinks, cultured products, and dessert applications." },
  { name: "Nutraceutical", slug: "nutraceutical", summary: "Taste solutions for powders, sticks, functional drinks, and chewables." },
  { name: "Oral Care", slug: "oral-care", summary: "Clean mint and freshness profiles for oral care products." },
  { name: "Pharmaceutical", slug: "pharmaceutical", summary: "Consistent liquid and powder flavor options for regulated categories." },
  { name: "Popcorn", slug: "popcorn", summary: "Savory and sweet flavor directions for popcorn and snack formats." },
  { name: "Syrup", slug: "syrup", summary: "Built for beverage syrups, toppings, and concentrated systems." },
  { name: "Food & Beverage", slug: "food-beverage", summary: "Custom flavors for beverage programs and food product lines." },
  { name: "Personal Care", slug: "personal-care", summary: "Flavor and sensory profiles for personal care formulations." },
  { name: "Animal Food", slug: "animal-food", summary: "Palatability-focused solutions for companion and production animal feed." },
];

export const whyCards: ValueCard[] = [
  { title: "Low Minimum Orders", text: "Flexible order sizes for early and growing product lines.", icon: Beaker },
  { title: "Fast Delivery", text: "Typical lead times are 3–5 business days for standard orders.", icon: Clock3 },
  { title: "Customer Satisfaction", text: "Our mission is bringing customer service back to the flavor industry.", icon: Handshake },
  { title: "Custom Flavor Development", text: "Our development team creates flavors around your formula and process.", icon: Sparkles },
  { title: "Flavor Matching", text: "We match current flavors with a focus on quality and cost savings.", icon: Layers },
  { title: "Liquid & Powder Capabilities", text: "We support production-ready liquid and powder systems.", icon: Truck },
];

export const flavorFamilies = [
  { name: "Vanilla", family: "Extract", tags: ["French Vanilla", "Vanilla Bean", "Cream Vanilla"] },
  { name: "Chocolate", family: "Concentrate", tags: ["Milk Chocolate", "Dark Cocoa", "Fudge"] },
  { name: "Strawberry", family: "Emulsion", tags: ["Fresh Strawberry", "Ripe Berry", "Strawberry Cream"] },
  { name: "Lemon", family: "Oil", tags: ["Lemon Zest", "Lemonade", "Citrus Punch"] },
  { name: "Orange", family: "Emulsion", tags: ["Orange Cream", "Citrus Blend", "Blood Orange"] },
  { name: "Mint", family: "Oil", tags: ["Peppermint", "Spearmint", "Cooling Mint"] },
  { name: "Caramel", family: "Concentrate", tags: ["Salted Caramel", "Burnt Sugar", "Toffee"] },
  { name: "Coffee", family: "Extract", tags: ["Roasted Coffee", "Mocha", "Espresso"] },
  { name: "Apple", family: "Powder", tags: ["Green Apple", "Apple Pie", "Baked Apple"] },
  { name: "Watermelon", family: "Powder", tags: ["Watermelon Candy", "Juicy Melon", "Watermelon Lime"] },
  { name: "Cinnamon", family: "Extract", tags: ["Sweet Cinnamon", "Red Hot", "Cinnamon Roll"] },
  { name: "Grape", family: "Concentrate", tags: ["Concord Grape", "Grape Candy", "Mixed Berry Grape"] },
] as const;

export const qualityBadges = ["GMP", "ISO 22000", "Halal", "Kosher", "FDA Registered"];
