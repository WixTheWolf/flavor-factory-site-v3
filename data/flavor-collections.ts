// Featured flavor collections shown on the homepage and at the top of the flavor library.
export type Collection = {
  name: string;
  description: string;
  examples: string[];
  image: string;
  imagePosition?: string;
  /** Optional looping clip prefix (see lib/media-prefs videoSources). Plays on hover or when in view. */
  video?: string;
  terms: string[];
  familySlug: string;
};

export const collections: Collection[] = [
  {
    name: "Citrus",
    familySlug: "citrus",
    description: "Bright, zesty, and juicy citrus profiles.",
    examples: ["Lemon", "Lime", "Orange", "Grapefruit", "Key Lime"],
    image: "/images/flavor-factory/v4/family-citrus.jpg",
    video: "/video/families/citrus",
    imagePosition: "center center",
    terms: ["citrus", "lemon", "lime", "orange", "grapefruit", "key lime", "yuzu", "mandarin", "calamansi", "tangerine"],
  },
  {
    name: "Berry",
    familySlug: "berry",
    description: "Sweet, tart, and naturally vibrant berry profiles.",
    examples: ["Strawberry", "Raspberry", "Blueberry", "Blackberry", "Mixed Berry"],
    image: "/images/flavor-factory/v4/family-berry.jpg",
    video: "/video/families/berry",
    imagePosition: "center center",
    terms: ["berry", "strawberry", "raspberry", "blueberry", "blackberry", "mixed berry", "black currant", "cranberry", "cherry", "boysenberry", "acai", "pomegranate"],
  },
  {
    name: "Vanilla",
    familySlug: "vanilla-cream",
    description: "Classic, creamy, warm vanilla profiles for sweet applications.",
    examples: ["Vanilla", "French Vanilla", "Vanilla Cream", "Vanilla Bean"],
    image: "/images/flavor-factory/v4/family-vanilla.jpg",
    video: "/video/families/vanilla",
    imagePosition: "center center",
    terms: ["vanilla", "french vanilla", "vanilla cream", "vanilla bean", "cream", "custard"],
  },
  {
    name: "Chocolate",
    familySlug: "chocolate-brown-notes",
    description: "Rich, smooth, and indulgent chocolate and cocoa profiles.",
    examples: ["Chocolate", "Cocoa", "Fudge", "Brownie"],
    image: "/images/flavor-factory/v4/family-chocolate.jpg",
    video: "/video/families/chocolate",
    imagePosition: "center center",
    terms: ["chocolate", "cocoa", "fudge", "brownie", "mocha"],
  },
  {
    name: "Tropical",
    familySlug: "tropical",
    description: "Exotic, juicy fruit profiles with bright top notes.",
    examples: ["Mango", "Pineapple", "Passion Fruit", "Guava", "Coconut"],
    image: "/images/flavor-factory/v4/family-tropical.jpg",
    video: "/video/families/tropical",
    imagePosition: "center center",
    terms: ["tropical", "mango", "pineapple", "passion fruit", "guava", "coconut", "pina colada", "dragon fruit", "banana", "lychee", "kiwi", "papaya", "tamarind"],
  },
  {
    name: "Nutty",
    familySlug: "nut-praline",
    description: "Warm, roasted, and naturally rich nut profiles.",
    examples: ["Almond", "Hazelnut", "Peanut", "Pistachio", "Butter Pecan"],
    image: "/images/flavor-factory/v4/family-nutty.jpg",
    video: "/video/families/nutty",
    imagePosition: "center center",
    terms: ["nutty", "almond", "hazelnut", "peanut", "pistachio", "pecan", "praline", "butter pecan", "walnut", "macadamia", "sesame"],
  },
  {
    name: "Beverage",
    familySlug: "coffee-beverage",
    description: "Refreshing profiles for drinks, syrups, and beverage bases.",
    examples: ["Cola", "Coffee", "Energy Drink", "Lemonade", "Tea"],
    image: "/images/flavor-factory/v4/family-beverage.jpg",
    video: "/video/families/beverage",
    imagePosition: "center center",
    terms: ["beverage", "syrup", "cola", "coffee", "energy drink", "lemonade", "tea", "cold brew", "root beer", "soda", "punch", "ginger beer", "horchata"],
  },
  {
    name: "Sweet",
    familySlug: "dessert-bakery",
    description: "Dessert-style sweetness, brown notes, and confectionery profiles.",
    examples: ["Caramel", "Butterscotch", "Marshmallow", "Pancake Syrup"],
    image: "/images/flavor-factory/v4/family-sweet.jpg",
    video: "/video/families/sweet",
    imagePosition: "center center",
    terms: ["sweet", "dessert", "caramel", "butterscotch", "marshmallow", "pancake syrup", "toffee", "maple", "cotton candy", "gummy", "honey", "cookie", "tiramisu", "red velvet", "birthday cake"],
  },
];
