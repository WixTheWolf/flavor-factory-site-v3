const capabilities = [
  {
    title: "Liquid flavor systems",
    copy: "For beverages, syrups, dairy, confectionery, oral care, and other applications where clarity, solubility, and impact matter.",
  },
  {
    title: "Powder flavor systems",
    copy: "For dry blends, nutraceuticals, bakery mixes, seasoning systems, pharmaceutical formats, and shelf-stable products.",
  },
  {
    title: "Natural, N&A, and artificial",
    copy: "Develop around natural, natural and artificial, artificial, or custom requirements depending on the project and label goals.",
  },
  {
    title: "Custom and matching",
    copy: "Bring a benchmark, current flavor, flavor target, or rough direction. We can match, reformulate, or create a profile for your product.",
  },
] as const;

export function FormatSection() {
  return (
    <section className="home-capability-section">
      <div className="container home-capability-layout">
        <div className="home-capability-copy">
          <div className="eyebrow">Capabilities</div>
          <h2>Flavor solutions built around the application.</h2>
          <p>
            We develop and manufacture flavors in the form, strength, and declaration that make sense for the finished product.
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
