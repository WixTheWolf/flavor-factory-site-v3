import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

export function Hero() {
  return (
    <section className="new-hero">
      <div className="home-shell new-hero-grid">
        <div className="new-hero-copy">
          <div className="new-eyebrow">Custom Flavor Manufacturer</div>
          <h1>Flavor That Carries the Product</h1>
          <p className="new-hero-lede">Built for real formulas. Scaled for real production.</p>
          <p className="new-hero-text">From first concept to repeat orders - clean, controlled, predictable.</p>
          <div className="new-actions">
            <Button href="/request-samples">Start a Project</Button>
            <Button href="#capabilities" variant="secondary">View Capabilities</Button>
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
