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
                  Send the brief. We will help shape the sample path.
                </h1>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Tell us the application, flavor target, preferred format, timeline, and any benchmark. Your request goes directly to samples@flavorfactory.net.
                </p>
                <SampleRequestForm />
              </div>
              <div className="sample-right">
                <AppImage
                  src={siteImages.requestSamplesHero}
                  alt="Premium flavor sample preparation visuals"
                  priority
                  sizes="(max-width: 1200px) calc(100vw - 48px), 50vw"
                  style={{ objectPosition: "center 35%" }}
                />
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
