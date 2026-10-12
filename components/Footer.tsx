import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
                KK
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  KK Procurement Solutions
                </h2>

                <p className="text-sm text-slate-400">
                  Strategic Sourcing • Supplier Cost Reduction
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Helping small and mid-sized product companies reduce supplier
              costs, source components and raw materials, strengthen supplier
              negotiations, and build more resilient supply chains.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Request a Free Supplier Savings Assessment →
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/industries" className="hover:text-blue-400">
                  Industries
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  Procurement Resources
                </Link>
              </li>

              <li>
                <Link
                  href="/blog?topic=supplier-cost-reduction"
                  className="hover:text-blue-400"
                >
                  Supplier Cost Reduction
                </Link>
              </li>

              <li>
                <Link
                  href="/blog?topic=strategic-sourcing"
                  className="hover:text-blue-400"
                >
                  Strategic Sourcing
                </Link>
              </li>

              <li>
                <Link
                  href="/blog?topic=procurement-strategy"
                  className="hover:text-blue-400"
                >
                  Procurement Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-slate-500">Email</p>
                <a
                  href="mailto:sourcing@kk-procurement-solutions.com"
                  className="break-words transition hover:text-blue-400"
                >
                  sourcing@kk-procurement-solutions.com
                </a>
              </div>

              <div>
                <p className="text-slate-500">Phone</p>
                <a
                  href="tel:+14132075197"
                  className="transition hover:text-blue-400"
                >
                  (413) 207-5197
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} KK Procurement Solutions. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
