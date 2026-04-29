const proofPoints = [
  { label: "3–5 day sample lead times", copy: "Fast iteration cycles for active product teams." },
  { label: "Low MOQ support", copy: "Pilot, launch, and scale with more flexibility." },
  { label: "Liquid + powder capability", copy: "One partner across formats and applications." },
] as const;

export function ProofBandSection() {
  return (
    <section className="section" style={{ paddingTop: 8, paddingBottom: 8 }}>
      <div className="container strength-grid three-col">
        {proofPoints.map((point) => (
          <article key={point.label} className="strength-card">
            <div className="eyebrow">Proof</div>
            <h3 style={{ marginTop: 8 }}>{point.label}</h3>
            <p style={{ marginTop: 8 }}>{point.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
