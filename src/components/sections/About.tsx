"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { Building2, Target, Users2 } from "lucide-react";

const pillars = [
  {
    title: "Who we are",
    body: `${SITE.name} is a focused equity research desk helping traders navigate Indian markets with structured idea generation, execution hygiene, and post-trade reviews.`,
    icon: Building2,
  },
  {
    title: "Who we serve",
    body: "Active cash traders, derivative participants, and combination strategists who want clarity on risk, position sizing, and market context — not noise.",
    icon: Users2,
  },
  {
    title: "How we work",
    body: "Ideas are supported by levels, invalidation rules, and scenario planning. We emphasise capital preservation first, then asymmetric opportunity.",
    icon: Target,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-white/5 py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            A research partner built for modern Indian markets
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            From cash-led swing setups to index derivatives and combination
            books, we align communication, accountability, and disciplined
            follow-through — the way premium desks operate.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 shadow-glass"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(500px 200px at 10% 0%, rgba(34,197,94,0.12), transparent 55%)",
                }}
              />
              <p.icon className="relative h-8 w-8 text-accent" aria-hidden />
              <h3 className="relative mt-4 font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
