import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";

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
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Contact"
              title="Talk with the people developing and manufacturing the flavor."
              copy="Reach out for custom flavor development, matching, samples, production questions, or application-specific support."
              image={siteImages.contactHero}
              imageAlt="Flavor team collaboration and formulation workspace"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="mailto:samples@flavorfactory.net"
              secondaryLabel="Email Samples"
              imagePosition="center 30%"
            />

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
            <div className="contact-time-note">
              For time-sensitive requests, email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> directly with the application, target flavor, and timeline.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
