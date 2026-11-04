import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Procurement & Strategic Sourcing Services",
  description: "Explore supplier sourcing, procurement cost reduction, RFQ management, supplier diversification, and strategic sourcing services.",
  alternates: { canonical: "/services" },
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
