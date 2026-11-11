"use client";

import { useMemo, useState } from "react";

type Supplier = {
  name: string;
  country: string;
  unitPrice: string;
  quantity: string;
  freight: string;
  insurance: string;
  dutyRate: string;
  customsValue: string;
  customsFees: string;
  domesticFreight: string;
  otherFees: string;
};

const createSupplier = (name: string, country: string): Supplier => ({
  name,
  country,
  unitPrice: "",
  quantity: "1000",
  freight: "",
  insurance: "",
  dutyRate: "",
  customsValue: "",
  customsFees: "",
  domesticFreight: "",
  otherFees: "",
});

const fields: {
  key: keyof Supplier;
  label: string;
  hint?: string;
}[] = [
  { key: "name", label: "Supplier Name" },
  { key: "country", label: "Country of Origin" },
  { key: "unitPrice", label: "Factory Unit Price ($)" },
  { key: "quantity", label: "Order Quantity (Units)" },
  { key: "freight", label: "International Freight ($)" },
  { key: "insurance", label: "Insurance ($)" },
  {
    key: "dutyRate",
    label: "Estimated Duty / Tariff Rate (%)",
    hint: "Enter your verified effective rate.",
  },
  {
    key: "customsValue",
    label: "Customs Value ($) — Optional",
    hint: "Defaults to factory order value.",
  },
  { key: "customsFees", label: "Customs / Broker Fees ($)" },
  { key: "domesticFreight", label: "Domestic Transportation ($)" },
  { key: "otherFees", label: "Other Charges ($)" },
];

const numericKeys = new Set<keyof Supplier>(
  fields.slice(2).map((field) => field.key)
);

const numberValue = (value: string) =>
  value.trim() === "" ? 0 : Number(value);

const currency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

function calculate(supplier: Supplier) {
  const quantity = numberValue(supplier.quantity);
  const factoryCost = numberValue(supplier.unitPrice) * quantity;

  const customsValue =
    supplier.customsValue.trim() === ""
      ? factoryCost
      : numberValue(supplier.customsValue);

  const duties =
    customsValue * (numberValue(supplier.dutyRate) / 100);

  const freight = numberValue(supplier.freight);
  const insurance = numberValue(supplier.insurance);
  const customsFees = numberValue(supplier.customsFees);
  const domesticFreight = numberValue(supplier.domesticFreight);
  const otherFees = numberValue(supplier.otherFees);

  const total =
    factoryCost +
    duties +
    freight +
    insurance +
    customsFees +
    domesticFreight +
    otherFees;

  return {
    quantity,
    factoryCost,
    duties,
    freight,
    insurance,
    customsFees,
    domesticFreight,
    otherFees,
    total,
    perUnit: quantity > 0 ? total / quantity : 0,
  };
}

function isValid(supplier: Supplier) {
  const numericValid = [...numericKeys].every((key) => {
    const value = supplier[key];

    return (
      value.trim() === "" ||
      (Number.isFinite(Number(value)) && Number(value) >= 0)
    );
  });

  return (
    numericValid &&
    supplier.unitPrice.trim() !== "" &&
    Number.isInteger(numberValue(supplier.quantity)) &&
    numberValue(supplier.quantity) > 0
  );
}

