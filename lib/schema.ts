const BASE_URL = "https://www.flavorfactory.net";

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  industry: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: "Custom flavor development",
    areaServed: "US",
    url: absoluteUrl(input.path),
    provider: {
      "@type": "LocalBusiness",
      name: "The Flavor Factory",
      url: BASE_URL,
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: input.industry,
    },
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishDate: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishDate,
    dateModified: input.publishDate,
    mainEntityOfPage: absoluteUrl(input.path),
    image: absoluteUrl(input.image ?? `/og?title=${encodeURIComponent(input.title)}`),
    author: { "@type": "Organization", name: "The Flavor Factory", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "The Flavor Factory",
      url: BASE_URL,
    },
  };
}
