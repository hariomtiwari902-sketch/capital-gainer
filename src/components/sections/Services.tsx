"use client";

import { motion } from "framer-motion";
import {
  CandlestickChart,
  Layers3,
  LineChart,
  Radar,
  Scale,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Equity & cash research",
    desc: "Swing and positional narratives with clear entry, trail, and exit frameworks for cash-led books.",
    icon: LineChart,
  },
  {
    title: "Futures & STBT / BTST",
    desc: "Carry-friendly structures with explicit overnight risk disclosure and liquidity-aware sizing.",
    icon: CandlestickChart,
  },
  {
    title: "Options & volatility",
    desc: "Defined-risk option constructs with Greeks-aware context for event and non-event weeks.",
    icon: Radar,
  },
  {
    title: "Index derivatives",
    desc: "Nifty / Bank Nifty directional and range-bound playbooks with disciplined hedging language.",
    icon: Sparkles,
  },
  {
    title: "Combo packages",
    desc: "Cross-product bundles that mirror how sophisticated traders actually allocate capital.",
    icon: Layers3,
  },
  {
    title: "Risk governance",
    desc: "Position limits, drawdown conversations, and journaling prompts to professionalise execution.",
    icon: Scale,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-b border-white/5 py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Full-stack coverage across your trading book
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every stream below maps to a dedicated plan family with weekly,
              monthly, and quarterly billing — pick the rhythm that matches your
              capital deployment cycle.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="glass rounded-2xl p-5 shadow-glass transition hover:border-accent/25"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <s.icon className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
