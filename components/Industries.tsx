import { AppImage } from "@/components/ui/AppImage";
import Link from "next/link";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="new-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Industries</div>
          <h2>Every application has its own rules. We know them.</h2>
        </div>
        <div className="new-industry-grid">
          {industries.map((industry) => (
            <Link className="new-industry-card" href="/industries" key={industry.key}>
              <div className="new-industry-image">
                <AppImage
                  src={industry.heroImage}
                  alt={`${industry.name} application detail`}
                  sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) 45vw, 25vw"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="new-industry-copy">
                <h3>{industry.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <Link className="new-inline-cta" href="/industries">See all industries →</Link>
      </div>
    </section>
  );
}
