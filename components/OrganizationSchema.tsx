const schema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "The Flavor Factory",
  description:
    "Family-owned custom liquid and powder flavor manufacturer in Norco, California.",
  url: "https://flavor-factory-site-v3.vercel.app",
  telephone: "+19512739877",
  email: "samples@flavorfactory.net",
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
  areaServed: "US",
  knowsAbout: [
    "Custom flavor development",
    "Liquid flavor manufacturing",
    "Powder flavor manufacturing",
    "Flavor matching and reformulation",
    "Food and beverage flavoring",
    "Nutraceutical flavor masking",
    "Pharmaceutical palatability",
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
