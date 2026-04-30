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
    focus: "Custom profiles, matching work, sensory direction, and practical formulation choices.",
  },
  {
    title: "Customer Projects",
    image: siteImages.contactHero,
    focus: "Sample coordination, project communication, timelines, and keeping the next step clear.",
  },
  {
    title: "Production & Quality",
    image: flavorFactoryImages.industrySyrup,
    focus: "Liquid and powder production support, documentation, and consistency from sample to scale.",
  },
] as const;

const managementTeam = [
  {
    name: "Dan Wixted",
    title: "President",
    initials: "DW",
    note: "Leadership, customer relationships, and the standards behind the work.",
  },
  {
    name: "Alex Wixted",
    title: "Operations",
    initials: "AW",
    note: "Project flow, operations, and helping customer needs move through the shop.",
  },
  {
    name: "Kelly Ziegler",
    title: "Office Manager",
    initials: "KZ",
    note: "Customer communication, coordination, and the details that keep projects moving.",
  },
  {
    name: "Ryan Wixted",
    title: "Quality / Regulatory",
    initials: "RW",
    note: "Quality systems, regulatory support, and documentation alignment.",
  },
  {
    name: "Matt Wixted",
    title: "Production Manager",
    initials: "MW",
    note: "Production planning, practical execution, and sample-to-scale support.",
  },
] as const;

const principles = [
  "Start with the product reality, not just the flavor idea.",
  "Move quickly, but keep the sample path organized.",
  "Build profiles that can transition into production.",
  "Communicate clearly when a custom route makes more sense.",
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
                alt="Premium ingredient and formulation setup"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 35%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>About</div>
                <h1 className="section-title" style={{ color: "white" }}>
                  Practical flavor development, built around the product you are making.
                </h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 820, color: "rgba(255,255,255,.84)" }}>
                  The Flavor Factory develops liquid and powder flavor solutions for brands that need a responsive partner, not a generic catalog.
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
                <h2 className="section-title">A small, capable team with a clear development point of view.</h2>
              </div>
              <div className="about-story-copy">
                <p>
                  Clients come to us for custom development, flavor matching, responsive service, and a process that moves from idea to execution without unnecessary friction.
                </p>
                <p>
                  We have built the business around doing the work well, communicating clearly, and helping clients find the right flavor solution for the product they are actually making.
                </p>
              </div>
            </section>

            <section className="management-section">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Meet Our Management Team</div>
                  <h2 className="section-title">The people keeping projects clear, practical, and moving.</h2>
                </div>
                <p className="section-subtext">
                  A responsive flavor partner is only as good as the people guiding the work. These are the management roles customers connect with behind the scenes.
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
                <h2>Flavor support that respects timelines, taste targets, and production realities.</h2>
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
