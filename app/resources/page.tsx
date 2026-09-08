import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/Button";
import { resourceRequestSteps, resourceSections } from "@/data/resources";

export const metadata: Metadata = {
  title: "Supplier Resources and Documentation",
  description:
    "COAs, spec sheets, allergen statements, SDS, SQF documentation, FDA registration, and supplier qualification support from The Flavor Factory in Norco, CA.",
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Supplier Resources and Documentation | The Flavor Factory",
    description:
      "Production documentation, facility quality programs, certification support, and supplier qualification from a family-owned flavor manufacturer in Norco, CA.",
    images: [{ url: "/og?title=Supplier+Resources", width: 1200, height: 630, alt: "Supplier resources - The Flavor Factory" }],
  },
  twitter: {
    title: "Supplier Resources and Documentation | The Flavor Factory",
    description: "COAs, spec sheets, allergen statements, SQF docs, and supplier qualification support.",
    images: ["/og?title=Supplier+Resources"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.flavorfactory.net/resources" },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="clean-page-intro">
              <div className="new-eyebrow">Resources</div>
              <h1>Documentation for procurement, quality, and regulatory teams.</h1>
              <p>
                The documents below are available for approved production flavors and active development projects.
                Most requests are handled through{" "}
                <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> with a 1-2 business day response for standard qualification paperwork.
              </p>
              <div className="new-actions">
                <Button href="mailto:samples@flavorfactory.net">Request Documentation</Button>
                <Button href="/certifications" variant="secondary">View Certifications</Button>
              </div>
            </div>

            <RevealGroup className="resources-grid">
              {resourceSections.map((section) => (
                <RevealItem key={section.title}>
                  <section className="resources-section">
                    <h2>{section.title}</h2>
                    <p>{section.intro}</p>
                    <div className="resources-table-wrap">
                      <table className="resources-table">
                        <thead>
                          <tr>
                            <th scope="col">Document</th>
                            <th scope="col">What it covers</th>
                            <th scope="col">Availability</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item) => (
                            <tr key={item.name}>
                              <th scope="row">{item.name}</th>
                              <td>{item.description}</td>
                              <td>{item.availability}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal>
              <section className="resources-request-panel">
                <div className="new-eyebrow">How to request</div>
                <h2>Send the form or list what you need.</h2>
                <ol className="resources-steps">
                  {resourceRequestSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p>
                  Related pages: <Link href="/faq">FAQ</Link>, <Link href="/certifications">Certifications</Link>,{" "}
                  <Link href="/company-info">Company Info</Link>, <Link href="/contact">Contact</Link>.
                </p>
              </section>
            </Reveal>
          </div>
        </section>
        <CTA
          eyebrow="Supplier qualification"
          title="Need documents for a vendor file?"
          copy="Email samples@flavorfactory.net with your questionnaire or document list. Include the flavor name or project reference if you have one."
          href="mailto:samples@flavorfactory.net"
          label="Email Quality Team"
        />
      </main>
      <Footer />
    </>
  );
}