const BASE = "https://www.flavorfactory.net";

const organization = {
  "@type": ["Organization", "LocalBusiness", "FoodEstablishment"],
  "@id": `${BASE}/#organization`,
  name: "The Flavor Factory",
  legalName: "The Flavor Factory",
  alternateName: ["Flavor Factory", "The Flavor Factory Norco", "Flavor Factory CA"],
  description:
    "The Flavor Factory, Inc. is a family-owned custom liquid and powder flavor manufacturer established in 2005 in Norco, California. The company develops and manufactures application-specific flavor systems for food, beverage, nutraceutical, oral care, pharmaceutical, bakery, confectionery, dairy, and popcorn products. Development, production, and quality all happen at a single Norco facility with low minimums and first sample directions in 3-5 business days.",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/favicon.svg`,
    contentUrl: `${BASE}/favicon.svg`,
  },
  image: `${BASE}/og?title=Custom+Flavor+Manufacturer`,
  telephone: "+19512739877",
  email: "samples@flavorfactory.net",
  foundingDate: "2005",
  founder: {
    "@type": "Person",
    name: "Dan Wixted",
    jobTitle: "President",
    description: "Founder of The Flavor Factory with over 40 years of experience in the flavor industry.",
  },
  employee: [
    { "@type": "Person", name: "Dan Wixted", jobTitle: "President" },
    { "@type": "Person", name: "Alex Wixted", jobTitle: "Operations" },
    { "@type": "Person", name: "Ryan Wixted", jobTitle: "Quality and Regulatory" },
    { "@type": "Person", name: "Matt Wixted", jobTitle: "Production Manager" },
    { "@type": "Person", name: "Kelly Ziegler", jobTitle: "Office Manager" },
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 25 },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sample requests",
      telephone: "+19512739877",
      email: "samples@flavorfactory.net",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+19512739877",
      email: "samples@flavorfactory.net",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://www.facebook.com/DanTheFlavorFactory",
    "https://www.linkedin.com/company/the-flavor-factory/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2058 Second Street",
    addressLocality: "Norco",
    addressRegion: "CA",
    postalCode: "92860",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.9379,
    longitude: -117.5503,
  },
  // NAICS 311930 = Flavoring Syrup and Concentrate Manufacturing
  naics: "311930",
  // SIC 2087 = Flavoring Extracts and Flavoring Syrups
  isicV4: "1079",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "State", name: "California" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  paymentAccepted: "Check, Wire Transfer, ACH",
  currenciesAccepted: "USD",
  knowsAbout: [
    "Custom flavor development",
    "Liquid flavor manufacturing",
    "Powder flavor manufacturing",
    "Flavor matching and reformulation",
    "Flavor masking and modulation",
    "Natural and organic-compliant flavors",
    "Food and beverage flavoring",
    "Nutraceutical flavor masking",
    "Oral care flavors",
    "Pharmaceutical palatability",
    "Bakery flavors",
    "Popcorn seasoning flavors",
    "B2B flavor supply",
    "Heat-stable flavor development",
    "High-acid beverage flavor systems",
    "Protein bitterness masking",
    "Sweetener modulation",
    "Custom flavor samples",
    "Flavor matching California",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "SQF Certified Facility" },
    { "@type": "EducationalOccupationalCredential", name: "GMP Practices" },
    { "@type": "EducationalOccupationalCredential", name: "FDA Registered Food Facility" },
    { "@type": "EducationalOccupationalCredential", name: "Kosher certification options available" },
    { "@type": "EducationalOccupationalCredential", name: "Halal certification options available" },
    { "@type": "EducationalOccupationalCredential", name: "Organic-compliant flavor capabilities" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom flavor development and manufacturing services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Liquid Flavors", url: `${BASE}/custom-liquid-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Powder Flavors", url: `${BASE}/custom-powder-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flavor Matching and Reformulation", url: `${BASE}/flavor-matching` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Masking and Modulation", url: `${BASE}/masking-and-modulation` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organic-Compliant Flavors", url: `${BASE}/organic-compliant-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nutraceutical Flavors", url: `${BASE}/nutraceutical-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beverage Flavors", url: `${BASE}/beverage-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bakery Flavors", url: `${BASE}/bakery-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oral Care Flavors", url: `${BASE}/oral-care-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pharmaceutical Flavors", url: `${BASE}/pharmaceutical-flavors` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Popcorn Seasoning Flavors", url: `${BASE}/popcorn-seasoning-flavors` } },
    ],
  },
  // Speakable: surfaces on Google Assistant, voice search, AI summaries
  speakable: {
    "@type": "SpeakableSpecification",
    xPath: ["/html/head/title", "/html/head/meta[@name='description']"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "The Flavor Factory",
      description: organization.description,
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/flavors?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
