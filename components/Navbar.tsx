"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  {
    name: "Outsourced Procurement",
    href: "/managed-sourcing-partnerships",
  },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 md:px-8 lg:px-12">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
            KK
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white">
              KK Procurement Solutions
            </p>
            <p className="hidden text-xs text-slate-400 sm:block">
              Strategic Sourcing • Supplier Cost Reduction
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`whitespace-nowrap text-sm font-medium transition ${
                isActive(link.href)
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="whitespace-nowrap rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Discuss Your Sourcing Needs
          </Link>
        </nav>

        {/* Mobile / tablet menu button */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700 lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-800 bg-slate-950 lg:hidden"
        >
          <div className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`border-b border-slate-800 py-3.5 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-5 rounded-xl bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discuss Your Sourcing Needs
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
