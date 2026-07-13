import Link from "next/link";

const proofPoints = [
  {
    title: "Faster path to an approvable sample",
    copy: "Direct access to the development and production team means fewer handoffs and clearer revision notes between rounds.",
  },
  {
    title: "Built for finished-product performance",
    copy: "Projects are scoped around base, processing, label goals, and scale-up constraints instead of generic library pulls.",
  },
  {
    title: "Documentation when procurement needs it",
    copy: "COAs, allergen statements, spec sheets, and supplier qualification support are available for approved production flavors.",
  },
] as const;

export function SocialProof() {
  return (
    <section className="new-section social-proof-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div>
            <div className="new-eyebrow">Why teams switch</div>
            <h2>What customers value after working with larger flavor houses.</h2>
          </div>
          <p>We do not publish customer logos. These are the outcomes teams most often mention once a project is underway.</p>
        </div>
        <div className="social-proof-grid">
          {proofPoints.map((item) => (
            <article className="social-proof-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <p className="social-proof-footnote">
          Want more context before you submit a brief? Read <Link href="/case-studies">representative challenges</Link> or leave a note on our{" "}
          <a href="https://g.page/r/CcU-wmxp3I0XEBM/review" target="_blank" rel="noopener noreferrer">Google profile</a>.
        </p>
      </div>
    </section>
  );
}