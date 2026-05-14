import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { flavorFamilyDetails } from "@/data/flavor-family-details";
import { articles } from "@/data/insights";

const BASE = "https://flavorfactory.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/flavors`,                 lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/request-samples`,         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/industries`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/capabilities`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/process`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/certifications`,          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/company-info`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faq`,                     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `${BASE}/industries/${ind.key}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const familyRoutes: MetadataRoute.Sitemap = flavorFamilyDetails.map((fam) => ({
    url: `${BASE}/flavors/${fam.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insightsIndex: MetadataRoute.Sitemap = [
    { url: `${BASE}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const insightsRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: new Date(a.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...industryRoutes, ...familyRoutes, ...insightsIndex, ...insightsRoutes];
}
