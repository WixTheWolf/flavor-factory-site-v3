// Accent colors used to give each flavor family its own identity across the site.
// Keyed by family slug (see data/flavor-family-details.ts).
export const familyAccents: Record<string, string> = {
  citrus: "#f5c542",
  berry: "#d9435e",
  tropical: "#f28c28",
  "orchard-fruit": "#9cc44a",
  "stone-fruit": "#f29e7a",
  melons: "#7fcf8a",
  "vanilla-cream": "#ead7a8",
  "chocolate-brown-notes": "#8a5434",
  "coffee-beverage": "#a8673f",
  "mint-cooling": "#4fbf9a",
  "nut-praline": "#c58e57",
  "spice-warmth": "#d0633a",
  "dessert-bakery": "#e0a24e",
  "candy-confectionery": "#ec6fa8",
  "savory-culinary": "#c9a14a",
  "botanical-tea": "#8db55a",
  "custom-signature": "#f0b35a",
};

export const DEFAULT_ACCENT = "#f0b35a";

export function accentFor(slug: string) {
  return familyAccents[slug] ?? DEFAULT_ACCENT;
}

// Short, recognizable flavor names for the scrolling ticker, each tagged with a family color.
export const tickerFlavors: { name: string; family: string }[] = [
  { name: "Meyer Lemon", family: "citrus" },
  { name: "Strawberry", family: "berry" },
  { name: "Mango", family: "tropical" },
  { name: "Vanilla Bean", family: "vanilla-cream" },
  { name: "Peppermint", family: "mint-cooling" },
  { name: "Cold Brew", family: "coffee-beverage" },
  { name: "Salted Caramel", family: "dessert-bakery" },
  { name: "Black Cherry", family: "stone-fruit" },
  { name: "Watermelon", family: "melons" },
  { name: "Hazelnut", family: "nut-praline" },
  { name: "Cinnamon", family: "spice-warmth" },
  { name: "Cotton Candy", family: "candy-confectionery" },
  { name: "Green Apple", family: "orchard-fruit" },
  { name: "Matcha", family: "botanical-tea" },
  { name: "Dark Chocolate", family: "chocolate-brown-notes" },
  { name: "Passion Fruit", family: "tropical" },
  { name: "Blood Orange", family: "citrus" },
  { name: "Blueberry", family: "berry" },
  { name: "Spearmint", family: "mint-cooling" },
  { name: "Butter Pecan", family: "nut-praline" },
  { name: "Key Lime", family: "citrus" },
  { name: "Pina Colada", family: "tropical" },
  { name: "Honey", family: "dessert-bakery" },
  { name: "Raspberry", family: "berry" },
];
