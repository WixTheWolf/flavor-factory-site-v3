import Image from "next/image";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

const approach = [
  ["Listen First", "We start by understanding your product, challenge, and goals.", "/images/flavor-factory/what-we-do-1.jpg"],
  ["Hands-On", "We get into the details: ingredients, application, and performance.", "/images/flavor-factory/what-we-do-2.jpg"],
  ["Follow Through", "We stay with it through production and beyond.", "/images/flavor-factory/what-we-do-3.jpg"],
] as const;

const difference = [
  ["Real Experience", "Deep knowledge across industries and applications."],
  ["Technical Excellence", "Advanced trials and precise execution."],
  ["Reliable Partner", "Clear communication and consistent results."],
] as const;

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="About Us"
        title="We build flavor that performs."
        body="The Flavor Factory is a full-service flavor house built for innovation, precision, and production. We partner with brands to create flavors that taste exceptional and perform in the real world."
        image="/images/flavor/about-lab-bottles-wide.webp"
        imageAlt="Glass flavor bottles in a clean formulation lab"
      />

      <section className="bg-[#f7f4ee] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center font-serif text-4xl font-normal tracking-[-0.035em] text-[#102218]">Our Approach</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approach.map(([title, body, image]) => (
              <article key={title}>
                <div className="relative aspect-[1.6] overflow-hidden bg-[#102218]">
                  <Image src={image} alt={`${title} at Flavor Factory`} fill sizes="(max-width: 768px) calc(100vw - 48px), 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102218]/18 to-transparent" />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-[#102218]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#566257]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0e8da] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <h2 className="text-center font-serif text-4xl font-normal tracking-[-0.035em] text-[#102218]">Our Difference</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {difference.map(([title, body]) => (
              <article key={title} className="text-center">
                <div className="mx-auto mb-5 h-9 w-9 rounded-full border border-[#b98745]/70" />
                <h3 className="text-base font-semibold text-[#102218]">{title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#566257]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Let's build something that lasts." body="We are in it for the long run." />
    </main>
  );
}
