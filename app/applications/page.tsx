import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { applications } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Applications</SectionEyebrow>
            <SectionHeading>Practical product formats we formulate for.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 820 }}>
              Our applications work focuses on the finished products your customers buy, from RTD beverages and gummies to oral care and syrups.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container application-page-grid">
            {applications.map((item) => (
              <article key={item.name} className="application-card application-card--detailed">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <SectionEyebrow>Need support?</SectionEyebrow>
                <SectionHeading>Tell us your product format and target profile.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 16 }}>
                  We will recommend a practical sample path based on your application, processing conditions, and timeline.
                </p>
                <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Start Your Request</Link>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Application development" />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <div className="eyebrow" style={{ color: "#f59e0b" }}>Application support</div>
                  <h3>Custom flavors for real production formats.</h3>
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
