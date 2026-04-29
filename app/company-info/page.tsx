import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
<<<<<<< HEAD
import { siteCopy } from "@/data/site-copy";
=======
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

const processSteps = [
  {
    title: "1) Scope",
    copy: "Share your target profile, application, format, and timeline.",
  },
  {
    title: "2) Sample",
    copy: "We propose profile options and submit practical starting points quickly.",
  },
  {
    title: "3) Refine",
    copy: "Feedback cycles focus on sensory fit, processing performance, and cost reality.",
  },
  {
    title: "4) Produce",
    copy: "Approved profiles transition to reliable production support.",
  },
];

const differentiators = [
  "Custom, proprietary, and exclusive flavor development",
  "Liquid and powder capabilities aligned to commercial production",
  "Responsive sample workflow with practical iteration support",
  "Programs across bakery, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, and syrup",
] as const;
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

export default function CompanyInfoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Company Info</div>
<<<<<<< HEAD
            <h1 className="section-title">Operational credibility built for long-term customer programs.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 860 }}>
              We combine custom flavor development with disciplined manufacturing support so teams can launch quickly and maintain consistency as they scale.
            </p>

            <div className="strength-grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
              {siteCopy.companyInfoBullets.map((item) => (
=======
            <h1 className="section-title">Built to support development, sampling, and production.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 860 }}>
              We work across multiple industries to create flavor systems that fit both the product vision and the application reality.
            </p>

            <div className="strength-grid two-col" style={{ marginTop: 22 }}>
              {differentiators.map((item) => (
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
                <article key={item} className="strength-card" style={{ minHeight: 150 }}>
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{item}</h3>
                </article>
              ))}
            </div>

<<<<<<< HEAD
            <div className="sample-panel" style={{ marginTop: 22 }}>
              <div className="sample-grid">
                <div className="sample-left">
                  <div className="eyebrow">How we work</div>
                  <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}>Brief. Sample. Refine. Produce.</h2>
                  <p className="section-subtext" style={{ marginTop: 10 }}>
                    Share your target profile, format, and timing. We’ll propose options from our flavor library or custom development path, then support revisions with practical turnaround.
                  </p>
                </div>
                <div className="sample-right">
                  <img src="/images/flavor-factory/application-pharmaceutical.jpg" alt="Quality-focused flavor production" />
=======
            <div className="banner-grid process-grid" style={{ marginTop: 24 }}>
              {processSteps.map((step) => (
                <article key={step.title} className="banner-card">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>

            <div className="sample-panel" style={{ marginTop: 24 }}>
              <div className="sample-grid">
                <div className="sample-left">
                  <div className="eyebrow">Service Standards</div>
                  <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}>
                    Low MOQ. Fast turnaround. High responsiveness.
                  </h2>
                  <p className="section-subtext" style={{ marginTop: 10 }}>
                    Clear communication, practical timelines, and disciplined follow-through from first sample to production.
                  </p>
                </div>
                <div className="sample-right">
                  <AppImage src={siteImages.companyInfoHero} alt="Quality-focused flavor production setup" style={{ objectPosition: "center 40%" }} />
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
                  <div className="sample-overlay" />
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
