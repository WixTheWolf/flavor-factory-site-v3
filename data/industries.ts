import type { Industry } from "@/lib/types";
import { flavorFactoryImages } from "@/data/flavor-factory-images";

export const industries: Industry[] = [
  {
    key: "bakery",
    name: "Bakery",
    heroImage: flavorFactoryImages.industryBakery,
    summary: "Flavor systems for cakes, icings, fillings, and baked mixes.",
    applications: ["Cakes", "Icings", "Cookies", "Frozen bakery"],
  },
  {
    key: "confectionery",
    name: "Confectionery",
    heroImage: flavorFactoryImages.industryConfectionery,
    summary: "Fruit, mint, and indulgent profiles for candy and chocolate concepts.",
    applications: ["Hard candy", "Chews", "Chocolate", "Gummies"],
  },
  {
    key: "dairy",
    name: "Dairy",
    heroImage: flavorFactoryImages.industryDairy,
    summary: "Cream and fruit profiles for dairy products.",
    applications: ["Yogurt", "Ice cream", "Milk drinks", "Creamers"],
  },
  {
    key: "nutraceutical",
    name: "Nutraceutical",
    heroImage: flavorFactoryImages.industryNutraceutical,
    summary: "Taste solutions for powders, gummies, and active systems.",
    applications: ["Powders", "Stick packs", "Chewables", "Shots"],
  },
  {
    key: "oral-care",
    name: "Oral Care",
    heroImage: flavorFactoryImages.industryOralCare,
    summary: "Mint and freshness profiles for oral care products.",
    applications: ["Mouthwash", "Toothpaste", "Breath products", "Whitening"],
  },
  {
    key: "pharmaceutical",
    name: "Pharmaceutical",
    heroImage: flavorFactoryImages.industryPharmaceutical,
    summary: "Flavor support for regulated liquid and powder dosage forms.",
    applications: ["Syrups", "Suspensions", "Sachets", "Chewables"],
  },
  {
    key: "popcorn",
    name: "Popcorn",
    heroImage: flavorFactoryImages.industryPopcorn,
    summary: "Savory and sweet profiles for seasoning and coating systems.",
    applications: ["Kettle", "Caramel", "Savory", "Premium blends"],
  },
  {
    key: "syrup",
    name: "Syrup",
    heroImage: flavorFactoryImages.industryBeverage,
    summary: "Concentrated flavor systems for syrups and toppings.",
    applications: ["Coffee syrups", "Beverage bases", "Dessert toppings", "Concentrates"],
  },
  {
    key: "savory",
    name: "Savory",
    heroImage: flavorFactoryImages.industrySavory,
    summary: "Savory profiles for snacks, seasonings, sauces, and marinades.",
    applications: ["Snacks", "Seasonings", "Sauces", "Marinades"],
  },
];
