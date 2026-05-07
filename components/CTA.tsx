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
  eyebrow = "Start Your Project",
  title = "Your next flavor starts with the brief.",
  copy = "Application, base, format, and label goals — that is enough to get started. Samples typically ship in 3–5 business days.",
  href = "/request-samples",
  label = "Start a Project",
}: CTAProps) {
  return (
    <section className="new-section new-final-cta">
      <div className="home-shell new-final-cta-inner">
        <div className="new-final-cta-bg" aria-hidden="true">
          <AppImage
            src="/images/flavor-factory/12.%20CTA%20Section%20%E2%80%94%20Background.png"
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
