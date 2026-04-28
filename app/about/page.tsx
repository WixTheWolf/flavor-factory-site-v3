import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <div className="eyebrow">About</div>
                <h1 className="section-title">Built for teams that need flavor expertise without operational friction.</h1>
                <p className="section-subtext" style={{ marginTop: 14 }}>
                  The Flavor Factory is a Southern California custom manufacturer of high quality liquid and powder flavor solutions. We are family-owned, service-driven, and focused on helping customers move from concept to production quickly.
                </p>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Customers rely on us for clear communication, practical recommendations, and flavor systems tuned for real applications—whether the need is indulgent, functional, or highly specific.
                </p>

                <div className="showcase-pills" style={{ marginTop: 16 }}>
                  {[
                    "40+ years of combined industry experience",
                    "Thousands of available flavor profiles",
                    "Customization for target taste and process",
                    "Fast, responsive development support",
                  ].map((item) => (
                    <span key={item} className="soft-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <Button href="/request-samples" className="mt-24">
                  Request Samples
                </Button>
              </div>
              <div className="sample-right">
                <AppImage src={siteImages.aboutHero} alt="Premium ingredient and formulation setup" style={{ objectPosition: "center 35%" }} />
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
