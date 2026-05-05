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
      <div className="relative mx-auto max-w-[1320px] overflow-hidden bg-[#0d2b1b] p-9 text-white shadow-[0_24px_80px_rgba(16,34,24,0.2)] md:p-12 lg:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(210,164,93,0.18),transparent_26rem),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_52%)]" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a45d]">{eyebrow}</p>
            <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">{body}</p>
          </div>
          <Button href="/contact" variant="light">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
