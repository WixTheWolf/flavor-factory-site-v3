import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/HeroVideo";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  const trustItems = [
    "Family-owned in Norco, California",
    "First samples in 3–5 business days",
    "Low minimums",
    "Development and production under one roof",
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
          <Logo className="hero-brand-logo" />
          <div className="new-eyebrow">Good on the bench is not good enough.</div>
          <h1 className="display">Custom liquid and powder flavors built for your finished product.</h1>
          <p className="new-hero-text">
            We help brands and manufacturers develop new profiles, match or replace existing flavors, mask difficult ingredients, and move approved work into production.
          </p>
          <div className="new-actions">
            <Button href="/request-samples">Request a Sample</Button>
          </div>
          <Link className="new-hero-tertiary" href="/flavors">Browse Flavors</Link>
          <ul className="new-hero-trust" aria-label="Key company facts">
            {trustItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
