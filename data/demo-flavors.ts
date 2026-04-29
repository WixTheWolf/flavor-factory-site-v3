<<<<<<< HEAD
import type { Flavor } from "@/lib/types";

export const demoFlavors: Flavor[] = [
  { id: "french-vanilla", name: "French Vanilla", family: "Vanilla", format: "Liquid", industries: ["bakery", "dairy", "syrup"], applications: ["Icings", "Ice cream", "Coffee syrups"], profile: ["creamy", "custard", "warm"], notes: "Rich vanilla profile with smooth dairy finish." },
  { id: "dark-cocoa", name: "Dark Cocoa Fudge", family: "Chocolate", format: "Liquid", industries: ["confectionery", "dairy", "syrup"], applications: ["Fudge", "Milk drinks", "Toppings"], profile: ["roasted", "cocoa", "indulgent"], notes: "Deep cocoa body with rounded sweetness." },
  { id: "orange-cream", name: "Orange Cream", family: "Citrus", format: "Powder", industries: ["nutraceutical", "dairy", "pharmaceutical"], applications: ["Powders", "Chewables", "Desserts"], profile: ["zesty", "sweet", "creamy"], notes: "Bright orange note for powder systems." },
  { id: "peppermint", name: "Peppermint Cooling", family: "Mint", format: "Liquid", industries: ["oral-care", "pharmaceutical", "confectionery"], applications: ["Mouthwash", "Syrups", "Mints"], profile: ["cooling", "clean", "fresh"], notes: "Long-cooling peppermint with clean finish." },
  { id: "caramel", name: "Caramel Brown Sugar", family: "Caramel", format: "Liquid", industries: ["bakery", "popcorn", "syrup"], applications: ["Fillings", "Kettle corn", "Coffee syrups"], profile: ["buttery", "toffee", "brown sugar"], notes: "Cooked sugar profile with indulgent notes." },
  { id: "strawberry", name: "Strawberry Fresh", family: "Berry", format: "Liquid", industries: ["dairy", "confectionery", "syrup"], applications: ["Yogurt", "Gummies", "Syrups"], profile: ["juicy", "ripe", "red-fruit"], notes: "Ripe strawberry profile with bright top note." },
  { id: "maple", name: "Maple Stack", family: "Maple", format: "Liquid", industries: ["syrup", "bakery", "pharmaceutical"], applications: ["Table syrup", "Bakery", "Flavor blends"], profile: ["maple", "sweet", "breakfast"], notes: "Authentic maple with lingering sweetness." },
  { id: "watermelon", name: "Watermelon Candy", family: "Fruit", format: "Powder", industries: ["confectionery", "nutraceutical"], applications: ["Gummies", "Powder drinks"], profile: ["juicy", "candy", "sweet"], notes: "Candy watermelon for powder and gummy applications." }
];
=======
import { buildFlavorCatalog } from "@/lib/flavor-normalizer";

export const demoFlavors = buildFlavorCatalog();
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
