const capabilities = [
  {
    title: "Liquid flavors",
    copy: "Useful for syrups, beverages, dairy, confectionery, oral care, and other products where dispersion and impact are key.",
  },
  {
    title: "Powder flavors",
    copy: "Built for dry mixes, nutraceutical powders, bakery systems, seasonings, pharmaceutical formats, and other dry applications.",
  },
  {
    title: "Declaration paths",
    copy: "Natural, natural and artificial, artificial, kosher, halal, and project-specific requirements can be reviewed early.",
  },
  {
    title: "Library or custom",
    copy: "Start from a common direction when it fits, or move into matching and custom development when the product needs it.",
  },
] as const;

export function FormatSection() {
  return (
    <section className="home-capability-section">
      <div className="container home-capability-layout">
        <div className="home-capability-copy">
          <div className="eyebrow">Formats</div>
          <h2>Choose the form before chasing the perfect note.</h2>
          <p>
            A strong flavor direction still has to be delivered in the right way. Format, carrier, strength, and declaration affect how the profile behaves.
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
