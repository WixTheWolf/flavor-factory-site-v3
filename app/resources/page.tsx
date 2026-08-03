import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/Button";
import { resourceRequestSteps, resourceSections } from "@/data/resources";

export const metadata: Metadata = {
  title: "Supplier Resources and Documentation",
  description:
    "COAs, specifications, allergen statements, SDS documents, facility programs, and supplier qualification support.",
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Supplier Resources and Documentation | The Flavor Factory",
    description: "Production documents and supplier qualification support.",
    images: [{ url: "/og?title=Supplier+Resources", width: 1200, height: 630, alt: "Supplier resources - The Flavor Factory" }],
  },
  twitter: {
    title: "Supplier Resources and Documentation | The Flavor Factory",
    description: "Production documents and supplier qualification support.",
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
              <div className="new-eyebrow">Supplier Resources</div>
              <h1>Documents for quality and procurement teams.</h1>
              <p>Standard requests are typically handled within 1-2 business days.</p>
              <div className="new-actions">
                <Button href="mailto:samples@flavorfactory.net">Request Documents</Button>
                <Button href="/certifications" variant="secondary">View Quality Support</Button>
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
                            <th scope="col">Purpose</th>
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
                <div className="new-eyebrow">How to Request</div>
                <h2>Send the form or document list.</h2>
                <ol className="resources-steps">
                  {resourceRequestSteps.map((step) => <li key={step}>{step}</li>)}
                </ol>
              </section>
            </Reveal>
          </div>
        </section>
        <CTA
          eyebrow="Supplier Documents"
          title="Need a vendor file?"
          copy="Email the questionnaire or document list with the flavor or project reference."
          href="mailto:samples@flavorfactory.net"
          label="Email the Team"
        />
      </main>
      <Footer />
    </>
  );
}
