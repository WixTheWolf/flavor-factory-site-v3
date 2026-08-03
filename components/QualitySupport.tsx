import Link from "next/link";

const items = [
  { label: "SQF Facility", note: "Food safety and quality program" },
  { label: "FDA Registered Facility", note: "Norco manufacturing facility" },
  { label: "GMP Practices", note: "Production and handling controls" },
  { label: "Certification Options", note: "Kosher, Halal, and organic-compliant by project" },
  { label: "Production Documents", note: "COAs, specifications, and allergen statements" },
] as const;

export function QualitySupport() {
  return (
    <section className="quality-support-section">
      <div className="home-shell">
        <div className="quality-support-head">
          <div>
            <div className="new-eyebrow">Quality & Documentation</div>
            <h2>Handled early, not after approval.</h2>
            <p>We review certification and document needs at the start of each project.</p>
          </div>
          <Link className="new-inline-cta" href="/certifications">View quality support</Link>
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
