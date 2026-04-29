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
            <h2 className="section-title">Built for real production categories.</h2>
            <p className="section-subtext" style={{ marginTop: 12, maxWidth: 720 }}>
              From high-volume food programs to regulated wellness and pharma formats, we shape profiles for how products are actually processed and consumed.
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
