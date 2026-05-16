"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { waMeUrl } from "@/lib/site";

const SEGMENTS = [
  "Stock Cash",
  "Cash Positional",
  "Stock Future",
  "Future STBT / BTST",
  "Stock Option",
  "Option BTST",
  "Index Future",
  "Index Option",
  "Equity Combo Standard",
  "Positional Combo",
  "Not sure — advise me",
] as const;

const EXPERIENCE = [
  "New to markets (< 1 year)",
  "Active learner (1–3 years)",
  "Experienced (3–7 years)",
  "Professional / full-time",
] as const;

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function validateIndianMobile(v: string) {
  const digits = v.replace(/\D/g, "");
  return digits.length === 10;
}

export function LeadForm({ id = "lead-form" }: { id?: string }) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [segment, setSegment] = useState<string>(SEGMENTS[0]);
  const [experience, setExperience] = useState<string>(EXPERIENCE[0]);
  const [errors, setErrors] = useState<{
    name?: string;
    mobile?: string;
    email?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  function buildMessage() {
    return [
      "*New lead — Capital Gainer website*",
      "",
      `*Full Name:* ${fullName.trim()}`,
      `*Mobile:* ${mobile.trim()}`,
      `*Email:* ${email.trim()}`,
      `*Interested Segment:* ${segment}`,
      `*Trading Experience:* ${experience}`,
      "",
      "_Submitted from homepage lead form_",
    ].join("\n");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!validateIndianMobile(mobile)) {
      next.mobile = "Enter a valid 10-digit Indian mobile number.";
    }
    if (!validateEmail(email)) {
      next.email = "Enter a valid email address.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 650));
    const url = waMeUrl(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
    setSuccessOpen(true);
  }

  return (
    <>
      <motion.form
        id={id}
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative scroll-mt-28 overflow-hidden rounded-2xl p-6 shadow-glass md:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(34,197,94,0.18),transparent_55%)]"
        />
        <div className="relative">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                Start a conversation
              </p>
              <p className="mt-1 text-sm text-muted">
                Share your profile — our desk responds on WhatsApp with a
                tailored research roadmap.
              </p>
            </div>
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:flex">
              <Sparkles className="h-5 w-5 text-accent" aria-hidden />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                Full name
              </span>
              <input
                required
                name="fullName"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-accent/0 transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15"
                placeholder="As per PAN / bank records"
              />
              {errors.name ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
              ) : null}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                Mobile number
              </span>
              <input
                required
                inputMode="numeric"
                name="mobile"
                autoComplete="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15"
                placeholder="10-digit mobile"
              />
              {errors.mobile ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.mobile}</p>
              ) : null}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                Email address
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15"
                placeholder="you@company.com"
              />
              {errors.email ? (
                <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              ) : null}
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                Interested segment
              </span>
              <select
                name="segment"
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15"
              >
                {SEGMENTS.map((s) => (
                  <option key={s} value={s} className="bg-surface text-white">
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
                Trading experience
              </span>
              <select
                name="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15"
              >
                {EXPERIENCE.map((x) => (
                  <option key={x} value={x} className="bg-surface text-white">
                    {x}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: loading ? 1 : 0.99 }}
            className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-dim to-accent px-4 py-3.5 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-shimmer bg-[length:200%_100%] opacity-40"
            />
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <Send className="h-4 w-4" aria-hidden />
            )}
            {loading ? "Opening WhatsApp…" : "Send on WhatsApp"}
          </motion.button>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
            By submitting, you consent to be contacted on WhatsApp regarding
            Capital Gainer services. Markets involve risk — we provide research,
            not guaranteed returns.
          </p>
        </div>
      </motion.form>

      <AnimatePresence>
        {successOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close dialog backdrop"
              onClick={() => setSuccessOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-success-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="glass-strong relative z-[101] w-full max-w-md rounded-2xl p-6 shadow-lift"
            >
              <h2
                id="lead-success-title"
                className="font-display text-xl font-semibold text-white"
              >
                WhatsApp opened
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                If the tab was blocked, allow pop-ups and try again. You can
                also tap the floating WhatsApp button anytime.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setSuccessOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Close
                </button>
                <a
                  href={waMeUrl(buildMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  Resend message
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
