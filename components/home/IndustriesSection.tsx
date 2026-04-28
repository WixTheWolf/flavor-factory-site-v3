import Link from "next/link";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Industries</div>
            <h2 className="section-title">Built for real production categories.</h2>
          </div>
          <Link className="light-btn" href="/industries">View all industries</Link>
        </div>

        <div className="path-grid">
          {industries.map((item) => (
            <article className="path-card" key={item.key}>
              <img src={item.heroImage} alt={item.name} />
              <div className="path-overlay" />
              <div className="path-content">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
