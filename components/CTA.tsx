import { Button } from "@/components/Button";

export function CTA({
  eyebrow = "Start Your Project",
  title = "Tell Us About Your Product",
  body = "Share the application, target profile, and timeline. We'll help you find the right starting point.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-[#F4EFE5] px-6 pb-24 pt-6 md:px-10 md:pb-28 lg:px-16 lg:pb-32">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-[#12382B] p-9 text-white shadow-[0_24px_80px_rgba(18,56,43,0.18)] md:p-12 lg:p-14">
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#D9D1C3]">{eyebrow}</p>
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
