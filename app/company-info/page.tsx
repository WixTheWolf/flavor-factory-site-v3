import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";

const capabilities = [
  {
    title: "Custom flavor development",
    copy: "New profiles, proprietary directions, and application-aware adjustments for real product needs.",
  },
  {
    title: "Liquid and powder formats",
    copy: "Develop around use level, solubility, processing, declaration, and finished-product format.",
  },
  {
    title: "Responsive sampling",
    copy: "A sample workflow for teams that need direction, clear communication, and quick iteration.",
  },
  {
    title: "Application breadth",
    copy: "Programs across bakery, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, syrup, and savory.",
  },
] as const;

const processSteps = [
  { title: "Scope", copy: "Confirm the flavor target, application, format, benchmark, label goals, and timeline." },
  { title: "Sample", copy: "Choose library starting points, matched profiles, or custom directions that fit the product." },
  { title: "Refine", copy: "Adjust taste, performance, use level, masking, and cost through focused feedback." },
  { title: "Produce", copy: "Move approved profiles into manufacturing support and documentation." },
] as const;

const companyFacts = [
  "Family-owned flavor manufacturer",
  "Southern California based",
  "Custom liquid and powder capabilities",
  "Low minimum order policy",
] as const;

export default function CompanyInfoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="editorial-hero company-hero">
              <AppImage
                src={siteImages.companyInfoHero}
                alt="Quality-focused flavor production setup"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 40%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>Company Info</div>
                <h1 className="section-title" style={{ color: "white" }}>
                  Custom flavor manufacturing with service built in.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 840, color: "rgba(255,255,255,.84)" }}>
                  We provide samples, custom flavor development, matching, reformulation, and liquid or powder manufacturing for products that need to taste right and run well.
                </p>
                <div className="hero-actions">
                  <Button href="/flavors" variant="secondary">Explore Flavors</Button>
                  <Button href="/request-samples">Request Samples</Button>
                </div>
              </div>
            </div>

            <section className="company-fact-strip">
              {companyFacts.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </section>

            <section className="company-layout-grid">
              <div className="company-lead-panel">
                <div className="eyebrow">Capabilities</div>
                <h2>Manufacturing support with room for real development.</h2>
                <p>
                  The right flavor path depends on heat, pH, sweetness, fat systems, dosage form, solubility, masking, cost, and label goals. We help make those choices clearer before production.
                </p>
              </div>
              <div className="company-capability-grid">
                {capabilities.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="company-process-panel">
              <div className="section-head">
                <div>
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Project Flow</div>
                  <h2 className="section-title" style={{ color: "white" }}>From idea to approved profile.</h2>
                </div>
                <p style={{ color: "rgba(255,255,255,.72)" }}>
                  A clear workflow keeps sampling focused and helps teams avoid wasted rounds.
                </p>
              </div>
              <div className="company-process-grid">
                {processSteps.map((step, index) => (
                  <article key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="company-service-panel">
              <div>
                <div className="eyebrow">Service Standards</div>
                <h2>Low MOQ. Fast turnaround. Responsive project support.</h2>
                <p>
                  Low minimums, 3-5 business day order lead-time targets, and follow-through from first sample to production.
                </p>
              </div>
              <Button href="/contact">Talk With Us</Button>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
