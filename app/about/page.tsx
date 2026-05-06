import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";

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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="About"
              title="Practical flavor work. Norco, CA."
              copy="The Flavor Factory is a custom flavor manufacturer based in Norco, California. We develop liquid and powder flavor systems for brands that need flavors to work inside real products, not just taste good in a sample cup."
              image={siteImages.aboutHero}
              imageAlt="Ingredient and flavor formulation setup"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="/company-info"
              secondaryLabel="Company Info"
              imagePosition="center 35%"
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

            <section className="management-section">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Meet Our Management Team</div>
                  <h2 className="section-title">Experienced hands on every project.</h2>
                </div>
                <p className="section-subtext">
                  Customers work with a team that understands flavor development, production, quality, timelines, and the details that keep a project moving.
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
              <p>
                Customers need more than a good-tasting sample. They need a partner who can hold the thread from concept to approval to repeat production.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
