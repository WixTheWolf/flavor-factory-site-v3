import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { flavorFactoryImages } from "@/data/flavor-factory-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

const teamRoles = [
  {
    title: "Listening First",
    image: flavorFactoryImages.goldenElixirs,
    focus: "Good flavor work starts with the customer’s product, market, target profile, and constraints.",
  },
  {
    title: "Clear Follow-Through",
    image: siteImages.contactHero,
    focus: "Samples, revisions, and questions stay organized so customers know what is happening next.",
  },
  {
    title: "Hands-On Work",
    image: flavorFactoryImages.industrySyrup,
    focus: "The same practical mindset carries from the first conversation into approved orders and repeat work.",
  },
] as const;

const managementTeam = [
  {
    name: "Dan Wixted",
    title: "President",
    initials: "DW",
    note: "Leadership, customer relationships, and company standards.",
  },
  {
    name: "Alex Wixted",
    title: "Operations",
    initials: "AW",
    note: "Project flow, operations, and customer coordination.",
  },
  {
    name: "Kelly Ziegler",
    title: "Office Manager",
    initials: "KZ",
    note: "Customer communication, coordination, and project details.",
  },
  {
    name: "Ryan Wixted",
    title: "Quality / Regulatory",
    initials: "RW",
    note: "Quality systems, regulatory support, and documentation.",
  },
  {
    name: "Matt Wixted",
    title: "Production Manager",
    initials: "MW",
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
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="editorial-hero about-hero">
              <AppImage
                src={siteImages.aboutHero}
                alt="Ingredient and flavor formulation setup"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 35%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>About</div>
                <h1 className="section-title" style={{ color: "white" }}>
                  People you can call when the flavor needs to be right.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 820, color: "rgba(255,255,255,.84)" }}>
                  The Flavor Factory is a family-run flavor manufacturer in Southern California with a hands-on way of working. Customers come back because the team listens, responds, and understands how flavor decisions affect real products.
                </p>
                <div className="hero-actions">
                  <Button href="/request-samples" variant="secondary">Request Samples</Button>
                  <Button href="/company-info">Company Info</Button>
                </div>
              </div>
            </div>

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
                      <span>{member.initials}</span>
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
                <div className="eyebrow" style={{ color: "#f59e0b" }}>What Matters Here</div>
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
