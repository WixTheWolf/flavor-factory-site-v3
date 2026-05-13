import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical articles on flavor development for food scientists, R&D teams, and formulators. Heat stability, masking, format selection, palatability, and more.",
  alternates: { canonical: "/insights" },
  openGraph: {
    url: "/insights",
    title: "Insights | The Flavor Factory",
    description:
      "Technical articles on flavor development for food scientists, R&D teams, and formulators.",
    images: [{ url: "/og?title=Flavor+Development+Insights", width: 1200, height: 630, alt: "Insights - The Flavor Factory" }],
  },
  twitter: {
    title: "Insights | The Flavor Factory",
    description: "Technical articles on flavor development for food scientists, R&D teams, and formulators.",
    images: ["/og?title=Flavor+Development+Insights"],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="clean-page-intro">
              <div className="new-eyebrow">Insights</div>
              <h1>Technical articles for formulators.</h1>
              <p>
                Heat stability, masking, format selection, palatability, and how development actually works.
                Written for food scientists and R&D teams, not marketing audiences.
              </p>
            </div>

            <div className="insights-grid">
              {articles.map((article) => (
                <Link href={`/insights/${article.slug}`} className="insight-card" key={article.slug}>
                  <div className="insight-card-meta">
                    <span className="new-eyebrow">{article.category}</span>
                    <span className="insight-read-time">{article.readTime} min read</span>
                  </div>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <div className="insight-card-footer">
                    <span>{formatDate(article.publishDate)}</span>
                    <span className="insight-read-link">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
