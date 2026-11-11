import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Procurement Tools & Sourcing Calculators",
  description:
    "Practical procurement tools for manufacturers and importers. Compare supplier landed costs, evaluate sourcing decisions, and identify potential cost savings.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Procurement Resources
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Tools
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Practical sourcing and procurement tools to help
            manufacturers, importers, and growing businesses
            evaluate supplier costs and make informed
            purchasing decisions.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href="/tools/landed-cost-calculator"
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/15 text-2xl font-bold text-blue-400">
                $
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Supplier Cost Analysis
              </p>

              <h2 className="mt-3 text-2xl font-bold group-hover:text-blue-400">
                Landed Cost Calculator
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Compare two suppliers using factory pricing,
                freight, import duties, customs fees, and
                transportation costs. Calculate total landed
                cost, cost per unit, and potential savings.
              </p>

              <span className="mt-7 inline-block font-semibold text-blue-400">
                Open Calculator →
              </span>
            </Link>
          </div>

          <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
            <h2 className="text-3xl font-bold">
              Need help evaluating sourcing opportunities?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              KK Procurement Solutions provides procurement
              consulting, supplier sourcing, RFQ management,
              cost benchmarking, and supplier diversification
              support for businesses looking to strengthen
              their purchasing strategy.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Discuss Your Sourcing Needs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
