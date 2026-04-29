import type { Industry } from "@/lib/types";
import { flavorFactoryImages } from "@/data/flavor-factory-images";

export const industries: Industry[] = [
  {
    key: "bakery",
    name: "Bakery",
    heroImage: flavorFactoryImages.industryBakery,
    summary: "Warm, indulgent, comforting profiles for baked goods, fillings, frostings, and more.",
    applications: ["Cakes", "Icings", "Cookies", "Frozen bakery"],
  },
  {
    key: "confectionery",
    name: "Confectionery",
    heroImage: flavorFactoryImages.industryConfectionery,
    summary: "Bright, playful, rich, or nostalgic flavors designed to stand out.",
    applications: ["Hard candy", "Chews", "Chocolate", "Gummies"],
  },
  {
    key: "dairy",
    name: "Dairy",
    heroImage: flavorFactoryImages.applicationDairy,
    summary: "Creamy, balanced flavor systems for products that need softness and depth.",
    applications: ["Yogurt", "Ice cream", "Milk drinks", "Creamers"],
  },
  {
    key: "nutraceutical",
    name: "Nutraceutical",
    heroImage: flavorFactoryImages.industryNutraceutical,
    summary: "Better-tasting wellness products with stronger day-to-day appeal.",
    applications: ["Powders", "Stick packs", "Chewables", "Shots"],
  },
  {
    key: "oral-care",
    name: "Oral Care",
    heroImage: flavorFactoryImages.industryOralCare,
    summary: "Clean, fresh, technically precise flavor profiles for rinse and care systems.",
    applications: ["Mouthwash", "Toothpaste", "Breath products", "Whitening"],
  },
  {
    key: "pharmaceutical",
    name: "Pharmaceutical",
    heroImage: flavorFactoryImages.industryPharmaceutical,
    summary: "Consistent flavor support for regulated liquid and powder dosage forms.",
    applications: ["Syrups", "Suspensions", "Sachets", "Chewables"],
  },
  {
    key: "popcorn",
    name: "Popcorn",
    heroImage: flavorFactoryImages.applicationPopcorn,
    summary: "Savory and sweet flavor direction built for seasoning and coating systems.",
    applications: ["Kettle", "Caramel", "Savory", "Premium blends"],
  },
  {
    key: "syrup",
    name: "Syrup",
    heroImage: flavorFactoryImages.pathFoodBeverage,
    summary: "High-impact concentrated flavor systems for syrup and topping programs.",
    applications: ["Coffee syrups", "Beverage bases", "Dessert toppings", "Concentrates"],
  },
];
