import { articles } from "@/data/insights";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export function InsightBreadcrumbJsonLd({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);

  return (
    <JsonLd
      data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights" },
        { name: article?.title ?? "Article", path: `/insights/${slug}` },
      ])}
    />
  );
}
