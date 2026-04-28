import { siteCopy } from "@/data/site-copy";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker"><span className="hero-dot" />{siteCopy.heroKicker}</div>
          <h1 className="hero-title">{siteCopy.heroTitle}</h1>
          <p className="hero-text">{siteCopy.heroText}</p>
          <div className="hero-actions">
            <Button href="/flavors">Explore Flavors</Button>
            <Button href="/request-samples" variant="secondary">Request Samples</Button>
          </div>
          <div className="showcase-pills" style={{ marginTop: 18 }}>
            <span className="soft-pill">Liquid & Powder</span>
            <span className="soft-pill">Low MOQ</span>
            <span className="soft-pill">Fast Lead Times</span>
          </div>
        </div>

        <div className="hero-media">
          <img src="/images/flavor-factory/hero-main.jpg" alt="Premium ingredient and flavor lab visuals" />
          <div className="hero-media-badge">Built for Bakery • Confectionery • Nutraceutical • Oral Care • Pharmaceutical</div>
        </div>
      </div>
    </section>
  );
}
