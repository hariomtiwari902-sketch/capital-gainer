"use client";
import { motion } from "framer-motion";
import { LeadForm } from "@/components/LeadForm";
import { SITE, waMeUrl } from "@/lib/site";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { label: "Research-first process", value: "100%", icon: LineChart },
  { label: "Derivatives coverage", value: "F&O", icon: BarChart3 },
  { label: "Risk-first framework", value: "RM", icon: ShieldCheck },
];

export function Hero() {
  const waIntro = waMeUrl(
    `Hi ${SITE.name}, I would like to know more about your research plans.`,
  );

  return (
    <section
      className="relative overflow-hidden border-b border-white/5"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid bg-[length:48px_48px]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-6 md:pb-28 md:pt-36 lg:pt-40">
      
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-muted backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
          Indore · Research-led advisory desk
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12" >
          <div>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Precision research for{" "}
              <span className="text-gradient">capital compounding</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {SITE.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-lift transition hover:bg-emerald-50"
              >
                View plans
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={waIntro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-accent/40 hover:bg-white/[0.07]"
              >
                WhatsApp desk
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-4 shadow-glass"
                >
                  <dt className="flex items-center gap-2 text-xs text-muted">
                    <s.icon className="h-4 w-4 text-accent" aria-hidden />
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <LeadForm id="lead-form" />
        </div>
      </div>
    </section>
  );
}
