import { ShieldCheck, BadgeCheck, FileText } from "lucide-react";

export function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          Compliance & Trust
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Trusted research infrastructure
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
          Capital Gainer operates with a research-first framework backed by
          compliance documentation and transparent advisory practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <ShieldCheck className="h-10 w-10 text-green-400" />

          <h3 className="mt-5 text-xl font-semibold text-white">
            SEBI Registered
          </h3>

          <p className="mt-3 text-sm text-neutral-400">
            Registered Research Analyst framework with compliance-driven
            operations and transparent market practices.
          </p>

          <a
            href="/sebi.pdf"
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 text-green-400"
          >
            <FileText className="h-4 w-4" />
            View certificate
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <BadgeCheck className="h-10 w-10 text-green-400" />

          <h3 className="mt-5 text-xl font-semibold text-white">
            ISO 9001:2015
          </h3>

          <p className="mt-3 text-sm text-neutral-400">
            Quality management certification focused on ethical research,
            transparency, and structured advisory systems.
          </p>

          <a
            href="/iso.pdf"
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 text-green-400"
          >
            <FileText className="h-4 w-4" />
            View certificate
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <FileText className="h-10 w-10 text-green-400" />

          <h3 className="mt-5 text-xl font-semibold text-white">
            Risk-first advisory
          </h3>

          <p className="mt-3 text-sm text-neutral-400">
            Research-backed trading insights with disciplined risk management
            and responsible market communication.
          </p>
        </div>
      </div>
    </section>
  );
}