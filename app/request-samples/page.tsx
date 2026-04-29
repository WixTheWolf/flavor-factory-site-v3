import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SampleRequestForm } from "@/components/sample-request-form";
<<<<<<< HEAD
=======
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

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
<<<<<<< HEAD
                <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>Tell us your target profile and application.</h1>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Share your industry, desired flavor direction, and timeline. We’ll recommend practical sample options.
=======
                <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  Tell us what you are building, what it should taste like, and what format you need.
                </h1>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Whether you need library samples, a custom flavor profile, or support matching an existing product, we can help direct the next step.
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
                </p>
                <SampleRequestForm />
              </div>
              <div className="sample-right">
<<<<<<< HEAD
                <img src="/images/flavor-factory/application-gummy.jpg" alt="sample request" />
=======
                <AppImage src={siteImages.requestSamplesHero} alt="Premium flavor sample preparation visuals" style={{ objectPosition: "center 35%" }} />
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
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
