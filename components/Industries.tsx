import { AppImage } from "@/components/ui/AppImage";
import Link from "next/link";
import { industries } from "@/data/industries";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Industries() {
  return (
    <section className="new-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Industries</div>
          <h2>Built for the application.</h2>
          <p>Each product has its own process, base, label, and sensory requirements.</p>
        </div>
        <RevealGroup className="new-industry-grid" stagger={0.06}>
          {industries.map((industry) => (
            <RevealItem key={industry.key}>
              <Link className="new-industry-card" href={`/industries/${industry.key}`}>
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
            </RevealItem>
          ))}
        </RevealGroup>
        <Link className="new-inline-cta" href="/industries">View all industries</Link>
      </div>
    </section>
  );
}
