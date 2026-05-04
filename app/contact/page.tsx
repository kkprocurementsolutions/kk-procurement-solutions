export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact Us
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Let’s improve your procurement strategy.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are looking to reduce supplier costs, strengthen
            procurement systems, improve supplier performance, or build more
            resilient sourcing strategies, KK Procurement Solutions is ready to
            help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Get In Touch</h2>

            <p className="mt-5 leading-8 text-slate-300">
              Reach out directly to discuss your business needs, supplier
              challenges, or procurement opportunities.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Email
                </p>
                <a
                  href="mailto:kkprocurementsolutions@yahoo.com"
                  className="mt-2 block text-lg text-white hover:text-blue-400"
                >
                  kkprocurementsolutions@yahoo.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Phone
                </p>
                <a
                  href="tel:4132075197"
                  className="mt-2 block text-lg text-white hover:text-blue-400"
                >
                  (413) 207-5197
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Services
                </p>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>• Procurement Savings Audits</li>
                  <li>• Supplier Cost Reduction</li>
                  <li>• Fractional Procurement Leadership</li>
                  <li>• Supplier Diversification</li>
                  <li>• RFQ & Supplier Support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Request a Free Consultation</h2>

            <p className="mt-5 leading-8 text-slate-300">
              Fill out the form below and we will reach out to discuss how KK
              Procurement Solutions can support your business.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Estimated Annual Supplier Spend
                </label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-400 focus:outline-none">
                  <option>Select Range</option>
                  <option>Under $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M - $25M</option>
                  <option>$25M+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  How Can We Help?
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your procurement, supplier, or sourcing needs..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Better procurement starts with better strategy.
          </h2>

          <p className="mt-5 text-slate-300">
            Connect with KK Procurement Solutions to explore cost savings,
            supplier optimization, and stronger sourcing performance.
          </p>

          <a
            href="mailto:kkprocurementsolutions@yahoo.com"
            className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Email Us Directly
          </a>
        </div>
      </section>
    </main>
  );
}
