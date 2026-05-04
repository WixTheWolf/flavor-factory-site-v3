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
            <h2 className="section-title">Applications we support.</h2>
            <p className="section-subtext" style={{ marginTop: 12, maxWidth: 720 }}>
              Each product type has different requirements. These categories show common starting points.
            </p>
          </div>
          <Link className="light-btn" href="/industries">View all industries</Link>
        </div>

        <div className="path-grid">
          {industries.map((item) => (
            <article className="path-card" key={item.key}>
              <AppImage
                src={item.heroImage}
                alt={item.name}
                sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1200px) calc((100vw - 68px) / 2), 504px"
              />
              <div className="path-overlay" />
              <div className="path-content">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <div className="mini-link">{item.applications.slice(0, 2).join(" / ")}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
