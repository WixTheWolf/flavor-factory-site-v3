import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const industries = [
  {
    title: "Beverages",
    body: "Flavor systems for drinks where acidity, sweetness, processing, and shelf life shape the final profile.",
    items: ["Off-note masking", "Sweetener interaction", "Heat / pH stability", "Shelf-life consistency"],
  },
  {
    title: "Nutraceuticals",
    body: "Flavor work for functional products where actives, proteins, minerals, and sweeteners can fight the profile.",
    items: ["Protein and active masking", "Sweetener systems", "Aftertaste control", "Functional compatibility"],
  },
  {
    title: "Confectionery",
    body: "Impactful profiles built to hold up against sweetness, heat, texture, and processing demands.",
    items: ["Flavor impact vs sweetness", "Top-note retention", "Heat processing performance", "Clean finish"],
  },
  {
    title: "Dairy & Alternatives",
    body: "Flavor systems shaped around fat, creaminess, plant bases, processing, and stability.",
    items: ["Fat interaction", "Cream profile balance", "Plant-base masking", "Processing stability"],
  },
  {
    title: "Savory",
    body: "Profiles built for depth, roundness, cook stability, and balance across sauces, seasonings, and prepared foods.",
    items: ["Depth and roundness", "Salt interaction", "Cook / process stability", "Savory top-note control"],
  },
  {
    title: "Custom Applications",
    body: "When the product does not fit cleanly into a box, the work gets more specific, and usually more interesting.",
    items: ["Customer-specific formulation", "Process constraints", "Profile matching", "Production readiness"],
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="Industries"
        title="Flavor systems built around real product constraints."
        body="Different products punish flavor in different ways. The job is knowing where the profile breaks, and how to make it hold."
      />

      <SectionShell eyebrow="Categories" title="Not generic flavor lists. Specific product problems." intro="Every category has its own pressure points. We build with those pressure points in mind.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-[2rem] border border-[#14251c]/10 bg-[#ede5d8] p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{industry.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#4f5d54]">{industry.body}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#4f5d54]">
                {industry.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b6b2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>

      <CTA title="Have a difficult base? Good. Bring the problem." body="The tougher the product, the more valuable disciplined flavor development becomes." />
    </main>
  );
}
