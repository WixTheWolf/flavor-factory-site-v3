import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quality and Certification Support",
  description:
    "SQF facility, GMP practices, FDA registered facility, and Kosher, Halal, and organic-compliant options available by project.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    url: "/certifications",
    title: "Quality and Certification Support | The Flavor Factory",
    description:
      "Facility quality programs, formula-specific certification support, and supplier documentation from The Flavor Factory.",
    images: [
      {
        url: "/og?title=Quality+and+Certification+Support",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory quality and certification support",
      },
    ],
  },
};

const programs = [
  {
    name: "SQF",
    summary: "Facility-level food safety and quality management program.",
    availability: "Current program documentation is available by request for supplier qualification.",
  },
  {
    name: "GMP",
    summary: "Good Manufacturing Practices for production, handling, and documentation workflows.",
    availability: "A GMP summary is available by request.",
  },
  {
    name: "FDA Registered Facility",
    summary: "The Norco facility is registered with the FDA as a food manufacturing operation.",
    availability: "Registration documentation is available for supplier files.",
  },
  {
    name: "Kosher",
    summary: "Kosher status is confirmed for the specific formula and project.",
    availability: "Tell us the requirement before development so qualifying directions can be confirmed.",
  },
  {
    name: "Halal",
    summary: "Halal status depends on formula, ingredients, and sourcing.",
    availability: "Status is reviewed before development proceeds when required.",
  },
  {
    name: "Organic-Compliant",
    summary: "Organic-compliant development paths are available where the formula and ingredients allow.",
    availability: "Bring the label goal into the brief so the requirement is reviewed early.",
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" },
    { "@type": "ListItem", position: 2, name: "Quality", item: "https://www.flavorfactory.net/certifications" },
  ],
};

export default function CertificationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="quality-page-hero">
              <div className="quality-page-copy">
                <div className="new-eyebrow">Quality</div>
                <h1>Clear documentation for the formula, facility, and vendor file.</h1>
                <p>
                  Facility programs and formula-specific requirements are kept separate. That makes it easier to understand what applies to the plant, what applies to the flavor, and what can be supplied for your project.
                </p>
                <div className="new-actions">
                  <Button href="mailto:samples@flavorfactory.net?subject=Supplier%20qualification%20documents">Request Supplier Documents</Button>
                  <Button href="/request-samples" variant="secondary">Request a Sample</Button>
                </div>
                <p className="quality-response-note">Standard supplier-document requests are typically answered within 1-2 business days.</p>
              </div>
              <div className="quality-page-image">
                <AppImage
                  src={siteImages.certificationsHero}
                  alt="Facility quality, kosher, halal, organic-compliant, and FDA registration program badges"
                  fill={false}
                  width={2172}
                  height={724}
                  priority
                  sizes="(max-width: 980px) calc(100vw - 40px), 620px"
                />
              </div>
            </div>

            <section className="quality-programs-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Programs and Options</div>
                  <h2 className="section-title">What applies at the facility and what is confirmed by formula.</h2>
                </div>
                <p className="section-subtext">
                  Certification and label requirements should be included in the project brief before sample development begins.
                </p>
              </div>
              <RevealGroup className="quality-program-grid" stagger={0.06}>
                {programs.map((item) => (
                  <RevealItem key={item.name}>
                    <article className="quality-program-card">
                      <h2>{item.name}</h2>
                      <p>{item.summary}</p>
                      <span>{item.availability}</span>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <section className="quality-request-panel">
              <div>
                <div className="new-eyebrow">Vendor Qualification</div>
                <h2>Send the questionnaire or document list.</h2>
                <p>
                  Include the project name or flavor reference when one exists. The quality team will confirm what is available for the facility and the specific formula.
                </p>
              </div>
              <div className="quality-request-actions">
                <Button href="mailto:samples@flavorfactory.net?subject=Supplier%20questionnaire%20and%20document%20request">Email the Quality Team</Button>
                <Button href="/resources" variant="secondary">See Available Documents</Button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
