import Image from "next/image";
import Link from "next/link";
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
    image: "/images/flavor/process-whisk-liquid.webp",
    alt: "Amber liquid being mixed in a controlled formulation setting",
  },
  {
    title: "Controlled Iteration",
    body: "Tight development loops. Clear adjustments. Every sample version has a purpose.",
    image: "/images/flavor/ingredients-powder-bowls.webp",
    alt: "Powder ingredients arranged for flavor formulation",
  },
  {
    title: "Production-Ready",
    body: "What works in the lab has to translate to the floor: repeatable, stable, scalable.",
    image: "/images/flavor/production-tanks-clean.webp",
    alt: "Clean stainless production tanks for flavor manufacturing",
  },
] as const;

const process = [
  ["Define", "Product type, target profile, constraints, format, label, and process."],
  ["Build", "Bench samples with structured iteration and direct feedback loops."],
  ["Validate", "Application checks for stability, use level, performance, and taste."],
  ["Scale", "Consistent batching, clean handoff, and reliable repeat orders."],
] as const;

const industries = [
  ["Beverages", "/images/flavor/industry-beverage.webp"],
  ["Nutraceuticals", "/images/flavor/industry-nutraceutical.webp"],
  ["Confectionery", "/images/flavor/industry-confectionery.webp"],
  ["Dairy & Alternatives", "/images/flavor/industry-dairy.webp"],
  ["Savory", "/images/flavor/industry-savory.webp"],
  ["Custom Applications", "/images/flavor/ingredients-berries-botanicals.webp"],
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
            imageClassName="scale-105 object-[52%_center]"
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
            <Card key={item.title} className="overflow-hidden p-0">
              <div className="relative h-64 overflow-hidden rounded-t-[2rem] bg-[#102218]">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) calc(100vw - 48px), 33vw" className="object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/32 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#566257]">{item.body}</p>
              </div>
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
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <ImagePanel
            src="/images/flavor/process-pipette.webp"
            alt="Pipette placing amber flavor liquid into lab glassware"
            className="min-h-[520px] shadow-none"
            imageClassName="scale-110 object-[48%_center]"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {process.map(([title, body], index) => (
              <Card dark key={title}>
                <p className="text-sm font-semibold tracking-[0.2em] text-[#d2a45d]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Industries"
        title="Built around the problems your product actually has."
        intro="Different applications punish flavor in different ways. We build with those pressure points in mind."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([name, image]) => (
            <Link key={name} href="/industries" className="group overflow-hidden rounded-[2rem] border border-[#14251c]/10 bg-white/55 shadow-[0_24px_70px_rgba(20,37,28,0.06)] transition duration-300 hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <Image src={image} alt={`${name} flavor application`} fill sizes="(max-width: 768px) calc(100vw - 48px), 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/38 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#566257]">Application-aware flavor systems for finished products with real constraints.</p>
              </div>
            </Link>
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
          <ImagePanel
            src="/images/flavor/capabilities-tank-hero-wide.webp"
            alt="Clean stainless equipment for flavor production"
            className="min-h-[520px]"
            imageClassName="scale-105 object-[55%_center]"
            tone="light"
          />
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

      <CTA />
    </main>
  );
}
