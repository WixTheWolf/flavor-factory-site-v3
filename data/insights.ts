export type Article = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: number;
  category: string;
  relatedIndustries: string[];
};

export const articles: Article[] = [
  {
    slug: "heat-stability-bakery-flavors",
    title: "Heat Stability in Bakery Flavors: What Actually Breaks Down at 350F",
    description: "Most flavor compounds are volatile at oven temperatures. Here is what degrades, what survives, and how to build a bakery flavor that performs at the finished product stage.",
    publishDate: "2026-05-01",
    readTime: 7,
    category: "Bakery",
    relatedIndustries: ["bakery"],
  },
  {
    slug: "masking-off-notes-plant-based-protein",
    title: "Masking Off-Notes in Plant-Based Protein",
    description: "Pea protein, soy, and oat each have distinct off-note profiles. This is how masking flavor systems are built to address the source of the problem rather than covering it with sweetness.",
    publishDate: "2026-05-01",
    readTime: 8,
    category: "Nutraceutical",
    relatedIndustries: ["nutraceutical", "dairy"],
  },
  {
    slug: "flavor-systems-high-acid-beverages",
    title: "Flavor Systems for High-Acid Beverages",
    description: "How citric, malic, and phosphoric acid environments affect flavor compound stability, what hydrolizes over shelf life, and how to build profiles that hold through acidic beverage systems.",
    publishDate: "2026-05-01",
    readTime: 6,
    category: "Beverage",
    relatedIndustries: ["beverage"],
  },
  {
    slug: "liquid-powder-oil-emulsion-formats",
    title: "Choosing Between Liquid, Powder, Oil-Soluble, and Emulsion Formats",
    description: "Format selection affects flavor performance more than most formulators expect. Here is how each delivery system behaves and how to match format to application.",
    publishDate: "2026-05-01",
    readTime: 7,
    category: "Formulation",
    relatedIndustries: ["bakery", "beverage", "confectionery", "nutraceutical"],
  },
  {
    slug: "pharmaceutical-palatability",
    title: "Pharmaceutical Palatability: Making Actives Compliance-Friendly",
    description: "API bitterness is not random — it follows receptor biology. Here is how targeted masking differs from general flavor coverage and why it matters for pediatric and liquid dosage forms.",
    publishDate: "2026-05-01",
    readTime: 8,
    category: "Pharmaceutical",
    relatedIndustries: ["pharmaceutical"],
  },
  {
    slug: "popcorn-coating-adhesion",
    title: "Coating Adhesion in Retail Popcorn: Kettle vs Air-Popped vs Extruded",
    description: "Coating adhesion is a function of surface texture, oil load, and application method — not just flavor concentration. Here is how the three major popcorn formats differ and what that means for flavor development.",
    publishDate: "2026-05-01",
    readTime: 6,
    category: "Popcorn",
    relatedIndustries: ["popcorn"],
  },
  {
    slug: "natural-vs-artificial-label",
    title: "Natural vs Natural and Artificial vs Artificial: What Your Label Is Actually Saying",
    description: "The three declaration types have specific regulatory meanings that affect ingredient sourcing, cost, and what you can and cannot claim. Here is what each means in practice.",
    publishDate: "2026-05-01",
    readTime: 5,
    category: "Regulatory",
    relatedIndustries: ["bakery", "beverage", "confectionery"],
  },
  {
    slug: "sample-to-scale-up",
    title: "How Sample to Scale-Up Actually Works at a Small Flavor House",
    description: "The gap between bench approval and first production batch is where most flavor problems surface. Here is how we close that gap from the first sample.",
    publishDate: "2026-05-01",
    readTime: 6,
    category: "Process",
    relatedIndustries: ["bakery", "beverage", "nutraceutical"],
  },
];
