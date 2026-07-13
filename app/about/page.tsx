import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { CTA } from "@/components/CTA";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { BuiltInNorco } from "@/components/BuiltInNorco";
import { QualitySupport } from "@/components/QualitySupport";
import { teamMembers } from "@/data/team";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family-Owned Flavor Manufacturer in Norco, CA",
  description:
    "Family-owned custom flavor manufacturer in Norco, CA. Hands-on development, no hand-offs, and a team that holds every project from sample to repeat production.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "Family-Owned Flavor Manufacturer in Norco, CA | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Hands-on development, no hand-offs, and a team that holds every project from sample to repeat production.",
    images: [
      {
        url: "/og?title=Family-Owned+Flavor+Manufacturer",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory team in Norco, CA",
      },
    ],
  },
  twitter: {
    title: "Family-Owned Flavor Manufacturer in Norco, CA | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Hands-on development, no hand-offs, every project held from sample to production.",
    images: ["/og?title=Family-Owned+Flavor+Manufacturer"],
  },
};

const approachCards = [
  {
    image: "/images/flavor-factory/inhouse-photos/lab-new.png",
    alt: "Custom flavor development laboratory at The Flavor Factory in Norco, CA - clean modern lab with black countertops",
    eyebrow: "Listening First",
    title: "The brief shapes the direction.",
    copy: "We start with the product system, not a flavor list. Application, base, processing, label goals, and real constraints inform every sample before it ships.",
    position: "center 40%",
  },
  {
    image: "/images/flavor-factory/inhouse-photos/production-workers.png",
    alt: "Production team at work at The Flavor Factory's manufacturing facility in Norco, California",
    eyebrow: "Hands-On Work",
    title: "Development done in-house, start to finish.",
    copy: "Formulation, samples, revisions, and manufacturing all happen at our Norco facility. One team, one thread. No hand-offs to third parties.",
    position: "center 30%",
  },
  {
    image: "/images/flavor-factory/inhouse-photos/gallon-filling-station.png",
    alt: "Gallon container filling line at The Flavor Factory production facility - finished liquid flavor product being filled for shipment",
    eyebrow: "Clear Follow-Through",
    title: "From first sample to repeat production.",
    copy: "Approved work moves into production specs. Reorders stay consistent. The thread from concept to first approval to repeat order is held every time.",
    position: "center 40%",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" }, { "@type": "ListItem", position: 2, name: "About", item: "https://www.flavorfactory.net/about" }] }) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">

            {/* AI-citable factual summary - also visible to users */}
            <div className="about-company-facts" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="The Flavor Factory" />
              <meta itemProp="foundingDate" content="2005" />
              <meta itemProp="telephone" content="+19512739877" />
              <meta itemProp="email" content="samples@flavorfactory.net" />
              <meta itemProp="url" content="https://www.flavorfactory.net" />
              <dl className="about-facts-grid">
                <div><dt>Established</dt><dd>2005</dd></div>
                <div><dt>Location</dt><dd>Norco, California</dd></div>
                <div><dt>Ownership</dt><dd>Family-owned</dd></div>
                <div><dt>Formats</dt><dd>Liquid & powder</dd></div>
                <div><dt>First Samples</dt><dd>3-5 business days</dd></div>
                <div><dt>Minimums</dt><dd>Low</dd></div>
              </dl>
            </div>

            <PageHero
              eyebrow="About"
              title="Precise work. Real people. Norco, CA."
              copy="The Flavor Factory is a family-owned custom flavor manufacturer based in Norco, California. We develop liquid and powder flavor systems for brands that need flavors to work inside real products, not just taste good in a sample cup."
              image={siteImages.aboutHero}
              imageAlt="Row of amber flavor liquids in beakers and flasks on a stainless lab bench"
              primaryHref="/request-samples"
              primaryLabel="Request a Custom Sample"
              secondaryHref="/company-info"
              secondaryLabel="Company Info"
              imagePosition="40% center"
            />

            {/* Story */}
            <Reveal>
              <section className="about-story-grid">
                <div>
                  <div className="eyebrow">Why We Work This Way</div>
                  <h2 className="section-title">Clear briefs. Clean revisions. Better production handoff.</h2>
                </div>
                <div className="about-story-copy">
                  <p>
                    Customers do not need theater. They need someone to listen carefully, understand the real product, and keep the sample path clear enough that each version teaches something.
                  </p>
                  <p>
                    That is the work here. A flavor has to become a product order, and then repeat, without losing the details that made it worth approving in the first place.
                  </p>
                  <p>
                    Ready to start a project? Email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> or call <a href="tel:+19512739877">(951) 273-9877</a>. We will help you find the right starting point.
                  </p>
                </div>
              </section>
            </Reveal>

            {/* Why family */}
            <Reveal delay={0.1}>
              <section className="about-family-section">
                <div className="about-family-content">
                  <div className="new-eyebrow">Family-Owned</div>
                  <h2>Why a family business works differently for this kind of work.</h2>
                  <p>
                    In larger flavor houses, projects often move through more layers between sales, development, quality, and production. Those handoffs can make it harder to keep the original application details intact.
                  </p>
                  <p>
                    Here, the people you talk to stay close to the people who make and produce the flavor. Dan has been doing this for over 40 years. Alex runs operations. Ryan handles quality and regulatory. Matt runs production. Kelly keeps it all coordinated.
                  </p>
                  <p>
                    That is not a marketing claim. It is how the company is structured, and it is why customers who have worked with larger flavor houses often tell us the experience is different here.
                  </p>
                </div>
                <div className="about-family-stats">
                  <div className="about-stat">
                    <span className="about-stat-number">60+</span>
                    <span className="about-stat-label">Years of combined flavor industry experience on the team</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat-number">1</span>
                    <span className="about-stat-label">Facility. Development, production, and quality all in Norco, CA</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat-number">3-5</span>
                    <span className="about-stat-label">Business days from brief to first samples</span>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal><BuiltInNorco /></Reveal>

            {/* Approach */}
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

            {/* Team */}
            <section className="management-section">
              <Reveal>
                <div className="section-head">
                  <div>
                    <div className="eyebrow">Meet the Team</div>
                    <h2 className="section-title">The people on your project.</h2>
                  </div>
                  <p className="section-subtext">
                    You work directly with the people who develop, produce, and quality-check the flavor. No layers, no hand-offs.
                  </p>
                </div>
              </Reveal>
              <RevealGroup className="team-card-grid" stagger={0.08}>
                {teamMembers.map((member) => (
                  <RevealItem key={member.slug}>
                    <article className="team-card">
                      <div className="team-card-body">
                        <div className="team-card-portrait">
                          <AppImage
                            src={member.image}
                            alt={member.photoAlt}
                            sizes="112px"
                          />
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

            <Reveal>
              <section className="about-trust-section">
                <QualitySupport />
                <p className="about-trust-links">
                  Need documentation for a vendor file? See <Link href="/resources">supplier resources</Link> or <Link href="/certifications">certifications</Link>.
                </p>
              </section>
            </Reveal>

            {/* Principles */}
            <Reveal>
              <section className="about-principles">
                <div>
                  <div className="new-eyebrow">What Matters Here</div>
                  <h2>Warm service. Technical control. Manufacturing credibility.</h2>
                </div>
                <div>
                  <p>
                    Being family-owned means the people you work with care about the outcome the same way you do. We hold the thread from concept to approval to repeat production, every time.
                  </p>
                  <Button href="/request-samples" variant="secondary" className="mt-24">Request a Custom Sample</Button>
                </div>
              </section>
            </Reveal>

          </div>
        </section>
        <CTA
          eyebrow="Work with the team"
          title="Talk with the people who will actually develop and produce the flavor."
          copy="Email samples@flavorfactory.net or call (951) 273-9877. We respond to every inquiry."
          href="/contact"
          label="Get in Touch"
        />
      </main>
      <Footer />
    </>
  );
}
