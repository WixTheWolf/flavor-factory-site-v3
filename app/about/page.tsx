import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";

const managementTeam = [
  {
    name: "Dan Wixted",
    title: "President",
    focus: "Leadership",
    note: "Leadership, customer relationships, and company standards.",
  },
  {
    name: "Alex Wixted",
    title: "Operations",
    focus: "Operations",
    note: "Project flow, operations, and customer coordination.",
  },
  {
    name: "Kelly Ziegler",
    title: "Office Manager",
    focus: "Customer Care",
    note: "Customer communication, coordination, and project details.",
  },
  {
    name: "Ryan Wixted",
    title: "Quality / Regulatory",
    focus: "Quality",
    note: "Quality systems, regulatory support, and documentation.",
  },
  {
    name: "Matt Wixted",
    title: "Production Manager",
    focus: "Production",
    note: "Production planning, execution, and sample-to-production support.",
  },
] as const;

const approachCards = [
  {
    image: "/images/flavor-factory/Hands%20on%20specs.png",
    alt: "Two people reviewing a flavor spec sheet with amber sample bottles on a desk",
    eyebrow: "Listening First",
    title: "The brief shapes the direction.",
    copy: "We start with the product system, not a flavor list. Application, base, processing, label goals, and real constraints inform every sample before it ships.",
    position: "center 50%",
  },
  {
    image: "/images/flavor-factory/1.%20About%20%E2%80%94%20Hands-On%20Work.png",
    alt: "Hands using a glass pipette to fill amber glass vials on a dark slate bench",
    eyebrow: "Hands-On Work",
    title: "Development done in-house, start to finish.",
    copy: "Formulation, samples, revisions, and manufacturing all happen at our Norco facility. One team, one thread — no hand-offs to third parties.",
    position: "center center",
  },
  {
    image: "/images/flavor-factory/2.%20About%20%E2%80%94%20Clear%20Follow-Through.png",
    alt: "Overhead flat-lay of a printed flavor spec sheet with amber sample bottles and a gold pen",
    eyebrow: "Clear Follow-Through",
    title: "From first sample to repeat production.",
    copy: "Approved work moves into production specs. Reorders stay consistent. The thread from concept to first approval to repeat order is held every time.",
    position: "center center",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="About"
              title="Precise work. Real people. Norco, CA."
              copy="The Flavor Factory is a family-owned custom flavor manufacturer based in Norco, California. We develop liquid and powder flavor systems for brands that need flavors to work inside real products, not just taste good in a sample cup."
              image={siteImages.aboutHero}
              imageAlt="Row of amber flavor liquids in beakers and flasks on a stainless lab bench"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="/company-info"
              secondaryLabel="Company Info"
              imagePosition="40% center"
            />

            <section className="about-story-grid">
              <div>
                <div className="eyebrow">Why We Work This Way</div>
                <h2 className="section-title">The details are the relationship.</h2>
              </div>
              <div className="about-story-copy">
                <p>
                  Customers do not need theater. They need someone to listen carefully, understand the real product, and keep the sample path clear enough that each version teaches something.
                </p>
                <p>
                  That is the work here: warm service, technical control, and manufacturing credibility. A flavor has to become a product order without losing the details that made it worth approving.
                </p>
                <p>
                  Ready to start a project? Email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> or call <a href="tel:+19512739877">(951) 273-9877</a>. We will help you find the right starting point.
                </p>
              </div>
            </section>

            <section className="about-approach">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Our Approach</div>
                  <h2 className="section-title">Three things we do on every project.</h2>
                </div>
              </div>
              <div className="team-role-grid">
                {approachCards.map((card) => (
                  <article className="team-role-card" key={card.eyebrow}>
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
                ))}
              </div>
            </section>

            <section className="management-section">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Meet the Team</div>
                  <h2 className="section-title">The people on your project.</h2>
                </div>
                <p className="section-subtext">
                  Customers work directly with the people who develop, produce, and quality-check the flavor. No layers, no hand-offs.
                </p>
              </div>
              <div className="management-grid">
                {managementTeam.map((member) => (
                  <article className="management-card" key={member.name}>
                    <div className="management-avatar" aria-hidden="true">
                      <span>{member.focus}</span>
                    </div>
                    <div className="management-body">
                      <h3>{member.name}</h3>
                      <div>{member.title}</div>
                      <p>{member.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-principles">
              <div>
                <div className="new-eyebrow">What Matters Here</div>
                <h2>Warm service. Technical control. Manufacturing credibility.</h2>
              </div>
              <div>
                <p>
                  Being family-owned means the people you work with care about the outcome the same way you do. We hold the thread from concept to approval to repeat production — every time.
                </p>
                <Button href="/request-samples" variant="secondary" className="mt-24">Start a Project</Button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
