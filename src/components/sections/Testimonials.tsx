"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Capital Gainer ki research aur support kaafi professional hai. Entries aur targets properly managed hote hain.",
    name: "Aman S.",
    role: "Equity Trader, Mumbai",
  },
  {
    quote:
      "WhatsApp updates fast aate hain aur risk management clear rehta hai. Premium experience laga mujhe.",
    name: "Rohit K.",
    role: "Options Trader, Indore",
  },
  {
    quote:
      "SEBI compliance aur structured research ki wajah se trust bana. Long-term investing me kaafi help mili.",
    name: "Neha P.",
    role: "Investor, Delhi",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-white/5 py-20 md:py-28"
      aria-labelledby="testimonials-heading"
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
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Trusted by traders who value process over hype
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass relative overflow-hidden rounded-2xl p-6 shadow-glass"
            >
              <Quote
                className="absolute right-4 top-4 h-10 w-10 text-white/5"
                aria-hidden
              />
              <blockquote className="relative text-sm leading-relaxed text-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="relative mt-5 border-t border-white/10 pt-4">
                <p className="font-display text-sm font-semibold text-white">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
