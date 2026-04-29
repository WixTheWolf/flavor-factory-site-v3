import { siteCopy } from "@/data/site-copy";
<<<<<<< HEAD
import { Button } from "@/components/ui/Button";
=======
import { siteImages } from "@/data/site-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

const differentiators = [
  "Bakery • Confectionery • Dairy",
  "Nutraceutical • Oral Care • Pharma",
  "Popcorn • Syrup • Custom Programs",
] as const;
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker"><span className="hero-dot" />{siteCopy.heroKicker}</div>
          <h1 className="hero-title">{siteCopy.heroTitle}</h1>
          <p className="hero-text">{siteCopy.heroText}</p>
          <div className="hero-actions">
<<<<<<< HEAD
            <Button href="/flavors">Explore Flavors</Button>
            <Button href="/request-samples" variant="secondary">Request Samples</Button>
=======
            <Button href="/request-samples" variant="secondary">Request Samples</Button>
            <Button href="/flavors">Explore Flavors</Button>
          </div>
          <div className="showcase-pills" style={{ marginTop: 18 }}>
            <span className="soft-pill">Liquid & Powder</span>
            <span className="soft-pill">Low MOQ</span>
            <span className="soft-pill">Fast Lead Times</span>
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
          </div>
        </div>

        <div className="hero-media">
<<<<<<< HEAD
          <img src="/images/flavor-factory/hero-main.jpg" alt="Glossy flavor ingredients and formulation lab tools" />
          <div className="floating-tags">
            <div className="floating-tag light">Liquid & Powder</div>
            <div className="floating-tag brand">Low MOQ</div>
            <div className="floating-tag light">Fast Lead Times</div>
          </div>
          <div className="hero-bottom-cards">
            <div className="glass-card">Bakery • Confectionery • Dairy</div>
            <div className="glass-card">Nutraceutical • Oral Care • Pharma</div>
            <div className="glass-card">Popcorn • Syrup • Custom Programs</div>
=======
          <AppImage src={siteImages.homeHero} alt="Glossy flavor ingredients and formulation lab tools" style={{ objectPosition: "center 38%" }} />
          <div className="floating-tags">
            <div className="floating-tag light">Liquid & Powder</div>
            <div className="floating-tag brand">Low MOQ</div>
            <div className="floating-tag light">Responsive Support</div>
          </div>
          <div className="hero-bottom-cards">
            {differentiators.map((item) => (
              <div className="glass-card" key={item}>
                {item}
              </div>
            ))}
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
          </div>
        </div>
      </div>
    </section>
  );
}
