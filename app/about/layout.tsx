import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About KK Procurement Solutions",
  description: "Learn about KK Procurement Solutions and our approach to supplier sourcing, procurement strategy, and cost reduction.",
  alternates: { canonical: "/about" },
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
