export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Privacy Policy
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Your privacy matters.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            KK Procurement Solutions is committed to protecting your personal
            information and maintaining the confidentiality of any business
            information shared through this website.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Effective Date: [Insert Launch Date]
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-12 text-slate-300">
          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Information We Collect
            </h2>

            <p className="mt-4 leading-8">
              We may collect personal and business information that you
              voluntarily provide through contact forms, consultation requests,
              or direct communication, including:
            </p>

            <ul className="mt-4 space-y-2">
              <li>• Name</li>
              <li>• Company name</li>
              <li>• Email address</li>
              <li>• Phone number</li>
              <li>• Supplier or procurement-related business details</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              How We Use Your Information
            </h2>

            <p className="mt-4 leading-8">
              Information collected may be used to:
            </p>

            <ul className="mt-4 space-y-2">
              <li>• Respond to inquiries</li>
              <li>• Provide consulting services</li>
              <li>• Schedule consultations</li>
              <li>• Improve website functionality</li>
              <li>• Maintain internal business records</li>
              <li>• Communicate regarding services or updates</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Confidentiality
            </h2>

            <p className="mt-4 leading-8">
              KK Procurement Solutions understands that supplier, pricing, and
              procurement information can be sensitive. We take reasonable
              precautions to protect business confidentiality and do not sell or
              distribute client information to third parties without consent,
              except where legally required.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Cookies & Website Analytics
            </h2>

            <p className="mt-4 leading-8">
              This website may use cookies or third-party analytics tools to
              improve performance, understand visitor behavior, and optimize the
              user experience.
            </p>

            <p className="mt-4 leading-8">
              These tools may collect non-personal information such as:
            </p>

            <ul className="mt-4 space-y-2">
              <li>• Browser type</li>
              <li>• Device information</li>
              <li>• Pages visited</li>
              <li>• Time spent on site</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Third-Party Services
            </h2>

            <p className="mt-4 leading-8">
              If we utilize scheduling software, payment systems, email
              platforms, or other external tools, those providers may have their
              own privacy policies governing their services.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Data Security
            </h2>

            <p className="mt-4 leading-8">
              We implement reasonable administrative and technical safeguards to
              protect your information, though no digital system can guarantee
              absolute security.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Your Rights
            </h2>

            <p className="mt-4 leading-8">
              You may request updates, corrections, or deletion of your personal
              information by contacting us directly.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Contact Information
            </h2>

            <p className="mt-4 leading-8">
              For questions regarding this Privacy Policy, please contact:
            </p>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p>KK Procurement Solutions</p>
              <p>Email: kkprocurementsolutions@yahoo.com</p>
              <p>Phone: (413) 207-5197</p>
            </div>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Policy Updates
            </h2>

            <p className="mt-4 leading-8">
              KK Procurement Solutions reserves the right to update this Privacy
              Policy as needed to reflect business, legal, or operational
              changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
