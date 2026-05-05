import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="new-section new-final-cta">
      <div className="home-shell new-final-cta-inner">
        <div>
          <div className="new-eyebrow">Start Your Project</div>
          <h2>Tell us about your product. We&apos;ll build something that works in it.</h2>
        </div>
        <Button href="/request-samples">Start a Project</Button>
      </div>
    </section>
  );
}
