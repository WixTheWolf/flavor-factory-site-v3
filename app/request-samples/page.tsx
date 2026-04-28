import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SampleRequestForm } from "@/components/sample-request-form";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

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
                <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  Tell us your target profile, format, and application.
                </h1>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Share key details and timelines. We’ll recommend practical sample options for your category and usage conditions.
                </p>
                <SampleRequestForm />
              </div>
              <div className="sample-right">
                <AppImage src={siteImages.requestSamplesHero} alt="Premium flavor sample preparation visuals" style={{ objectPosition: "center 35%" }} />
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
