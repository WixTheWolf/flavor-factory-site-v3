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
                <h1 className="section-title" style={{ color: "white" }}>Talk with the team that makes the flavor.</h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 760, color: "rgba(255,255,255,.84)" }}>
                  Samples, matching, custom development, production questions, and next steps all start here.
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
                <p>Send the application, format, target profile, and timing so we can recommend useful starting points.</p>
              </article>
              <article>
                <h3>Need a match?</h3>
                <p>Include the benchmark, constraints, and target declaration so we can evaluate the cleanest route.</p>
              </article>
              <article>
                <h3>Need custom work?</h3>
                <p>Share the finished-product goal. We can develop around sweetness, dosage, processing, masking, and cost.</p>
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
