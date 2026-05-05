import Link from "next/link";
import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";
import { VisualBlock } from "@/components/VisualBlock";

const cardItems = [
  ["Built for Real Formulas", "We work inside the actual product: sweeteners, acids, proteins, fats, heat. Not just ideal conditions."],
  ["Controlled Iteration", "Tight development loops. Clear adjustments. No guessing between versions."],
  ["Production-Ready", "What works in the lab translates to the floor: repeatable, stable, scalable."],
] as const;

const processSteps = [
  ["01", "Define", "Product type, target profile, and constraints: cost, label, format, processing, and performance requirements."],
  ["02", "Build", "Bench samples with structured iteration. Each version has a purpose, not a prayer."],
  ["03", "Validate", "Application testing inside your product. Stability, performance, taste, and feedback all move together."],
  ["04", "Scale", "Consistent batching, clean execution, documented handoff, and reliable repeat orders."],
] as const;

const industries = ["Beverages", "Nutraceuticals", "Confectionery", "Dairy & Alternatives", "Savory", "Custom Applications"];

const capabilities = [
  "Liquid and powder flavors",
  "Natural, artificial, and custom systems",
  "Masking and modulation",
  "Heat-stable and process-ready formulations",
  "Small batch development to full production",
  "Organized sample revisions and production handoff",
];

const outcomes = [
  "Neutral base -> bright citrus profile with reduced bitterness",
  "Protein drink -> masked off-notes with a cleaner finish",
  "Heat-processed sauce -> stable flavor through cook cycle",
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(155,107,47,0.18),transparent_34%),linear-gradient(135deg,#f7f4ee_0%,#ece4d8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#9b6b2f]">The Flavor Factory</p>
            <h1 className="text-6xl font-semibold tracking-[-0.065em] text-[#102218] md:text-7xl lg:text-8xl">
              Flavor That Carries the Product
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#405045] md:text-2xl md:leading-9">
              Built for real formulas. Scaled for real production. From first concept to repeat orders: clean, controlled, predictable.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#14251c] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#21372a]">
                Start a Project
              </Link>
              <Link href="/capabilities" className="inline-flex items-center justify-center rounded-full border border-[#14251c]/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#14251c] transition hover:border-[#14251c]/50 hover:bg-white/50">
                View Capabilities
              </Link>
            </div>
          </div>
          <VisualBlock label="Custom liquid and powder flavor systems built with practical formulation, controlled iteration, and production discipline." />
        </div>
      </section>

      <section className="border-y border-[#14251c]/10 bg-[#14251c] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["10,000+", "batches produced"],
            ["6,000+", "raw materials handled"],
            ["Multi-category", "beverage, nutraceutical, confectionery, dairy, savory"],
            ["Repeatable", "batch performance at production scale"],
          ].map(([value, label]) => (
            <div key={value} className="border-white/10 md:border-r md:pr-6 last:md:border-r-0">
              <p className="text-2xl font-semibold tracking-[-0.03em]">{value}</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionShell eyebrow="What We Do" title="Flavor development with production discipline." intro="A good flavor does more than taste good on a strip. It has to survive the product, the process, and the shelf.">
        <div className="grid gap-5 md:grid-cols-3">
          {cardItems.map(([title, body]) => (
            <article key={title} className="rounded-[1.75rem] border border-[#14251c]/10 bg-white/70 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
              <p className="mt-5 text-base leading-7 text-[#4f5d54]">{body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell dark eyebrow="How It Works" title="From idea to production, without losing the thread." intro="The process is built to keep samples, revisions, decisions, and scale-up aligned.">
        <div className="grid gap-4 lg:grid-cols-4">
          {processSteps.map(([number, title, body]) => (
            <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#d2a45d]">{number}</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Industries" title="Built around the problems your product actually has." intro="Each category brings its own constraints. The work is knowing how flavor behaves under pressure.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link key={item} href="/industries" className="rounded-[1.75rem] border border-[#14251c]/10 bg-[#ede5d8] p-7 transition hover:-translate-y-1 hover:bg-white/70">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{item}</h3>
              <p className="mt-5 text-sm leading-7 text-[#4f5d54]">
                Explore formulation considerations, common constraints, and how flavor performance changes inside this product category.
              </p>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Capabilities" title="Custom flavor systems without the black box." intro="Clean communication, practical formulation, and controlled execution from the bench to the batch sheet.">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <VisualBlock label="Replace this block with real production imagery: stainless tanks, organized materials, glassware, amber liquids, or clean batching details." />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#14251c]/10 bg-white/70 p-6">
                <p className="text-base font-semibold leading-7 tracking-[-0.02em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section className="bg-[#f7f4ee] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-xl shadow-[#14251c]/8 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9b6b2f]">Why The Flavor Factory</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">The difference is not drama. It is discipline.</h2>
            </div>
            <div className="grid gap-5">
              {[
                ["Practical First", "Everything is built around how the product is actually made."],
                ["Clear Communication", "No black box. You know what is happening and what is next."],
                ["Follow-Through", "Samples, revisions, and production stay organized and on track."],
              ].map(([title, body]) => (
                <article key={title} className="border-b border-[#14251c]/10 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#4f5d54]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell eyebrow="Selected Outcomes" title="Flavor work should leave evidence." intro="No theatrical case studies. Just the kind of problems that matter when a product needs to work.">
        <div className="grid gap-5 md:grid-cols-3">
          {outcomes.map((item) => (
            <article key={item} className="rounded-[1.75rem] bg-[#14251c] p-7 text-white">
              <p className="text-lg font-semibold leading-8 tracking-[-0.025em]">{item}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
