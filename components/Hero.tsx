import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

export function Hero() {
  return (
    <section className="new-hero">
      <div className="home-shell new-hero-grid">
        <div className="new-hero-copy">
          <h1>Custom Flavor Systems Built for Real Products</h1>
          <p className="new-hero-text">
            The Flavor Factory develops and manufactures flavor systems for beverages, nutraceuticals, confections, dairy, savory, oral care, and more.
            First sample to production scale.
          </p>
          <div className="new-actions">
            <Button href="/request-samples">Start a Project</Button>
            <Button href="/capabilities" variant="secondary">Explore Capabilities</Button>
          </div>
          <div className="new-hero-trust">
            3-5 day sample lead times <span /> Norco, CA <span /> Kosher, Halal, GMP, FDA Registered <span /> Low minimums
          </div>
        </div>
        <div className="new-hero-image" aria-label="Liquid flavor and ingredient detail">
          <AppImage
            src="/images/flavor-factory/Hero-main-pour.jpg"
            alt="Amber liquid flavor being poured with controlled studio lighting"
            priority
            sizes="(max-width: 980px) calc(100vw - 40px), 48vw"
            style={{ objectPosition: "center center" }}
          />
        </div>
      </div>
    </section>
  );
}
