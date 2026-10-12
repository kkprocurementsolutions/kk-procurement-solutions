import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how KK Procurement Solutions collects, uses, and protects information submitted through our website and how website analytics technologies are used.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

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

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            KK Procurement Solutions is committed to protecting personal
            information and maintaining the confidentiality of business
            information shared through this website.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Effective Date: October 12, 2026
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-12 text-slate-300">
          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Information We Collect
            </h2>

            <p className="mt-4 leading-8">
              We may collect personal and business information that you
              voluntarily provide through contact forms, consultation requests,
              email, phone, or other direct communications. This information may
              include:
            </p>

            <ul className="mt-4 space-y-2">
              <li>• Name</li>
              <li>• Company name</li>
              <li>• Email address</li>
              <li>• Phone number</li>
              <li>• Supplier or procurement-related business information</li>
              <li>• Information included in messages or consultation requests</li>
            </ul>

            <p className="mt-4 leading-8">
              We may also automatically collect certain technical and usage
              information when you visit the website, including information
              about your device, browser, pages viewed, referral source, and
              interactions with the website.
            </p>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              How We Use Your Information
            </h2>

            <p className="mt-4 leading-8">
              Information collected through this website may be used to:
            </p>

            <ul className="mt-4 space-y-2">
              <li>• Respond to inquiries and consultation requests</li>
              <li>• Provide procurement and sourcing consulting services</li>
              <li>• Schedule and manage consultations</li>
              <li>• Communicate regarding our services</li>
              <li>• Maintain appropriate business records</li>
              <li>• Understand how visitors use our website</li>
              <li>• Improve website functionality and user experience</li>
              <li>• Measure the effectiveness of website content</li>
              <li>• Protect the website from misuse or security threats</li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Business Information & Confidentiality
            </h2>

            <p className="mt-4 leading-8">
              KK Procurement Solutions understands that supplier, pricing,
              sourcing, procurement, and supply chain information can be
              commercially sensitive. We take reasonable precautions to protect
              information shared with us and do not sell client or prospective
              client business information.
            </p>

            <p className="mt-4 leading-8">
              Information may be shared with service providers when reasonably
              necessary to operate the website or provide services, or when
              disclosure is required by law.
            </p>
          </div>

          {/* Analytics */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Website Analytics
            </h2>

            <p className="mt-4 leading-8">
              We use website analytics services to understand how visitors find
              and interact with KK Procurement Solutions. These services help us
              evaluate website traffic, improve content, identify usability
              issues, and understand which pages are most useful to visitors.
            </p>

            <p className="mt-4 leading-8">
              Our website currently uses Vercel Web Analytics and Microsoft
              Clarity.
            </p>

            <h3 className="mt-7 text-lg font-semibold text-white">
              Vercel Web Analytics
            </h3>

            <p className="mt-3 leading-8">
              Vercel Web Analytics is used to help us understand website
              traffic and usage, such as page views and how visitors reach and
              navigate the website.
            </p>

            <h3 className="mt-7 text-lg font-semibold text-white">
              Microsoft Clarity
            </h3>

            <p className="mt-3 leading-8">
              We use Microsoft Clarity to better understand how visitors
              interact with our website. Clarity may collect website usage and
              interaction data through technologies such as cookies and other
              tracking technologies.
            </p>

            <p className="mt-4 leading-8">
              Clarity may provide tools such as session recordings, heatmaps,
              click information, scrolling behavior, navigation patterns, and
              other website interaction information. We use this information to
              identify usability issues and improve the website experience.
            </p>

            <p className="mt-4 leading-8">
              Microsoft processes data collected through Clarity in accordance
              with its own privacy practices and applicable terms.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Cookies & Similar Technologies
            </h2>

            <p className="mt-4 leading-8">
              This website and certain service providers may use cookies or
              similar technologies for analytics, website functionality,
              security, and understanding visitor interactions.
            </p>

            <p className="mt-4 leading-8">
              Depending on your browser and location, you may be able to limit
              or block cookies through your browser settings. Disabling certain
              technologies may affect some website functionality or the
              availability of analytics information.
            </p>
          </div>

          {/* Third Party Services */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Third-Party Service Providers
            </h2>

            <p className="mt-4 leading-8">
              We may use third-party providers to operate, host, analyze, secure,
              or support this website and our business. These providers may
              process limited information as necessary to provide their
              services.
            </p>

            <p className="mt-4 leading-8">
              Third-party providers maintain their own privacy practices and
              terms governing their processing of information.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Data Security
            </h2>

            <p className="mt-4 leading-8">
              We use reasonable administrative and technical safeguards
              designed to protect information under our control. However, no
              website, electronic transmission, or storage system can guarantee
              absolute security.
            </p>
          </div>

          {/* Retention */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Data Retention
            </h2>

            <p className="mt-4 leading-8">
              We retain personal and business information for as long as
              reasonably necessary to respond to inquiries, provide services,
              maintain appropriate business records, comply with legal
              obligations, and protect legitimate business interests.
            </p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Your Privacy Choices
            </h2>

            <p className="mt-4 leading-8">
              Depending on where you reside, you may have certain rights
              regarding personal information. You may contact us to request
              access to, correction of, or deletion of personal information we
              maintain about you, subject to applicable legal requirements and
              exceptions.
            </p>

            <p className="mt-4 leading-8">
              You may also use your browser settings and available privacy
              controls to manage cookies and certain tracking technologies.
            </p>
          </div>

          {/* Children */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Children's Privacy
            </h2>

            <p className="mt-4 leading-8">
              KK Procurement Solutions provides business-to-business services
              and this website is not intended for children. We do not
              knowingly collect personal information from children through this
              website.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Contact Information
            </h2>

            <p className="mt-4 leading-8">
              For questions regarding this Privacy Policy or information you
              have provided to KK Procurement Solutions, please contact:
            </p>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="font-semibold text-white">
                KK Procurement Solutions
              </p>

              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:sourcing@kk-procurement-solutions.com"
                  className="text-blue-400 transition hover:text-blue-300"
                >
                  sourcing@kk-procurement-solutions.com
                </a>
              </p>

              <p className="mt-1">
                Phone:{" "}
                <a
                  href="tel:+14132075197"
                  className="text-blue-400 transition hover:text-blue-300"
                >
                  (413) 207-5197
                </a>
              </p>
            </div>
          </div>

          {/* Updates */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-4 leading-8">
              KK Procurement Solutions may update this Privacy Policy from time
              to time to reflect changes to our website, services, technology,
              analytics providers, legal requirements, or business practices.
              The effective date shown at the top of this page will be updated
              when appropriate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
