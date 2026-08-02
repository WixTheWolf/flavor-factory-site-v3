import Link from "next/link";

const items = [
  { label: "SQF Facility", note: "Facility quality program" },
  { label: "FDA Registered Facility", note: "Regulatory support" },
  { label: "GMP Practices", note: "Plant and production controls" },
  { label: "Kosher, Halal & Organic-Compliant Options", note: "Available by project" },
  { label: "COAs, Specifications & Allergen Documents", note: "Available where applicable" },
] as const;

export function QualitySupport() {
  return (
    <section className="quality-support-section">
      <div className="home-shell">
        <div className="quality-support-head">
          <div>
            <div className="new-eyebrow">Quality & Documentation</div>
            <h2>The paperwork matters, too.</h2>
            <p>
              We provide the documents your quality and purchasing teams need, and we review certification requirements for each project before development begins.
            </p>
          </div>
          <Link className="new-inline-cta" href="/certifications">See quality and documentation</Link>
        </div>
        <div className="quality-support-grid">
          {items.map((item) => (
            <div key={item.label} className="quality-support-card">
              <strong>{item.label}</strong>
              <span>{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
