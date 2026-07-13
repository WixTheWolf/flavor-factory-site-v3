import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { TrackedLink } from "@/components/AnalyticsEvents";
import { servicePages } from "@/data/service-pages";

const serviceCtaLabels: Record<string, string> = {
  "custom-liquid-flavors": "Request a Custom Liquid Flavor",
  "custom-powder-flavors": "Discuss a Powder Flavor",
  "flavor-matching": "Start a Flavor Match",
  "masking-and-modulation": "Discuss Masking Support",
  "organic-compliant-flavors": "Discuss Organic-Compliant Options",
  "natural-flavor-manufacturer-california": "Request a Natural Flavor",
  "oral-care-flavors": "Request an Oral Care Flavor",
  "nutraceutical-flavors": "Discuss a Nutraceutical Flavor",
  "beverage-flavors": "Request a Beverage Flavor",
  "bakery-flavors": "Request a Bakery Flavor",
  "pharmaceutical-flavors": "Discuss a Pharmaceutical Flavor",
  "popcorn-seasoning-flavors": "Discuss a Popcorn Flavor",
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ service: service.slug }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const service = servicePages.find((item) => item.slug === params.service);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title: `${service.title} | The Flavor Factory`, description: service.description, url: `/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = servicePages.find((item) => item.slug === params.service);
  if (!service) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@type": "Organization", name: "The Flavor Factory", url: "https://flavorfactory.net" },
      areaServed: "US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Capabilities", item: "https://flavorfactory.net/capabilities" },
        { "@type": "ListItem", position: 2, name: service.eyebrow, item: `https://flavorfactory.net/${service.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="section clean-page service-page">
          <div className="container">
            <nav className="industry-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/capabilities">Capabilities</Link><span aria-hidden="true">/</span><span>{service.eyebrow}</span>
            </nav>

            <div className="clean-page-intro">
              <div className="new-eyebrow">{service.eyebrow}</div>
              <h1>{service.title}</h1>
              <p>{service.intro}</p>
              <div className="new-actions">
                <TrackedLink
                  href="/request-samples"
                  className="cta-btn"
                  event="service_page_cta_click"
                  eventData={{ service: service.slug, location: "intro" }}
                >
                  {serviceCtaLabels[service.slug] ?? "Start a Flavor Brief"}
                </TrackedLink>
                <Link className="light-btn" href="/contact">Talk to Our Team</Link>
              </div>
            </div>

            {/* Killer section - unique per page */}
            <section className="service-killer-section">
              <div className="new-eyebrow">{service.killerSection.title}</div>
              <ul className="service-killer-list">
                {service.killerSection.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <div className="service-page-grid">
              <section>
                <div className="new-eyebrow">What We Provide</div>
                <h2>Built around your base, process, use level, and label goal.</h2>
                <ul>{service.provides.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <section>
                <div className="new-eyebrow">Common Challenges</div>
                <h2>Where the system can fail.</h2>
                <ul>{service.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>

            <section className="service-brief-section">
              <div>
                <div className="new-eyebrow">Start With a Useful Brief</div>
                <h2>Tell us what the flavor has to work inside.</h2>
              </div>
              <ul>{service.brief.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="service-faq-section">
              <div className="new-eyebrow">Questions</div>
              <h2>Starting the conversation.</h2>
              {service.faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </section>

            <div className="service-related-links">
              {service.related.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            </div>
          </div>
        </section>
        <CTA
          eyebrow="Have a flavor problem to solve?"
          title="From first sample to repeatable production."
          copy="Send the application, base, and constraints. We will help find the right starting direction."
          label={serviceCtaLabels[service.slug] ?? "Start a Flavor Brief"}
        />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
