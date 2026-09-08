import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { CTA } from "@/components/CTA";
import { flavorFamilyDetails, getFamilyBySlug } from "@/data/flavor-family-details";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { demoFlavors } from "@/data/demo-flavors";

const BASE = "https://www.flavorfactory.net";

export function generateStaticParams() {
  return flavorFamilyDetails.map((f) => ({ family: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { family: string };
}): Promise<Metadata> {
  const detail = getFamilyBySlug(params.family);
  if (!detail) return {};

  const title = `${detail.name} Flavors`;
  const description = `${detail.intro.split(".")[0]}. Available in ${detail.formats.join(", ").toLowerCase()} formats.`;

  return {
    title,
    description,
    alternates: { canonical: `/flavors/${params.family}` },
    openGraph: {
      url: `/flavors/${params.family}`,
      title: `${title} | The Flavor Factory`,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: `${detail.name} flavor profiles at The Flavor Factory`,
        },
      ],
    },
    twitter: {
      title: `${title} | The Flavor Factory`,
      description,
      images: [`/og?title=${encodeURIComponent(title)}`],
    },
  };
}

export default function FlavorFamilyPage({ params }: { params: { family: string } }) {
  const detail = getFamilyBySlug(params.family);
  if (!detail) notFound();

  const familyFlavors = demoFlavors.filter((f) => f.family === detail.name);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Flavors", item: `${BASE}/flavors` },
      { "@type": "ListItem", position: 3, name: `${detail.name} Flavors`, item: `${BASE}/flavors/${params.family}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">

            <nav className="industry-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/flavors">All Flavors</Link>
              <span aria-hidden="true">/</span>
              <span>{detail.name}</span>
            </nav>

            <Reveal><div className="family-hero-layout">
              <div className="family-hero-panel">
                <div className="new-eyebrow">Flavor Family</div>
                <h1 className="family-hero-title">{detail.name} Flavors</h1>
                <p className="family-hero-intro">{detail.intro}</p>
                {detail.formulatorNote && (
                  <p className="family-formulator-note">
                    <strong>Formulator note:</strong> {detail.formulatorNote}
                  </p>
                )}
              </div>
              <aside className="family-summary-panel" aria-label={`${detail.name} family summary`}>
                <div>
                  <strong>{familyFlavors.length}</strong>
                  <span>sample-ready starting points</span>
                </div>
                <div>
                  <strong>{detail.formats.length}</strong>
                  <span>available format directions</span>
                </div>
                <Link href="/request-samples" className="cta-btn">Request a Custom Sample</Link>
              </aside>
            </div></Reveal>

            <Reveal><div className="family-meta-strip">
              <div className="family-meta-block">
                <div className="new-eyebrow">Common Applications</div>
                <div className="family-meta-pills">
                  {detail.applications.map((app) => (
                    <span className="soft-pill" key={app}>{app}</span>
                  ))}
                </div>
              </div>
              <div className="family-meta-block">
                <div className="new-eyebrow">Available Formats</div>
                <div className="family-meta-pills">
                  {detail.formats.map((fmt) => (
                    <span className="flavor-meta-chip" key={fmt}>{fmt}</span>
                  ))}
                </div>
              </div>
            </div></Reveal>

            <Reveal><section className="industry-flavors-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Profiles in This Family</div>
                  <h2 className="section-title">
                    {familyFlavors.length} {detail.name.toLowerCase()} direction{familyFlavors.length === 1 ? "" : "s"} in the library.
                  </h2>
                </div>
                <Link href="/flavors" className="light-btn">
                  Browse full library
                </Link>
              </div>

              {familyFlavors.length > 0 ? (
                <div className="finder-results-grid">
                  {familyFlavors.map((flavor) => (
                    <FlavorCard key={flavor.id} flavor={flavor} />
                  ))}
                </div>
              ) : (
                <div className="family-empty-state">
                  <p>Custom development in this family is available. Share your target profile and we&apos;ll build a direction around your application.</p>
                  <Link href="/request-samples" className="cta-btn">Request a Custom Sample</Link>
                </div>
              )}
            </section></Reveal>

            <Reveal><section className="family-browse-panel">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Continue Browsing</div>
                  <h2 className="section-title">Explore another flavor family.</h2>
                </div>
              </div>
              <div className="flavor-family-link-grid">
                {flavorFamilyDetails.map((family) => {
                  const count = demoFlavors.filter((flavor) => flavor.family === family.name).length;
                  return (
                    <Link
                      key={family.slug}
                      href={`/flavors/${family.slug}`}
                      className={`flavor-family-link${family.slug === detail.slug ? " is-current" : ""}`}
                    >
                      <span>{family.name}</span>
                      <small>{count} profile{count === 1 ? "" : "s"}</small>
                    </Link>
                  );
                })}
              </div>
            </section></Reveal>

            <Reveal><section className="family-custom-panel">
              <div className="new-eyebrow">Not Seeing the Right Profile?</div>
              <h2>Tell us what you&apos;re making. We&apos;ll build around it.</h2>
              <p>
                The library shows common starting points. If the exact profile you need is not listed, we can develop it custom, match a reference, or reformulate around your specific matrix and label requirements.
              </p>
              <div className="new-actions">
                <Link href="/request-samples" className="cta-btn">Request a Custom Sample</Link>
                <Link href="/contact" className="light-btn">Talk About Your Project</Link>
              </div>
            </section></Reveal>

          </div>
        </section>
        <CTA
          eyebrow={detail.name}
          title={`${detail.name} flavor samples in 3-5 days.`}
          copy={`Share your application, base, format, and label goals. We build first-round ${detail.name.toLowerCase()} samples around your product system.`}
          href="/request-samples"
          label="Request a Custom Sample"
        />
      </main>
      <Footer />
    </>
  );
}
