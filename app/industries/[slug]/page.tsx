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
    applications: ["Cakes", "Cookies", "Fillings", "Icings", "Dry Mixes", "Frostings"],
  },
  confectionery: {
    title: "Confectionery",
    hero: "/images/flavor-factory/industry-confectionery-hero.jpg",
    intro: "From bright fruit profiles to rich chocolate directions, we help confectionery products stand out and stay memorable.",
    applications: ["Candy", "Gummies", "Chocolate", "Chews", "Hard Candy", "Novelty Formats"],
  },
  nutraceutical: {
    title: "Nutraceutical",
    hero: "/images/flavor-factory/industry-nutraceutical-hero.jpg",
    intro: "Functional products need better taste. We help support masking, sweetness, and profile design for challenging active systems.",
    applications: ["Powders", "Drink Mixes", "Gummies", "Shots", "Chewables", "Functional Nutrition"],
  },
  "oral-care": {
    title: "Oral Care",
    hero: "/images/flavor-factory/industry-oral-care-hero.jpg",
    intro: "Cooling, mint, freshness, and clean finish—designed for modern oral care applications with strong sensory clarity.",
    applications: ["Mouthwash", "Toothpaste", "Breath Care", "Whitening Products", "Freshness Systems", "Novelty Mint"],
  },
  pharmaceutical: {
    title: "Pharmaceutical",
    hero: "/images/flavor-factory/industry-pharmaceutical-hero.jpg",
    intro: "Precision applications need reliable support. We build practical flavor systems for demanding pharmaceutical categories.",
    applications: ["Syrups", "Suspensions", "Powders", "Chewables", "Topical Adjacent Systems", "Specialized Formats"],
  },
  beverage: {
    title: "Food & Beverage",
    hero: "/images/flavor-factory/industry-beverage-hero.jpg",
    intro: "We help brands create drink-ready flavor systems that feel modern, expressive, and built for repeat use.",
    applications: ["Ready-to-Drink", "Syrups", "Concentrates", "Mixes", "Energy", "Functional Beverages"],
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
            <img src={industry.hero} alt={`${industry.title} hero`} style={{ width: "100%", borderRadius: 36, maxHeight: 560, objectFit: "cover" }} />
            <div style={{ marginTop: 32, maxWidth: 880 }}>
              <SectionEyebrow>{industry.title}</SectionEyebrow>
              <SectionHeading>Custom Flavor Solutions for {industry.title}</SectionHeading>
              <p className="section-subtext" style={{ marginTop: 16 }}>{industry.intro}</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Applications</SectionEyebrow>
                <SectionHeading>Built for real {industry.title.toLowerCase()} products.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  From concept to production, we help shape flavor systems that fit the way products are actually made and used.
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
              ["Flavor Development", "Tailored systems built around your target profile and application."],
              ["Stability Support", "Practical flavor performance for real processing conditions."],
              ["Masking & Tuning", "Profile balancing, sweetness support, and challenge-solving where needed."],
              ["Scale-Ready Production", "Reliable sample-to-production thinking from a team that works fast."],
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
                <SectionEyebrow>Why brands work with us</SectionEyebrow>
                <SectionHeading>Reliable flavor support, without the friction.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  Low minimums, fast turnaround, consistent quality, and direct communication from a family-owned team that knows how to get the job done.
                </p>
                <div className="showcase-pills">
                  {["Low Minimum Orders", "Fast Turnaround", "Consistent Quality", "Direct Communication"].map((item) => (
                    <span key={item} className="soft-pill">{item}</span>
                  ))}
                </div>
                <Link href="/#samples" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
              </div>
              <div className="sample-right">
                <img src={industry.hero} alt={industry.title} />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Next step</div>
                  <h3>Let’s build your {industry.title.toLowerCase()} flavor direction.</h3>
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
