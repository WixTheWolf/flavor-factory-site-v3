import { Field } from "@/components/Field";

export default function ContactPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#9b6b2f]">Contact</p>
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-[#102218] md:text-7xl">Tell us about the product.</h1>
            <p className="mt-7 text-xl leading-8 text-[#405045]">
              Bring the application, target profile, constraints, and timeline. We will help turn the flavor direction into something practical.
            </p>
            <div className="mt-10 rounded-[2rem] bg-[#14251c] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a45d]">The Flavor Factory</p>
              <div className="mt-6 grid gap-3 text-base leading-7 text-white/70">
                <p>Norco, California</p>
                <p>info@flavorfactory.net</p>
                <p>Custom liquid and powder flavor systems.</p>
              </div>
            </div>
          </div>

          <form className="rounded-[2.5rem] border border-[#14251c]/10 bg-white p-8 shadow-xl shadow-[#14251c]/8 md:p-10">
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
                  className="resize-none rounded-2xl border border-[#14251c]/10 bg-[#f7f4ee] px-4 py-3 text-base outline-none transition placeholder:text-[#4f5d54]/45 focus:border-[#9b6b2f]"
                />
              </label>
            </div>
            <button type="button" className="mt-7 inline-flex rounded-full bg-[#14251c] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#21372a]">
              Submit Project
            </button>
            <p className="mt-5 text-xs leading-5 text-[#4f5d54]">Wire this form to your preferred email/form handler before launch.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
