import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/data/site-images";

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
    label: "Visit or Ship",
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
              title="Talk with the team that will work on your flavor."
              copy="Start a sample request, send us an email, or call the office. You will hear back from a real person who understands the project."
              image={siteImages.contactHero}
              imageAlt="California citrus grove at golden hour, Norco, CA"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              secondaryHref="mailto:samples@flavorfactory.net"
              secondaryLabel="Email Us"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
