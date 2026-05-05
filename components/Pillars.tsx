const pillars = [
  {
    title: "Built for Real Formulas",
    copy: "We work inside the actual product - sweeteners, acids, proteins, fats, heat. Not just ideal conditions.",
  },
  {
    title: "Controlled Iteration",
    copy: "Tight development loops. Clear adjustments. No guessing between versions.",
  },
  {
    title: "Production-Ready",
    copy: "What works in the lab translates to the floor - repeatable, stable, scalable.",
  },
] as const;

export function Pillars() {
  return (
    <section className="new-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">What We Do</div>
          <h2>Flavor systems built around the product.</h2>
        </div>
        <div className="new-pillar-grid">
          {pillars.map((pillar) => (
            <article className="new-card new-pillar-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
