import Link from "next/link";

const discoveryPaths = [
  {
    title: "Find the direction",
    copy: "Search by profile, family, application, declaration, or use case. The library is a starting point, not the limit.",
    action: "Open finder",
    href: "/flavors",
  },
  {
    title: "Tell us the product",
    copy: "Bakery, beverage, nutraceutical, oral care, pharma, popcorn, syrup, savory. The application changes the flavor path.",
    action: "View industries",
    href: "/industries",
  },
  {
    title: "Move into samples",
    copy: "Send the benchmark, target, format, and timeline. We will help choose the most useful starting profiles.",
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
            <div className="eyebrow">How To Use The Site</div>
            <h2 className="section-title">Get from flavor idea to sample request faster.</h2>
            <p className="section-subtext" style={{ marginTop: 10, maxWidth: 760 }}>
              Buyers do not all start in the same place. Use whichever path matches what you know today.
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
