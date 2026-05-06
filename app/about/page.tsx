import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const principles = [
  {
    title: "Practical Listening",
    body: "We start with the application, target profile, customer, label direction, and constraints before we touch the first sample.",
  },
  {
    title: "Technical Formulation",
    body: "Flavor decisions are built around real product systems: sweeteners, acids, proteins, fats, actives, heat, and shelf life.",
  },
  {
    title: "Production Follow-Through",
    body: "Approved work is organized for manufacturing, repeat orders, and the small details that keep development moving cleanly.",
  },
] as const;

const standards = [
  "Application-aware development",
  "Clear sample revisions",
  "Liquid and powder manufacturing",
  "Repeatable production handoff",
] as const;

export default function AboutPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <PageHero
        eyebrow="About"
        title="A flavor partner built for products that need to perform."
        body="The Flavor Factory develops and manufactures custom flavor systems with a practical, hands-on approach. The work is creative, but the standard is operational: clear direction, controlled samples, and a path to production."
        image="/images/flavor/about-lab-bottles-wide.webp"
        imageAlt="Glass bottles and labware in a warm flavor formulation lab"
      />

      <SectionShell
        eyebrow="How We Work"
        title="Flavor development starts with the product, not a flavor list."
        intro="Premium flavor work is quiet, specific, and disciplined. We focus on what the product needs to taste right and move forward."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <Card key={item.title} className="min-h-[260px]">
              <p className="mb-8 h-9 w-9 rounded-full border border-[#C6843A]/45" aria-hidden="true" />
              <h2 className="display-title text-3xl">{item.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#645f55]">{item.body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <section className="bg-[#12382B] px-6 py-24 text-white md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9D1C3]">The Standard</p>
            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[-0.035em] md:text-6xl">
              Warm service. Technical control. Manufacturing credibility.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
              Customers need more than a good-tasting sample. They need a partner who can hold the thread from concept to approval to repeat production.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {standards.map((item) => (
              <Card key={item} dark className="min-h-[150px]">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4EFE5] px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ImagePanel
            src="/images/flavor/process-glassware-clear.webp"
            alt="Clear glassware used in flavor formulation"
            className="min-h-[420px]"
            tone="light"
          />
          <div>
            <p className="eyebrow">Built For Development Teams</p>
            <h2 className="display-title mt-5 text-4xl md:text-6xl">The work stays clear from first conversation to approved flavor.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#645f55]">
              We help brands make practical flavor decisions, compare sample versions clearly, and move the approved direction into manufacturing without losing the details that made it work.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
