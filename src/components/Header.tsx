"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ExternalLink, MessageCircle } from "lucide-react";
import { SITE, waMeUrl } from "@/lib/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const mobileLinks = [
  ...navLinks,
  {
    href: "/sebi.pdf",
    label: "SEBI Registration",
    external: true,
  },
];

const menuVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: { opacity: 0, y: 24 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: -16 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 + i * 0.05,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wa = waMeUrl(
    `Hi ${SITE.name}, I'd like to explore your research plans.`,
  );

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-xl transition-colors duration-300 md:z-[80] ${
          menuOpen
            ? "border-transparent bg-transparent"
            : "border-white/5 bg-ink/70"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-white"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="Capital Gainer"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-6 text-sm text-muted md:flex"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
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
              className="hidden rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-black transition hover:brightness-110 md:inline-flex"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-accent/40 hover:bg-white/[0.06] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[90] md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-[#030405]" />
            <motion.div
              className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[100px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="pointer-events-none absolute -right-16 bottom-32 h-64 w-64 rounded-full bg-emerald-600/10 blur-[90px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="relative flex h-full flex-col px-6 pb-10 pt-20"
              variants={panelVariants}
            >
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Navigation
              </p>

              <nav className="flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
                {mobileLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="group flex items-center gap-3 border-b border-white/[0.06] py-4 font-display text-2xl font-medium tracking-tight text-white/90 transition hover:text-accent sm:text-3xl"
                      >
                        <span className="h-px w-6 bg-accent/60 transition group-hover:w-10 group-hover:bg-accent" />
                        {link.label}
                        <ExternalLink
                          className="ml-auto h-4 w-4 shrink-0 text-muted opacity-0 transition group-hover:opacity-100"
                          aria-hidden
                        />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-3 border-b border-white/[0.06] py-4 font-display text-2xl font-medium tracking-tight text-white/90 transition hover:text-accent sm:text-3xl"
                      >
                        <span className="h-px w-6 bg-accent/60 transition group-hover:w-10 group-hover:bg-accent" />
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  custom={mobileLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="mt-4"
                >
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-dim to-accent px-6 py-4 text-base font-semibold text-black shadow-[0_12px_40px_rgba(34,197,94,0.35)] transition hover:brightness-110"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    WhatsApp
                  </a>
                </motion.div>
              </nav>

              <motion.p
                className="mt-8 text-center text-xs text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {SITE.tagline}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
