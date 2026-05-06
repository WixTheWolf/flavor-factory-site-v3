import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Flavors", href: "/flavors" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Certifications", href: "/certifications" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1D16] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em]">THE FLAVOR FACTORY</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
            Premium flavor formulation and manufacturing for real product development, from first sample to repeatable scale.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6843A]">Pages</p>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6843A]">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            <p>Norco, California</p>
            <a href="mailto:samples@flavorfactory.net" className="transition hover:text-white">
              samples@flavorfactory.net
            </a>
            <p>Custom flavor systems for real products.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
