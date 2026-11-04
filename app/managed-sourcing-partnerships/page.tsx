import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Sourcing Partnerships | Outsourced Procurement",
  description:
    "Ongoing supplier sourcing, purchasing support, RFQ management, and supplier negotiations for manufacturers and consumer brands. Explore a flexible managed sourcing partnership.",
  alternates: {
    canonical: "/managed-sourcing-partnerships",
  },
};

const capabilities = [
  {
    title: "Supplier Discovery & Qualification",
    description:
      "Identify, evaluate, and compare potential suppliers for raw materials, components, packaging, and finished goods.",
  },
  {
    title: "Competitive RFQs & Negotiations",
    description:
      "Coordinate supplier quotations, evaluate total costs, and support commercial negotiations.",
  },
  {
    title: "Ongoing Supplier Management",
    description:
      "Monitor supplier performance, address sourcing challenges, and support supplier relationship improvements.",
  },
  {
    title: "Cost Reduction & Benchmarking",
    description:
      "Review supplier pricing and purchasing opportunities to identify potential improvements in cost and commercial terms.",
  },
  {
    title: "Domestic & International Sourcing",
    description:
      "Evaluate supply options across domestic and international markets based on cost, quality, lead time, and risk.",
  },
  {
    title: "Procurement Planning & Support",
    description:
      "Provide recurring sourcing assistance aligned with purchasing priorities, upcoming projects, and supplier requirements.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discuss Your Needs",
    description:
      "We learn about your business, supplier categories, purchasing volumes, and current procurement challenges.",
  },
  {
    number: "02",
    title: "Define the Partnership",
    description:
      "We agree on the sourcing categories, responsibilities, service expectations, and commercial structure.",
  },
  {
    number: "03",
    title: "Execute Sourcing Priorities",
    description:
      "We coordinate agreed sourcing activities, supplier evaluations, negotiations, and procurement support.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "We review progress, supplier performance, and opportunities to improve purchasing outcomes.",
  },
];

export default function ManagedSourcingPartnershipsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Managed Sourcing Partnerships
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Outsource Your Sourcing. Strengthen Your Purchasing.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Get ongoing procurement and supplier sourcing support without
            building a full-time sourcing department. KK Procurement Solutions
            works with manufacturers and consumer brands to manage agreed
            sourcing priorities, evaluate suppliers, and pursue better
            purchasing outcomes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-500 px-7 py-3 text-center font-semibold transition hover:bg-blue-400"
            >
              Discuss a Sourcing Partnership
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-slate-700 px-7 py-3 text-center font-semibold transition hover:bg-slate-900"
            >
              Explore Project-Based Services
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Flexible scope. Customized proposals. Project-based and ongoing
            engagement options.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Who It's For
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-4xl">
            Procurement support for companies that need expertise,
            not another full-time position.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Many growing businesses depend heavily on suppliers but lack the
            resources for dedicated strategic sourcing. A managed partnership
            provides a structured way to access procurement support as
            purchasing needs evolve.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Small and mid-sized manufacturers",
              "Consumer product and lifestyle brands",
              "Importers, distributors, and growing product businesses",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Partnership Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            What can we manage for your business?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <h3 className="text-xl font-semibold">
                  {capability.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Flexible Engagements
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              A sourcing partnership built around your purchasing needs.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              Every business has different sourcing categories, supplier
              relationships, purchasing volumes, and internal capabilities.
              We develop a tailored scope of services rather than offering
              a one-size-fits-all procurement package.
            </p>
            <p className="mt-5 leading-8 text-slate-300">
              Engagements can be structured around recurring support,
              defined sourcing responsibilities, or an agreed combination
              of ongoing services and individual projects.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8">
            <h3 className="text-xl font-bold">
              What We Handle for Your Business
            </h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              {[
                "Supplier sourcing and qualification",
                "Competitive RFQs and supplier comparisons",
                "Supplier pricing negotiations and cost reduction",
                "Domestic and international sourcing strategies",
                "Ongoing supplier performance and relationship management",
                "Purchasing strategy and procurement support",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            How a managed sourcing partnership works.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <span className="text-sm font-bold text-blue-400">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Let's Talk Sourcing
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Ready to explore an ongoing sourcing partnership?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Tell us about your purchasing categories, current supplier
            challenges, and the support you're looking for. We'll discuss
            whether a managed sourcing partnership fits your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-7 py-3 font-semibold transition hover:bg-blue-400"
          >
            Discuss Your Sourcing Needs
          </Link>
        </div>
      </section>
    </main>
  );
}
