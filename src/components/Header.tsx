import Link from "next/link";
import Image from "next/image";
import { SITE, waMeUrl } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const wa = waMeUrl(`Hi ${SITE.name}, I'd like to explore your research plans.`);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          <Image
  src="/logo.png"
  alt="Capital Gainer"
  width={180}
  height={60}
  className="h-12 w-auto"
/>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-muted md:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#lead-form"
            className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white transition hover:border-accent/40 sm:inline-flex"
          >
            Get research access
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-black transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
