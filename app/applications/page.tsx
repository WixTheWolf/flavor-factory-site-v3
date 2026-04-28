import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { applications } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container simple-panel">
            <SectionEyebrow>Applications</SectionEyebrow>
            <SectionHeading>Application formats we support</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16 }}>
              We develop custom liquid and powder flavors for a wide range of applications.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container application-grid simple-grid">
            {applications.map((item) => (
              <div key={item.name} className="application-card placeholder-card">
                <div className="placeholder-box">Image Placeholder</div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 16, paddingBottom: 80 }}>
          <div className="container simple-panel">
            <SectionHeading>Need samples for a specific format?</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              Tell us your product type, target profile, and timeline. We&apos;ll recommend the right sample direction.
            </p>
            <a href="/contact" className="cta-btn" style={{ marginTop: 22 }}>Request Samples</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
