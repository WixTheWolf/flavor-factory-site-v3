const reasons = [
  {
    title: "Practical First",
    copy: "Everything is built around how the product is actually made.",
  },
  {
    title: "Clear Communication",
    copy: "No black box. You know what is happening and what is next.",
  },
  {
    title: "Follow-Through",
    copy: "Samples, revisions, and production stay organized and on track.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="new-section">
      <div className="home-shell">
        <div className="new-section-head">
          <div className="new-eyebrow">Why The Flavor Factory</div>
          <h2>A lab that understands products - and delivers results that hold up.</h2>
        </div>
        <div className="new-why-grid">
          {reasons.map((reason) => (
            <article className="new-card" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
