import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";

const steps = [
  {
    title: "Tell us about the product.",
    detail:
      "Application format, target flavor profile, label requirements, timeline, and the constraints that will actually affect the formula. The more specific, the closer the first samples will be.",
    give: "A 10-minute conversation or a quick email.",
    get: "A development direction and a timeline.",
  },
  {
    title: "We build the first samples.",
    detail:
      "Initial flavor directions are built with your real product system in mind: base, processing, sweetener, and actives all considered. Liquid or powder depends on the application.",
    give: "A confirmed brief.",
    get: "First sample directions, typically in 3-5 business days.",
  },
  {
    title: "You review and direct the revisions.",
    detail:
      "Feedback turns into focused adjustments, not scattered guessing. Each round has a clear target, and we document what changed so every revision moves forward.",
    give: "Clear feedback on taste, strength, finish, and fit.",
    get: "A tighter next version with the decision thread intact.",
  },
  {
    title: "We prepare for production.",
    detail:
      "Approved work moves into manufacturing specs with documentation that keeps the flavor consistent from bench to batch. Repeat orders have a clean path from day one.",
    give: "Approval, order timing, and production needs.",
    get: "A production-ready flavor path.",
  },
] as const;

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Process"
              title="Here is what we need from you."
              copy="Development works best when the brief is specific. Application, base, processing conditions, label goals, and timeline shape the first sample."
              image={siteImages.requestSamplesHero}
              imageAlt="Sample request details and flavor development tools"
              primaryHref="/request-samples"
              primaryLabel="Send Us a Brief"
              secondaryHref="/contact"
              secondaryLabel="Talk With Us"
              imagePosition="58% center"
            />

            <div className="page-accent-image">
              <AppImage
                src="/images/flavor-factory/golden-amber-macro-swirl.png"
                alt="Flavor craft — replace with final image"
                sizes="(max-width: 980px) calc(100vw - 40px), 1240px"
                style={{ objectFit: "contain" }}
              />
            </div>

            <section className="process-customer-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">How It Works</div>
                  <h2 className="section-title">Four steps. You are in control of all of them.</h2>
                </div>
                <p className="section-subtext">
                  Clear stages help you compare versions, direct revisions, and move the approved flavor into production without losing what made it work.
                </p>
              </div>
              <div className="process-customer-grid">
                {steps.map((step, index) => (
                  <article key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                    <div>
                      <strong>What you give us:</strong> {step.give}
                    </div>
                    <div>
                      <strong>What you get back:</strong> {step.get}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
        <CTA
          eyebrow="Brief"
          title="Start with the product details."
          copy="Application, target profile, and timeline. That is enough to get the first samples moving."
          label="Send Us a Brief"
        />
      </main>
      <Footer />
    </>
  );
}
