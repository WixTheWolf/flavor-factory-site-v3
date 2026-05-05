import Image from "next/image";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const industries = [
  {
    title: "Beverages",
    body: "Flavor systems for drinks where acidity, sweetness, processing, and shelf life shape the final profile.",
    image: "/images/flavor/industry-beverage.webp",
    items: ["Off-note masking", "Sweetener interaction", "Heat / pH stability", "Shelf-life consistency"],
  },
  {
    title: "Nutraceuticals",
    body: "Flavor work for functional products where actives, proteins, minerals, and sweeteners can fight the profile.",
    image: "/images/flavor/industry-nutraceutical.webp",
    items: ["Protein and active masking", "Sweetener systems", "Aftertaste control", "Functional compatibility"],
  },
  {
    title: "Confectionery",
    body: "Impactful profiles built to hold up against sweetness, heat, texture, and processing demands.",
    image: "/images/flavor/industry-confectionery.webp",
    items: ["Flavor impact vs sweetness", "Top-note retention", "Heat processing performance", "Clean finish"],
  },
  {
    title: "Dairy & Alternatives",
    body: "Flavor systems shaped around fat, creaminess, plant bases, processing, and stability.",
    image: "/images/flavor/industry-dairy.webp",
    items: ["Fat interaction", "Cream profile balance", "Plant-base masking", "Processing stability"],
  },
  {
    title: "Savory",
    body: "Profiles built for depth, roundness, cook stability, and balance across sauces, seasonings, and prepared foods.",
    image: "/images/flavor/industry-savory.webp",
    items: ["Depth and roundness", "Salt interaction", "Cook / process stability", "Savory top-note control"],
  },
  {
    title: "Custom Applications",
    body: "When the product does not fit cleanly into a box, the work gets more specific and more valuable.",
    image: "/images/flavor/ingredients-spice-grid.webp",
    items: ["Customer-specific formulation", "Process constraints", "Profile matching", "Production readiness"],
  },
] as const;

export default function IndustriesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="Industries"
        title="Flavor systems built around real product constraints."
        body="Different products punish flavor in different ways. The job is knowing where the profile breaks, and how to make it hold."
        image="/images/flavor/ingredients-citrus-vanilla.webp"
        imageAlt="Citrus and vanilla ingredients arranged in controlled light"
      />

      <SectionShell
        eyebrow="Categories"
        title="Not generic flavor lists. Specific product problems."
        intro="Every category has its own pressure points. We build with those pressure points in mind."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title} className="overflow-hidden p-0">
              <div className="relative h-60 overflow-hidden rounded-t-[2rem] bg-[#102218]">
                <Image
                  src={industry.image}
                  alt={`${industry.title} application flavor support`}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 33vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/42 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#566257]">{industry.body}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#566257]">
                  {industry.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98745]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      <CTA title="Have a difficult base? Good. Bring the problem." body="The tougher the product, the more valuable disciplined flavor development becomes." />
    </main>
  );
}
