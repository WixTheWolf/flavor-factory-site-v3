import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Flavor Certifications",
  description:
    "SQF, GMP, Kosher, Halal, Organic, and FDA Registered. Certification and label requirements reviewed as part of the development brief, not after scale-up.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    url: "/certifications",
    title: "Flavor Certifications | The Flavor Factory",
    description:
      "SQF, GMP, Kosher, Halal, Organic, and FDA Registered. Certification and label requirements reviewed as part of the development brief, not after scale-up.",
    images: [
      {
        url: "/og?title=Flavor+Certifications&description=SQF%2C+GMP%2C+Kosher%2C+Halal%2C+Organic%2C+FDA+Registered",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory certifications",
      },
    ],
  },
  twitter: {
    title: "Flavor Certifications | The Flavor Factory",
    description:
      "SQF, GMP, Kosher, Halal, Organic, and FDA Registered. Label requirements are part of every development brief.",
    images: ["/og?title=Flavor+Certifications&description=SQF%2C+GMP%2C+Kosher%2C+Halal%2C+Organic%2C+FDA+Registered"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";

const certificationNotes = [
  {
    name: "SQF",
    note: "Our SQF program gives customer quality teams a recognized framework to audit against. Documentation is available on request.",
  },
  {
    name: "GMP",
    note: "Good Manufacturing Practices govern how every flavor is handled, produced, and documented, from raw material receipt through finished-goods release.",
  },
  {
    name: "Kosher",
    note: "Many of our flavors carry Kosher certification. If your product requires it, tell us at the start of the project and we'll confirm the status for the specific formula.",
  },
  {
    name: "Halal",
    note: "Halal status varies by formula. Share the requirement up front and we'll confirm which directions qualify, or develop one that does.",
  },
  {
    name: "Organic",
    note: "We formulate organic-compliant flavors using approved organic ingredients. If your label requires an organic claim, bring that into the brief so the formula is built to support it from the start.",
  },
  {
    name: "FDA Registered Facility",
    note: "Our facility is registered with the FDA as a food manufacturing operation. Registration documentation is available for supplier qualification files.",
  },
] as const;

export default function CertificationsPage() {
  return (
    <>
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
                <Button href="/request-samples">Tell Us What Your Label Requires</Button>
                <Button href="/contact" variant="secondary">
                  Talk With Us
                </Button>
              </div>
            </div>

            <div className="clean-cert-badges">
              <AppImage
                src={siteImages.certificationsHero}
                alt="SQF, GMP, Kosher, Halal, Organic, and FDA Registered Facility badges"
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
              <div className="quality-grid quality-card-grid">
                {certificationNotes.map((item) => (
                  <article className="quality-badge quality-note-card" key={item.name}>
                    <h2>{item.name}</h2>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="certification-claim-section">
              <div>
                <div className="new-eyebrow">Label Review</div>
                <h2>The right claim depends on the right formula.</h2>
                <p>
                  We review certification needs as part of the development path so label sourcing, ingredient declaration, and production requirements are considered before scale-up.
                </p>
              </div>
              <Button href="/request-samples">Tell Us What Your Label Requires</Button>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
