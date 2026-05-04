export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About KK Procurement Solutions
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Enterprise-level procurement experience built for growing businesses.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            KK Procurement Solutions helps small and mid-sized businesses
            improve supplier costs, strengthen procurement processes, and build
            more resilient supply chains without the expense of a full-time
            procurement department.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Our Background
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Practical sourcing leadership with real-world business impact.
            </h2>
          </div>

          <div className="space-y-6 leading-8 text-slate-300">
            <p>
              KK Procurement Solutions was founded to bring structured,
              strategic procurement support to businesses that rely heavily on
              suppliers but may not have dedicated sourcing leadership in place.
            </p>

            <p>
              Our experience spans direct material sourcing, supplier
              negotiations, cost reduction, contract management, supplier
              relationship management, supply continuity, and cross-functional
              execution across complex business environments.
            </p>

            <p>
              The goal is simple: help businesses make smarter supplier
              decisions, reduce avoidable costs, and create procurement
              processes that support long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Experience & Achievements
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Built on hands-on procurement, sourcing, and supplier management experience.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Managed direct material sourcing across multiple raw material categories",
              "Led supplier negotiations focused on cost reduction and value creation",
              "Supported enterprise-level cash flow and working capital improvement initiatives",
              "Resolved supplier quality and continuity-of-supply challenges through cross-functional execution",
              "Developed sourcing strategies to reduce risk and improve supplier performance",
              "Supported new product development through supplier selection and sourcing execution",
              "Managed supplier contracts, commercial terms, and pricing reviews",
              "Built supplier diversification strategies to reduce dependency and improve resilience",
              "Collaborated with operations, quality, supply chain, finance, and leadership teams",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Why It Matters
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Many businesses are leaving money and leverage on the table.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Supplier spend is often one of the largest cost areas for a
              business, but many companies do not have the time, tools, or
              procurement structure to manage it strategically. Better
              procurement can improve margins, protect supply, reduce risk, and
              create meaningful cash flow impact.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="text-2xl font-bold">We help businesses with:</h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              {[
                "Finding supplier cost savings",
                "Running better RFQs and bid comparisons",
                "Improving supplier accountability",
                "Reducing single-source risk",
                "Strengthening procurement processes",
                "Building clearer sourcing strategies",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-blue-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Procurement support without unnecessary complexity.
          </h2>

          <p className="mt-5 text-slate-300">
            KK Procurement Solutions brings practical, results-focused
            procurement guidance to businesses that want stronger supplier
            performance and better cost control.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
