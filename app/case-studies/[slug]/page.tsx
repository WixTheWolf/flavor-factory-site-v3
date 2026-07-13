import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};

  return {
    title: study.title,
    description: `${study.problem} Representative application for ${study.industry.toLowerCase()} flavor development.`,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | The Flavor Factory`,
      url: `/case-studies/${study.slug}`,
      images: [{ url: `/og?title=${encodeURIComponent(study.title)}`, width: 1200, height: 630 }],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Case Studies", item: "https://www.flavorfactory.net/case-studies" },
      { "@type": "ListItem", position: 2, name: study.title, item: `https://www.flavorfactory.net/case-studies/${study.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container case-study-detail">
            <nav className="industry-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/case-studies">Case Studies</Link>
              <span aria-hidden="true">/</span>
              <span>{study.industry}</span>
            </nav>
            <div className="clean-page-intro">
              <div className="new-eyebrow">Representative Application - {study.industry}</div>
              <h1>{study.title}</h1>
              <p>This example shows how we approach a common finished-product challenge. It is not a named customer claim.</p>
            </div>
            <div className="case-study-sections">
              <article>
                <h2>Application</h2>
                <p>{study.application}</p>
              </article>
              <article>
                <h2>Problem</h2>
                <p>{study.problem}</p>
              </article>
              <article>
                <h2>Technical issue</h2>
                <p>{study.technicalIssue}</p>
              </article>
              <article>
                <h2>Approach</h2>
                <p>{study.approach}</p>
              </article>
              <article>
                <h2>Outcome note</h2>
                <p>{study.outcome}</p>
              </article>
            </div>
            <div className="case-study-facts">
              <div><span>Format</span><strong>{study.format}</strong></div>
              <div><span>Relevant capability</span><strong>{study.capability}</strong></div>
            </div>
            <div className="family-meta-pills">
              {study.relatedProfiles.map((profile) => (
                <span className="flavor-meta-chip" key={profile}>{profile}</span>
              ))}
            </div>
            <div className="case-study-page-cta">
              <Link className="cta-btn" href={study.ctaHref}>{study.cta}</Link>
              <Link className="light-btn" href="/case-studies">See all examples</Link>
            </div>
          </div>
        </section>
        <CTA
          eyebrow="Similar challenge?"
          title="Share the application and what has already failed."
          copy="We will build the next sample around the real product, base, and process."
          href="/request-samples"
          label="Request a Custom Sample"
        />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
