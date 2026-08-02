import Link from "next/link";

const problems = [
  {
    title: "The flavor disappears in the finished product",
    text: "A profile may taste right in water, then get buried by the real base, sweetener, fat, protein, or process.",
    href: "/custom-liquid-flavors",
  },
  {
    title: "Actives leave a bitter or lingering finish",
    text: "We work with proteins, vitamins, minerals, botanicals, caffeine, creatine, and other difficult ingredients.",
    href: "/masking-and-modulation",
  },
  {
    title: "You need to match or replace a flavor",
    text: "We can help when a flavor is discontinued, too expensive, inconsistent, or simply not performing well enough.",
    href: "/flavor-matching",
  },
  {
    title: "The sample works, but production does not",
    text: "Development and manufacturing happen in the same facility, so the handoff from sample to production stays practical.",
    href: "/process",
  },
] as const;

export function FlavorProblems() {
  return (
    <section className="new-section flavor-problems-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Common Projects</div>
          <h2>Most customers come to us with a specific problem to solve.</h2>
          <p>
            Tell us what you are making, what is getting in the way, and what the finished product needs to taste like.
          </p>
        </div>
        <div className="flavor-problems-grid">
          {problems.map((problem, index) => (
            <article key={problem.title}>
              <span className="fp-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{problem.title}</h3>
              <p className="fp-pain">{problem.text}</p>
              <Link href={problem.href} className="fp-link">Learn more</Link>
            </article>
          ))}
        </div>
        <div className="flavor-problems-cta">
          <p>Have a project in mind?</p>
          <Link className="cta-btn" href="/request-samples">Request a Sample</Link>
        </div>
      </div>
    </section>
  );
}
