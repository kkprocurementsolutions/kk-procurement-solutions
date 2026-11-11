import type { Metadata } from "next";
import Link from "next/link";
import LandedCostCalculator from "@/components/LandedCostCalculator";

export const metadata: Metadata = {
  title: "Landed Cost Calculator | Compare Overseas Suppliers",
  description:
    "Free landed cost calculator to compare factory prices, freight, insurance, import duties, and fees. Calculate total landed cost and cost per unit.",
  alternates: {
    canonical: "/tools/landed-cost-calculator",
  },
};

export default function LandedCostCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Free Procurement Tools
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          Landed Cost Calculator
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Compare the true cost of purchasing from two suppliers.
          Evaluate factory pricing, international freight, duties,
          insurance, customs fees, and domestic transportation
          to understand your total landed cost.
        </p>

        <div className="mt-10 rounded-xl border border-blue-900 bg-blue-950/30 p-5">
          <p className="text-sm leading-7 text-slate-300">
            <strong className="text-white">How to use:</strong>{" "}
            Enter your supplier pricing and cost assumptions
            below. All amounts are in USD. Duty and tariff
            percentages are entered manually and are not
            automatically verified against current customs rules.
          </p>
        </div>

        <div className="mt-10">
          <LandedCostCalculator />
        </div>

        <section className="mt-20 max-w-4xl">
          <h2 className="text-3xl font-bold">
            How Is Landed Cost Calculated?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Landed cost is the total cost of acquiring and
            transporting a product to its destination, including
            the purchase price and relevant logistics and
            import-related charges.
          </p>

          <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-6">
            <p className="font-semibold text-white">
              Total Landed Cost =
            </p>

            <p className="mt-3 leading-8 text-blue-300">
              Factory Order Value + International Freight +
              Insurance + Estimated Duties + Customs Fees +
              Domestic Freight + Other Charges
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Estimated duties use the duty percentage and
              customs value you enter. If customs value is left
              blank, the calculator defaults to factory order
              value. Actual customs valuation and applicable
              duties must be verified independently.
            </p>
          </div>
        </section>

        <section className="mt-16 max-w-4xl">
          <h2 className="text-3xl font-bold">
            Why Compare Total Landed Costs?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The supplier offering the lowest factory price is
            not always the most economical option. International
            freight, tariffs, customs handling, and domestic
            logistics can materially affect the final cost
            of sourcing products and components.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            A structured comparison can help manufacturers
            and importers evaluate alternative suppliers,
            identify potential savings, and make better
            sourcing decisions.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            For more information, read our guide to{" "}
            <Link
              href="/blog/domestic-vs-overseas-sourcing-total-landed-cost"
              className="text-blue-400 underline hover:text-blue-300"
            >
              domestic vs. overseas sourcing
            </Link>
            .
          </p>
        </section>

        <section className="mt-16 max-w-4xl rounded-3xl border border-blue-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Strategic Sourcing Support
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Need Help Evaluating Your Suppliers?
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            KK Procurement Solutions helps manufacturers
            and product importers evaluate supplier pricing,
            compare domestic and international sourcing
            options, manage RFQs, and identify procurement
            cost-reduction opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Request a Sourcing Assessment
          </Link>
        </section>

        <p className="mt-10 max-w-4xl text-xs leading-6 text-slate-500">
          Disclaimer: This calculator provides illustrative
          estimates for sourcing comparisons. Actual duties,
          taxes, customs valuation, and fees depend on product
          classification, country of origin, trade measures,
          and applicable regulations. Consult a qualified
          customs broker or trade professional before making
          import decisions.
        </p>
      </div>
    </div>
  );
}
