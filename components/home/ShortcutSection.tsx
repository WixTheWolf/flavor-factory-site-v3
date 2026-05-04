const proofPoints = [
  { value: "40+", label: "years of combined industry experience" },
  { value: "1000s", label: "flavor directions and starting points" },
  { value: "3-5", label: "business day order lead-time targets" },
  { value: "Low", label: "minimum order policy" },
] as const;

export function ShortcutSection() {
  return (
    <section className="section home-proof-section" style={{ paddingTop: 22 }}>
      <div className="container home-proof-grid">
        {proofPoints.map((item) => (
          <article key={item.label} className="home-proof-card">
            <div>{item.value}</div>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
