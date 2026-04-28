import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
                  Include your format (liquid or powder), industry, flavor direction, and timeline. We’ll recommend matching options and next sample steps.
                </p>
                <SampleRequestForm />
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/application-gummy.jpg" alt="Flavor sample concept" />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <h3>samples@flavorfactory.net</h3>
                  <p>Low MOQs • Fast turnaround • Technical support</p>
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
