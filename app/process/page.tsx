import Image from "next/image";
import { CTA } from "@/components/CTA";

const steps = [
  ["Define", "We define the target flavor profile, application, and constraints."],
  ["Build", "We create initial concepts and refine through structured iteration."],
  ["Validate", "We test in your application for performance, stability, and taste."],
  ["Scale", "We approach with precision for consistent, repeatable results."],
] as const;

export default function ProcessPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="relative overflow-hidden bg-[#f7f4ee] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.78fr_0.72fr]">
          <div>
            <p className="eyebrow">Our Process</p>
            <h1 className="display-title mt-5 text-5xl md:text-6xl">A proven process that turns ideas into flavors that work.</h1>
            <div className="mt-14 space-y-12">
              {steps.map(([title, body], index) => (
                <article key={title} className="grid grid-cols-[4rem_1fr] gap-7">
                  <p className="font-serif text-5xl font-normal leading-none text-[#102218]">{index + 1}</p>
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b6b2f]">{title}</h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#566257]">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[680px] overflow-hidden">
            <Image
              src="/images/flavor/process-pipette-tall.webp"
              alt="Gold pipette with amber liquid over glassware"
              fill
              priority
              sizes="(max-width: 1024px) calc(100vw - 48px), 42vw"
              className="object-contain object-center drop-shadow-[0_30px_55px_rgba(16,34,24,0.22)]"
            />
          </div>
        </div>
      </section>

      <CTA eyebrow="Ready to Begin?" title="Let's build a flavor that performs from start to finish." />
    </main>
  );
}
