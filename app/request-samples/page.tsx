import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SampleRequestForm } from "@/components/sample-request-form";

export default function RequestSamplesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48, paddingBottom: 88 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <div className="eyebrow">Request Samples</div>
                <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>Tell us your target profile and application.</h1>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Share your industry, desired flavor direction, and timeline. We’ll recommend practical sample options.
                </p>
                <SampleRequestForm />
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/application-gummy.jpg" alt="sample request" />
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
