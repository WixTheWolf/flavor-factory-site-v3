export type IndustrySlug =
  | "bakery"
  | "confectionery"
  | "dairy"
  | "nutraceutical"
  | "oral-care"
  | "pharmaceutical"
  | "popcorn"
  | "syrup";

export type Industry = {
  slug: IndustrySlug;
  name: string;
  tagline: string;
  summary: string;
  heroImage: string;
  applications: string[];
  strengths: string[];
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Company Info", href: "/company-info" },
  { label: "Industries", href: "/industries" },
  { label: "Flavors", href: "/flavors" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
  { label: "Request Samples", href: "/request-samples" },
];

export const trustPoints = [
  "Custom liquid & powder flavor solutions",
  "Low minimum order quantities",
  "Fast sample and production turnaround",
  "Family-owned Southern California service",
];

export const industries: Industry[] = [
  {
    slug: "bakery",
    name: "Bakery",
    tagline: "Flavor systems for baked goods that stay expressive through process and shelf life.",
    summary: "Built for cakes, fillings, icings, mixes, and premium baked concepts.",
    heroImage: "/images/flavor-factory/industry-bakery-hero.jpg",
    applications: ["Cake and muffin mixes", "Icings and fillings", "Cookies and bars", "Frozen bakery"],
    strengths: ["Heat-stable systems", "Sweet brown notes", "Clean label direction"],
  },
  {
    slug: "confectionery",
    name: "Confectionery",
    tagline: "High-impact sweetness and top-note clarity for candy, chews, and chocolate systems.",
    summary: "Fruit, mint, and indulgent profiles for confectionery manufacturing.",
    heroImage: "/images/flavor-factory/industry-confectionery-hero.jpg",
    applications: ["Hard candy", "Chews", "Chocolate centers", "Gummies"],
    strengths: ["Oil/water soluble options", "Masking support", "High intensity profiles"],
  },
  {
    slug: "dairy",
    name: "Dairy",
    tagline: "Cream-forward and fruit-forward dairy profiles with balanced finish.",
    summary: "Flavors for cultured dairy, ice cream, shakes, and dairy-based beverages.",
    heroImage: "/images/flavor-factory/application-dairy.jpg",
    applications: ["Yogurt", "Frozen desserts", "Flavored milk", "Creamers"],
    strengths: ["Cream compatibility", "Acid stability support", "Mouthfeel aligned profiles"],
  },
  {
    slug: "nutraceutical",
    name: "Nutraceutical",
    tagline: "Practical flavor architecture for active formulas and functional delivery formats.",
    summary: "Taste-forward support for powders, gummies, shots, and stick packs.",
    heroImage: "/images/flavor-factory/industry-nutraceutical-hero.jpg",
    applications: ["Drink mixes", "Chewables", "Shots", "Stick packs"],
    strengths: ["Bitterness masking", "Fast prototyping", "Powder and liquid options"],
  },
  {
    slug: "oral-care",
    name: "Oral Care",
    tagline: "Freshness and cooling systems built for repeat daily use.",
    summary: "Flavor profiles for toothpaste, mouthwash, breath strips, and oral solutions.",
    heroImage: "/images/flavor-factory/industry-oral-care-hero.jpg",
    applications: ["Mouthwash", "Toothpaste", "Breath strips", "Whitening support"],
    strengths: ["Mint modulation", "Long finish control", "Clean cooling profile"],
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    tagline: "Consistent flavor support for regulated liquid and powder delivery systems.",
    summary: "Reliable profiles for syrups, suspensions, sachets, and chewables.",
    heroImage: "/images/flavor-factory/industry-pharmaceutical-hero.jpg",
    applications: ["Liquid syrups", "Suspensions", "Powder sachets", "Chewables"],
    strengths: ["Batch consistency", "Documentation-ready approach", "Taste optimization support"],
  },
  {
    slug: "popcorn",
    name: "Popcorn",
    tagline: "Savory and sweet signature notes engineered for coatings and seasonings.",
    summary: "Profiles for kettle, caramel, cheese, and custom popcorn programs.",
    heroImage: "/images/flavor-factory/application-popcorn.jpg",
    applications: ["Kettle corn", "Caramel corn", "Savory seasoning", "Premium snack blends"],
    strengths: ["Dry blend friendly", "Coating performance", "Bold top notes"],
  },
  {
    slug: "syrup",
    name: "Syrup",
    tagline: "High-character flavor systems for beverage syrups and toppings.",
    summary: "Fruit, dessert, and indulgent profiles designed for concentrated systems.",
    heroImage: "/images/flavor-factory/path-food-beverage.jpg",
    applications: ["Beverage syrups", "Dessert toppings", "Coffee syrups", "Concentrates"],
    strengths: ["Concentrate performance", "Layered flavor curves", "Low-dose impact"],
  },
];

export const certificationItems = ["SQF", "GMP", "Kosher", "Halal", "FDA Registered Facility"];
