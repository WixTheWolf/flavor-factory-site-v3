export type FamilyDetail = {
  name: string;
  slug: string;
  intro: string;
  formulatorNote: string;
  applications: string[];
  formats: string[];
};

export const flavorFamilyDetails: FamilyDetail[] = [
  {
    name: "Citrus",
    slug: "citrus",
    intro: "Citrus profiles are built around terpene esters that deliver bright, clean top notes in lemon, lime, orange, and grapefruit. These compounds are volatile and heat-sensitive, which means a citrus that works in a cold beverage may need to be reformulated for a baked application. We build citrus profiles around the finished product format, not just the flavor target.",
    formulatorNote: "Watch for pH interaction in high-acid applications and loss of top notes in any heat-processed format. Oil-soluble and emulsion formats help with stability in water-based systems.",
    applications: ["Beverages and sports drinks", "Gummy candy", "Bakery fillings and glazes", "Hard candy", "Oral care", "Functional beverages"],
    formats: ["Liquid", "Powder", "Oil-soluble", "Emulsion"],
  },
  {
    name: "Berry",
    slug: "berry",
    intro: "Berry profiles fall into two useful categories: naturalistic profiles that track fresh or cooked fruit character, and candy-style profiles built for impact in high-sugar systems. The type that works in a yogurt will not work in a hard candy. Knowing which category the application needs is the first decision in berry development.",
    formulatorNote: "Consider the sugar matrix before selecting a profile type. Confectionery-style profiles can read artificial in dairy applications, and naturalistic profiles disappear in 80 Brix gummy systems.",
    applications: ["Beverages and RTD", "Gummy and soft candy", "Dairy and yogurt", "Protein powders and nutraceuticals", "Bakery fillings"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Tropical",
    slug: "tropical",
    intro: "Tropical profiles are ester-dominant systems. Mango, pineapple, passion fruit, and coconut each have recognizable chemical signatures that read as warm, ripe, and juicy. Blending tropical notes is standard in beverage and confectionery development. Some acetate-heavy profiles lose character quickly in baked applications.",
    formulatorNote: "Build for heat stability when the application calls for it. Acetate-forward profiles drop off significantly above 200F.",
    applications: ["Beverages", "Confectionery", "Syrups", "Functional beverages", "Bars and powders"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Orchard Fruit",
    slug: "orchard-fruit",
    intro: "Apple and pear profiles can read as fresh, cooked, candied, or baked depending on the ester balance and browning notes in the system. Applesauce, baked apple, green apple candy, and fresh-cut apple are distinct profiles, not variations on one. Specifying the target character is more important with orchard fruit than almost any other family.",
    formulatorNote: "Green apple (sour, candy-like) and red apple (ripe, baked) require completely different starting points. Specify the character target up front.",
    applications: ["Beverages", "Bakery", "Confectionery", "Dairy", "Nutraceuticals"],
    formats: ["Liquid", "Powder"],
  },
  {
    name: "Stone Fruit",
    slug: "stone-fruit",
    intro: "Peach, apricot, plum, and cherry profiles are characterized by a balance of fruity esters and a subtle almond-adjacent background from the stone. This background is part of what makes stone fruit taste authentic. Cherry in particular has very different naturalistic and candy-style interpretations.",
    formulatorNote: "Cherry candy profiles and natural cherry profiles are different flavor systems. Confirm the target character before development starts.",
    applications: ["Beverages", "Dairy", "Confectionery", "Bakery", "Nutraceuticals"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Melons",
    slug: "melons",
    intro: "Melon profiles are delicate. Watermelon, cantaloupe, and honeydew have light, fresh characters that can read watery or artificial when overdone. They work well as modifier notes in beverage blends and as primary profiles in light confectionery applications. Melon profiles are not heat-stable systems.",
    formulatorNote: "For baked applications, a heavier formulation or different delivery format is required. Melon notes in dry powder form can hold better than liquid in high-moisture applications.",
    applications: ["Beverages", "Light confectionery", "Dairy", "Sports drinks"],
    formats: ["Liquid", "Powder"],
  },
  {
    name: "Vanilla & Cream",
    slug: "vanilla-cream",
    intro: "Vanilla and cream profiles cover a wide range: straight vanillin, natural bean extract with its woody-floral character, French vanilla with its egg-yolk richness, custard, cheesecake, and cream. The matrix interacts heavily with these profiles. A vanilla in a dairy application reads differently than the same flavor in a water-continuous beverage.",
    formulatorNote: "Specify the vanilla type: vanillin-forward reads clean and sweet; natural bean reads complex and slightly woody. The right choice depends on the application and label goals.",
    applications: ["Dairy and frozen", "Bakery", "Protein powders", "Beverages", "Confectionery", "Oral care"],
    formats: ["Liquid", "Powder", "Extract"],
  },
  {
    name: "Chocolate & Brown Notes",
    slug: "chocolate-brown-notes",
    intro: "Chocolate, cocoa, caramel, maple, butterscotch, and toffee profiles share a brown note character built around Maillard reaction products. The depth in these profiles comes from balance between bitter cocoa notes, sweet caramel notes, and dairy or nut modifiers. Chocolate specifically is extremely sensitive to fat system.",
    formulatorNote: "A chocolate flavor in a compound coating performs very differently than in a water-based beverage. Fat compatibility and use level both need to be matched to the application.",
    applications: ["Confectionery and chocolate", "Dairy", "Bakery", "Beverages", "Protein powders"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Coffee & Beverage",
    slug: "coffee-beverage",
    intro: "Coffee profiles range from light roast and cold brew (fruity-acidic) to espresso and dark roast (bitter-caramel-roasted). The application format matters: a syrup coffee flavor has to survive dilution into a hot beverage, while a beverage coffee flavor is built for a finished cold RTD. Cola, cream soda, and other soda profiles have their own requirements based on carbonation and sweetener systems.",
    formulatorNote: "Hot and cold dispensing require different flavor fractions. A coffee syrup approved at room temperature has to be re-evaluated in the hot finished beverage.",
    applications: ["Coffee syrups", "RTD coffee", "Beverages", "Bakery", "Confectionery"],
    formats: ["Liquid", "Powder", "Emulsion"],
  },
  {
    name: "Mint & Cooling",
    slug: "mint-cooling",
    intro: "Mint profiles span spearmint (sweet, fruity, soft), peppermint (clean, sharp, high menthol), wintergreen (sweet, herbal, candy-like), and mouthwash blends (high-impact, balanced cooling). Cooling agents like WS-3 and WS-23 are often used alongside or in place of menthol for products where menthol's medicinal character is unwanted.",
    formulatorNote: "The right cooling profile depends entirely on the application and target sensation. Mouthwash, toothpaste, mint candy, and functional beverages each need a different balance.",
    applications: ["Oral care", "Confectionery (mint candy, gum)", "Functional beverages", "Pharmaceutical", "Nutraceutical"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Nut & Praline",
    slug: "nut-praline",
    intro: "Almond, hazelnut, pecan, peanut, pistachio, and walnut profiles each have distinct characters built around roasted, earthy, and sweet elements. Nut profiles in bakery and confectionery typically need oil compatibility. Water-based nut flavors in fat-heavy applications underperform.",
    formulatorNote: "Almond profiles containing benzaldehyde at certain levels may have labeling implications worth discussing at the project start.",
    applications: ["Bakery", "Confectionery", "Dairy (ice cream, yogurt)", "Beverages (nut milks, lattes)", "Chocolate"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Spice & Warmth",
    slug: "spice-warmth",
    intro: "Cinnamon, ginger, cardamom, and chai profiles bring warmth, complexity, and season-forward character. Cinnamon oil-based flavors can be irritating at higher use levels and incompatible with some systems. Chai profiles require balancing multiple spice notes without any single component overwhelming the blend.",
    formulatorNote: "Cinnamon oil at high use levels can cause irritation and is incompatible with certain protein systems. Discuss use level and application before finalizing.",
    applications: ["Bakery (seasonal)", "Beverages (chai, tea, coffee)", "Confectionery", "Dairy", "Nutraceuticals"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Dessert & Bakery",
    slug: "dessert-bakery",
    intro: "Marshmallow, birthday cake, pancake, red velvet, and tiramisu profiles are dessert-inspired sweet systems built for novelty and indulgence positioning. These profiles are designed to evoke a finished product experience, not a specific ingredient. They work well in confectionery, ice cream, RTD protein, and limited-time offerings.",
    formulatorNote: "These are characterization profiles, not single-ingredient flavors. They are calibrated for their primary application format and may need adjustment if the matrix changes.",
    applications: ["Confectionery", "Ice cream and frozen", "Protein powders", "Limited-time beverages", "Bakery"],
    formats: ["Liquid", "Powder"],
  },
  {
    name: "Candy & Confectionery",
    slug: "candy-confectionery",
    intro: "Blue raspberry, sour apple, watermelon candy, cotton candy, and bubble gum are high-impact, recognizable confectionery profiles designed for maximum punch in high-sugar systems. These are not naturalistic fruit profiles. They are flavor characterizations that consumers associate with specific candy products.",
    formulatorNote: "These profiles are built for impact in confectionery matrices. In dairy or lower-sugar applications, they can read artificial. Confirm the application before development.",
    applications: ["Hard and soft candy", "Gummies", "Syrups", "Beverages (flavored water, sports)", "Lollipops"],
    formats: ["Liquid", "Powder", "Oil-soluble"],
  },
  {
    name: "Savory & Culinary",
    slug: "savory-culinary",
    intro: "Chicken, beef, BBQ, ranch, tomato, and other savory profiles are built around Maillard browning notes, umami compounds, and spice systems. These profiles are functional ingredients, not just flavor. The depth, saltiness perception, and background notes all affect how the finished product tastes.",
    formulatorNote: "Fat compatibility and process stability are usually the first technical questions for savory work. Confirm both before selecting a flavor system.",
    applications: ["Popcorn seasoning", "Snack coatings", "Sauces and seasonings", "Prepared foods", "Soups and broths"],
    formats: ["Powder", "Liquid"],
  },
  {
    name: "Botanical & Tea",
    slug: "botanical-tea",
    intro: "Green tea, black tea, hibiscus, lavender, rose, jasmine, and elderflower profiles are delicate, complex systems built for premium and wellness-positioned products. These profiles are easily overwhelmed by high sweetener loads or aggressive flavor companions. They work best in beverages and formats where their nuance can come through.",
    formulatorNote: "Low-to-moderate sweetener levels let botanical notes read clearly. Heavy sweetness compresses the complexity that makes these profiles valuable.",
    applications: ["RTD tea", "Beverages", "Sparkling water", "Kombucha", "Light confectionery"],
    formats: ["Liquid", "Powder"],
  },
  {
    name: "Custom & Signature",
    slug: "custom-signature",
    intro: "Custom masking systems, signature profiles, and flavor matching work are not starting-point flavors. They are developed around a specific target, constraint, or reference product. If your project requires a flavor that does not exist in any library, or a masking system built for a specific active ingredient combination, this is where those conversations start.",
    formulatorNote: "Custom development starts with the most specific brief you can provide. Target character, application matrix, label requirements, and any benchmark product all help narrow the first direction.",
    applications: ["Nutraceuticals (masking)", "Pharmaceutical (API masking)", "Proprietary beverage formulas", "Signature line development"],
    formats: ["Liquid", "Powder (determined by application)"],
  },
];

export function familySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getFamilyBySlug(slug: string): FamilyDetail | undefined {
  return flavorFamilyDetails.find((f) => f.slug === slug);
}
