export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  application: string;
  problem: string;
  technicalIssue: string;
  approach: string;
  outcome: string;
  format: string;
  capability: string;
  cta: string;
  ctaHref: string;
  industryHref: string;
  serviceHref: string;
  relatedProfiles: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "heat-stable-citrus-bakery",
    title: "Heat-Stable Citrus for Bakery Filling",
    industry: "Bakery",
    application: "Bakery filling, frosting, or baked inclusion",
    problem: "Citrus top notes faded after heat exposure.",
    technicalIssue: "Heat loss, acid balance, top-note retention, finished-product perception.",
    approach: "Build around process exposure, acid balance, and finished-base perception.",
    outcome: "A cleaner citrus identity can be maintained when the flavor is built around process conditions.",
    format: "Liquid or powder depending on the application",
    capability: "Heat stability and application-specific development",
    cta: "Discuss a Similar Bakery Project",
    ctaHref: "/request-samples?industry=bakery",
    industryHref: "/industries/bakery",
    serviceHref: "/bakery-flavors",
    relatedProfiles: ["Lemon", "Orange", "Citrus Masking"],
  },
  {
    slug: "bitter-active-masking-nutraceutical",
    title: "Bitter Active Masking for Nutraceutical",
    industry: "Nutraceutical",
    application: "Protein powder, functional beverage, gummy, or supplement system",
    problem: "Actives created bitterness, metallic notes, earthiness, or lingering aftertaste.",
    technicalIssue: "Protein bitterness, minerals, botanicals, caffeine, creatine, sweetener linger.",
    approach: "Balance masking, sweetness, acidity, flavor impact, and finish together.",
    outcome: "A more rounded flavor profile is often possible when the masking system is built with the active load and base in mind.",
    format: "Liquid or powder depending on the system",
    capability: "Masking and modulation",
    cta: "Discuss Nutraceutical Masking",
    ctaHref: "/request-samples?industry=nutraceutical",
    industryHref: "/industries/nutraceutical",
    serviceHref: "/masking-and-modulation",
    relatedProfiles: ["Vanilla", "Cream", "Masking systems"],
  },
  {
    slug: "oral-care-cooling-finish-balance",
    title: "Oral Care Cooling and Finish Balance",
    industry: "Oral Care",
    application: "Mouth rinse, toothpaste, dental product, or breath product",
    problem: "Mint profile was cooling but sharp, medicinal, burning, or unbalanced.",
    technicalIssue: "Cooling curve, mint character, sweetness, burn, linger, finish.",
    approach: "Adjust mint direction, cooling impact, sweetness, and aftertaste as one system.",
    outcome: "A cleaner finish can be developed by balancing cooling impact with the full oral-care base.",
    format: "Liquid flavor system",
    capability: "Oral care flavor development",
    cta: "Discuss an Oral Care Project",
    ctaHref: "/request-samples?industry=oral-care",
    industryHref: "/industries/oral-care",
    serviceHref: "/oral-care-flavors",
    relatedProfiles: ["Mint", "Cooling", "Freshness"],
  },
  {
    slug: "popcorn-coating-adhesion",
    title: "Popcorn Coating Flavor System",
    industry: "Popcorn",
    application: "Popcorn, snack coating, or seasoning system",
    problem: "Flavor identity weakened on the finished snack.",
    technicalIssue: "Fat, salt, adhesion, flavor release, dusting, coating behavior.",
    approach: "Build around fat, salt, adhesion, flavor release, and coating behavior.",
    outcome: "Finished-snack impact improves when flavor release, fat interaction, and coating behavior are considered together.",
    format: "Powder or liquid depending on process",
    capability: "Snack and seasoning flavor systems",
    cta: "Discuss a Snack Flavor",
    ctaHref: "/request-samples?industry=popcorn",
    industryHref: "/industries/popcorn",
    serviceHref: "/popcorn-seasoning-flavors",
    relatedProfiles: ["Butter", "Caramel", "Savory"],
  },
  {
    slug: "beverage-acid-sweetener-balance",
    title: "Beverage Acid/Sweetener Balance",
    industry: "Beverage",
    application: "Still beverage, carbonated beverage, functional drink, syrup, or concentrate",
    problem: "The flavor was flat, sharp, too sweet, or unbalanced after acid/sweetener adjustment.",
    technicalIssue: "pH, acid blend, sweetener type, mouthfeel, bitterness, carbonation, heat process.",
    approach: "Build around pH, acid blend, sweetener type, mouthfeel, bitterness, carbonation, and heat process.",
    outcome: "Cleaner balance can be achieved when flavor, acid, sweetness, and mouthfeel are developed together.",
    format: "Liquid flavor system",
    capability: "Beverage flavor development",
    cta: "Discuss a Beverage Flavor",
    ctaHref: "/request-samples?industry=beverage",
    industryHref: "/industries/beverage",
    serviceHref: "/beverage-flavors",
    relatedProfiles: ["Citrus", "Berry", "Tropical", "Sweetener masking"],
  },
  {
    slug: "pharmaceutical-palatability-liquid-dose",
    title: "Pharmaceutical Palatability Support",
    industry: "Pharmaceutical",
    application: "Syrup, suspension, chewable, powder, or other pharmaceutical format",
    problem: "The base carried bitterness, medicinal notes, or lingering harshness.",
    technicalIssue: "API bitterness threshold, excipient interactions, dosage form, sweetness balance, lingering finish.",
    approach: "Balance palatability, label requirements, dosage form, and flavor impact.",
    outcome: "Better palatability depends on the active, dosage form, use level, and regulatory path.",
    format: "Liquid or powder depending on dosage form",
    capability: "Pharmaceutical flavor development and masking",
    cta: "Discuss Pharmaceutical Palatability",
    ctaHref: "/request-samples?industry=pharmaceutical",
    industryHref: "/industries/pharmaceutical",
    serviceHref: "/pharmaceutical-flavors",
    relatedProfiles: ["Masking", "Sweetness balance", "Citrus", "Berry"],
  },
  {
    slug: "supplier-match-reformulation",
    title: "Supplier Match for Reformulation",
    industry: "Reformulation",
    application: "Any finished product with an existing target flavor",
    problem: "A current flavor became too expensive, unavailable, discontinued, or no longer fit label goals.",
    technicalIssue: "Matching finished-product performance, not just aroma.",
    approach: "Evaluate the target in context and build toward the experience in the finished product.",
    outcome: "A practical match depends on the application, use level, label goal, and production path.",
    format: "Liquid or powder",
    capability: "Flavor matching and reformulation",
    cta: "Discuss a Supplier Match",
    ctaHref: "/request-samples",
    industryHref: "/industries",
    serviceHref: "/flavor-matching",
    relatedProfiles: ["Matching", "Reformulation", "Label change"],
  },
];