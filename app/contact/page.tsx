import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

const contactDetails = [
  {
    label: "Email",
    value: "samples@flavorfactory.net",
    href: "mailto:samples@flavorfactory.net",
  },
  {
    label: "Phone",
    value: "(951) 273-9877",
    href: "tel:+19512739877",
  },
  {
    label: "Address",
    value: "2058 Second Street, Norco, CA 92860",
    href: "https://maps.google.com/?q=2058%20Second%20Street%2C%20Norco%2C%20CA%2092860",
  },
] as const;

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
            <div className="contact-direct-grid">
              {contactDetails.map((item) => (
                <a className="contact-direct-card" href={item.href} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
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
            <div className="contact-cta-row">
              <Button href="/request-samples">Request Samples</Button>
              <Button href="mailto:samples@flavorfactory.net" variant="secondary">
                Email Samples
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
