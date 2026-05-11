import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";

const certificationNotes = [
  {
    name: "SQF",
    note: "Supports customer quality reviews with recognized food safety program documentation where applicable.",
  },
  {
    name: "GMP",
    note: "Manufacturing practices are organized around consistent handling, production, and recordkeeping.",
  },
  {
    name: "Kosher",
    note: "Kosher documentation can be reviewed for qualifying flavor projects and customer requirements.",
  },
  {
    name: "Halal",
    note: "Halal status and documentation can be confirmed for applicable flavors and applications.",
  },
  {
    name: "FDA Registered Facility",
    note: "Facility registration supports food manufacturing documentation without replacing product-specific review.",
  },
  {
    name: "Organic",
    note: "Organic-compliant flavors are available for qualifying applications. Certification documentation can be confirmed for eligible projects.",
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
