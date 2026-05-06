import Image from "next/image";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const industries = [
  {
    title: "Beverage",
    body: "Flavor systems for drinks where acidity, sweetness, processing, and shelf life shape the final profile.",
    image: "/images/flavor/industry-beverage.webp",
    items: ["Ready-to-drink", "Syrups and concentrates", "Functional beverages", "Heat and pH considerations"],
  },
  {
    title: "Nutraceutical",
    body: "Flavor work for functional products where actives, proteins, minerals, and sweeteners can fight the profile.",
    image: "/images/flavor/industry-nutraceutical.webp",
    items: ["Protein and active masking", "Powders and gummies", "Aftertaste control", "Sweetener system support"],
  },
  {
    title: "Confectionery",
    body: "High-impact profiles built to hold up against sweetness, heat, texture, and processing demands.",
    image: "/images/flavor/industry-confectionery.webp",
    items: ["Gummies and hard candy", "Fillings and coatings", "Top-note retention", "Clean finish"],
  },
  {
    title: "Dairy & Frozen",
    body: "Flavor systems shaped around creaminess, fat interaction, plant bases, processing, and stability.",
    image: "/images/flavor/industry-dairy.webp",
    items: ["Dairy and frozen desserts", "Plant-based alternatives", "Cream profile balance", "Processing stability"],
  },
  {
    title: "Savory",
    body: "Profiles built for depth, roundness, cook stability, and balance across sauces, seasonings, and prepared foods.",
    image: "/images/flavor/industry-savory.webp",
    items: ["Sauces and seasonings", "Depth and roundness", "Salt interaction", "Cook stability"],
  },
  {
    title: "Oral Care",
    body: "Clean, high-impact flavor systems for oral care products where freshness, finish, and consistency matter.",
    image: "/images/flavor-factory/industry-oral-care-v2.jpg",
    items: ["Fresh profiles", "Cooling balance", "Impact and finish", "Application-specific support"],
  },
] as const;

export default function IndustriesPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <PageHero
        eyebrow="Industries"
        title="Flavor systems built around real product categories."
        body="Different applications stress flavor in different ways. We build with the base, format, processing conditions, and customer experience in mind."
        image="/images/flavor/ingredients-citrus-vanilla.webp"
        imageAlt="Citrus and vanilla ingredients prepared for flavor development"
      />

      <SectionShell
        eyebrow="Applications"
        title="Premium flavor work for practical manufacturing needs."
        intro="The goal is not a generic profile. The goal is a flavor system that fits the category and performs inside the product."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.title} className="overflow-hidden rounded-[1.8rem] border border-[#12382B]/10 bg-white/68 shadow-[0_20px_60px_rgba(30,30,26,0.06)]">
              <div className="relative aspect-[1.36] bg-[#D9D1C3]">
                <Image
                  src={industry.image}
                  alt={`${industry.title} flavor application`}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h2 className="display-title text-3xl">{industry.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#645f55]">{industry.body}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#645f55]">
                  {industry.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6843A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <CTA title="Tell Us About Your Application" body="Share the product format, target profile, and constraints. We'll help identify the right flavor direction." />
    </main>
  );
}
