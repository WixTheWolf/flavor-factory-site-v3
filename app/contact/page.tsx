import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { ImagePanel } from "@/components/ImagePanel";

export default function ContactPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(185,135,69,0.18),transparent_32rem),linear-gradient(135deg,#f7f4ee_0%,#eee5d8_100%)]" />
        <div className="relative mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display-title mt-6 text-5xl md:text-7xl">Tell us about the product.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#405045]">
              Bring the application, target profile, constraints, and timeline. We will help turn the flavor direction into something practical.
            </p>

            <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-[#102218] text-white shadow-[0_34px_100px_rgba(20,37,28,0.16)]">
              <ImagePanel src="/images/flavor/contact-shelf-lab-wide.webp" alt="Flavor lab bottles organized on a clean shelf" className="min-h-[280px] rounded-none shadow-none" />
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a45d]">The Flavor Factory</p>
                <div className="mt-6 grid gap-3 text-base leading-7 text-white/70">
                  <p>Norco, California</p>
                  <a href="mailto:info@flavorfactory.net" className="transition hover:text-white">
                    info@flavorfactory.net
                  </a>
                  <p>Custom liquid and powder flavor systems.</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[2.75rem] border border-[#14251c]/10 bg-white/78 p-8 shadow-[0_34px_100px_rgba(20,37,28,0.1)] backdrop-blur md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Company" placeholder="Company name" />
              <Field label="Email" placeholder="name@company.com" />
              <Field label="Product Type" placeholder="Beverage, powder, sauce, etc." />
            </div>
            <div className="mt-5 grid gap-5">
              <Field label="Target Flavor" placeholder="What profile are you trying to build?" />
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[#14251c]">Project Details</span>
                <textarea
                  placeholder="Base notes, constraints, label needs, timeline, sample goals..."
                  rows={7}
                  className="resize-none rounded-2xl border border-[#14251c]/10 bg-[#f7f4ee] px-4 py-3 text-base outline-none transition placeholder:text-[#4f5d54]/45 focus:border-[#b98745]"
                />
              </label>
            </div>
            <Button type="button" className="mt-7">
              Submit Project
            </Button>
            <p className="mt-5 text-xs leading-5 text-[#566257]">Form is visual for now. Wire it to the existing request handler or preferred CRM before launch.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
