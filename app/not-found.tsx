import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FlavorSearch404 } from "@/components/FlavorSearch404";

const links = [
  { href: "/flavors", label: "Flavors" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/request-samples", label: "Request Samples" },
];

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-panel">
        <Logo className="not-found-logo" />
        <h1>This recipe did not develop. Try one of these.</h1>
        <nav className="not-found-links" aria-label="Top pages">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <FlavorSearch404 />
      </section>
    </main>
  );
}
