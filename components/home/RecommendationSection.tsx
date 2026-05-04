import Link from "next/link";

const discoveryPaths = [
  {
    title: "Start with the flavor",
    copy: "Search common directions, browse families, or bring us a flavor target you already have in mind.",
    action: "Explore flavors",
    href: "/flavors",
  },
  {
    title: "Tell us the application",
    copy: "Bakery, beverage, confectionery, dairy, nutraceutical, oral care, pharmaceutical, syrup, popcorn, or savory. The product tells us what the flavor needs to do.",
    action: "View industries",
    href: "/industries",
  },
  {
    title: "Move into samples",
    copy: "Send the benchmark, format, declaration, use level if known, and timeline. We will help shape the sample path.",
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
            <h2 className="section-title">From flavor idea to useful sample.</h2>
            <p className="section-subtext" style={{ marginTop: 10, maxWidth: 760 }}>
              Some customers start with a profile name. Others start with a product problem. Either way, we help make the next step clear.
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
