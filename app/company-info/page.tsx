import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";

const capabilities = [
  {
    title: "Custom flavor development",
    copy: "New profiles, matching work, proprietary directions, and application-aware adjustments.",
  },
  {
    title: "Liquid and powder formats",
    copy: "Develop around use level, solubility, processing, declaration, and finished-product format.",
  },
  {
    title: "Responsive sampling",
    copy: "A clear sample workflow for teams that need direction, iteration, and momentum.",
  },
  {
    title: "Application breadth",
    copy: "Programs across bakery, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, syrup, and savory.",
  },
] as const;

const processSteps = [
  { title: "Scope", copy: "Confirm the flavor target, application, format, benchmark, label goals, and timeline." },
  { title: "Sample", copy: "Choose starting points that make sense for the product and project constraints." },
  { title: "Refine", copy: "Adjust taste, performance, use level, masking, and cost through focused feedback." },
  { title: "Produce", copy: "Move approved profiles into manufacturing support and documentation." },
] as const;

const companyFacts = [
  "Family-owned flavor manufacturer",
  "Southern California based",
  "Custom liquid and powder capabilities",
  "Low MOQ sample and production support",
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
                  Custom flavor manufacturing from first sample to production.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 840, color: "rgba(255,255,255,.84)" }}>
                  We help brands develop liquid and powder flavor systems that fit the product, process, label, and customer experience.
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
                  The right path depends on heat, pH, sweetness, dosage form, solubility, masking, cost, and label goals. We help make those choices clearer before production.
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
                <h2>Low MOQ. Fast turnaround. High responsiveness.</h2>
                <p>
                  Clear communication, practical timelines, and follow-through from first sample to production.
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
