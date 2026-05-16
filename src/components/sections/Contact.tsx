"use client";

import { motion } from "framer-motion";
import { mapsUrl, SITE, waMeUrl } from "@/lib/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Contact() {
  const waHello = waMeUrl(
    `Hi ${SITE.name}, I would like to speak with your research desk.`,
  );

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      aria-labelledby="contact-heading"
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
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Visit, call, or message — we respond fast
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Prefer WhatsApp for plan selection and onboarding. For urgent voice
            follow-ups, tap call to connect with the desk during market hours.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <motion.a
            href={`tel:${SITE.phoneTel}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass group flex gap-4 rounded-2xl p-6 shadow-glass transition hover:border-accent/35"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover:border-accent/40">
              <Phone className="h-6 w-6 text-accent" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Phone
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-white">
                {SITE.phoneDisplay}
              </p>
              <p className="mt-2 text-xs text-muted">Tap to call · {SITE.phoneTel}</p>
            </div>
          </motion.a>

          <motion.a
            href={waHello}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="glass group flex gap-4 rounded-2xl p-6 shadow-glass transition hover:border-accent/35"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover:border-accent/40">
              <MessageCircle className="h-6 w-6 text-accent" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                WhatsApp
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-white">
                Chat with Capital Gainer
              </p>
              <p className="mt-2 text-xs text-muted">
                Opens WhatsApp with a prefilled intro message.
              </p>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${SITE.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass group flex gap-4 rounded-2xl p-6 shadow-glass transition hover:border-accent/35"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover:border-accent/40">
              <Mail className="h-6 w-6 text-accent" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Email
              </p>
              <p className="mt-1 break-all font-display text-lg font-semibold text-white">
                {SITE.email}
              </p>
              <p className="mt-2 text-xs text-muted">
                For documentation, invoices, and non-urgent queries.
              </p>
            </div>
          </motion.a>

          <motion.a
            href={mapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="glass group flex gap-4 rounded-2xl p-6 shadow-glass transition hover:border-accent/35"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition group-hover:border-accent/40">
              <MapPin className="h-6 w-6 text-accent" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Office
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white">
                {SITE.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-2 text-xs text-muted">Open in Google Maps</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
