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
  eyebrow = "Request a Sample",
  title = "Tell us where to send it.",
  copy = "Start with your name, email, and shipping address. Add whatever project details you already know, and a real person from our team will follow up.",
  href = "/request-samples",
  label = "Request a Sample",
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
