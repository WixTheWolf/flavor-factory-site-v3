import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const loop = [
  ["Concept Development", "Translate the product goal into a clear flavor direction and development path."],
  ["Sample Creation", "Build initial liquid or powder samples with the application and constraints in mind."],
  ["Flavor Adjustment", "Refine sweetness, impact, top notes, finish, masking, and balance through focused revisions."],
  ["Scale-Up Support", "Prepare the approved direction for manufacturing and repeatable production."],
  ["Manufacturing", "Produce liquid and powder flavor systems for real orders, not just lab demos."],
  ["Customer Follow-Through", "Keep communication, sample status, and next steps organized throughout the project."],
] as const;

const support = [
  "Natural, artificial, and custom flavor systems",
  "Masking and modulation",
  "Heat-stable and process-ready formulations",
  "Sweetener, acid, protein, fat, and active compatibility",
  "Small batch development to full production",
  "Organized revisions and production handoff",
] as const;

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <PageHero
        eyebrow="Capabilities"
        title="Built for the full flavor development loop."
        body="The Flavor Factory supports the practical work between idea and production: concept direction, sample development, adjustment, scale-up, and manufacturing."
        image="/images/flavor/capabilities-tank-hero-wide.webp"
        imageAlt="Stainless tanks in a clean flavor manufacturing environment"
      />

      <SectionShell
        eyebrow="Development Loop"
        title="A controlled path from first idea to repeat order."
        intro="Each stage is designed to reduce ambiguity and keep the flavor tied to the real product."
      >
        <div className="divide-y divide-[#12382B]/10 overflow-hidden rounded-[2rem] border border-[#12382B]/10 bg-white/62">
          {loop.map(([title, body], index) => (
            <article key={title} className="grid gap-5 p-7 md:grid-cols-[0.16fr_0.34fr_1fr] md:p-8">
              <p className="font-serif text-4xl text-[#C6843A]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-[#12382B]">{title}</h2>
              <p className="text-sm leading-7 text-[#645f55]">{body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <section className="bg-[#12382B] px-6 py-24 text-white md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <ImagePanel
            src="/images/flavor/production-lab-filling.webp"
            alt="Flavor production filling equipment in controlled light"
            className="min-h-[430px] shadow-none"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9D1C3]">Manufacturing Capability</p>
            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[-0.035em] md:text-6xl">
              Production thinking belongs in development.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              We build flavor systems with the manufacturing path in mind, so approved work can move from the bench into real production with fewer loose ends.
            </p>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Support"
        title="The technical work behind a cleaner sample."
        intro="Formulation is shaped by the format, processing conditions, label goals, and the way the flavor behaves inside the base."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {support.map((item) => (
            <Card key={item} className="min-h-[145px]">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#12382B]">{item}</h3>
            </Card>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
