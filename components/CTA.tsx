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
  eyebrow = "Request Samples",
  title = "Tell us what you are making.",
  copy = "Share the application, flavor direction, and a few project details. A real person from our team will review it and follow up.",
  href = "/request-samples",
  label = "Request Samples",
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
