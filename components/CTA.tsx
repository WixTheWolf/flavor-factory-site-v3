import Link from "next/link";

export function CTA({
  eyebrow = "Start Your Project",
  title = "Tell us about your product. We'll build something that works in it.",
  body = "Bring the product, the constraints, and the target. We will help move the flavor from idea to repeatable production.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-[#f7f4ee] px-6 pb-24 pt-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#9b6b2f] p-10 text-white md:p-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">{eyebrow}</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-white/76">{body}</p>
          <Link href="/contact" className="mt-9 inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#14251c] transition hover:bg-[#f7f4ee]">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
