import { Button } from "@/components/Button";
import { ProjectContactForm } from "@/components/ProjectContactForm";

const contactRows = [
  {
    label: "Email",
    value: "samples@flavorfactory.net",
    href: "mailto:samples@flavorfactory.net",
  },
  {
    label: "Phone",
    value: "(951) 273-9877",
    href: "tel:+19512739877",
  },
  {
    label: "Address",
    value: "2058 Second Street, Norco, CA 92860",
    href: undefined,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display-title mt-5 text-5xl leading-[1] md:text-7xl">
              Tell us about the product.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#645f55] md:text-lg">
              Share the application, target profile, and timeline. We will help you find the right starting point for sample development or production support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:samples@flavorfactory.net?subject=Sample%20Request">Email Samples</Button>
              <Button href="#project-form" variant="secondary">
                Start a Project
              </Button>
            </div>

            <div className="mt-12 grid gap-4">
              {contactRows.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-[#12382B]/10 bg-white/62 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6843A]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-3 block text-base font-semibold text-[#12382B] transition hover:text-[#C6843A]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-base font-semibold text-[#12382B]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <ProjectContactForm />
        </div>
      </section>
    </main>
  );
}
