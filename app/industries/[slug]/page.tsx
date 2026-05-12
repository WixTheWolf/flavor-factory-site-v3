import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { CTA } from "@/components/CTA";
import { industries } from "@/data/industries";
import { industryDetails } from "@/data/industry-details";
import { demoFlavors } from "@/data/demo-flavors";
import type { IndustryKey } from "@/lib/types";

const BASE = "https://flavor-factory-site-v3.vercel.app";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.key }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = industries.find((i) => i.key === params.slug);
  if (!industry) return {};

  const title = `${industry.name} Flavor Development`;
  const description = industry.summary;

  return {
    title,
    description,
    alternates: { canonical: `/industries/${params.slug}` },
    openGraph: {
      url: `/industries/${params.slug}`,
      title: `${title} | The Flavor Factory`,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: `${industry.name} flavor development at The Flavor Factory`,
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

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.key === params.slug);
  if (!industry) notFound();

  const details = industryDetails[params.slug];
  if (!details) notFound();

  const relatedFlavors = demoFlavors
    .filter((f) => f.industries.includes(params.slug as IndustryKey))
    .slice(0, 6);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
      { "@type": "ListItem", position: 3, name: industry.name, item: `${BASE}/industries/${params.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: details.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">

            <nav className="industry-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/industries">All Industries</Link>
              <span aria-hidden="true">/</span>
              <span>{industry.name}</span>
            </nav>

            <PageHero
              eyebrow={industry.name}
              title={industry.pressurePoint}
              copy={industry.summary}
              image={industry.heroImage}
              imageAlt={`${industry.name} flavor application`}
              imagePosition="center center"
              primaryHref={`/request-samples?industry=${params.slug}`}
              primaryLabel={industry.ctaLabel}
              secondaryHref="/contact"
              secondaryLabel="Talk With Us"
            />

            <section className="industry-challenges-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Technical Challenges</div>
                  <h2 className="section-title">What actually makes this application hard.</h2>
                </div>
                <p className="section-subtext">
                  These are the formulation problems that come up in every {industry.name.toLowerCase()} flavor project.
                </p>
              </div>
              <div className="industry-challenges-grid">
                {details.challenges.map((challenge) => (
                  <article className="challenge-card" key={challenge.title}>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.body}</p>
                  </article>
                ))}
              </div>
            </section>

            {relatedFlavors.length > 0 && (
              <section className="industry-flavors-section">
                <div className="section-head">
                  <div>
                    <div className="new-eyebrow">Relevant Profiles</div>
                    <h2 className="section-title">Flavors commonly used in {industry.name.toLowerCase()} applications.</h2>
                  </div>
                  <Link href={`/flavors`} className="light-btn">
                    See full library
                  </Link>
                </div>
                <div className="finder-results-grid">
                  {relatedFlavors.map((flavor) => (
                    <FlavorCard key={flavor.id} flavor={flavor} />
                  ))}
                </div>
              </section>
            )}

            {details.relevantCerts.length > 0 && (
              <section className="industry-certs-section">
                <div className="new-eyebrow">Certifications</div>
                <p>
                  Programs relevant to {industry.name.toLowerCase()} applications.
                </p>
                <div className="industry-certs-row">
                  {details.relevantCerts.map((cert) => (
                    <Link href="/certifications" className="industry-cert-chip" key={cert}>
                      {cert}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="industry-faq-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Common Questions</div>
                  <h2 className="section-title">Frequently asked about {industry.name.toLowerCase()} flavor development.</h2>
                </div>
              </div>
              <div className="industry-faq-list">
                {details.faqs.map((faq) => (
                  <details className="faq-item" key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </div>
        </section>
        <CTA
          eyebrow={industry.name}
          title={`Start a ${industry.name.toLowerCase()} flavor project.`}
          copy={`${details.sampleNote} Samples typically ship in 3-5 business days.`}
          href="/request-samples"
          label="Request Samples"
        />
      </main>
      <Footer />
    </>
  );
}
