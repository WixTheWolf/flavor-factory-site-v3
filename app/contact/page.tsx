import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <div className="editorial-hero" style={{ marginBottom: 22 }}>
              <AppImage src={siteImages.contactHero} alt="Flavor team collaboration and formulation workspace" style={{ objectPosition: "center 30%" }} />
              <div className="editorial-overlay" />
            </div>
            <div className="eyebrow">Contact</div>
            <h1 className="section-title">Talk directly with our flavor team.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 760 }}>
              Whether you are evaluating flavor options, troubleshooting an existing profile, or launching a new product, we’ll route you to the right person quickly.
            </p>
            <div className="showcase-pills" style={{ marginTop: 14 }}>
              <span className="soft-pill">samples@flavorfactory.net</span>
              <span className="soft-pill">(951) 273-9877</span>
              <span className="soft-pill">2058 Second Street, Norco, CA 92860</span>
            </div>
            <Button href="/request-samples" className="mt-24">
              Request Samples
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
