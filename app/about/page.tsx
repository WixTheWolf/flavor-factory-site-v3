import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { CTA } from "@/components/CTA";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { K9sForWarriors } from "@/components/K9sForWarriors";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Family-Owned Flavor Manufacturer in Norco, CA",
  description:
    "Family-owned custom flavor manufacturer in Norco, California. A small, experienced team supports development, quality, operations, and production.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "Family-Owned Flavor Manufacturer in Norco, CA | The Flavor Factory",
    description:
      "A family-owned custom flavor manufacturer with development, quality, operations, and production in Norco, California.",
    images: [
      {
        url: "/og?title=Family-Owned+Flavor+Manufacturer",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory team in Norco, California",
      },
    ],
  },
};

const approachCards = [
  {
    image: "/images/flavor-factory/inhouse-photos/lab-new.png",
    alt: "Custom flavor development laboratory at The Flavor Factory in Norco, California",
    eyebrow: "Listen First",
    title: "The product shapes the flavor.",
    copy: "We start with the application, base, processing, label goals, and real constraints before building the first direction.",
    position: "center 40%",
  },
  {
    image: "/images/flavor-factory/inhouse-photos/production-workers.png",
    alt: "Production team working at The Flavor Factory in Norco, California",
    eyebrow: "Work In-House",
    title: "One team from sample to production.",
    copy: "Development, revisions, quality, and manufacturing stay inside our Norco facility, keeping the project connected.",
    position: "center 30%",
  },
  {
    image: "/images/flavor-factory/inhouse-photos/gallon-filling-station.png",
    alt: "Liquid flavor filling station at The Flavor Factory production facility",
    eyebrow: "Follow Through",
    title: "Approved work has to repeat.",
    copy: "The details that earn approval are carried into production specifications and repeat orders.",
    position: "center 40%",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://www.flavorfactory.net/about" },
            ],
          }),
        }}
      />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="About"
              title="A family-owned flavor company in Norco, California."
              copy="We develop and manufacture custom liquid and powder flavors with a small, experienced team that stays close to every project."
              image={siteImages.aboutHero}
              imageAlt="Row of amber flavor liquids in beakers and flasks on a stainless lab bench"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              imagePosition="40% center"
            />

            <Reveal>
              <section className="about-story-grid">
                <div>
                  <div className="eyebrow">How We Work</div>
                  <h2 className="section-title">Clear communication. Careful work. A practical handoff to production.</h2>
                </div>
                <div className="about-story-copy">
                  <p>
                    We listen closely, understand the finished product, build a useful first direction, and keep each revision focused.
                  </p>
                  <p>
                    The people helping develop the flavor are close to the people making it. That keeps the original brief intact from the first sample through repeat production.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.08}>
              <section className="about-family-section">
                <div className="about-family-content">
                  <div className="new-eyebrow">Family-Owned</div>
                  <h2>You will know who is responsible for your project.</h2>
                  <p>
                    Dan brings more than 40 years of flavor experience. Alex runs operations. Ryan handles quality and regulatory. Matt runs production. Kelly keeps projects and communication organized.
                  </p>
                  <p>
                    The company is small enough for direct communication and experienced enough to handle the technical and production details that matter.
                  </p>
                </div>
                <div className="about-family-stats">
                  <div className="about-stat">
                    <span className="about-stat-number">2005</span>
                    <span className="about-stat-label">Established in Norco, California</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat-number">60+</span>
                    <span className="about-stat-label">Years of combined flavor experience</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat-number">1</span>
                    <span className="about-stat-label">Facility for development, quality, and production</span>
                  </div>
                </div>
              </section>
            </Reveal>

            <section className="about-approach">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Our Approach</div>
                  <h2 className="section-title">Three things we do on every project.</h2>
                </div>
              </div>
              <RevealGroup className="team-role-grid" stagger={0.1}>
                {approachCards.map((card) => (
                  <RevealItem key={card.eyebrow}>
                    <article className="team-role-card">
                      <div className="team-role-image">
                        <AppImage
                          src={card.image}
                          alt={card.alt}
                          sizes="(max-width: 720px) calc(100vw - 40px), 430px"
                          style={{ objectPosition: card.position }}
                        />
                      </div>
                      <div className="team-role-body">
                        <div className="new-eyebrow">{card.eyebrow}</div>
                        <h3>{card.title}</h3>
                        <p>{card.copy}</p>
                      </div>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <section className="management-section">
              <Reveal>
                <div className="section-head">
                  <div>
                    <div className="eyebrow">Meet the Team</div>
                    <h2 className="section-title">The people behind the work.</h2>
                  </div>
                  <p className="section-subtext">Development, quality, operations, and production stay connected.</p>
                </div>
              </Reveal>
              <RevealGroup className="team-card-grid" stagger={0.08}>
                {teamMembers.map((member) => (
                  <RevealItem key={member.slug}>
                    <article className="team-card">
                      <div className="team-card-body">
                        <div className="team-card-portrait">
                          <AppImage src={member.image} alt={member.photoAlt} sizes="112px" />
                        </div>
                        <h3>{member.name}</h3>
                        <div className="team-card-title">{member.title}</div>
                        <p>{member.bio}</p>
                      </div>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <Reveal><K9sForWarriors variant="compact" /></Reveal>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
