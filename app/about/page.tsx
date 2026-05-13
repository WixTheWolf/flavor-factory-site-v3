import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { CTA } from "@/components/CTA";

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

const team = [
  {
    name: "Dan Wixted",
    title: "President",
    focus: "Leadership",
    bio: "Dan started The Flavor Factory and has spent more than 40 years in the flavor industry. He sets the standards for how projects are handled and stays close to every customer relationship. When a project is complicated, Dan is usually the first person in the room.",
    photoAlt: "Dan Wixted, President of The Flavor Factory",
  },
  {
    name: "Alex Wixted",
    title: "Operations",
    focus: "Operations",
    bio: "Alex keeps projects moving from first request through production. He coordinates between teams, manages project flow, and makes sure nothing falls through between the sample conversation and the production order.",
    photoAlt: "Alex Wixted, Operations at The Flavor Factory",
  },
  {
    name: "Kelly Ziegler",
    title: "Office Manager",
    focus: "Customer Care",
    bio: "Kelly is usually the first person a customer talks to. She handles communication, scheduling, and the coordination details that keep projects on track from the first email through the final order.",
    photoAlt: "Kelly Ziegler, Office Manager at The Flavor Factory",
  },
  {
    name: "Ryan Wixted",
    title: "Quality and Regulatory",
    focus: "Quality",
    bio: "Ryan manages the quality systems and regulatory documentation that customers rely on for supplier qualification, allergen statements, COAs, and label support. If it involves a document or a certification, it goes through Ryan.",
    photoAlt: "Ryan Wixted, Quality and Regulatory at The Flavor Factory",
  },
  {
    name: "Matt Wixted",
    title: "Production Manager",
    focus: "Production",
    bio: "Matt bridges sample approval and production. If a sample gets approved, Matt is the one making sure the first production batch matches it. He owns the path from bench to batch.",
    photoAlt: "Matt Wixted, Production Manager at The Flavor Factory",
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
    copy: "Formulation, samples, revisions, and manufacturing all happen at our Norco facility. One team, one thread. No hand-offs to third parties.",
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
      <OrganizationSchema />
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

            {/* Story */}
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
                  That is the work here. A flavor has to become a product order, and then repeat, without losing the details that made it worth approving in the first place.
                </p>
                <p>
                  Ready to start a project? Email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> or call <a href="tel:+19512739877">(951) 273-9877</a>. We will help you find the right starting point.
                </p>
              </div>
            </section>

            {/* Why family */}
            <section className="about-family-section">
              <div className="about-family-content">
                <div className="new-eyebrow">Family-Owned</div>
                <h2>Why a family business works differently for this kind of work.</h2>
                <p>
                  A corporate flavor house has layers between the person selling the project and the person making the samples. When something goes wrong, the handoff is where it happens. The sales rep promised something the development team does not know about. The development team approved something production cannot reproduce.
                </p>
                <p>
                  We do not have those layers. The people you talk to are the people who make and produce the flavor. Dan has been doing this for over 40 years. Alex runs operations. Ryan handles quality and regulatory. Matt runs production. Kelly keeps it all coordinated. When you approve a sample, the person who made it is the same one who will make the production batch.
                </p>
                <p>
                  That is not a marketing claim. It is how the company is structured, and it is why customers who have worked with larger flavor houses often tell us the experience is different here.
                </p>
              </div>
              <div className="about-family-stats">
                <div className="about-stat">
                  <span className="about-stat-number">40+</span>
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

            {/* Approach */}
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

            {/* Team */}
            <section className="management-section">
              <div className="section-head">
                <div>
                  <div className="eyebrow">Meet the Team</div>
                  <h2 className="section-title">The people on your project.</h2>
                </div>
                <p className="section-subtext">
                  You work directly with the people who develop, produce, and quality-check the flavor. No layers, no hand-offs.
                </p>
              </div>
              <div className="team-card-grid">
                {team.map((member) => (
                  <article className="team-card" key={member.name}>
                    <div className="team-card-photo" aria-label={member.photoAlt}>
                      <div className="team-card-photo-placeholder">
                        <span>{member.name.split(" ").map(n => n[0]).join("")}</span>
                      </div>
                    </div>
                    <div className="team-card-body">
                      <h3>{member.name}</h3>
                      <div className="team-card-title">{member.title}</div>
                      <p>{member.bio}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="team-photo-note">
                Team photos coming soon. In the meantime, <Link href="/contact">reach out directly</Link> — you will probably talk to one of these people within the day.
              </p>
            </section>

            {/* Principles */}
            <section className="about-principles">
              <div>
                <div className="new-eyebrow">What Matters Here</div>
                <h2>Warm service. Technical control. Manufacturing credibility.</h2>
              </div>
              <div>
                <p>
                  Being family-owned means the people you work with care about the outcome the same way you do. We hold the thread from concept to approval to repeat production, every time.
                </p>
                <Button href="/request-samples" variant="secondary" className="mt-24">Start a Project</Button>
              </div>
            </section>

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
