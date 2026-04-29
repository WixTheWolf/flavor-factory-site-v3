import Link from "next/link";
import { industries } from "@/data/industries";
import { AppImage } from "@/components/ui/AppImage";

export function IndustriesSection() {
  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Industries</div>
            <h2 className="section-title">Flavor solutions across categories.</h2>
            <p className="section-subtext" style={{ marginTop: 12, maxWidth: 720 }}>
              Every application has different demands. We build flavors with the end product in mind.
            </p>
          </div>
          <Link className="light-btn" href="/industries">View all industries</Link>
        </div>

        <div className="path-grid">
          {industries.map((item) => (
            <article className="path-card" key={item.key}>
              <AppImage src={item.heroImage} alt={item.name} />
              <div className="path-overlay" />
              <div className="path-content">
                <div className="path-tag">{item.applications[0]}</div>
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
