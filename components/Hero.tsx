import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/HeroVideo";

export function Hero() {
  return (
    <section className="new-hero">
      <HeroVideo
        src={{ type: "local", prefix: "/hero/hero" }}
        poster="/hero/hero-poster.jpg"
        overlayStrength="medium"
      />
      <div className="home-shell new-hero-content">
        <div className="new-hero-copy">
          <h1 className="display">Good on the Bench Is Not Good Enough.</h1>
          <p className="new-hero-text">
            We develop liquid and powder flavors around how your product actually performs — in your base, at your processing temperature, on your label.
          </p>
          <div className="new-actions">
            <Button href="/request-samples">Request a Sample</Button>
            <Button href="/capabilities" variant="secondary">See How It Works</Button>
          </div>
          <div className="new-hero-trust">
            3-5 day samples <span /> Family-owned, Norco, CA <span /> SQF Facility <span /> GMP Practices <span /> Kosher &amp; Halal Options <span /> Organic-Compliant Capabilities <span /> FDA Registered Facility <span /> Low minimums
          </div>
        </div>
      </div>
    </section>
  );
}
