import Link from "next/link";

const problems = [
  {
    title: "Flavor fades in the finished product",
    text: "We build around the real base, process, sweetener system, and use level.",
    href: "/custom-liquid-flavors",
  },
  {
    title: "Actives create bitterness or off-notes",
    text: "We balance masking, sweetness, acidity, impact, and finish together.",
    href: "/masking-and-modulation",
  },
  {
    title: "A current flavor needs to be matched or replaced",
    text: "We work from the finished-product experience and the constraints that matter now.",
    href: "/flavor-matching",
  },
  {
    title: "An approved sample needs a clean production path",
    text: "Development and manufacturing stay connected in the same Norco facility.",
    href: "/process",
  },
] as const;

export function FlavorProblems() {
  return (
    <section className="new-section flavor-problems-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Common Projects</div>
          <h2>Bring us the product problem.</h2>
          <p>We build the flavor around the application, process, target profile, and label requirements.</p>
        </div>
        <div className="flavor-problems-grid">
          {problems.map((problem) => (
            <article key={problem.title}>
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
