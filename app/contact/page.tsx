import Image from "next/image";
import { Button } from "@/components/Button";
import { Field } from "@/components/Field";

const contact = [
  ["Email", "info@flavorfactory.net"],
  ["Phone", "(951) 273-9877"],
  ["Address", "2058 Second Street, Norco, CA 92860"],
] as const;

export default function ContactPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="bg-[#f7f4ee] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h1 className="display-title mt-5 text-5xl md:text-6xl">Let&apos;s create something great together.</h1>
            <div className="mt-12 space-y-8">
              {contact.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[4rem_1fr] gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b6b2f]">{label}</p>
                  <p className="text-sm leading-6 text-[#566257]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative h-72 overflow-hidden bg-[#102218]">
              <Image src="/images/flavor/contact-shelf-lab-wide.webp" alt="Flavor bottles on a clean lab shelf" fill sizes="(max-width: 1024px) calc(100vw - 48px), 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f7f4ee]/10" />
            </div>

            <form className="bg-white/62 p-7 shadow-[0_24px_70px_rgba(20,37,28,0.08)]">
              <h2 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#102218]">Send us a message</h2>
              <div className="mt-6 grid gap-4">
                <Field label="Name" placeholder="Name" />
                <Field label="Email" placeholder="Email" />
                <Field label="Company" placeholder="Company" />
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-[#14251c]">Project Details</span>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="resize-none rounded-none border border-[#14251c]/10 bg-[#f7f4ee] px-4 py-3 text-base outline-none transition placeholder:text-[#4f5d54]/45 focus:border-[#b98745]"
                  />
                </label>
              </div>
              <Button type="button" className="mt-6 w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
