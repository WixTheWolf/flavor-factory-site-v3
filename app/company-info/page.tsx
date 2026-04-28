import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteCopy } from "@/data/site-copy";

export default function CompanyInfoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Company Info</div>
            <h1 className="section-title">Operational credibility built for long-term customer programs.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 860 }}>
              We combine custom flavor development with disciplined manufacturing support so teams can launch quickly and maintain consistency as they scale.
            </p>

            <div className="strength-grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
              {siteCopy.companyInfoBullets.map((item) => (
                <article key={item} className="strength-card" style={{ minHeight: 150 }}>
                  <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{item}</h3>
                </article>
              ))}
            </div>

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
