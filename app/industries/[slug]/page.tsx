import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/PageHero";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { CTA } from "@/components/CTA";
import { industries } from "@/data/industries";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { industryDetails } from "@/data/industry-details";
import { demoFlavors } from "@/data/demo-flavors";
import type { IndustryKey } from "@/lib/types";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { IndustryViewed } from "@/components/AnalyticsEvents";

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
  const description = `${industry.summary} Custom liquid and powder ${industry.name.toLowerCase()} flavors from The Flavor Factory in Norco, California. Low minimums. First samples in 3-5 business days.`;

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

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${params.slug}` },
  ]);
  const faqs = faqSchema(details.faqs);
  const service = serviceSchema({
    name: `${industry.name} Flavor Development`,
    description: industry.summary,
    path: `/industries/${params.slug}`,
    industry: industry.name,
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqs} />
      <JsonLd data={service} />
      <IndustryViewed industry={params.slug} />
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
              secondaryLabel="Talk to Our Team"
            />

            <Reveal>
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
                <RevealGroup className="industry-challenges-grid" stagger={0.09}>
                  {details.challenges.map((challenge) => (
                    <RevealItem key={challenge.title}>
                      <article className="challenge-card">
                        <h3>{challenge.title}</h3>
                        <p>{challenge.body}</p>
                      </article>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            </Reveal>

            {relatedFlavors.length > 0 && (
              <Reveal>
                <section className="industry-flavors-section">
                  <div className="section-head">
                    <div>
                      <div className="new-eyebrow">Relevant Profiles</div>
                      <h2 className="section-title">Flavors commonly used in {industry.name.toLowerCase()} applications.</h2>
                    </div>
                    <Link href="/flavors" className="light-btn">See full library</Link>
                  </div>
                  <div className="finder-results-grid">
                    {relatedFlavors.map((flavor) => (
                      <FlavorCard key={flavor.id} flavor={flavor} />
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {details.relevantCerts.length > 0 && (
              <Reveal>
                <section className="industry-certs-section">
                  <div className="new-eyebrow">Certifications</div>
                  <p>Programs relevant to {industry.name.toLowerCase()} applications.</p>
                  <div className="industry-certs-row">
                    {details.relevantCerts.map((cert) => (
                      <Link href="/certifications" className="industry-cert-chip" key={cert}>{cert}</Link>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {params.slug === "pharmaceutical" && (
              <Reveal>
                <section className="industry-related-links">
                  <div className="new-eyebrow">Related resources</div>
                  <h2 className="section-title">Pharmaceutical flavor development resources.</h2>
                  <div className="footer-links">
                    <Link href="/pharmaceutical-flavors">Pharmaceutical flavor services</Link>
                    <Link href="/insights/pharmaceutical-palatability">Palatability article</Link>
                    <Link href="/case-studies/pharmaceutical-palatability-liquid-dose">Representative challenge</Link>
                  </div>
                </section>
              </Reveal>
            )}

            <Reveal>
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
            </Reveal>

          </div>
        </section>
        <CTA
          eyebrow={industry.name}
          title={`Start a ${industry.name.toLowerCase()} flavor project.`}
          copy={`${details.sampleNote} Samples typically ship in 3-5 business days.`}
          href={`/request-samples?industry=${params.slug}`}
          label="Request a Custom Sample"
        />
      </main>
      <Footer />
    </>
  );
}
