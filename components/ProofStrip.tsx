const proofItems = [
  "10,000+ batches produced",
  "6,000+ raw materials handled",
  "Multi-category production: beverage, nutraceutical, confectionery, dairy, savory",
  "Repeat production with consistent batch performance",
] as const;

export function ProofStrip() {
  return (
    <section className="new-proof">
      <div className="home-shell new-proof-grid">
        {proofItems.map((item) => (
          <div className="new-proof-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
