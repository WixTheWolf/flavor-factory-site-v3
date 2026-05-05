import { Button } from "@/components/Button";

export function CTA({
  eyebrow = "Start Your Project",
  title = "Tell us about your product. We'll build something that works in it.",
  body = "Bring the product, the constraints, and the target. We will help move the flavor from idea to repeatable production.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-[#f7f4ee] px-6 pb-24 pt-6 md:px-10 md:pb-28 lg:px-16 lg:pb-32">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2.75rem] bg-[#b98745] p-9 text-white shadow-[0_34px_100px_rgba(120,82,35,0.2)] md:p-14 lg:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.22),transparent_28rem),linear-gradient(135deg,rgba(16,34,24,0.16),transparent_52%)]" />
        <div className="relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/72">{eyebrow}</p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{body}</p>
          <Button href="/contact" variant="light" className="mt-9">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
