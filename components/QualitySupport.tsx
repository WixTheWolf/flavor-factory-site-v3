import Link from "next/link";
import { AppImage } from "@/components/ui/AppImage";

const items = [
  { label: "SQF Facility", note: "Reviewed by project" },
  { label: "GMP Practices", note: "Facility practices" },
  { label: "FDA Registered Facility", note: "Regulatory" },
  { label: "Kosher & Halal Options", note: "Available by project" },
  { label: "Organic-Compliant Options", note: "Available by project" },
  { label: "COAs", note: "Documentation available where applicable" },
  { label: "Allergen Documentation", note: "Documentation available where applicable" },
] as const;

export function QualitySupport() {
  return (
    <section className="quality-support-section">
      <div className="home-shell">
        <div className="quality-support-head">
          <div>
            <div className="new-eyebrow">Quality, Documentation & Production Support</div>
            <h2>Your label sets the rules. We work within them.</h2>
            <p>
              Certification and documentation needs are reviewed by project. Not every option applies to every product.
            </p>
          </div>
          <Link className="new-inline-cta" href="/certifications">Review documentation support</Link>
        </div>
        <div className="quality-support-grid">
          {items.map((item) => (
            <div key={item.label} className="quality-support-card">
              <strong>{item.label}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
        <div className="quality-support-badges" aria-label="Certifications and facility programs">
          <AppImage
            src="/images/flavor-factory/certifications-transparent.png"
            alt="Facility, quality, kosher, halal, organic-compliant, and FDA registration program badges"
            fill={false}
            width={2172}
            height={724}
            sizes="(max-width: 900px) calc(100vw - 32px), 860px"
          />
        </div>
      </div>
    </section>
  );
}
