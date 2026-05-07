import { Button } from "@/components/ui/Button";

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
