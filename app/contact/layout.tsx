import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact KK Procurement Solutions",
  description: "Discuss your sourcing needs, supplier challenges, one-time sourcing projects, or ongoing outsourced procurement support.",
  alternates: { canonical: "/contact" },
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
