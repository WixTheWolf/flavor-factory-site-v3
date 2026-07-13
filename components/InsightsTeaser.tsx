import Link from "next/link";
import { articles } from "@/data/insights";

const featured = articles.slice(0, 3);

export function InsightsTeaser() {
  return (
    <section className="new-section insights-teaser-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div>
            <div className="new-eyebrow">Insights</div>
            <h2>Technical notes for formulators.</h2>
          </div>
          <p>Heat stability, masking, format selection, and how development actually works. Written for R&amp;D teams, not marketing audiences.</p>
        </div>
        <div className="insights-teaser-grid">
          {featured.map((article) => (
            <Link href={`/insights/${article.slug}`} className="insights-teaser-card" key={article.slug}>
              <span className="insights-teaser-tag">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
          ))}
        </div>
        <div className="insights-teaser-actions">
          <Link href="/insights" className="light-btn">View all insights</Link>
          <Link href="/case-studies" className="light-btn">See representative challenges</Link>
        </div>
      </div>
    </section>
  );
}