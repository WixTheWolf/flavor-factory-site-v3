import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

const industryPages = {
  bakery: {
    title: "Bakery",
    hero: "/images/flavor-factory/industry-bakery-hero.jpg",
    intro: "We build liquid and powder flavor systems for bakery manufacturers producing mixes, fillings, icings, and finished goods.",
    marketFocus: ["Commercial bakeries", "Private label programs", "Dessert brands", "Frozen bakery lines"],
    productFormats: ["Cake and muffin mixes", "Fillings and icings", "Cookies and bars", "Frostings"],
  },
  confectionery: {
    title: "Confectionery",
    hero: "/images/flavor-factory/industry-confectionery-hero.jpg",
    intro: "Our confectionery work supports brands and manufacturers developing fruit, mint, and chocolate flavor profiles.",
    marketFocus: ["Candy brands", "Contract manufacturers", "Seasonal programs", "Novelty launches"],
    productFormats: ["Hard candy", "Chews", "Chocolate centers", "Gummies"],
  },
  nutraceutical: {
    title: "Nutraceutical",
    hero: "/images/flavor-factory/industry-nutraceutical-hero.jpg",
    intro: "We help functional product teams improve taste in active formulas while keeping process requirements in view.",
    marketFocus: ["Functional nutrition brands", "Supplement manufacturers", "Private label nutrition", "Performance products"],
    productFormats: ["Stick packs", "Drink mixes", "Shots", "Chewables"],
  },
  "oral-care": {
    title: "Oral Care",
    hero: "/images/flavor-factory/industry-oral-care-hero.jpg",
    intro: "Our oral care programs focus on clean finish, mint balance, and repeatable freshness in daily-use products.",
    marketFocus: ["Oral care brands", "Dental product manufacturers", "Personal care developers", "Specialty freshness lines"],
    productFormats: ["Mouthwash", "Toothpaste", "Breath products", "Whitening support formats"],
  },
  pharmaceutical: {
    title: "Pharmaceutical",
    hero: "/images/flavor-factory/industry-pharmaceutical-hero.jpg",
    intro: "Pharmaceutical products require consistent flavor support. We develop practical systems for regulated categories.",
    marketFocus: ["Pharma manufacturers", "OTC product lines", "Health product teams", "Specialty therapy formats"],
    productFormats: ["Liquid syrups", "Suspensions", "Powder sachets", "Chewables"],
  },
  beverage: {
    title: "Food & Beverage",
    hero: "/images/flavor-factory/industry-beverage-hero.jpg",
    intro: "We support beverage and food teams with flavor systems made for repeat production and consistent sensory performance.",
    marketFocus: ["Beverage brands", "Food manufacturers", "Co-packers", "Emerging consumer brands"],
    productFormats: ["RTD beverages", "Syrups", "Concentrates", "Powder drink mixes"],
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
            <img src={industry.hero} alt={`${industry.title} market`} style={{ width: "100%", borderRadius: 32, maxHeight: 460, objectFit: "cover" }} />
            <div style={{ marginTop: 28, maxWidth: 880 }}>
              <SectionEyebrow>{industry.title}</SectionEyebrow>
              <SectionHeading>Flavor Support for {industry.title} Markets</SectionHeading>
              <p className="section-subtext" style={{ marginTop: 16 }}>{industry.intro}</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Market focus</SectionEyebrow>
                <SectionHeading>Who this market serves.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  These are the customer groups and business types we commonly support in this market.
                </p>
              </div>
              <div className="showcase-pills">
                {industry.marketFocus.map((item) => (
                  <span key={item} className="soft-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <div className="showcase-grid">
              <div>
                <SectionEyebrow>Application formats</SectionEyebrow>
                <SectionHeading>Common product formats in this market.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  We tailor flavor systems to how products are actually produced, filled, and consumed.
                </p>
              </div>
              <div className="showcase-pills">
                {industry.productFormats.map((item) => (
                  <span key={item} className="soft-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container strength-grid">
            {[
              ["Custom profile development", "Flavor systems built to match your target profile and process."],
              ["Sample turnaround", "Fast response for first-round and revised samples."],
              ["Format-specific support", "Liquid and powder options aligned to your product format."],
              ["Scale-ready consistency", "Manufacturing controls that support repeatable production output."],
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
                <SectionEyebrow>Ready to start?</SectionEyebrow>
                <SectionHeading>Let’s discuss your {industry.title.toLowerCase()} project.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  Send us your application format, target flavor, and timeline. We will recommend practical sample options.
                </p>
                <div className="showcase-pills">
                  {["Low minimum orders", "Fast turnaround", "Family-owned service", "Liquid and powder capabilities"].map((item) => (
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
                  <h3>Build your {industry.title.toLowerCase()} flavor direction with our team.</h3>
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
