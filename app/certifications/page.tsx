import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Flavor Certifications",
  description:
    "SQF facility, GMP practices, FDA registered facility, and Kosher, Halal, and organic-compliant options available by project. Certification needs reviewed as part of the development brief.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    url: "/certifications",
    title: "Flavor Certifications | The Flavor Factory",
    description:
      "SQF facility, GMP practices, FDA registered facility, and Kosher, Halal, and organic-compliant options available by project.",
    images: [
      {
        url: "/og?title=Flavor+Certifications&description=SQF+facility%2C+GMP+practices%2C+FDA+registered+facility",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory certifications",
      },
    ],
  },
  twitter: {
    title: "Flavor Certifications | The Flavor Factory",
    description:
      "SQF facility, GMP practices, FDA registered facility, and Kosher, Halal, and organic-compliant options available by project.",
    images: ["/og?title=Flavor+Certifications&description=SQF+facility%2C+GMP+practices%2C+FDA+registered+facility"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";

const certificationNotes = [
  {
    name: "SQF",
    note: "Our SQF program gives customer quality teams a recognized framework to review during supplier qualification.",
    scope: "Facility-level food safety and quality management program.",
    request: "Program documentation available by request for vendor files.",
  },
  {
    name: "GMP",
    note: "Good Manufacturing Practices govern how every flavor is handled, produced, and documented, from raw material receipt through finished-goods release.",
    scope: "Applies to all production and documentation workflows in Norco.",
    request: "GMP summary available by request.",
  },
  {
    name: "Kosher",
    note: "Many of our flavors carry Kosher certification. If your product requires it, tell us at the start of the project and we'll confirm the status for the specific formula.",
    scope: "Formula-specific. Certification agency and status confirmed per project.",
    request: "Kosher documentation provided for qualifying approved formulas.",
  },
  {
    name: "Halal",
    note: "Halal status varies by formula. Share the requirement up front and we'll confirm which directions qualify, or develop one that does.",
    scope: "Formula-specific based on ingredient sourcing and project requirements.",
    request: "Halal status confirmed before development proceeds when required.",
  },
  {
    name: "Organic",
    note: "We can develop organic-compliant flavor directions using approved ingredients where applicable. If your label requires an organic claim, bring that into the brief so documentation and formulation needs are reviewed early.",
    scope: "Project-specific organic-compliant formulation paths.",
    request: "Organic-compliant development discussed at brief stage.",
  },
  {
    name: "FDA Registered Facility",
    note: "Our facility is registered with the FDA as a food manufacturing operation in Norco, California.",
    scope: "Facility registration for food manufacturing operations.",
    request: "Registration documentation available for supplier qualification files.",
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
              <div className="new-eyebrow">Certifications</div>
              <h1>Your label requirements are part of the brief.</h1>
              <p>
                Certification needs are reviewed as part of the development path so label sourcing, ingredient declarations, and production requirements are considered before scale-up, not after.
              </p>
              <div className="new-actions">
                <Button href="/resources">Supplier Resources</Button>
                <Button href="/request-samples" variant="secondary">Request a Custom Sample</Button>
                <Button href="/contact" variant="secondary">
                  Talk to Our Team
                </Button>
              </div>
            </div>

            <div className="clean-cert-badges">
              <AppImage
                src={siteImages.certificationsHero}
                alt="Facility quality, kosher, halal, organic-compliant, and FDA registration program badges"
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
                  <h2 className="section-title">Certification support, stated plainly.</h2>
                </div>
                <p className="section-subtext">
                  We keep certification and facility conversations specific to the flavor, application, and documentation available for the project.
                </p>
              </div>
              <RevealGroup className="quality-grid quality-card-grid">
                {certificationNotes.map((item) => (
                  <RevealItem key={item.name}>
                    <article className="quality-badge quality-note-card">
                      <h2>{item.name}</h2>
                      <p>{item.note}</p>
                      <p className="certification-meta"><strong>Scope:</strong> {item.scope}</p>
                      <p className="certification-meta"><strong>Documentation:</strong> {item.request}</p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <section className="certification-claim-section">
              <div>
                <div className="new-eyebrow">Label Review</div>
                <h2>The right claim depends on the right formula.</h2>
                <p>
                  We review certification needs as part of the development path so label sourcing, ingredient declaration, and production requirements are considered before scale-up.
                </p>
                <p>
                  Certification, documentation, and label needs are reviewed by project.
                </p>
              </div>
              <div className="new-actions">
                <Button href="/resources">View Supplier Resources</Button>
                <Button href="/request-samples" variant="secondary">Start a Flavor Brief</Button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
