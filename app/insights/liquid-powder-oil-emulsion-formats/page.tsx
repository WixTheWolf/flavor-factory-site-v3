import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { InsightBreadcrumbJsonLd } from "@/components/InsightBreadcrumbJsonLd";
import { ArticleReadTracker } from "@/components/AnalyticsEvents";

export const metadata: Metadata = {
  title: "Choosing Between Liquid, Powder, Oil-Soluble, and Emulsion Formats",
  description: "Format selection affects flavor performance more than most formulators expect. Here is how each delivery system behaves and how to match format to application.",
  alternates: { canonical: "/insights/liquid-powder-oil-emulsion-formats" },
  openGraph: {
    type: "article",
    url: "/insights/liquid-powder-oil-emulsion-formats",
    title: "Flavor Format Selection: Liquid, Powder, Oil-Soluble, Emulsion | The Flavor Factory",
    description: "How each flavor delivery format behaves and how to match format to application.",
    images: [{ url: "/og?title=Flavor+Format+Selection", width: 1200, height: 630, alt: "Flavor Format Selection" }],
  },
};

const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Choosing Between Liquid, Powder, Oil-Soluble, and Emulsion Formats", datePublished: "2026-05-01", author: { "@type": "Organization", name: "The Flavor Factory" }, publisher: { "@type": "Organization", name: "The Flavor Factory" } };

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <InsightBreadcrumbJsonLd slug="liquid-powder-oil-emulsion-formats" />
      <ArticleReadTracker slug="liquid-powder-oil-emulsion-formats" />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <nav className="industry-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/insights">Insights</Link>
              <span aria-hidden="true">/</span>
              <span>Format Selection</span>
            </nav>
            <div className="article-header">
              <div className="new-eyebrow">Formulation</div>
              <h1>Choosing Between Liquid, Powder, Oil-Soluble, and Emulsion Formats</h1>
              <p className="article-deck">Format selection affects flavor performance more than most formulators expect. Here is how each delivery system behaves and how to match the format to the application before development starts.</p>
              <div className="article-meta"><span>The Flavor Factory</span><span>7 min read</span></div>
            </div>
            <div className="article-body">
              <h2>Why format is a first-order decision</h2>
              <p>The format of a flavor determines how the aromatic compounds are carried, how they disperse in the base, and how they release during consumption. A flavor direction that works well as a water-soluble liquid may perform poorly as an oil-soluble application, not because the flavor character is wrong, but because the carrier is mismatched to the finished product system. Getting the format right before development starts means you are building toward the right performance target from the first sample.</p>
              <h2>Water-soluble liquid</h2>
              <p>The most common and versatile format. Water-soluble liquid flavors disperse easily in aqueous systems including beverages, dairy, confectionery coatings, and many bakery applications. The carrier is typically propylene glycol, ethanol, or a blend of both. Propylene glycol-based flavors have longer shelf life and better heat stability than ethanol-based versions. Ethanol-based flavors can carry off volatile compounds faster during processing. Water-soluble liquids are the default starting point for most beverage, dairy, and confectionery applications.</p>
              <h2>Oil-soluble liquid</h2>
              <p>Oil-soluble flavors use a lipid carrier, typically a food-grade vegetable oil. They are appropriate for applications where the flavor needs to be incorporated into a fat phase: bakery doughs and batters, compound chocolate coatings, popcorn oil coatings, and similar oil-continuous systems. Oil-soluble flavors disperse poorly in water. Using an oil-soluble flavor in a water-based application results in flavor that does not distribute evenly and releases inconsistently. The reverse is also true: a water-soluble flavor added to an oil-phase application will not incorporate correctly.</p>
              <h2>Emulsion</h2>
              <p>Emulsion flavors are oil-soluble flavors that have been emulsified into a water-dispersible form using a gum or starch emulsifier. They are commonly used in beverages where the flavor oil needs to stay in suspension (cloudy juice drinks, citrus beverages) and in applications where some oil is needed for mouthfeel but the base is primarily aqueous. Emulsions provide good stability against phase separation and are the standard format for many citrus beverage applications. They are generally more expensive than straight liquid formats due to the emulsification step.</p>
              <h2>Powder</h2>
              <p>Powder flavors are spray-dried or plated onto a solid carrier, typically maltodextrin or a starch. They are appropriate for dry mix applications: protein powders, dry beverage mixes, bakery dry mixes, seasoning blends, and popcorn dry coatings. Powder flavors add no moisture to the system, which makes them appropriate for applications where water activity control matters. Heat stability in powder format depends on the encapsulant and the specific flavor compounds, but powder flavors are generally more shelf-stable than liquid formats when stored correctly.</p>
              <h2>Matching format to application</h2>
              <p>The practical questions for format selection: Is the base aqueous or oil-continuous? Will the flavor experience significant heat during processing? Does the application require dry addition? Is there a moisture activity concern? Is phase separation in the finished product a risk? Answering these before development starts avoids the reformulation work required when a flavor direction is right but the format is wrong.</p>
            </div>
          </div>
        </section>
        <CTA eyebrow="Format Questions?" title="Tell us the application and base. We recommend the right format." copy="Share your product system and processing conditions. First samples in 3-5 days." href="/request-samples" label="Request a Custom Sample" />
      </main>
      <Footer />
    </>
  );
}
