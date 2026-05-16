import { mapsUrl, SITE, waMeUrl } from "@/lib/site";
import Link from "next/link";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const wa = waMeUrl(`Hi ${SITE.name}, I have a question about your services.`);

  return (
    <footer className="border-t border-white/10 bg-black/60 pb-28 pt-12 md:pb-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              {SITE.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {SITE.tagline}. Research communications are designed for fast
              comprehension under live market conditions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 font-medium text-white transition hover:border-accent/40"
              >
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-accent px-4 py-2 font-semibold text-black transition hover:brightness-110"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="transition hover:text-accent"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Address
              </p>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm leading-relaxed text-white/80 transition hover:text-accent"
              >
                {SITE.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-xl leading-relaxed">
            Disclaimer: securities markets are subject to market risks. Read
            all related documents carefully before subscribing.{" "}
            <Link href="#lead-form" className="text-accent hover:underline">
              Lead form
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
