"use client"

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, waMeUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  const href = waMeUrl(
    `Hi ${SITE.name}, I'd like to connect with your research desk.`,
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black shadow-[0_12px_40px_rgba(34,197,94,0.45)] md:bottom-8"
      aria-label="Open WhatsApp chat with Capital Gainer"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  );
}
