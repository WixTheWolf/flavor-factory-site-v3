import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const industryPages = {
  bakery: {
    title: "Bakery",
    hero: "/images/flavor-factory/industry-bakery-hero.jpg",
    intro: "We develop liquid and powder flavor systems for baked goods, fillings, icings, and mixes that need warmth, depth, and consistency.",
    applications: ["Cake batters", "Cookies", "Fillings", "Icings", "Dry mixes", "Frostings"],
  },
  confectionery: {
    title: "Confectionery",
    hero: "/images/flavor-factory/industry-confectionery-hero.jpg",
    intro: "From bright fruit profiles to rich chocolate directions, we help confectionery lines stand out while maintaining production consistency.",
    applications: ["Hard candy", "Gummies", "Chocolate", "Chews", "Lollipops", "Novelty formats"],
  },
  nutraceutical: {
    title: "Nutraceutical",
    hero: "/images/flavor-factory/industry-nutraceutical-hero.jpg",
    intro: "Functional products need better taste. We provide masking, sweetness tuning, and profile development for active-heavy systems.",
    applications: ["Drink powders", "RTM blends", "Gummies", "Shots", "Chewables", "Functional nutrition"],
  },
  "oral-care": {
    title: "Oral Care",
    hero: "/images/flavor-factory/industry-oral-care-hero.jpg",
    intro: "Cooling, mint, freshness, and clean finish for oral care products that need strong sensory performance.",
    applications: ["Mouthwash", "Toothpaste", "Breath care", "Whitening systems", "Freshness formats", "Mint products"],
  },
  pharmaceutical: {
    title: "Pharmaceutical",
    hero: "/images/flavor-factory/industry-pharmaceutical-hero.jpg",
    intro: "We build dependable flavor systems for pharmaceutical products where consistency and repeatability are critical.",
    applications: ["Syrups", "Suspensions", "Powders", "Chewables", "Lozenges", "Specialized formats"],
  },
  beverage: {
    title: "Food & Beverage",
    hero: "/images/flavor-factory/industry-beverage-hero.jpg",
    intro: "We help brands create drink-ready flavor systems for beverage programs that move from benchtop to production.",
    applications: ["Ready-to-drink", "Syrups", "Concentrates", "Powder mixes", "Energy drinks", "Functional beverages"],
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
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <img src={industry.hero} alt={`${industry.title} hero`} style={{ width: "100%", borderRadius: 36, maxHeight: 520, objectFit: "cover" }} />
            <div style={{ marginTop: 32, maxWidth: 880 }}>
              <SectionEyebrow>{industry.title}</SectionEyebrow>
              <SectionHeading>Custom flavor solutions for {industry.title} products.</SectionHeading>
              <p className="section-subtext" style={{ marginTop: 16 }}>{industry.intro}</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Common formats</SectionEyebrow>
                <SectionHeading>Product types we support in {industry.title.toLowerCase()}.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  We tailor flavor direction to the finished format, processing method, and target taste profile.
                </p>
              </div>
              <div className="showcase-pills">
                {industry.applications.map((item) => (
                  <span key={item} className="soft-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container strength-grid">
            {[
              ["Custom Development", "Flavor systems built around your benchmark and product goals."],
              ["Stability Support", "Practical performance across processing, storage, and shelf life."],
              ["Masking & Tuning", "Balancing sweetness, top notes, and off-note control where needed."],
              ["Scale-Ready Thinking", "Sample work designed with production requirements in mind."],
            ].map(([title, text]) => (
              <div key={title} className="strength-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <SectionEyebrow>Why teams work with us</SectionEyebrow>
                <SectionHeading>Fast samples, low minimums, and direct communication.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  You get practical support from a family-owned team focused on quality, responsiveness, and dependable manufacturing.
                </p>
                <div className="showcase-pills">
                  {["Low Minimum Orders", "Fast Turnaround", "Consistent Quality", "Direct Communication"].map((item) => (
                    <span key={item} className="soft-pill">{item}</span>
                  ))}
                </div>
                <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
              </div>
              <div className="sample-right">
                <img src={industry.hero} alt={industry.title} />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Next step</div>
                  <h3>Let&apos;s build your {industry.title.toLowerCase()} flavor direction.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
