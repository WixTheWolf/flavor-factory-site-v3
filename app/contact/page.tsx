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
            <div className="editorial-hero editorial-hero-compact" style={{ marginBottom: 22 }}>
              <AppImage
                src={siteImages.contactHero}
                alt="Flavor team collaboration and formulation workspace"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>Contact</div>
                <h1 className="section-title" style={{ color: "white" }}>
                  Talk with a flavor partner that can move quickly and communicate clearly.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 760, color: "rgba(255,255,255,.84)" }}>
                  Samples, matches, custom profiles, and practical next steps for the product you are actually building.
                </p>
              </div>
            </div>

            <div className="eyebrow">Direct Lines</div>
            <div className="showcase-pills" style={{ marginTop: 14 }}>
              <span className="soft-pill">samples@flavorfactory.net</span>
              <span className="soft-pill">(951) 273-9877</span>
              <span className="soft-pill">2058 Second Street, Norco, CA 92860</span>
            </div>
            <div className="contact-choice-grid" style={{ marginTop: 22 }}>
              <article>
                <h3>Need samples?</h3>
                <p>Share your application, format, target profile, and timing so we can point you toward the right starting profiles.</p>
              </article>
              <article>
                <h3>Need a match?</h3>
                <p>Send the benchmark, constraints, and target declaration. We can help evaluate the fastest practical route.</p>
              </article>
              <article>
                <h3>Need custom work?</h3>
                <p>Bring the finished-product vision. We can develop around sweetness, dosage, processing, masking, and cost targets.</p>
              </article>
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
