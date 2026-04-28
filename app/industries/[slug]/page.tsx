import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const industryPages = {
  bakery: {
    title: "Bakery",
    intro: "Flavor systems for bakery mixes, fillings, icings, and finished products.",
    highlights: ["Liquid and powder formats", "Custom flavor matching", "Low minimum order", "Fast sample support"],
  },
  confectionery: {
    title: "Confectionery",
    intro: "Oil soluble, water soluble, and powder flavor options for hard candy, gummies, and chews.",
    highlights: ["Classic and modern profiles", "Custom development", "Fast turnaround", "Production-ready support"],
  },
  nutraceutical: {
    title: "Nutraceutical",
    intro: "Flavor support for functional powders, drink mixes, and chewables.",
    highlights: ["Masking support", "Balanced sweetness", "Liquid and powder systems", "Low minimum options"],
  },
  "oral-care": {
    title: "Oral Care",
    intro: "Mint and freshness systems for oral care formulas where clean finish matters.",
    highlights: ["Mint profiles", "Cooling options", "Consistent performance", "Direct support"],
  },
  pharmaceutical: {
    title: "Pharmaceutical",
    intro: "Practical flavor options for syrups, suspensions, powder sachets, and chewables.",
    highlights: ["Flavor matching", "Documentation support", "Reliable lead times", "Family-owned service"],
  },
  beverage: {
    title: "Food & Beverage",
    intro: "Custom flavor systems for beverage and food products, from samples to production.",
    highlights: ["RTD and syrups", "Dairy and concentrates", "Custom profile development", "Fast delivery"],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(industryPages).map((slug) => ({ slug }));
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industryPages[params.slug as keyof typeof industryPages];
  if (!industry) return notFound();

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container simple-panel">
            <SectionEyebrow>{industry.title}</SectionEyebrow>
            <SectionHeading>{industry.title} Flavor Support</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 14 }}>{industry.intro}</p>
            <div className="showcase-pills" style={{ marginTop: 18 }}>
              {industry.highlights.map((item) => (
                <span key={item} className="soft-pill">{item}</span>
              ))}
            </div>
            <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
