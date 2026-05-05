import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";

const capabilities = [
  ["Flavor Development", "Custom flavor creation for any application."],
  ["Liquid & Powder Flavors", "Versatile formats for every manufacturing need."],
  ["Masking & Modulation", "Work with off-notes and refine taste with precision."],
  ["Natural & Artificial Solutions", "Tailored to your label, cost, and performance needs."],
  ["Heat-Stable & Process-Ready", "Built to withstand real-world processing conditions."],
  ["Small Batch to Full Scale", "From lab samples to full-scale production with consistency."],
] as const;

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="Our Capabilities"
        title="Built for your product."
        body="From concept to production, we deliver flavor systems that are structured, scalable, and built for your product."
        image="/images/flavor/capabilities-tank-hero-wide.webp"
        imageAlt="Stainless tanks in a clean production environment"
      />

      <section className="bg-[#f7f4ee] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">What We Make</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Precise systems, clean handoff.</h2>
          </div>
          <div className="divide-y divide-[#102218]/10 border-y border-[#102218]/10">
            {capabilities.map(([title, body]) => (
              <article key={title} className="grid gap-4 py-7 md:grid-cols-[0.42fr_1fr]">
                <h3 className="text-base font-semibold text-[#102218]">{title}</h3>
                <p className="text-sm leading-6 text-[#566257]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102218] px-6 py-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <ImagePanel src="/images/flavor/production-lab-filling.webp" alt="Flavor filling equipment in controlled light" className="min-h-[440px] rounded-none shadow-none" />
          <div>
            <p className="eyebrow text-[#d2a45d]">From Lab to Scale</p>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-[-0.035em] md:text-5xl">No black box. No loose handoff.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
              Development, sample review, and production planning stay connected so approved work can move cleanly into repeatable orders.
            </p>
          </div>
        </div>
      </section>

      <CTA eyebrow="Have a Unique Challenge?" title="We can help solve the flavor problem." />
    </main>
  );
}
