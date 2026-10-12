import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Procurement Resources",
  description:
    "Practical procurement insights on strategic sourcing, supplier cost reduction, negotiations, direct materials, international sourcing, and supply chain strategy.",
  alternates: {
    canonical: "/blog",
  },
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
};

const postsQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  featuredImage
}`;

const categoryLabels: Record<string, string> = {
  "supplier-cost-reduction": "Supplier Cost Reduction",
  "strategic-sourcing": "Strategic Sourcing",
  "supplier-negotiation": "Supplier Negotiation",
  "international-sourcing": "International Sourcing",
  "direct-materials-components": "Direct Materials & Components",
  "fractional-procurement": "Fractional Procurement",
};

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(postsQuery);

  return (
    <main>
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Procurement Resources
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Practical Strategies for Smarter Sourcing & Procurement
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Actionable insights for businesses looking to reduce supplier
            costs, improve sourcing decisions, strengthen negotiations, and
            build more resilient supply chains.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10">
              <h2 className="text-2xl font-semibold text-slate-900">
                Procurement resources are coming soon.
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                We&apos;re building practical resources covering supplier cost
                reduction, strategic sourcing, negotiations, direct materials,
                and procurement strategy.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {post.featuredImage?.asset && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={urlFor(post.featuredImage)
                            .width(900)
                            .height(506)
                            .url()}
                          alt={
                            post.featuredImage.alt ||
                            `${post.title} procurement article`
                          }
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  )}

                  <div className="p-6">
                    {post.category && (
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {categoryLabels[post.category] || post.category}
                      </p>
                    )}

                    <h2 className="text-xl font-bold text-slate-900">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition hover:text-slate-600"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <time
                        dateTime={post.publishedAt}
                        className="text-sm text-slate-500"
                      >
                        {new Intl.DateTimeFormat("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }).format(new Date(post.publishedAt))}
                      </time>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-slate-900"
                      >
                        Read article →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Think Your Supplier Costs Could Be Lower?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            KK Procurement Solutions can review your current sourcing approach
            and identify potential opportunities to reduce costs, strengthen
            supplier negotiations, and improve your supply strategy.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Get a Free Supplier Savings Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}