"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Submission failed.");
      }

      router.push("/contact/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const fieldStyle =
    "w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 pb-12 pt-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact KK Procurement Solutions
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Let's discuss your sourcing needs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you need a new supplier, lower purchasing costs,
            competitive quotations, or ongoing procurement support,
            tell us about your business and the challenge you're facing.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
              <h2 className="text-xl font-bold">Get in touch</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Start with a conversation about your suppliers,
                purchasing requirements, and business objectives.
              </p>

              <p className="mt-7 text-sm font-semibold text-blue-400">
                Email
              </p>
              <a
                href="mailto:sourcing@kk-procurement-solutions.com"
                className="mt-2 block break-words text-sm hover:text-blue-400"
              >
                sourcing@kk-procurement-solutions.com
              </a>

              <p className="mt-6 text-sm font-semibold text-blue-400">
                Phone
              </p>
              <a
                href="tel:+14132075197"
                className="mt-2 block hover:text-blue-400"
              >
                (413) 207-5197
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
              <h2 className="text-xl font-bold">How we can help</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>• Supplier discovery and qualification</li>
                <li>• Competitive RFQs and supplier selection</li>
                <li>• Supplier cost reduction</li>
                <li>• Domestic and international sourcing</li>
                <li>• Managed sourcing partnerships</li>
                <li>• Fractional procurement support</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 md:p-10 lg:col-span-2">
            <h2 className="text-2xl font-bold">
              Request a sourcing consultation
            </h2>
            <p className="mt-3 text-slate-300">
              Share a few details and we'll review your inquiry.
              Engagements are scoped and quoted individually.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div
                className="absolute -left-[9999px]"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    maxLength={200}
                    autoComplete="name"
                    className={fieldStyle}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    maxLength={200}
                    className={fieldStyle}
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Business Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    className={fieldStyle}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={200}
                    autoComplete="tel"
                    className={fieldStyle}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="engagement" className="mb-2 block text-sm font-medium">
                  What type of support do you need?
                </label>
                <select
                  id="engagement"
                  name="engagement"
                  defaultValue=""
                  className={fieldStyle}
                >
                  <option value="">Select an option</option>
                  <option value="One-Time Sourcing Project">
                    One-Time Sourcing Project
                  </option>
                  <option value="Managed Sourcing Partnership">
                    Ongoing Managed Sourcing Partnership
                  </option>
                  <option value="Procurement Advisory">
                    Procurement Advisory / Cost Reduction
                  </option>
                  <option value="Not Sure">
                    Not Sure Yet
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="spend" className="mb-2 block text-sm font-medium">
                  Estimated Annual Supplier Spend (Optional)
                </label>
                <select
                  id="spend"
                  name="spend"
                  defaultValue=""
                  className={fieldStyle}
                >
                  <option value="">Select a range</option>
                  <option>Under $250K</option>
                  <option>$250K - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M - $25M</option>
                  <option>$25M+</option>
                  <option>Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Tell us about your sourcing needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  maxLength={3000}
                  className={fieldStyle}
                  placeholder="What products or materials do you purchase? What challenges are you trying to solve?"
                />
              </div>

              {error && (
                <p role="alert" className="rounded-xl border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending Your Inquiry..." : "Submit Sourcing Inquiry"}
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Please don't include confidential supplier pricing,
                proprietary drawings, or sensitive business information
                in this initial inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
