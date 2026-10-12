import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  seoTitle?: string;
  metaDescription?: string;
  targetKeyword?: string;
  relatedService?: string;
  ctaTitle?: string;
  ctaText?: string;
  featuredImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  body: any[];
  relatedArticles?: {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
  }[];
};

const postQuery = `*[
  _type == "post" &&
  slug.current == $slug
][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  updatedAt,
  author,
  seoTitle,
  metaDescription,
  targetKeyword,
  relatedService,
  ctaTitle,
  ctaText,
  featuredImage,
  body,
  relatedArticles[]->{
    _id,
    title,
    "slug": slug.current,
    excerpt
  }
}`;

const categoryLabels: Record<string, string> = {
  "supplier-cost-reduction": "Supplier Cost Reduction",
  "strategic-sourcing": "Strategic Sourcing",
  "supplier-negotiation": "Supplier Negotiation",
  "international-sourcing": "International Sourcing",
  "direct-materials-components": "Direct Materials & Components",
  "fractional-procurement": "Fractional Procurement",
};

const serviceLinks: Record<string, string> = {
  "supplier-cost-reduction": "/services",
  "strategic-sourcing": "/services",
  "supplier-diversification": "/services",
  "fractional-procurement": "/services",
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 text-3xl font-bold tracking-tight text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-9 text-2xl font-bold text-slate-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-7 text-xl font-semibold text-slate-900">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-8 text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-slate-900 pl-6 text-xl italic leading-8 text-slate-700">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const external =
        href.startsWith("http://") || href.startsWith("https://");

      return (
        <a
          href={href}
          target={value?.blank ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-medium underline decoration-slate-400 underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || ""}
              fill
              className="object-cover"
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

async function getPost(slug: string) {
  return client.fetch<Post | null>(postQuery, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const canonical = `/blog/${post.slug}`;

  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author || "KK Procurement Solutions"],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.featuredImage?.alt || post.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const categoryName = post.category
    ? categoryLabels[post.category] || post.category
    : "Procurement";

  const articleUrl = `https://kk-procurement-solutions.com/blog/${post.slug}`;

  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: "KK Procurement Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "KK Procurement Solutions",
      url: "https://kk-procurement-solutions.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <header className="bg-slate-950 px-6 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-300 hover:text-white"
            >
              ← Procurement Resources
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              {categoryName}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
              <span>By {post.author || "KK Procurement Solutions"}</span>

              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(post.publishedAt))}
              </time>

              {post.updatedAt && (
                <span>
                  Updated{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.updatedAt))}
                </span>
              )}
            </div>
          </div>
        </header>

        {post.featuredImage?.asset && (
          <div className="px-6">
            <div className="relative mx-auto -mt-1 aspect-[16/9] max-w-5xl overflow-hidden rounded-b-2xl">
              <Image
                src={urlFor(post.featuredImage)
                  .width(1400)
                  .height(788)
                  .url()}
                alt={post.featuredImage.alt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="px-6 py-14">
          <div className="mx-auto max-w-3xl">
            <PortableText value={post.body} components={components} />

            <aside className="mt-14 rounded-2xl bg-slate-950 p-8 text-white sm:p-10">
              <h2 className="text-2xl font-bold">
                {post.ctaTitle || "Could Your Supplier Costs Be Lower?"}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                {post.ctaText ||
                  "KK Procurement Solutions can review your current sourcing approach and identify opportunities to reduce supplier costs, strengthen negotiations, and improve your supply strategy."}
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Get a Free Supplier Savings Assessment
                </Link>

                {post.relatedService && (
                  <Link
                    href={serviceLinks[post.relatedService] || "/services"}
                    className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                  >
                    Explore Our Services
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      {post.relatedArticles && post.relatedArticles.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Related Procurement Resources
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {post.relatedArticles.map((related) => (
                <Link
                  key={related._id}
                  href={`/blog/${related.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {related.title}
                  </h3>

                  {related.excerpt && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {related.excerpt}
                    </p>
                  )}

                  <p className="mt-5 text-sm font-semibold text-slate-900">
                    Read article →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}