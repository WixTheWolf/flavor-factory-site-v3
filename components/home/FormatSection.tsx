const capabilities = [
  {
    title: "Liquid flavor systems",
    copy: "Built for beverage, syrup, dairy, confectionery, and process-sensitive applications where clarity and impact matter.",
  },
  {
    title: "Powder flavor systems",
    copy: "Designed for dry blends, nutraceuticals, pharmaceutical formats, bakery mixes, seasonings, and shelf-stable products.",
  },
  {
    title: "Custom and matching",
    copy: "Bring a benchmark, a flavor memory, or a rough direction. We can match, reformulate, or create a signature profile.",
  },
  {
    title: "Practical sample support",
    copy: "Low minimums, fast sample help, and a development path that stays connected to the product you are launching.",
  },
] as const;

export function FormatSection() {
  return (
    <section className="home-capability-section">
      <div className="container home-capability-layout">
        <div className="home-capability-copy">
          <div className="eyebrow">Formats & Development</div>
          <h2>Flavor support built around real production decisions.</h2>
          <p>
            Most profiles can be developed in liquid, powder, natural, natural and artificial, or custom formats depending on the project.
          </p>
        </div>

        <div className="home-capability-grid">
          {capabilities.map((item) => (
            <article className="home-capability-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
