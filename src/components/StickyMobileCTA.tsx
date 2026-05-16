"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { SITE, waMeUrl } from "@/lib/site";

export function StickyMobileCTA() {
  const wa = waMeUrl(
    `Hi ${SITE.name}, I want a quick callback about research plans.`,
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-black/70 px-3 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.15] items-center justify-center rounded-xl bg-accent py-3 text-sm font-semibold text-black"
        >
          WhatsApp
        </a>
        <Link
          href="#lead-form"
          className="flex flex-1 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 py-3 text-sm font-semibold text-accent"
        >
          Enquiry
        </Link>
      </div>
    </div>
  );
}
