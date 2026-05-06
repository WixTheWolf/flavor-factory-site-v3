import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionShell } from "@/components/SectionShell";

const trustItems = [
  "Custom Formulation",
  "Sample Development",
  "Production Scale-Up",
  "Flavor Manufacturing",
  "Food & Beverage Applications",
] as const;

const whatWeDo = [
  {
    title: "Flavor Development",
    body: "Custom profiles built around the product base, label goals, cost targets, and processing realities.",
  },
  {
    title: "Application Support",
    body: "Sample work, adjustments, masking, modulation, and practical testing inside the application whenever possible.",
  },
  {
    title: "Manufacturing",
    body: "Liquid and powder flavor production with organized handoff from approved sample to repeatable order.",
  },
] as const;

const industries = [
  {
    title: "Beverage",
    body: "Clean profiles for ready-to-drink, concentrates, syrups, and functional beverages.",
    image: "/images/flavor/industry-beverage.webp",
  },
  {
    title: "Nutraceutical",
    body: "Flavor systems for proteins, actives, minerals, gummies, powders, and wellness formats.",
    image: "/images/flavor/industry-nutraceutical.webp",
  },
  {
    title: "Confectionery",
    body: "High-impact profiles for gummies, hard candy, fillings, coatings, and sweet applications.",
    image: "/images/flavor/industry-confectionery.webp",
  },
  {
    title: "Dairy & Frozen",
    body: "Creamy, balanced profiles for dairy, frozen desserts, and plant-based alternatives.",
    image: "/images/flavor/industry-dairy.webp",
  },
  {
    title: "Savory",
    body: "Depth, roundness, and process stability for sauces, seasonings, and prepared foods.",
    image: "/images/flavor/industry-savory.webp",
  },
  {
    title: "Oral Care",
    body: "Fresh, clean profiles for oral care applications where impact and finish matter.",
    image: "/images/flavor-factory/industry-oral-care-v2.jpg",
  },
] as const;

const capabilities = [
  "Concept Development",
  "Sample Creation",
  "Flavor Adjustment",
  "Scale-Up Support",
  "Manufacturing",
  "Customer Follow-Through",
] as const;

const process = [
  ["01", "Tell Us About the Product", "Application, target profile, format, label needs, timeline, and the constraints that matter."],
  ["02", "Develop the First Samples", "Initial flavor directions are built with the real product system in mind."],
  ["03", "Review and Adjust", "Feedback turns into focused revisions, not scattered guessing between versions."],
  ["04", "Prepare for Production", "Approved work moves into manufacturing with a clean path for repeat orders."],
] as const;

export default function HomePage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <section className="overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.92fr_0.88fr]">
          <div className="max-w-3xl">
            <p className="eyebrow">Premium Flavor Formulation</p>
            <h1 className="display-title mt-6 text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
              Custom Flavor Systems Built for Real Products
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#645f55] md:text-xl md:leading-9">
              The Flavor Factory develops and manufactures flavor systems for beverages, nutraceuticals, confections, dairy, savory applications, oral care, and more. From first sample to production scale, we help brands create flavors that taste right, perform consistently, and move cleanly through development.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Start a Project</Button>
              <Button href="/capabilities" variant="secondary">
                Explore Capabilities
              </Button>
            </div>
          </div>

          <ImagePanel
            src="/images/flavor-factory/homepage-hero.jpg"
            alt="Amber flavor liquid with citrus and vanilla in controlled studio light"
            priority
            className="min-h-[420px] md:min-h-[560px]"
            imageClassName="object-center"
            sizes="(max-width: 1024px) calc(100vw - 48px), 46vw"
          />
        </div>
      </section>

      <section className="border-y border-[#12382B]/10 bg-white/42 px-6 py-5 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <p key={item} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12382B]">
              {item}
            </p>
          ))}
        </div>
      </section>

      <SectionShell
        eyebrow="What We Do"
        title="Flavor work that stays connected to the product."
        intro="The work is creative, technical, and operational. A flavor has to taste right, survive the application, and move into manufacturing without losing control."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {whatWeDo.map((item) => (
            <Card key={item.title} className="min-h-[260px]">
              <p className="mb-8 h-9 w-9 rounded-full border border-[#C6843A]/45" aria-hidden="true" />
              <h3 className="display-title text-3xl">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-[#645f55]">{item.body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Industries"
        title="Built for categories where flavor has to perform."
        intro="Each product format brings its own pressure points. We build with those application realities in mind."
        className="pt-0"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.title} href="/industries" className="group block">
              <article className="h-full overflow-hidden rounded-[1.8rem] border border-[#12382B]/10 bg-white/68 shadow-[0_20px_60px_rgba(30,30,26,0.06)] transition duration-300 group-hover:-translate-y-1">
                <div className="relative aspect-[1.32] overflow-hidden bg-[#D9D1C3]">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} flavor application`}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 48px), 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="display-title text-3xl">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#645f55]">{industry.body}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        dark
        eyebrow="Capabilities"
        title="Built for the Full Flavor Development Loop"
        intro="From first direction to production order, the system is designed to keep flavor work clear, practical, and manufacturable."
      >
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <ImagePanel
            src="/images/flavor/capabilities-tank-hero-wide.webp"
            alt="Stainless flavor manufacturing tanks in a clean production space"
            className="min-h-[420px] shadow-none"
            imageClassName="object-center"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <Card key={item} dark className="min-h-[150px]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9D1C3]">Capability</p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Process"
        title="A Clear Path From Idea to Approved Flavor"
        intro="A simple process keeps samples, feedback, adjustments, and production preparation moving in the same direction."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {process.map(([number, title, body]) => (
            <article key={title} className="rounded-[1.6rem] border border-[#12382B]/10 bg-[#D9D1C3]/35 p-7">
              <p className="font-serif text-5xl text-[#12382B]">{number}</p>
              <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[#12382B]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#645f55]">{body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
