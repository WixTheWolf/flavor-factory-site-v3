import Link from "next/link";

const problems = [
  {
    title: "Tastes good in water, fails in the product",
    pain: "A profile can seem strong on the bench, then disappear in the actual base.",
    approach: "We build around your base, use level, process, and finished-product target.",
    href: "/custom-liquid-flavors",
  },
  {
    title: "Bitter actives or proteins overpower the flavor",
    pain: "Proteins, vitamins, minerals, botanicals, caffeine, and creatine can leave harsh or lingering notes.",
    approach: "We balance masking, sweetness, acidity, flavor impact, and finish together.",
    href: "/masking-and-modulation",
  },
  {
    title: "Heat or processing weakens the profile",
    pain: "Top notes can fade during baking, heating, drying, or production.",
    approach: "We account for finished-product perception after process exposure.",
    href: "/bakery-flavors",
  },
  {
    title: "Supplier match or replacement needed",
    pain: "A discontinued, expensive, or underperforming flavor can slow production.",
    approach: "We match the finished-product experience, not just the aroma in a cup.",
    href: "/flavor-matching",
  },
  {
    title: "Label goals changed",
    pain: "Natural, organic-compliant, kosher, halal, N&A, or artificial requirements can change the formulation path.",
    approach: "We identify label constraints early so the sample direction fits the project.",
    href: "/organic-compliant-flavors",
  },
  {
    title: "Sample approved, production struggles",
    pain: "A good sample still has to become something repeatable.",
    approach: "We keep development and production connected for a cleaner handoff.",
    href: "/process",
  },
] as const;

export function FlavorProblems() {
  return (
    <section className="new-section flavor-problems-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Flavor Problems We Help Solve</div>
          <h2>The finished product tells us what the flavor needs to do.</h2>
          <p>
            A clear brief gives the first sample a real job. These are the kinds of constraints we build around every day.
          </p>
        </div>
        <div className="flavor-problems-grid">
          {problems.map((problem) => (
            <article key={problem.title}>
              <h3>{problem.title}</h3>
              <p className="fp-pain">{problem.pain}</p>
              <p className="fp-approach">{problem.approach}</p>
              <Link href={problem.href} className="fp-link">
                Discuss this problem
              </Link>
            </article>
          ))}
        </div>
        <div className="flavor-problems-cta">
          <p>Have a similar flavor problem?</p>
          <Link className="cta-btn" href="/request-samples">Start a Flavor Brief</Link>
        </div>
      </div>
    </section>
  );
}
