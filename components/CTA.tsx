import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  href?: string;
  label?: string;
};

export function CTA({
  eyebrow = "Ready to talk flavor?",
  title = "Tell us what you are making.",
  copy = "A few details about the product, base, flavor direction, and timing are enough to get started. A real person from our team will follow up.",
  href = "/request-samples",
  label = "Start a Project",
}: CTAProps) {
  return (
    <section className="new-section new-final-cta">
      <div className="home-shell new-final-cta-inner">
        <div className="new-final-cta-bg" aria-hidden="true">
          <AppImage
            src="/images/flavor-factory/cta-background.png"
            alt=""
            sizes="(max-width: 900px) calc(100vw - 48px), min(1280px, calc(100vw - 56px))"
            style={{ objectPosition: "60% center" }}
          />
        </div>
        <div className="new-final-cta-content">
          <div className="new-eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Button href={href}>{label}</Button>
      </div>
    </section>
  );
}
