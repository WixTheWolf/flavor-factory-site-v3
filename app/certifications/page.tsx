import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";

export const metadata: Metadata = {
  title: "Flavor Certifications",
  description:
    "SQF facility, GMP practices, FDA registration, and project-specific Kosher, Halal, and organic-compliant support.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    url: "/certifications",
    title: "Flavor Certifications | The Flavor Factory",
    description:
      "SQF facility, GMP practices, FDA registration, and project-specific certification support.",
    images: [
      {
        url: "/og?title=Flavor+Certifications",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory certifications",
      },
    ],
  },
  twitter: {
    title: "Flavor Certifications | The Flavor Factory",
    description: "Facility programs and project-specific certification support.",
    images: ["/og?title=Flavor+Certifications"],
  },
};

const certificationNotes = [
  {
    name: "SQF",
    note: "Facility-level food safety and quality program.",
    scope: "Program documents are available for supplier qualification.",
  },
  {
    name: "GMP",
    note: "Good Manufacturing Practices across production and handling.",
    scope: "Applies to the Norco facility.",
  },
  {
    name: "FDA Registered Facility",
    note: "Registered food manufacturing facility in Norco, California.",
    scope: "Registration documents are available by request.",
  },
  {
    name: "Kosher",
    note: "Available for qualifying formulas.",
    scope: "Status is confirmed for the specific project.",
  },
  {
    name: "Halal",
    note: "Available for qualifying formulas.",
    scope: "Ingredient and formula status are reviewed by project.",
  },
  {
    name: "Organic-Compliant",
    note: "Development paths are available where applicable.",
    scope: "Requirements should be included in the initial brief.",
  },
] as const;

const BC_CERTIFICATIONS = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Certifications","item":"https://www.flavorfactory.net/certifications"}]};

export default function CertificationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_CERTIFICATIONS) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="clean-page-intro">
              <div className="new-eyebrow">Quality & Documentation</div>
              <h1>Requirements reviewed at the start.</h1>
              <p>Facility programs, certification needs, and production documents are handled by project.</p>
              <div className="new-actions">
                <Button href="/resources">Supplier Resources</Button>
                <Button href="/request-samples" variant="secondary">Request a Sample</Button>
              </div>
            </div>

            <div className="clean-cert-badges">
              <AppImage
                src={siteImages.certificationsHero}
                alt="Facility quality, Kosher, Halal, organic-compliant, and FDA registration program badges"
                fill={false}
                width={2172}
                height={724}
                priority
                sizes="(max-width: 980px) calc(100vw - 40px), 1040px"
              />
            </div>

            <section className="quality clean-quality-panel">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Programs</div>
                  <h2 className="section-title">Clear scope. Clear documentation.</h2>
                </div>
              </div>
              <RevealGroup className="quality-grid quality-card-grid">
                {certificationNotes.map((item) => (
                  <RevealItem key={item.name}>
                    <article className="quality-badge quality-note-card">
                      <h2>{item.name}</h2>
                      <p>{item.note}</p>
                      <p className="certification-meta">{item.scope}</p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <section className="certification-claim-section">
              <div>
                <div className="new-eyebrow">Need a Document?</div>
                <h2>Send us the request.</h2>
                <p>Include the flavor name, project reference, and document list.</p>
              </div>
              <div className="new-actions">
                <Button href="mailto:samples@flavorfactory.net">Email the Team</Button>
                <Button href="/resources" variant="secondary">View Resources</Button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
