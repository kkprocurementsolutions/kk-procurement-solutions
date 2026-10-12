import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kk-procurement-solutions.com"),

  title: {
    default:
      "KK Procurement Solutions | Strategic Sourcing & Supplier Cost Reduction",
    template: "%s | KK Procurement Solutions",
  },

  description:
    "Strategic sourcing and procurement support for small and mid-sized businesses. Reduce supplier costs, source components and raw materials, strengthen negotiations, and improve domestic and international supply chains.",

  keywords: [
    "procurement consulting",
    "strategic sourcing",
    "supplier cost reduction",
    "procurement consultant",
    "sourcing consultant",
    "supplier sourcing",
    "supplier negotiation",
    "supplier diversification",
    "fractional procurement",
    "outsourced procurement",
    "direct materials sourcing",
    "component sourcing",
    "international sourcing",
    "procurement services",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kk-procurement-solutions.com",
    siteName: "KK Procurement Solutions",
    title:
      "KK Procurement Solutions | Strategic Sourcing & Supplier Cost Reduction",
    description:
      "Strategic sourcing and procurement support for businesses looking to reduce supplier costs, improve sourcing, and build stronger supply chains.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 text-white">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <Analytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
