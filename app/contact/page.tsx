import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
<<<<<<< HEAD
=======
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
<<<<<<< HEAD
            <div className="eyebrow">Contact</div>
            <h1 className="section-title">Talk with our flavor team.</h1>
=======
            <div className="editorial-hero" style={{ marginBottom: 22 }}>
              <AppImage src={siteImages.contactHero} alt="Flavor team collaboration and formulation workspace" style={{ objectPosition: "center 30%" }} />
              <div className="editorial-overlay" />
            </div>
            <div className="eyebrow">Contact</div>
            <h1 className="section-title">Talk with a flavor partner that can move quickly and communicate clearly.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 760 }}>
              Whether you need a sample, a custom flavor, a match, or help choosing the right next step, we’re ready to help.
            </p>
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
            <div className="showcase-pills" style={{ marginTop: 14 }}>
              <span className="soft-pill">samples@flavorfactory.net</span>
              <span className="soft-pill">(951) 273-9877</span>
              <span className="soft-pill">2058 Second Street, Norco, CA 92860</span>
            </div>
<<<<<<< HEAD
            <Button href="/request-samples" className="mt-24">Request Samples</Button>
=======
            <Button href="/request-samples" className="mt-24">
              Request Samples
            </Button>
>>>>>>> 548318da6fb1b74bff62dc150768c36fe33e7b33
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
