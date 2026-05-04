import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen items-center justify-center px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center md:p-16">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20">
            <svg
              className="h-10 w-10 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
            Thank you for reaching out.
          </h1>

          {/* Message */}
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Your consultation request has been submitted successfully.
            KK Procurement Solutions will review your information and contact
            you soon to discuss your procurement, supplier, or sourcing needs.
          </p>

          {/* Next Steps */}
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-left">
            <h2 className="text-xl font-semibold">What happens next:</h2>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>Your inquiry will be reviewed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>We will reach out via email or phone</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>
                  Initial consultation will focus on identifying procurement
                  opportunities and business needs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">•</span>
                <span>
                  A custom strategy or service recommendation may follow
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-10 text-slate-400">
            <p>Email: kkprocurementsolutions@yahoo.com</p>
            <p>Phone: (413) 207-5197</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Return Home
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
