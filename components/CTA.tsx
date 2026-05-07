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
  title = "Tell Us About Your Product",
  copy = "Share the application, target profile, and timeline. Samples typically ship within 3-5 business days.",
  href = "/request-samples",
  label = "Start a Project",
}: CTAProps) {
  return (
    <section className="new-section new-final-cta">
      <div className="home-shell new-final-cta-inner">
        <div className="cta-accent-image" aria-hidden="true">
          <AppImage
            src="/images/flavor-factory/flavors-liquid-splash-transparent-no-border.png"
            alt=""
            fill={false}
            width={440}
            height={440}
            sizes="220px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <div className="new-eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Button href={href}>{label}</Button>
      </div>
    </section>
  );
}
