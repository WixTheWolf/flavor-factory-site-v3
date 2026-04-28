import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { industries, trustPoints } from "@/components/site-data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-kicker"><span className="hero-dot" /> Southern California • Family-Owned</div>
              <h1 className="hero-title">Premium Liquid & Powder Flavor Solutions</h1>
              <p className="hero-text">
                The Flavor Factory is a custom manufacturer helping brands and product teams find, refine, and scale the exact flavor profile they need.
              </p>
              <div className="hero-actions">
                <Link href="/flavors" className="cta-btn">Explore Flavors</Link>
                <Link href="/request-samples" className="light-btn">Request Samples</Link>
              </div>
              <div className="showcase-pills" style={{ marginTop: 24 }}>
                {trustPoints.map((point) => <span key={point} className="soft-pill">{point}</span>)}
              </div>
            </div>
            <div className="hero-media">
              <img src="/images/flavor-factory/hero-main.jpg" alt="Premium flavor ingredients and lab craftsmanship" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Industries</div>
                <h2 className="section-title">Built for Real-World Production Categories</h2>
              </div>
              <Link href="/industries" className="light-btn">View all industries</Link>
            </div>
            <div className="path-grid">
              {industries.map((industry) => (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} className="path-card">
                  <img src={industry.heroImage} alt={industry.name} />
                  <div className="path-overlay" />
                  <div className="path-content">
                    <h3>{industry.name}</h3>
                    <p>{industry.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0, paddingBottom: 88 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <div className="eyebrow">Need a fast next step?</div>
                <h2 className="section-title" style={{ marginTop: 10 }}>Send Your Target Profile. Get Sample Recommendations.</h2>
                <p className="section-subtext" style={{ marginTop: 14 }}>
                  Share application, format, and timeline. We’ll help you narrow options quickly and recommend liquid or powder paths that fit your product.
                </p>
                <Link href="/request-samples" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Flavor lab macro visual" />
                <div className="sample-overlay" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
