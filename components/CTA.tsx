import { Button } from "@/components/Button";
import { ImagePanel } from "@/components/ImagePanel";

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
      <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[2.75rem] bg-[#102218] shadow-[0_34px_100px_rgba(16,34,24,0.2)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-9 text-white md:p-14 lg:p-16">
          <p className="eyebrow text-[#d2a45d]">{eyebrow}</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{body}</p>
          <Button href="/contact" variant="light" className="mt-9">
            Start a Project
          </Button>
        </div>
        <ImagePanel
          src="/images/flavor/hero-golden-splash.webp"
          alt="Amber liquid flavor splash in controlled studio light"
          className="min-h-[360px] rounded-none shadow-none lg:min-h-full"
          imageClassName="scale-110"
          tone="amber"
          sizes="(max-width: 1024px) calc(100vw - 48px), 50vw"
        />
      </div>
    </section>
  );
}
