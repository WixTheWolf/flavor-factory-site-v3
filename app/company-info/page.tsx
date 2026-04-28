import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export default function CompanyInfoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Company Info</div>
            <h1 className="section-title">Operational credibility built for repeatable flavor programs.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 860 }}>
              The Flavor Factory combines custom development with disciplined manufacturing support so your team can launch faster and scale with confidence.
            </p>

            <div className="strength-grid two-col" style={{ marginTop: 22 }}>
              {differentiators.map((item) => (
                <article key={item} className="strength-card" style={{ minHeight: 150 }}>
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{item}</h3>
                </article>
              ))}
            </div>

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
                    Standard lead times are typically 3–5 business days. We keep communication direct and timelines visible so product teams can make decisions quickly.
                  </p>
                </div>
                <div className="sample-right">
                  <AppImage src={siteImages.companyInfoHero} alt="Quality-focused flavor production setup" style={{ objectPosition: "center 40%" }} />
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
