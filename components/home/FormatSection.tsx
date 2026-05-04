const capabilities = [
  {
    title: "Liquid flavor systems",
    copy: "For beverages, syrups, dairy, confectionery, oral care, and applications where clarity, solubility, and impact matter.",
  },
  {
    title: "Powder flavor systems",
    copy: "For dry blends, nutraceuticals, bakery mixes, seasonings, pharmaceutical formats, and shelf-stable products.",
  },
  {
    title: "Custom and matching",
    copy: "Bring a benchmark, flavor target, or rough direction. We can match, reformulate, or create a signature profile.",
  },
  {
    title: "Sample support",
    copy: "Low minimums, clear communication, and sample work that stays tied to the product you plan to launch.",
  },
] as const;

export function FormatSection() {
  return (
    <section className="home-capability-section">
      <div className="container home-capability-layout">
        <div className="home-capability-copy">
          <div className="eyebrow">Formats & Applications</div>
          <h2>Manufactured for the way the product works.</h2>
          <p>
            Most profiles can be developed as liquid, powder, natural, natural and artificial, or custom formats depending on the application and label goals.
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
