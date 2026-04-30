import Link from "next/link";

const discoveryPaths = [
  {
    title: "Start with a flavor family",
    copy: "Explore citrus, berry, tropical, vanilla, brown notes, mint, botanical, savory, and custom directions.",
    action: "Open flavor finder",
    href: "/flavors",
  },
  {
    title: "Build around the application",
    copy: "Tell us whether the profile needs to work in bakery, confectionery, dairy, oral care, nutraceutical, syrup, popcorn, or another system.",
    action: "View industries",
    href: "/industries",
  },
  {
    title: "Move from sample to scale",
    copy: "Use our team for custom development, matching, reformulation, and practical production support.",
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
            <div className="eyebrow">How Buyers Start</div>
            <h2 className="section-title">Find the right profile without getting lost in a catalog.</h2>
            <p className="section-subtext" style={{ marginTop: 10, maxWidth: 760 }}>
              A flavor brief can start from a taste, a product format, a benchmark, or a finished-product problem. We built the site around those real paths.
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
