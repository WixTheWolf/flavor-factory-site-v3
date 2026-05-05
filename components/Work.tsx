const outcomes = [
  "Neutral base -> bright citrus profile with reduced bitterness",
  "Protein drink -> masked off-notes, cleaner finish",
  "Heat-processed sauce -> stable flavor through cook cycle",
] as const;

export function Work() {
  return (
    <section className="new-section new-work">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Selected Work</div>
          <h2>Output tied to real product behavior.</h2>
        </div>
        <div className="new-work-list">
          {outcomes.map((outcome) => (
            <div key={outcome}>{outcome}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
