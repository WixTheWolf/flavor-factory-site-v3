import { siteCopy } from "@/data/site-copy";
import { siteImages } from "@/data/site-images";
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
        </div>

        <div className="hero-media">
          <img src={siteImages.homeHero} alt="Glossy flavor ingredients and formulation lab tools" />
          <div className="floating-tags">
            <div className="floating-tag light">Liquid & Powder</div>
            <div className="floating-tag brand">Low MOQ</div>
            <div className="floating-tag light">Fast Lead Times</div>
          </div>
          <div className="hero-bottom-cards">
            <div className="glass-card">Bakery • Confectionery • Dairy</div>
            <div className="glass-card">Nutraceutical • Oral Care • Pharma</div>
            <div className="glass-card">Popcorn • Syrup • Custom Programs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
