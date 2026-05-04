import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { flavorFactoryImages } from "@/data/flavor-factory-images";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

const teamRoles = [
  {
    title: "Flavor Development",
    image: siteImages.aboutHero,
    focus: "Custom profiles, matching work, reformulation, sensory direction, and application-aware formulation.",
  },
  {
    title: "Customer Projects",
    image: siteImages.contactHero,
    focus: "Sample coordination, project communication, timelines, and clear customer follow-through.",
  },
  {
    title: "Production & Quality",
    image: flavorFactoryImages.industrySyrup,
    focus: "Liquid and powder production, quality documentation, and sample-to-production consistency.",
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
  "Start with the product and application.",
  "Keep sampling responsive and organized.",
  "Build flavors with production in mind.",
  "Use custom development when the project calls for it.",
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
                  A hands-on flavor manufacturer built for custom work.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 820, color: "rgba(255,255,255,.84)" }}>
                  Based in Southern California, The Flavor Factory develops and manufactures liquid and powder flavors for businesses of all sizes. Customers come to us for responsive service, custom development, flavor matching, and practical support from sample to production.
                </p>
                <div className="hero-actions">
                  <Button href="/request-samples" variant="secondary">Request Samples</Button>
                  <Button href="/company-info">Company Info</Button>
                </div>
              </div>
            </div>

            <section className="about-story-grid">
              <div>
                <div className="eyebrow">How We Work</div>
                <h2 className="section-title">Experienced people, clear development, and real manufacturing support.</h2>
              </div>
              <div className="about-story-copy">
                <p>
                  Our work starts with listening: what the product is, what it needs to taste like, how it will be used, and what constraints matter.
                </p>
                <p>
                  From there, we can pull from a broad library of starting points, develop something custom, or help match and reformulate an existing flavor with production in mind.
                </p>
              </div>
            </section>

            <section className="management-section">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Meet Our Management Team</div>
                  <h2 className="section-title">The team behind the samples.</h2>
                </div>
                <p className="section-subtext">
                  These are the people helping customers move from first request to approved flavor and production support.
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
                <h2>Flavor work should feel organized, responsive, and grounded in the product.</h2>
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
