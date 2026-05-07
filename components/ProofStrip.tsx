const proofItems = [
  ["3-5 Days", "Sample lead time"],
  ["Family-Owned", "Norco, CA"],
  ["Liquid & Powder", "Both in-house"],
  ["Low MOQ", "No massive minimums"],
] as const;

export function ProofStrip() {
  return (
    <section className="new-proof">
      <div className="home-shell new-proof-grid">
        {proofItems.map(([value, label]) => (
          <div className="new-proof-item" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
