import { siteCopy } from "@/data/site-copy";
import { siteImages } from "@/data/site-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

const differentiators = [
  "Thousands of flavor starting points",
  "Custom, matching, and signature profiles",
  "Low minimums with fast sample support",
] as const;

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="home-editorial-hero">
          <AppImage
            src={siteImages.homeHero}
            alt="Glossy flavor ingredients and formulation lab tools"
            priority
            sizes="min(1600px, calc(100vw - 48px))"
            style={{ objectPosition: "center 38%" }}
          />
          <div className="home-hero-overlay" />
          <div className="home-hero-content">
            <div className="hero-kicker"><span className="hero-dot" />{siteCopy.heroKicker}</div>
            <h1 className="hero-title">{siteCopy.heroTitle}</h1>
            <p className="hero-text">
              {siteCopy.heroText}
            </p>
            <div className="hero-actions">
              <Button href="/request-samples" variant="secondary">Request Samples</Button>
              <Button href="/flavors">Explore Flavors</Button>
            </div>
          </div>
          <div className="hero-bottom-cards">
            {differentiators.map((item) => (
              <div className="glass-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
