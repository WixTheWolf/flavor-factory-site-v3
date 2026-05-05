import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";

const proof = [
  ["10,000+", "Batches Produced"],
  ["6,000+", "Raw Materials Handled"],
  ["Multi-Category", "Beverage, Nutraceutical, Confectionery, Dairy, Savory"],
  ["Repeat Production", "Consistent Quality Every Time"],
] as const;

const pillars = [
  {
    title: "Built for Real Formulas",
    body: "We work inside the actual product: sweeteners, acids, proteins, fats, heat. Not just ideal conditions.",
    image: "/images/flavor-factory/what-we-do-1.jpg",
    alt: "Amber liquid flavor detail",
  },
  {
    title: "Controlled Iteration",
    body: "Tight development loops. Clear adjustments. No guessing between versions.",
    image: "/images/flavor-factory/what-we-do-2.jpg",
    alt: "Powder ingredient detail",
  },
  {
    title: "Production-Ready",
    body: "What works in the lab translates to the floor: repeatable, stable, scalable.",
    image: "/images/flavor-factory/what-we-do-3.jpg",
    alt: "Production equipment detail",
  },
] as const;

const process = [
  ["Define", "We align on profile, application, constraints, and production needs."],
  ["Build", "We create initial concepts and refine through structured iteration."],
  ["Validate", "We test in your application for performance, stability, and taste."],
  ["Scale", "We approach with precision for consistent, repeatable results."],
] as const;

const industries = [
  ["Beverages", "/images/flavor/industry-beverage.webp"],
  ["Nutraceuticals", "/images/flavor/industry-nutraceutical.webp"],
  ["Confectionery", "/images/flavor/industry-confectionery.webp"],
  ["Dairy & Alternatives", "/images/flavor/industry-dairy.webp"],
  ["Savory", "/images/flavor/industry-savory.webp"],
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
      <section className="relative overflow-hidden bg-[#050806] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32">
        <Image
          src="/images/flavor-factory/homepage-hero.jpg"
          alt="Amber liquid flavor poured into a beaker with citrus and vanilla"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-82"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.68)_42%,rgba(0,0,0,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_32%,rgba(210,164,93,0.16),transparent_28rem)]" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="max-w-2xl py-16 md:py-24 lg:py-32">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a45d]">Flavor Factory</p>
            <h1 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-0.035em] md:text-7xl">
              Flavor That Carries the Product
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/82 md:text-lg">
              Built for real formulas. Scaled for real production. From first concept to repeat orders—clean, controlled, predictable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="light">
                Start a Project
              </Button>
              <Button href="/capabilities" variant="light">
                View Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2b1b] px-6 py-8 text-white md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-6 md:grid-cols-4">
          {proof.map(([value, label]) => (
            <div key={value} className="border-white/15 md:border-r md:pr-6 last:md:border-r-0">
              <p className="font-serif text-3xl font-normal tracking-[-0.035em]">{value}</p>
              <p className="mt-2 text-xs leading-5 text-white/66">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center font-serif text-4xl font-normal tracking-[-0.035em] text-[#102218] md:text-5xl">What We Do</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title}>
                <div className="relative aspect-[1.35] overflow-hidden bg-[#102218]">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) calc(100vw - 48px), 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/24 to-transparent" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-[-0.02em] text-[#102218]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#566257]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center font-serif text-4xl font-normal tracking-[-0.035em] text-[#102218] md:text-5xl">How It Works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map(([title, body], index) => (
              <article key={title} className="border-t border-[#102218]/18 pt-6">
                <p className="font-serif text-4xl font-normal text-[#102218]">{index + 1}</p>
                <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#9b6b2f]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#566257]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex items-end justify-between gap-8">
            <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] text-[#102218] md:text-5xl">Industries We Serve</h2>
            <Link href="/industries" className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9b6b2f] md:inline-flex">
              View All Industries
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {industries.map(([name, image]) => (
              <Link key={name} href="/industries" className="group block">
                <div className="relative aspect-[1.1] overflow-hidden bg-[#ede5d8]">
                  <Image src={image} alt={`${name} application`} fill sizes="(max-width: 768px) calc(100vw - 48px), 20vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/18 to-transparent" />
                </div>
                <h3 className="mt-4 text-center text-sm font-semibold text-[#102218]">{name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Capabilities"
        title="Custom flavor systems without the black box."
        intro="Clean communication, practical formulation, and controlled execution from the bench to the batch sheet."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item} className="border border-[#102218]/10 bg-white/45 p-6">
              <p className="text-sm font-semibold leading-6 text-[#102218]">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="bg-[#f0e8da] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Our Difference</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Quiet discipline. Real follow-through.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {why.map(([title, body]) => (
              <article key={title}>
                <div className="mb-5 h-8 w-8 rounded-full border border-[#b98745]/60" />
                <h3 className="text-base font-semibold text-[#102218]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#566257]">{body}</p>
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
            <article key={item} className="bg-[#102218] p-8 text-white">
              <p className="text-lg font-semibold leading-8 tracking-[-0.025em]">{item}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
