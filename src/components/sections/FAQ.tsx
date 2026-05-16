"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    q: "What exactly do I receive as a subscriber?",
    a: "Structured research alerts with context, key levels, risk disclosure, and follow-up notes where relevant. Delivery is optimised for WhatsApp with periodic deeper summaries.",
  },
  {
    q: "Do you guarantee returns?",
    a: "No. Markets carry inherent risk. We provide research and educational market commentary, not investment advice tailored to your personal situation. Always consult a registered advisor where required.",
  },
  {
    q: "How do payments and onboarding work?",
    a: "Pick a category and billing window, tap Pay Now to message our desk on WhatsApp, and our team shares the secure onboarding pack. We confirm segment fit before activation.",
  },
  {
    q: "Can I switch segments mid-cycle?",
    a: "Segment switches depend on your active plan and fair-use policy. Message the desk — we will map the cleanest path without disrupting your risk logs.",
  },
  {
    q: "Is there a trial?",
    a: "We occasionally run limited trials for qualified desks. Ask on WhatsApp with your experience profile — if a trial slot is open, the team will share terms.",
  },
];

export function FAQ() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-b border-white/5 py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Answers before you onboard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Straightforward explanations — aligned with how we communicate
            during live markets.
          </p>
        </motion.div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            const panelId = `${baseId}-panel-${idx}`;
            const buttonId = `${baseId}-button-${idx}`;
            return (
              <motion.div
                key={item.q}
                layout
                className="glass overflow-hidden rounded-2xl shadow-glass"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left md:px-5"
                >
                  <span className="font-display text-sm font-semibold text-white md:text-base">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-muted"
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="border-t border-white/10"
                    >
                      <p className="px-4 py-4 text-sm leading-relaxed text-muted md:px-5">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
