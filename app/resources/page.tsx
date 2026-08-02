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
    "COAs, specifications, allergen statements, SDS, SQF documentation, FDA registration, and supplier qualification support from The Flavor Factory.",
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Supplier Resources and Documentation | The Flavor Factory",
    description:
      "Production documentation, facility quality programs, certification support, and supplier qualification from The Flavor Factory.",
    images: [{ url: "/og?title=Supplier+Resources", width: 1200, height: 630, alt: "Supplier resources from The Flavor Factory" }],
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
            <div className="clean-page-intro resources-intro">
              <div className="new-eyebrow">Supplier Resources</div>
              <h1>Documentation for procurement, quality, and regulatory teams.</h1>
              <p>
                The documents below are available for approved production flavors and active development projects. Standard qualification requests are typically answered within 1-2 business days.
              </p>
              <div className="new-actions">
                <Button href="mailto:samples@flavorfactory.net?subject=Supplier%20documentation%20request">Request Supplier Documents</Button>
                <Button href="/certifications" variant="secondary">Review Quality Programs</Button>
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
                <div className="new-eyebrow">How to Request Documents</div>
                <h2>Send the questionnaire or list what you need.</h2>
                <ol className="resources-steps">
                  {resourceRequestSteps.map((step) => <li key={step}>{step}</li>)}
                </ol>
                <p>
                  Related information: <Link href="/certifications">Quality</Link>, <Link href="/faq">FAQ</Link>,{" "}
                  <Link href="/process">How It Works</Link>, and <Link href="/contact">Contact</Link>.
                </p>
              </section>
            </Reveal>
          </div>
        </section>
        <CTA
          eyebrow="Supplier Qualification"
          title="Need documents for a vendor file?"
          copy="Email the questionnaire or document list and include the project or flavor reference when one exists."
          href="mailto:samples@flavorfactory.net?subject=Vendor%20qualification%20document%20request"
          label="Email the Quality Team"
        />
      </main>
      <Footer />
    </>
  );
}
