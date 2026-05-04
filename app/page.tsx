export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            KK Procurement Solutions
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Smarter procurement. Stronger suppliers. Better margins.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We help small and mid-sized businesses reduce supplier costs,
            strengthen procurement processes, and build more resilient supply
            chains without needing to hire a full-time procurement team.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
            >
              Book a Free Consultation
            </a>

            <a
              href="/services"
              className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Credibility / Value Props */}
      <section className="border-y border-slate-800 bg-slate-900/60 px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Cost Reduction</h3>
            <p className="mt-3 text-slate-300">
              Identify pricing gaps, supplier savings opportunities, and
              negotiation strategies that directly improve profitability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Supplier Strategy</h3>
            <p className="mt-3 text-slate-300">
              Improve supplier performance, reduce risk, and build stronger
              sourcing options for critical materials, products, or services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Procurement Support</h3>
            <p className="mt-3 text-slate-300">
              Get practical procurement leadership, RFQ support, contract
              review, and sourcing guidance without adding full-time headcount.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Procurement solutions built for growing businesses.
            </h2>
            <p className="mt-5 text-slate-300">
              Whether you need help finding savings, reviewing supplier
              agreements, running an RFQ, or building a more structured
              procurement process, KK Procurement Solutions brings enterprise
              sourcing experience to businesses that need practical results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Procurement Savings Audit",
                text: "Review supplier spend, contracts, pricing, and sourcing opportunities.",
              },
              {
                title: "Supplier Cost Reduction",
                text: "Support negotiations, benchmarking, bid events, and supplier optimization.",
              },
              {
                title: "Fractional Procurement Support",
                text: "Part-time procurement leadership for businesses without a dedicated sourcing team.",
              },
              {
                title: "Supplier Diversification",
                text: "Reduce single-source risk and build stronger backup supplier strategies.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-slate-900 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Who We Help
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Built for small and mid-sized companies that need better buying power.
              </h2>
              <p className="mt-5 text-slate-300">
                Many growing businesses rely on suppliers every day but do not
                have the time, tools, or procurement leadership to manage costs
                strategically. That is where we help.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Small manufacturers",
                "Consumer product brands",
                "Packaging buyers",
                "Importers",
                "E-commerce businesses",
                "Family-owned companies",
                "Industrial suppliers",
                "PE-backed businesses",
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 text-slate-200"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Think your supplier costs could be better?
          </h2>
          <p className="mt-5 text-slate-300">
            Let’s review where your procurement process may be leaving savings,
            leverage, or supplier risk on the table.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Start with a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
