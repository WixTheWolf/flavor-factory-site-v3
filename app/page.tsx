import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionShell } from "@/components/SectionShell";

const proof = [
  ["10,000+", "batches produced"],
  ["6,000+", "raw materials handled"],
  ["Multi-category", "production"],
  ["Repeatable", "batch performance"],
] as const;

const pillars = [
  {
    title: "Built for Real Formulas",
    body: "We work inside the actual product: sweeteners, acids, proteins, fats, heat, processing, and shelf life.",
  },
  {
    title: "Controlled Iteration",
    body: "Tight development loops. Clear adjustments. Every sample version has a purpose.",
  },
  {
    title: "Production-Ready",
    body: "What works in the lab has to translate to the floor: repeatable, stable, scalable.",
  },
] as const;

const process = [
  ["Define", "Product type, target profile, constraints, format, label, and process."],
  ["Build", "Bench samples with structured iteration and direct feedback loops."],
  ["Validate", "Application checks for stability, use level, performance, and taste."],
  ["Scale", "Consistent batching, clean handoff, and reliable repeat orders."],
] as const;

const industries = [
  ["Beverages", "Off-note masking", "Sweetener interaction", "Heat / pH stability"],
  ["Nutraceuticals", "Protein and active masking", "Aftertaste control", "Functional compatibility"],
  ["Confectionery", "Flavor impact vs sweetness", "Top-note retention", "Heat processing performance"],
  ["Dairy & Alternatives", "Fat interaction", "Cream profile balance", "Processing stability"],
  ["Savory", "Depth and roundness", "Salt interaction", "Cook / process stability"],
  ["Custom Applications", "Customer-specific formulation", "Process constraints", "Production readiness"],
] as const;

const capabilities = [
  "Liquid and powder flavors",
  "Natural, artificial, and custom systems",
  "Masking and modulation",
  "Heat-stable and process-ready formulations",
  "Small batch development to full production",
  "Organized sample revisions and production handoff",
] as const;

const why = [
  ["Practical First", "Everything is built around how the product is actually made."],
  ["Clear Communication", "No black box. You know what is happening and what is next."],
  ["Follow-Through", "Samples, revisions, and production stay organized and on track."],
] as const;

const outcomes = [
  "Neutral base -> bright citrus profile with reduced bitterness",
  "Protein drink -> masked off-notes with a cleaner finish",
  "Heat-processed sauce -> stable flavor through cook cycle",
] as const;

export default function HomePage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(185,135,69,0.2),transparent_34rem),linear-gradient(135deg,#f7f4ee_0%,#eee5d8_100%)]" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="eyebrow">The Flavor Factory</p>
            <h1 className="display-title mt-6 text-6xl md:text-8xl lg:text-[7.7rem] lg:leading-[0.86]">
              Flavor That Carries the Product
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#405045] md:text-2xl md:leading-9">
              Built for real formulas. Scaled for real production. From first concept to repeat orders: clean, controlled, predictable.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Start a Project</Button>
              <Button href="/capabilities" variant="secondary">
                View Capabilities
              </Button>
            </div>
          </div>

          <ImagePanel
            src="/images/flavor/hero-amber-pour.webp"
            alt="Amber liquid flavor being poured in cinematic light"
            className="min-h-[520px] lg:min-h-[700px]"
            imageClassName="scale-110 blur-[1px] object-[52%_center]"
            priority
            tone="amber"
          />
        </div>
      </section>

      <section className="border-y border-[#14251c]/10 bg-[#102218] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-6 md:grid-cols-4">
          {proof.map(([value, label]) => (
            <div key={value} className="border-white/10 md:border-r md:pr-6 last:md:border-r-0">
              <p className="text-2xl font-semibold tracking-[-0.035em]">{value}</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionShell
        eyebrow="What We Do"
        title="Flavor development with production discipline."
        intro="A good profile has to survive the product, the process, the shelf, and the repeat order."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <Card key={item.title} className="min-h-[260px] p-8">
              <div className="mb-10 h-px w-16 bg-[#b98745]" />
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-[#566257]">{item.body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        dark
        eyebrow="Process Preview"
        title="From concept to production, without losing the thread."
        intro="The process keeps samples, revisions, decisions, and scale-up aligned."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([title, body], index) => (
            <Card dark key={title} className="min-h-[300px]">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#d2a45d]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Industries"
        title="Built around the problems your product actually has."
        intro="Different applications punish flavor in different ways. We build with those pressure points in mind."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([name, first, second, third]) => (
            <Card key={name} className="bg-[#ede5d8] p-8 shadow-none">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{name}</h3>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-[#566257]">
                {[first, second, third].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98745]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Capabilities"
        title="Custom flavor systems without the black box."
        intro="Clean communication, practical formulation, and controlled execution from the bench to the batch sheet."
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <Card key={item} className="p-6">
                <p className="text-base font-semibold leading-7 tracking-[-0.02em]">{item}</p>
              </Card>
            ))}
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-[#102218] shadow-[0_32px_90px_rgba(16,34,24,0.16)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(185,135,69,0.46),transparent_24rem),radial-gradient(circle_at_28%_76%,rgba(247,244,238,0.16),transparent_20rem),linear-gradient(135deg,#102218_0%,#1b3328_100%)]" />
            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.025]" />
            <div className="absolute bottom-8 left-8 right-8 max-w-md">
              <p className="eyebrow text-[#d2a45d]">Production Context</p>
              <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white">
                Built for formulas that need to move from sample bench to repeatable orders.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <section className="bg-[#f7f4ee] px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 rounded-[2.75rem] bg-white/70 p-8 shadow-[0_34px_100px_rgba(20,37,28,0.08)] backdrop-blur md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
          <div>
            <p className="eyebrow">Why The Flavor Factory</p>
            <h2 className="display-title mt-5 text-4xl md:text-6xl">Discipline is the luxury.</h2>
          </div>
          <div className="grid gap-6">
            {why.map(([title, body]) => (
              <article key={title} className="border-b border-[#14251c]/10 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-base leading-7 text-[#566257]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Selected Outcomes"
        title="Flavor work should leave evidence."
        intro="No theatrical case studies. Just the kinds of problems that matter when a product needs to work."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {outcomes.map((item) => (
            <article key={item} className="rounded-[2rem] bg-[#102218] p-8 text-white shadow-[0_24px_70px_rgba(16,34,24,0.12)]">
              <p className="text-lg font-semibold leading-8 tracking-[-0.025em]">{item}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
