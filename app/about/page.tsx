import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { PageHero } from "@/components/PageHero";

const teamRoles = [
  {
    title: "Listening First",
    image: "/images/flavor-factory/listening-first.png",
    focus: "Good flavor work starts with the customer's product, market, target profile, and constraints.",
  },
  {
    title: "Clear Follow-Through",
    image: "/images/flavor-factory/clear-follow-through.png",
    focus: "Samples, revisions, and questions stay organized so customers know what is happening next.",
  },
  {
    title: "Hands-On Work",
    image: "/images/flavor-factory/hands-on-work.png",
    focus: "The same practical mindset carries from the first conversation into approved orders and repeat work.",
  },
] as const;

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

const principles = [
  "Answer quickly and keep the project moving.",
  "Be direct about what information is needed.",
  "Treat small and growing brands with real attention.",
  "Keep the work practical, useful, and accountable.",
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
              title="People you can call when the flavor needs to be right."
              copy="The Flavor Factory is a family-run flavor manufacturer in Southern California with a hands-on way of working. Customers come back because the team listens, responds, and understands how flavor decisions affect real products."
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
                <div className="eyebrow">Our Approach</div>
                <h2 className="section-title">Practical flavor work, responsive support, and real follow-through.</h2>
              </div>
              <div className="about-story-copy">
                <p>
                  Every request starts with the product in front of us: what it is, who it is for, how it will be processed, and what the flavor needs to accomplish.
                </p>
                <p>
                  Some customers need a new profile. Some need a match. Others need help improving cost, performance, masking, or consistency. We keep the conversation clear so the next sample has a purpose.
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

            <section className="team-role-grid">
              {teamRoles.map((role) => (
                <article className="team-role-card" key={role.title}>
                  <div className="team-role-image">
                    <AppImage src={role.image} alt={`${role.title} at The Flavor Factory`} sizes="(max-width: 900px) calc(100vw - 56px), 480px" />
                  </div>
                  <div className="team-role-body">
                    <div className="eyebrow">Team Focus</div>
                    <h3>{role.title}</h3>
                    <p>{role.focus}</p>
                  </div>
                </article>
              ))}
            </section>

            <section className="about-principles">
              <div>
                <div className="new-eyebrow">What Matters Here</div>
                <h2>Service is part of the product.</h2>
              </div>
              <div className="about-principle-list">
                {principles.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
