import Link from "next/link";

const services = [
  {
    title: "Supplier Cost Reduction",
    text: "Benchmark pricing, strengthen negotiations, run competitive sourcing events, and uncover opportunities to reduce supplier costs.",
  },
  {
    title: "Strategic Sourcing",
    text: "Identify and evaluate domestic and international suppliers for components, raw materials, packaging, and finished goods.",
  },
  {
    title: "Supplier Diversification",
    text: "Reduce single-source dependency, evaluate alternative supply regions, and build more resilient sourcing strategies.",
  },
  {
    title: "Fractional Procurement",
    text: "Add experienced procurement support without the cost or commitment of building a full-time sourcing organization.",
  },
];

const industries = [
  "Consumer product companies",
  "Small & mid-sized manufacturers",
  "Importers & distributors",
  "Home & lifestyle brands",
  "Industrial product companies",
  "E-commerce brands",
  "Family-owned businesses",
  "Growing product companies",
];

const steps = [
  {
    number: "01",
    title: "Understand Your Spend",
    text: "We review what you buy, where you buy it, supplier relationships, volumes, pricing, and current sourcing challenges.",
  },
  {
    number: "02",
    title: "Identify Opportunities",
    text: "We look for pricing gaps, negotiation opportunities, alternative suppliers, sourcing risks, and ways to improve total landed cost.",
  },
  {
    number: "03",
    title: "Build the Strategy",
    text: "You receive practical recommendations prioritized around potential savings, supply continuity, effort, and business impact.",
  },
  {
    number: "04",
    title: "Execute",
    text: "When needed, we can support supplier negotiations, RFQs, supplier searches, implementation, and ongoing procurement activities.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            KK Procurement Solutions
          </p>

          <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Reduce supplier costs. Strengthen your supply chain. Buy smarter.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Strategic sourcing and procurement support for small and mid-sized
            product companies. We help businesses reduce supplier costs, source
            components and raw materials, improve negotiations, and build
            stronger domestic and international supply chains.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
            >
              Get a Free Supplier Savings Assessment
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-900"
            >
              Explore Our Services
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            No long-term commitment. Start with a conversation about your
            suppliers, sourcing challenges, and potential opportunities.
          </p>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="border-y border-slate-800 bg-slate-900/60 px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Lower Supplier Costs</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Find opportunities through supplier negotiations, competitive
              sourcing, cost benchmarking, and better purchasing strategies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Find Better Supply Options
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Evaluate alternative suppliers and sourcing regions for raw
              materials, components, packaging, and finished products.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Add Procurement Expertise
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              Get experienced sourcing support when you need it without adding
              another full-time position to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Procurement & Sourcing Services
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Enterprise sourcing experience without enterprise overhead.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Many growing companies spend millions with suppliers before they
              ever build a dedicated strategic sourcing function. We provide
              focused procurement support designed around the areas where
              outside expertise can create the most value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View all procurement services →
            </Link>
          </div>
        </div>
      </section>

      {/* Direct Materials / Component Sourcing */}
      <section className="bg-slate-900 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Direct Materials & Components
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Buying physical products or components from suppliers?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Supplier costs can have an immediate impact on your margins. We
              help product companies evaluate sourcing strategies for direct
              materials and components across domestic and international supply
              markets.
            </p>

            <p className="mt-5 leading-7 text-slate-300">
              Our sourcing experience includes wood, metal, glass, packaging,
              manufactured components, and other supplier-driven categories.
              Engagements can range from benchmarking an existing supplier to
              identifying and qualifying entirely new sources of supply.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Common Opportunities
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Benchmark incumbent supplier pricing",
                "Identify alternative domestic or international suppliers",
                "Run RFQs and competitive bid events",
                "Negotiate pricing and commercial terms",
                "Compare total landed cost across sourcing regions",
                "Reduce single-source and geographic supply risk",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 text-blue-400">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Who We Help
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Built for companies that depend on suppliers but do not need a
                large procurement department.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                If supplier spend is meaningful to your business but sourcing
                still falls primarily on an owner, operations leader, finance
                team, or small purchasing group, we can add strategic
                procurement capability without adding permanent overhead.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-slate-200"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-800 bg-slate-900/60 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Start by finding where the opportunity is.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              You do not need to commit to a major consulting engagement just
              to understand whether better sourcing opportunities exist.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <span className="text-sm font-bold text-blue-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Resources Link */}
      <section className="px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">Procurement Resources</p>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
              Explore practical guides on supplier cost reduction, strategic
              sourcing, negotiations, total landed cost, and procurement
              strategy.
            </p>
          </div>

          <Link
            href="/blog"
            className="shrink-0 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Explore Resources →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 pt-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Free Supplier Savings Assessment
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Think you may be overpaying suppliers?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us what you buy, how you currently source it, and where you're
            experiencing challenges. We'll discuss potential opportunities to
            improve cost, sourcing, or supplier risk.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Request Your Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
