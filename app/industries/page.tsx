import Image from "next/image";
import { CTA } from "@/components/CTA";

const industries = [
  {
    title: "Beverages",
    body: "Masking off-notes, sweetener interaction, heat and pH stability.",
    image: "/images/flavor/industry-beverage.webp",
  },
  {
    title: "Nutraceuticals",
    body: "Protein masking, functional ingredient compatibility, aftertaste control.",
    image: "/images/flavor/industry-nutraceutical.webp",
  },
  {
    title: "Confectionery",
    body: "Flavor impact, top-note retention, and process performance.",
    image: "/images/flavor/industry-confectionery.webp",
  },
  {
    title: "Dairy & Alternatives",
    body: "Creamy, clean profiles with stability across processing.",
    image: "/images/flavor/industry-dairy.webp",
  },
  {
    title: "Savory",
    body: "Depth, roundness, and stability through cook and process.",
    image: "/images/flavor/industry-savory.webp",
  },
] as const;

export default function IndustriesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="bg-[#f7f4ee] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="eyebrow">Industries</p>
            <h1 className="display-title mt-5 text-5xl md:text-6xl">Industries we serve.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#566257]">
              We understand the nuances of each category and build flavors that perform.
            </p>
          </div>

          <div className="mt-14 divide-y divide-[#102218]/10 border-y border-[#102218]/10">
            {industries.map((industry) => (
              <article key={industry.title} className="grid items-center gap-8 py-8 md:grid-cols-[0.55fr_0.9fr_0.55fr]">
                <h2 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#102218]">{industry.title}</h2>
                <p className="max-w-xl text-sm leading-6 text-[#566257]">{industry.body}</p>
                <div className="relative aspect-[1.55] overflow-hidden bg-[#ede5d8]">
                  <Image src={industry.image} alt={`${industry.title} flavor application`} fill sizes="(max-width: 768px) calc(100vw - 48px), 24vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f7f4ee]/20" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Let's elevate your product." body="Get started with a conversation." />
    </main>
  );
}
