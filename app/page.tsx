import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionShell } from "@/components/SectionShell";

const heroTrustItems = [
  "Typical 3-5 day sample support",
  "Norco, CA",
  "Kosher, Halal, GMP & FDA registered facility programs",
  "Low minimums",
] as const;

const stats = [
  ["3-5 Days", "Typical Sample Support"],
  ["10 Industries", "Applications Served"],
  ["Liquid & Powder", "Both Formats In-House"],
  ["Low MOQ", "No Massive Minimums"],
] as const;

const whatWeDo = [
  {
    title: "Flavor Development",
    body: "Custom liquid and powder profiles built around your product base, label goals, cost targets, and processing conditions. We develop to the application, not around it.",
  },
  {
    title: "Application Support",
    body: "Iteration, masking, modulation, and testing in the actual application, not a lab proxy. Adjustments are driven by the product, not guesswork.",
  },
  {
    title: "Manufacturing",
    body: "Liquid and powder production with a clean handoff from approved sample to repeatable production order. Fast turnaround, consistent output.",
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
  {
    title: "Bakery",
    body: "Heat-stable liquid and powder flavors for baked goods, fillings, frostings, and snack formats.",
    image: "/images/flavor-factory/industry-bakery-v2.jpg",
  },
  {
    title: "Popcorn",
    body: "Bold, consistent flavor coatings for ready-to-eat and retail popcorn in oil-soluble and powder formats.",
    image: "/images/flavor-factory/industry-popcorn-v2.jpg",
  },
  {
    title: "Pharmaceutical",
    body: "Flavor masking and palatability support for chewables, liquids, lozenges, and suspensions.",
    image: "/images/flavor-factory/industry-pharma-v2.jpg",
  },
  {
    title: "Syrup",
    body: "Clean, concentrated flavor systems for coffee syrups, cocktail mixers, fountain, and specialty beverage formats.",
    image: "/images/flavor-factory/industry-syrup-premium.jpg",
  },
] as const;

const capabilities = [
  {
    title: "Concept Development",
    body: "Direction setting based on your application, target flavor profile, label requirements, and cost parameters. We gather what we need to build samples that start close.",
  },
  {
    title: "Sample Creation",
    body: "First-round samples built in-house with quick turnaround. Liquid and powder formats are both available depending on the application.",
  },
  {
    title: "Flavor Adjustment",
    body: "Focused revisions based on your feedback. Each round moves toward a clear target, with documentation of what changed and why.",
  },
  {
    title: "Scale-Up Support",
    body: "Approved samples transition to manufacturing specs with documentation that keeps the flavor consistent at production volume.",
  },
  {
    title: "Manufacturing",
    body: "Liquid and powder flavor production from our Norco, CA facility with consistent batch quality and organized documentation.",
  },
  {
    title: "Customer Follow-Through",
    body: "Responsive support after approval. Reorders, reformulations, questions, and long-term account management stay organized.",
  },
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
            <div className="mt-6 flex max-w-2xl flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#12382B]/58">
              {heroTrustItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
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

      <section className="border-y border-[#12382B]/10 bg-white/42 px-6 py-8 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-[1.5rem] border border-[#12382B]/10 bg-[#F4EFE5]/70 p-5">
              <p className="font-serif text-3xl tracking-[-0.035em] text-[#12382B]">{value}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6843A]">{label}</p>
            </div>
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
            {capabilities.map((item, index) => (
              <Card key={item.title} dark className="min-h-[240px]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9D1C3]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.body}</p>
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
        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-[#12382B]/10 bg-white/62 p-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-7 text-[#645f55]">
            <span className="font-semibold text-[#12382B]">It only takes a few details to get started.</span> Share the product, target profile, and timeline.
          </p>
          <Button href="/contact#project-form">Request Your First Sample</Button>
        </div>
      </SectionShell>

      <section className="bg-[#F4EFE5] px-6 pb-20 md:px-10 md:pb-24 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 rounded-[2.5rem] border border-[#12382B]/10 bg-white/72 p-8 shadow-[0_24px_80px_rgba(30,30,26,0.06)] md:p-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="eyebrow">Certifications & Trust</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Documentation support belongs on the first conversation.</h2>
            <p className="mt-5 text-sm leading-7 text-[#645f55] md:text-base">
              Certification needs are reviewed against the formula, raw materials, and intended application before production claims are made.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#12382B]/10 bg-white p-6">
            <Image
              src="/images/flavor/certifications-transparent.png"
              alt="GMP, SQF, Halal, Kosher, and FDA registered facility certification marks"
              width={1045}
              height={128}
              sizes="(max-width: 1024px) calc(100vw - 96px), 620px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <CTA body="Share the application, target profile, and timeline. Samples are typically supported within 3-5 business days whenever possible." />
    </main>
  );
}
