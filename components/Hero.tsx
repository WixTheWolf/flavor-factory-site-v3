import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/HeroVideo";
import { Logo } from "@/components/ui/Logo";

export function Hero() {
  const trustItems = [
    "Family-owned in Norco, California",
    "First samples in 3–5 business days",
    "Liquid and powder flavors",
    "Low minimums",
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
          <h1 className="display">Good on the Bench Is Not Good Enough.</h1>
          <p className="new-hero-text">
            We are a family-owned flavor manufacturer in Norco, California. Our team develops and produces custom liquid and powder flavors for the product you are actually making—your base, process, label, and production needs.
          </p>
          <div className="new-actions">
            <Button href="/request-samples">Request Samples</Button>
            <Button href="/flavors" variant="secondary">Browse Flavors</Button>
          </div>
          <ul className="new-hero-trust" aria-label="Key company facts">
            {trustItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
