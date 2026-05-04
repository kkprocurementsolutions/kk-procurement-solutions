export default function ServicesPage() {
  const services = [
    {
      title: "Procurement Savings Audit",
      description:
        "A comprehensive review of supplier spend, pricing structures, contracts, and procurement processes to uncover cost-saving opportunities, supplier inefficiencies, and margin improvement strategies.",
      bullets: [
        "Supplier spend analysis",
        "Cost benchmarking",
        "Contract review",
        "Savings opportunity roadmap",
        "Risk identification",
      ],
    },
    {
      title: "Supplier Cost Reduction",
      description:
        "Support businesses in reducing direct and indirect procurement costs through supplier negotiations, bid events, market benchmarking, and sourcing optimization.",
      bullets: [
        "RFQ management",
        "Supplier negotiations",
        "Cost modeling",
        "Alternative sourcing strategies",
        "Working capital improvements",
      ],
    },
    {
      title: "Fractional Procurement Leadership",
      description:
        "Enterprise-level procurement leadership without the overhead of a full-time hire. Ideal for businesses needing strategic procurement guidance on a part-time or project basis.",
      bullets: [
        "Strategic sourcing leadership",
        "Category management",
        "Supplier performance management",
        "Process development",
        "Procurement advisory",
      ],
    },
    {
      title: "Supplier Diversification & Risk Mitigation",
      description:
        "Reduce dependence on single-source suppliers, improve supply continuity, and strengthen resilience through strategic supplier diversification.",
      bullets: [
        "Dual sourcing strategies",
        "Tariff mitigation",
        "Domestic vs overseas sourcing",
        "Backup supplier development",
        "Supply chain risk analysis",
      ],
    },
    {
      title: "RFQ & Supplier Selection Support",
      description:
        "Design, manage, and evaluate competitive sourcing events to secure stronger supplier pricing, service, and long-term partnerships.",
      bullets: [
        "RFQ creation",
        "Bid comparisons",
        "Supplier scorecards",
        "Commercial evaluations",
        "Negotiation strategy",
      ],
    },
    {
      title: "Procurement Systems & Process Optimization",
      description:
        "Improve procurement workflows, supplier management systems, and sourcing structures for long-term scalability.",
      bullets: [
        "Procurement process audits",
        "KPI development",
        "Supplier scorecards",
        "Inventory strategy",
        "Operational efficiency improvements",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Practical procurement solutions designed to reduce costs and strengthen supply chains.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            KK Procurement Solutions helps businesses uncover hidden supplier
            savings, optimize procurement processes, improve supplier
            performance, and build stronger sourcing strategies tailored to
            growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="text-2xl font-bold">{service.title}</h2>

              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
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

      {/* Process Section */}
      <section className="border-y border-slate-800 bg-slate-900/50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            A structured process focused on measurable business impact.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Assessment",
                text: "Review current suppliers, contracts, spend, and procurement structure.",
              },
              {
                step: "02",
                title: "Opportunity Analysis",
                text: "Identify cost savings, supplier risks, and process inefficiencies.",
              },
              {
                step: "03",
                title: "Strategy Development",
                text: "Build sourcing, negotiation, and supplier optimization plans.",
              },
              {
                step: "04",
                title: "Execution Support",
                text: "Support implementation, negotiations, RFQs, and supplier transitions.",
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-4xl font-bold text-blue-400">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Industries We Support
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Helping businesses across multiple sectors improve procurement performance.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Consumer Products",
              "Packaging",
              "Manufacturing",
              "E-Commerce",
              "Importers",
              "Industrial Supply",
              "Family-Owned Businesses",
              "Growth-Stage Companies",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to strengthen your procurement strategy?
          </h2>

          <p className="mt-5 text-slate-300">
            Let’s identify where your business can reduce supplier costs,
            improve margins, and build a stronger supply chain.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
