import type { Industry } from "@/lib/types";
import { flavorFactoryImages } from "@/data/flavor-factory-images";

export const industries: Industry[] = [
  {
    key: "bakery",
    name: "Bakery",
    heroImage: flavorFactoryImages.industryBakery,
    summary: "Flavor systems for cakes, cookies, mixes, icings, and fillings where heat, sweetness, fat, and aroma all matter.",
    applications: ["Cakes", "Icings", "Fillings", "Bakery mixes", "Cookies"],
  },
  {
    key: "confectionery",
    name: "Confectionery",
    heroImage: flavorFactoryImages.industryConfectionery,
    summary: "Fruit, mint, chocolate, caramel, sour, and high-impact profiles for candy, gummies, chews, and chocolate systems.",
    applications: ["Hard candy", "Chews", "Chocolate", "Gummies", "Caramels"],
  },
  {
    key: "dairy",
    name: "Dairy",
    heroImage: flavorFactoryImages.industryDairy,
    summary: "Cream, vanilla, fruit, cultured, and indulgent profiles designed to work with dairy texture, sweetness, and fat systems.",
    applications: ["Yogurt", "Ice cream", "Milk drinks", "Creamers", "Gelato"],
  },
  {
    key: "nutraceutical",
    name: "Nutraceutical",
    heroImage: flavorFactoryImages.industryNutraceutical,
    summary: "Flavor and masking support for powders, gummies, stick packs, supplements, actives, and functional formats.",
    applications: ["Powders", "Stick packs", "Gummies", "Chewables", "Shots"],
  },
  {
    key: "oral-care",
    name: "Oral Care",
    heroImage: flavorFactoryImages.industryOralCare,
    summary: "Mint, cooling, freshness, sweetness, bitterness management, and clean finish for oral care products.",
    applications: ["Mouthwash", "Toothpaste", "Breath products", "Whitening", "Rinses"],
  },
  {
    key: "pharmaceutical",
    name: "Pharmaceutical",
    heroImage: flavorFactoryImages.industryPharmaceutical,
    summary: "Flavor and masking support for syrups, suspensions, powders, sachets, chewables, and other dosage forms.",
    applications: ["Syrups", "Suspensions", "Sachets", "Chewables", "Powders"],
  },
  {
    key: "popcorn",
    name: "Popcorn",
    heroImage: flavorFactoryImages.industryPopcorn,
    summary: "Butter, sweet, savory, cheese, kettle, and custom profiles for seasoning systems and coating applications.",
    applications: ["Butter", "Kettle", "Caramel", "Savory", "Seasonings"],
  },
  {
    key: "syrup",
    name: "Syrup",
    heroImage: flavorFactoryImages.industryBeverage,
    summary: "Concentrated flavor systems for coffee syrups, beverage bases, dessert toppings, concentrates, and sweetener profiles.",
    applications: ["Coffee syrups", "Beverage bases", "Dessert toppings", "Concentrates", "Maple / honey"],
  },
  {
    key: "savory",
    name: "Savory",
    heroImage: flavorFactoryImages.industrySavory,
    summary: "Savory profiles for snacks, seasonings, sauces, coatings, marinades, and application-specific flavor systems.",
    applications: ["Snacks", "Seasonings", "Sauces", "Marinades"],
  },
];
