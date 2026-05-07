import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { flavorFactoryImages } from "@/data/flavor-factory-images";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";

const capabilities = [
  {
    title: "Development routes",
    copy: "Library starting points, new custom profiles, matches, and reformulations depending on what the project needs.",
  },
  {
    title: "Manufacturing formats",
    copy: "Liquid and powder flavors built around use level, carrier, handling, declaration, and finished-product format.",
  },
  {
    title: "Order practicalities",
    copy: "Low minimum order policy, responsive sample support, and practical order conversations that help teams plan.",
  },
  {
    title: "Application range",
    copy: "Support across bakery, confectionery, dairy, nutraceutical, oral care, pharmaceutical, syrup, popcorn, and savory.",
  },
] as const;

const processSteps = [
  { title: "Project details", copy: "Capture the application, flavor target, format, declaration, benchmark, and timing." },
  { title: "Route selection", copy: "Decide whether the best path is a stock direction, custom development, matching, or reformulation." },
  { title: "Sample review", copy: "Evaluate taste, strength, use level, masking, processing fit, and customer feedback." },
  { title: "Production order", copy: "Prepare the approved flavor for ordering, documentation, and repeat manufacturing." },
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
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Company Info"
              title="What we make, how it works, and what to expect."
              copy="This page is the practical side of The Flavor Factory: what we make, how projects move, and what customers should know before requesting samples or placing production orders."
              image={siteImages.companyInfoHero}
              imageAlt="Clean laboratory bench with amber flavor liquids in glass beakers and bottles"
              imagePosition="center 55%"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="/flavors"
              secondaryLabel="Explore Flavors"
            />

            <section className="company-fact-strip">
              {companyFacts.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </section>

            <section className="company-layout-grid">
              <div className="company-lead-panel">
                <div className="eyebrow">Capabilities</div>
                <h2>Good samples are only useful if they can repeat.</h2>
                <p>
                  A good sample is only useful if it can become a repeatable flavor. We look at the technical and commercial details early so the project has a clearer path forward.
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
                  <div className="new-eyebrow">Project Flow</div>
                  <h2 className="section-title">How a request becomes production-ready.</h2>
                </div>
                <p>
                  The goal is to remove guesswork before time is spent on the wrong sample path.
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
                <h2>Low MOQ. Responsive project support. Clear next steps.</h2>
                <p>
                  Ask about minimums, sample timing, repeat orders, documentation, and the details needed to quote or produce the flavor.
                </p>
              </div>
              <Button href="/contact">Talk With Us</Button>
            </section>

            <section className="company-visual-panel">
              <div className="company-visual-image">
                <AppImage
                  src={flavorFactoryImages.companyOperationsHero}
                  alt="Flavor samples in a clean production environment"
                  sizes="(max-width: 900px) calc(100vw - 48px), 50vw"
                  style={{ objectPosition: "center 52%" }}
                />
              </div>
              <div>
                <div className="eyebrow">Production Context</div>
                <h2>Details we want to know early.</h2>
                <p>
                  Format, use level, label requirements, processing conditions, packaging, order size, and timeline all affect the best flavor route. Sharing those details up front helps us recommend a cleaner next step.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
