import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
                KK
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  KK Procurement Solutions
                </h2>
                <p className="text-sm text-slate-400">
                  Procurement • Sourcing • Supplier Strategy
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Helping small and mid-sized businesses reduce supplier costs,
              improve procurement systems, and strengthen supply chain
              performance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

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

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-blue-400"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-slate-300">
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href="mailto:kkprocurementsolutions@yahoo.com"
                  className="hover:text-blue-400"
                >
                  kkprocurementsolutions@yahoo.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a
                  href="tel:4132075197"
                  className="hover:text-blue-400"
                >
                  (413) 207-5197
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} KK Procurement Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
