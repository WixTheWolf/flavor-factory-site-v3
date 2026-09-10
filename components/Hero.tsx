import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/HeroVideo";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  const trustItems = [
    "3-5 Day First Samples",
    "Family-Owned in Norco, CA",
    "Liquid & Powder Flavors",
    "Low Minimums",
    "Kosher, Halal & Organic-Compliant Options",
  ] as const;

  return (
    <section className="new-hero">
      <HeroVideo
        src={{ type: "local", prefix: "/hero/hero" }}
        poster="/hero/hero-poster.jpg"
        overlayStrength="medium"
      />
      <div className="home-shell new-hero-content">
        <div className="new-hero-copy">
          <Logo
            className="hero-brand-logo"
            style={{
              background: "rgba(255, 255, 255, 0.92)",
              borderRadius: 18,
              padding: "12px 16px",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.14)",
            }}
          />
          <h1 className="display">Good on the Bench Is Not Good Enough.</h1>
          <p className="new-hero-text">
            Custom liquid and powder flavors developed for your finished product: your base, process, label goals, and production path.
          </p>
          <div className="new-actions">
            <Button href="/request-samples">Request a Custom Sample</Button>
            <Button href="/capabilities" variant="secondary">See How It Works</Button>
          </div>
          <Link className="new-hero-tertiary" href="/flavors">Explore Flavor Library</Link>
          <ul className="new-hero-trust" aria-label="Key company facts">
            {trustItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
