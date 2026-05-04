export default function IndustriesPage() {
  const industries = [
    {
      title: "Manufacturing",
      description:
        "Support for manufacturers managing raw materials, supplier costs, lead times, production continuity, and supplier performance.",
      bullets: [
        "Direct material sourcing",
        "Supplier diversification",
        "Lead time optimization",
        "Cost reduction",
        "Operational continuity",
      ],
    },
    {
      title: "Consumer Products",
      description:
        "Procurement strategy for brands focused on packaging, finished goods, cost control, and supply chain stability.",
      bullets: [
        "Packaging sourcing",
        "Supplier negotiations",
        "Product cost management",
        "NPD sourcing support",
        "Supply continuity",
      ],
    },
    {
      title: "Packaging",
      description:
        "Specialized sourcing support for packaging-intensive businesses seeking better pricing, stronger suppliers, and operational flexibility.",
      bullets: [
        "Glass",
        "Metal",
        "Wood",
        "Secondary packaging",
        "Supplier benchmarking",
      ],
    },
    {
      title: "E-Commerce & Importers",
      description:
        "Supplier optimization for growing brands navigating overseas sourcing, tariffs, supplier reliability, and working capital challenges.",
      bullets: [
        "Supplier sourcing",
        "Tariff mitigation",
        "Import strategy",
        "Vendor diversification",
        "Cost savings",
      ],
    },
    {
      title: "Family-Owned & Mid-Sized Businesses",
      description:
        "Practical procurement leadership for businesses without dedicated sourcing teams looking to improve purchasing performance.",
      bullets: [
        "Fractional procurement leadership",
        "RFQ support",
        "Contract reviews",
        "Supplier strategy",
        "Procurement process development",
      ],
    },
    {
      title: "Private Equity Portfolio Companies",
      description:
        "Rapid procurement assessments and cost reduction strategies that improve EBITDA, supplier efficiency, and operational performance.",
      bullets: [
        "Procurement audits",
        "Margin improvement",
        "Supplier savings",
        "Working capital improvements",
        "Supply chain risk reduction",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Industries We Serve
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Procurement solutions tailored to businesses that depend on supplier performance.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            KK Procurement Solutions works with growing businesses across
            multiple industries to reduce supplier costs, improve procurement
            systems, and strengthen sourcing strategies.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="text-2xl font-bold">{industry.title}</h2>

              <p className="mt-4 leading-7 text-slate-300">
                {industry.description}
              </p>

              <ul className="mt-6 space-y-3">
                {industry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-slate-200"
                  >
                    <span className="mt-1 text-blue-400">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Industry Focus Matters */}
      <section className="border-y border-slate-800 bg-slate-900/50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Why Industry Expertise Matters
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Procurement challenges vary by business model, supplier complexity, and growth stage.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Whether managing direct materials, packaging suppliers,
              operational inputs, or global sourcing, businesses need
              procurement strategies aligned with their industry realities.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="text-2xl font-bold">
              Common challenges we help solve:
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">
              {[
                "High supplier costs",
                "Single-source dependency",
                "Poor contract leverage",
                "Tariff and import exposure",
                "Inefficient procurement systems",
                "Supplier quality and service issues",
                "Lack of procurement leadership",
                "Working capital pressure",
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

      {/* Ideal Client Profile */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Ideal Client Profile
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Businesses that benefit most from our services:
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "$5M–$100M annual revenue",
              "Supplier-heavy operations",
              "Margin improvement goals",
              "Limited procurement resources",
              "Supply chain risk exposure",
              "Growth-stage companies",
              "Cost reduction initiatives",
              "Operational scaling needs",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Let’s strengthen your procurement performance.
          </h2>

          <p className="mt-5 text-slate-300">
            Whether you need supplier savings, procurement support, or sourcing
            strategy, KK Procurement Solutions is built to help businesses
            improve profitability and supply chain resilience.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
