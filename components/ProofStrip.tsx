const proofItems = [
  ["3–5 Days", "From brief to sample"],
  ["Family-Owned", "Norco, CA — since day one"],
  ["Liquid & Powder", "Both systems, one team"],
  ["Low Minimums", "Start small. Scale fast."],
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
