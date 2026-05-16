import { waMeUrl } from "@/lib/site";
export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-4 py-24"
    >
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          Pricing Plans
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Premium Research Memberships
        </h2>

        <p className="mt-4 text-neutral-400">
          Structured advisory plans designed for serious traders and investors.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        
        {/* BASIC */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-3xl font-bold text-white">
            Basic
          </h3>

          <p className="mt-3 text-neutral-400">
            Essential research & beginner-friendly advisory.
          </p>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">
                Quarterly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-400">
                ₹39,000 + GST
              </p>
              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
                      </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">
                Half Yearly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-400">
                ₹70,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">
                Yearly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-400">
                ₹99,000 + GST
              </p>
              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
             
            </div>

          </div>
        </div>

        {/* PREMIUM */}
        <div className="rounded-3xl border border-green-500 bg-green-500/10 p-8 shadow-2xl shadow-green-500/20">
          
          <div className="mb-4 inline-block rounded-full bg-green-500 px-4 py-1 text-xs font-bold text-black">
            MOST POPULAR
          </div>

          <h3 className="text-3xl font-bold text-white">
            Premium
          </h3>

          <p className="mt-3 text-neutral-300">
            Advanced trading research & priority support.
          </p>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h4 className="text-lg font-semibold text-white">
                Quarterly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-300">
                ₹55,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h4 className="text-lg font-semibold text-white">
                Half Yearly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-300">
                ₹1,00,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h4 className="text-lg font-semibold text-white">
                Yearly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-300">
                ₹1,45,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

          </div>
        </div>

        {/* PRO */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-3xl font-bold text-white">
            PRO
          </h3>

          <p className="mt-3 text-neutral-400">
            Institutional-grade advisory & elite research access.
          </p>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">
                Quarterly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-400">
                ₹80,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">
                Half Yearly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-400">
                ₹1,50,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <h4 className="text-lg font-semibold text-white">
                Yearly
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-400">
                ₹2,10,000 + GST
              </p>

              <a
  href={waMeUrl("Hi Capital Gainer, I want to join this plan.")}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 block w-full rounded-xl bg-green-500 py-3 text-center font-semibold text-black transition hover:bg-green-400"
>
  Join Now
</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}