export default function LandedCostCalculator() {
  const [supplierA, setSupplierA] = useState<Supplier>(
    createSupplier("Supplier A", "China")
  );

  const [supplierB, setSupplierB] = useState<Supplier>(
    createSupplier("Supplier B", "Vietnam")
  );

  const [annualUnits, setAnnualUnits] = useState("");

  const resultA = useMemo(
    () => calculate(supplierA),
    [supplierA]
  );

  const resultB = useMemo(
    () => calculate(supplierB),
    [supplierB]
  );

  const valid = isValid(supplierA) && isValid(supplierB);

  const comparable =
    valid && resultA.quantity === resultB.quantity;

  const difference = Math.abs(resultA.total - resultB.total);

  const differencePerUnit = Math.abs(
    resultA.perUnit - resultB.perUnit
  );

  const percentageDifference =
    comparable && Math.max(resultA.total, resultB.total) > 0
      ? (difference / Math.max(resultA.total, resultB.total)) * 100
      : 0;

  const cheaper =
    resultA.total === resultB.total
      ? "Both suppliers have equal costs"
      : resultA.total < resultB.total
        ? supplierA.name || "Supplier A"
        : supplierB.name || "Supplier B";

  const annualValid =
    annualUnits.trim() === "" ||
    (Number.isInteger(numberValue(annualUnits)) &&
      numberValue(annualUnits) >= 0);

  const annualDifference =
    differencePerUnit * numberValue(annualUnits);

  function renderSupplier(
    supplier: Supplier,
    update: (supplier: Supplier) => void
  ) {
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          {supplier.name || "Supplier"}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <label
              key={field.key}
              className="block text-sm font-medium text-slate-200"
            >
              {field.label}

              <input
                type={numericKeys.has(field.key) ? "number" : "text"}
                min={numericKeys.has(field.key) ? 0 : undefined}
                step={field.key === "quantity" ? 1 : "any"}
                value={supplier[field.key]}
                onChange={(event) =>
                  update({
                    ...supplier,
                    [field.key]: event.target.value,
                  })
                }
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white outline-none focus:border-blue-400"
              />

              {field.hint && (
                <span className="mt-1 block text-xs font-normal text-slate-400">
                  {field.hint}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
    );
  }

  function renderResults(
    supplier: Supplier,
    result: ReturnType<typeof calculate>
  ) {
    const breakdown = [
      ["Factory Cost", result.factoryCost],
      ["International Freight", result.freight],
      ["Insurance", result.insurance],
      ["Estimated Duties", result.duties],
      ["Customs / Broker Fees", result.customsFees],
      ["Domestic Transportation", result.domesticFreight],
      ["Other Charges", result.otherFees],
    ] as const;

    return (
      <div className="rounded-xl border border-slate-700 bg-slate-950 p-6">
        <h3 className="text-xl font-bold text-white">
          {supplier.name || "Supplier"}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {supplier.country}
        </p>

        <p className="mt-6 text-sm text-slate-300">
          Landed Cost Per Unit
        </p>

        <p className="mt-1 text-3xl font-bold text-blue-400">
          {currency(result.perUnit)}
        </p>

        <p className="mt-5 text-sm text-slate-300">
          Total Landed Cost
        </p>

        <p className="text-2xl font-bold text-white">
          {currency(result.total)}
        </p>

        <div className="mt-6 space-y-3 border-t border-slate-700 pt-5">
          {breakdown.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between gap-4 text-sm"
            >
              <span className="text-slate-400">{label}</span>
              <span className="text-right text-white">
                {currency(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        {renderSupplier(supplierA, setSupplierA)}
        {renderSupplier(supplierB, setSupplierB)}
      </div>

      {!valid && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-amber-700 bg-amber-950/40 p-4 text-amber-200"
        >
          Enter a factory unit price and positive whole-number
          quantity for each supplier. Numeric costs must be
          non-negative.
        </p>
      )}

      {valid && !comparable && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-amber-700 bg-amber-950/40 p-4 text-amber-200"
        >
          The order quantities differ. Use matching quantities
          to compare total order costs fairly. Individual
          landed costs per unit are shown below.
        </p>
      )}

      {valid && (
        <section
          aria-live="polite"
          className="mt-10 rounded-2xl border border-blue-800 bg-slate-900 p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold text-white">
            Landed Cost Comparison
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {renderResults(supplierA, resultA)}
            {renderResults(supplierB, resultB)}
          </div>

          {comparable && (
            <div className="mt-8 rounded-xl border border-blue-800 bg-blue-950/40 p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-blue-300">
                Lower Cost Supplier
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {cheaper}
              </h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-300">
                    Difference Per Order
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {currency(difference)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-300">
                    Difference Per Unit
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {currency(differencePerUnit)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-300">
                    Difference vs. Higher Cost
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {percentageDifference.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-700 pt-6">
                <label className="block max-w-sm text-sm text-slate-200">
                  Annual Purchase Volume (Units)
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={annualUnits}
                    onChange={(event) =>
                      setAnnualUnits(event.target.value)
                    }
                    placeholder="Example: 50000"
                    className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white"
                  />
                </label>

                {!annualValid && (
                  <p role="alert" className="mt-3 text-amber-300">
                    Enter a non-negative whole number.
                  </p>
                )}

                {annualUnits.trim() !== "" && annualValid && (
                  <div className="mt-5">
                    <p className="text-sm text-slate-300">
                      Illustrative Annual Cost Difference
                    </p>
                    <p className="mt-2 text-3xl font-bold text-blue-400">
                      {currency(annualDifference)}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      Assumes the same per-unit landed cost
                      across the entered annual volume.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
