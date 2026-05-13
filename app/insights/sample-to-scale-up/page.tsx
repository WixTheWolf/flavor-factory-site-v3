import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "How Sample to Scale-Up Actually Works at a Small Flavor House",
  description: "The gap between bench approval and first production batch is where most flavor problems surface. Here is how we close that gap from the first sample.",
  alternates: { canonical: "/insights/sample-to-scale-up" },
  openGraph: {
    url: "/insights/sample-to-scale-up",
    title: "Sample to Scale-Up at The Flavor Factory",
    description: "How the gap between bench approval and first production is closed when development and manufacturing are the same team.",
    images: [{ url: "/og?title=Sample+to+Scale-Up", width: 1200, height: 630, alt: "Sample to Scale-Up" }],
  },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "How Sample to Scale-Up Actually Works at a Small Flavor House", datePublished: "2026-05-01", author: { "@type": "Organization", name: "The Flavor Factory" }, publisher: { "@type": "Organization", name: "The Flavor Factory" } };

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <nav className="industry-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/insights">Insights</Link>
              <span aria-hidden="true">/</span>
              <span>Sample to Scale-Up</span>
            </nav>
            <div className="article-header">
              <div className="new-eyebrow">Process</div>
              <h1>How Sample to Scale-Up Actually Works at a Small Flavor House</h1>
              <p className="article-deck">The gap between a bench-approved sample and a consistent production batch is where most flavor development problems surface. Here is how we close that gap — and why having development and manufacturing under the same roof changes the path.</p>
              <div className="article-meta"><span>The Flavor Factory</span><span>6 min read</span></div>
            </div>
            <div className="article-body">
              <h2>The handoff problem</h2>
              <p>At larger flavor houses, the sample development team and the production team are often different groups, sometimes in different facilities. A formula approved by the development team has to be transferred to production with enough documentation that the production team can reproduce it exactly. When information is incomplete or the production equipment differs from bench equipment, the first production batch comes out wrong. The customer approved a sample; the production batch tastes different. This is one of the most common points of friction in flavor development.</p>
              <h2>What changes when development and production are the same team</h2>
              <p>When the person who developed the formula is the same person, or at minimum the same team, as the person who produces the first batch, the information that would normally be lost in a handoff is retained. The production team knows exactly what the sample tasted like, what process decisions were made during development, and what the formula is doing in the finished system.</p>
              <p>More importantly, the production team can make the same judgment calls the development team made. Flavor development is not purely mechanical. There are decisions made during sample production that affect the final character — mix sequence, temperature, timing — that are difficult to fully document. When development and production are the same people, those decisions are made consistently.</p>
              <h2>Building for production from sample one</h2>
              <p>The other component of closing the gap is building production-ready thinking into the sample development process from the start. This means using production-grade raw materials in samples rather than research-grade equivalents, building formulas around ingredient specifications that production can consistently source, and considering batch size, equipment, and processing conditions when making formulation decisions.</p>
              <p>A sample built with a high-purity research-grade ingredient that is not available in production quantity creates a production problem the moment the sample is approved. Building samples with commercially available ingredients, at commercially realistic use levels, with commercially realistic processing conditions is how you avoid that problem.</p>
              <h2>What good production documentation looks like</h2>
              <p>When a sample is approved and moves into production, the formula documentation needs to specify: ingredient names and supplier, ingredient specifications, use levels, mixing sequence and conditions, any critical control points in the process, and yield and expected sensory benchmarks for quality check. Documentation that covers only use levels and ingredient names is not sufficient for consistent reproduction, especially if production is scheduled weeks or months after the approval.</p>
              <h2>Reorder consistency</h2>
              <p>The real test of a production-ready flavor is not the first batch. It is the third and fourth reorders, 12 months later. Formula documentation, raw material specification management, and retained reference samples are the tools that make consistent reorders possible. At the point of reorder, the approved sample is the reference. Having a physical retain from the approved batch alongside the production documentation gives quality control something concrete to compare against.</p>
            </div>
          </div>
        </section>
        <CTA eyebrow="Ready to Start?" title="First samples in 3-5 days. Production follows the same path." copy="Share your application, base, and label goals. Development and manufacturing are handled by the same team." href="/request-samples" label="Start a Project" />
      </main>
      <Footer />
    </>
  );
}
