import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { industries } from "@/data/industries";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Flavor development for bakery, beverage, confectionery, dairy, nutraceutical, oral care, pharmaceutical, and popcorn applications.",
  alternates: { canonical: "/industries" },
  openGraph: {
    url: "/industries",
    title: "Industries We Serve | The Flavor Factory",
    description:
      "Flavor development for bakery, beverage, confectionery, dairy, nutraceutical, oral care, pharmaceutical, and popcorn applications.",
    images: [
      {
        url: "/og?title=Industries+We+Serve",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory industries served",
      },
    ],
  },
  twitter: {
    title: "Industries We Serve | The Flavor Factory",
    description: "Application-specific flavor development across eight product categories.",
    images: ["/og?title=Industries+We+Serve"],
  },
};

const BC_INDUSTRIES = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://www.flavorfactory.net/industries"}]};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_INDUSTRIES) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Industries"
              title="Flavor development built for the application."
              copy="The base, process, label, and sensory target shape every project."
              image={siteImages.industriesHero}
              imageAlt="Food and beverage products across the industries served"
              imagePosition="center center"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              secondaryHref="/flavors"
              secondaryLabel="Browse Flavors"
            />

            <RevealGroup className="industry-clean-grid" stagger={0.07}>
              {industries.map((item) => (
                <RevealItem key={item.key}>
                  <article className="industry-clean-card">
                    <div className="industry-clean-image-wrap">
                      <AppImage
                        src={item.heroImage}
                        alt={item.name}
                        className="industry-clean-image"
                        sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 56px) / 2), 504px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="industry-clean-body">
                      <div className="new-eyebrow">{item.pressurePoint}</div>
                      <h3>{item.name}</h3>
                      <p>{item.summary}</p>
                      <div className="industry-clean-tags">
                        {item.applications.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      <a className="industry-card-cta" href={`/industries/${item.key}`}>{item.ctaLabel}</a>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
