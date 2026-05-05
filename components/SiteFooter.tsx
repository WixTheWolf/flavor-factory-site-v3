import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#102218] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em]">The Flavor Factory</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">
            Custom flavor systems built with practical formulation, controlled iteration, and production discipline.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a45d]">Pages</p>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a45d]">Contact</p>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              <p>Norco, California</p>
              <p>info@flavorfactory.net</p>
              <p>Built for real products.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
