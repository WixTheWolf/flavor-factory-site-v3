import Link from "next/link";

const discoveryPaths = [
  {
    title: "Browse by direction",
    copy: "Use the flavor page to find common families, examples, and search terms before asking for the exact profile.",
    action: "Explore flavors",
    href: "/flavors",
  },
  {
    title: "Check the product fit",
    copy: "Different applications need different behavior. A gummy, syrup, icing, powder drink, and mouthwash do not use flavor the same way.",
    action: "View industries",
    href: "/industries",
  },
  {
    title: "Send a sharper request",
    copy: "A short brief with the target, format, label goal, and timeline helps us respond with samples that are closer from the first round.",
    action: "Request samples",
    href: "/request-samples",
  },
] as const;

export function RecommendationSection() {
  return (
    <section className="section home-discovery-section" style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">How To Start</div>
            <h2 className="section-title">Find the right door into the project.</h2>
            <p className="section-subtext" style={{ marginTop: 10, maxWidth: 760 }}>
              You do not need a finished formula to start a conversation. Use the site to narrow the direction, then bring us the product details that matter.
            </p>
          </div>
        </div>

        <div className="home-discovery-grid">
          {discoveryPaths.map((item) => (
            <article key={item.title} className="home-discovery-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <Link href={item.href}>{item.action}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
