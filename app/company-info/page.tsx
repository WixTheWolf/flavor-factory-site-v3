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
    copy: "Project paths can be developed around use level, solubility, processing, and finished-product format.",
  },
  {
    title: "Responsive sampling",
    copy: "A practical sample workflow for teams that need direction, iteration, and commercial momentum.",
  },
  {
    title: "Application breadth",
    copy: "Programs across bakery, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, syrup, and savory.",
  },
] as const;

const processSteps = [
  { title: "Scope", copy: "Target profile, application, format, declaration, benchmark, and timeline." },
  { title: "Sample", copy: "Representative starting points, adjusted to the product and project constraints." },
  { title: "Refine", copy: "Feedback cycles around taste, performance, use level, and cost reality." },
  { title: "Produce", copy: "Approved profiles move into production support with documentation alignment." },
] as const;

const companyFacts = [
  "Family-owned flavor manufacturer",
  "Southern California based",
  "Custom liquid and powder capabilities",
  "Low MOQ and practical development support",
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
                  Built to support development, sampling, and production.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 840, color: "rgba(255,255,255,.84)" }}>
                  The Flavor Factory helps brands create flavor systems that fit the product vision and the application reality.
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
                <h2>Flavor manufacturing support with enough flexibility to meet real development work.</h2>
                <p>
                  The best flavor path depends on the finished product: heat, pH, sweetness, dosage form, solubility, masking, cost, and label goals all matter. Our role is to help make those tradeoffs clearer.
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
                  Clear communication, practical timelines, and disciplined follow-through from first sample to production.
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
