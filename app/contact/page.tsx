import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach The Flavor Factory for custom flavor development, matching, samples, or production support. Norco, CA. (951) 273-9877 or samples@flavorfactory.net.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | The Flavor Factory",
    description:
      "Reach The Flavor Factory for custom flavor development, matching, samples, or production support. Norco, CA. (951) 273-9877.",
    images: [
      {
        url: "/og?title=Contact+The+Flavor+Factory",
        width: 1200,
        height: 630,
        alt: "Contact The Flavor Factory",
      },
    ],
  },
  twitter: {
    title: "Contact | The Flavor Factory",
    description:
      "Custom flavor development, matching, and production support. Norco, CA. (951) 273-9877 or samples@flavorfactory.net.",
    images: ["/og?title=Contact+The+Flavor+Factory"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/data/site-images";

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

const BC = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" }, { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.flavorfactory.net/contact" }] };

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Contact"
              title="Talk with the people developing and manufacturing the flavor."
              copy="Reach out for custom flavor development, matching, samples, production questions, or application-specific support."
              image={siteImages.contactHero}
              imageAlt="California citrus grove at golden hour, Norco, CA"
              primaryHref="/request-samples"
              primaryLabel="Request a Custom Sample"
              secondaryHref="mailto:samples@flavorfactory.net"
              secondaryLabel="Email Samples"
              imagePosition="center 40%"
            />

            <RevealGroup className="contact-direct-grid" stagger={0.08}>
              {contactDetails.map((item) => (
                <RevealItem key={item.label}>
                  <a className="contact-direct-card" href={item.href}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
            <RevealGroup className="contact-choice-grid" stagger={0.1}>
              <RevealItem>
                <article>
                  <h3>Need samples?</h3>
                  <p>Share your product constraints and we&apos;ll build the first round around your manufacturing, not generic starting points. Most flavor suppliers work backwards from their library. We work backwards from your line.</p>
                </article>
              </RevealItem>
              <RevealItem>
                <article>
                  <h3>Need a match?</h3>
                  <p>We&apos;ll reformulate around your specific product, processing, cost, and label. Matching isn&apos;t about cloning. It&apos;s about understanding what made the reference work and building something better for your constraints.</p>
                </article>
              </RevealItem>
              <RevealItem>
                <article>
                  <h3>Need custom work?</h3>
                  <p>We develop around your specific application: the base, the temperature, the processing, the label requirements. No generic &quot;cherry flavor.&quot; The flavor that survives your product.</p>
                </article>
              </RevealItem>
            </RevealGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
