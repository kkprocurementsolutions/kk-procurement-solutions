import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Strategic sourcing and procurement support for manufacturers, consumer product companies, importers, distributors, and growing businesses.",
  alternates: { canonical: "/industries" },
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
