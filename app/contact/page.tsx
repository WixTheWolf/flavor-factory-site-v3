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
                <h1 className="section-title" style={{ color: "white" }}>Talk with the people developing and manufacturing the flavor.</h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 760, color: "rgba(255,255,255,.84)" }}>
                  Reach out for custom flavor development, matching, samples, production questions, or application-specific support.
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
                <p>Send the finished product, flavor direction, liquid or powder preference, and timing so we can recommend useful starting points.</p>
              </article>
              <article>
                <h3>Need a match?</h3>
                <p>Include the benchmark, current challenges, target declaration, and any cost or ingredient constraints.</p>
              </article>
              <article>
                <h3>Need custom work?</h3>
                <p>Share the product goal. We can develop around sweetness, dosage, processing, masking, mouthfeel, cooling, and cost.</p>
              </article>
            </div>
            <Button href="/request-samples" className="mt-24">
              Request Samples
            </Button>
            <Button href="mailto:samples@flavorfactory.net" variant="secondary" className="mt-24 contact-secondary-cta">
              Email Samples
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
