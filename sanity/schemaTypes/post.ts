import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Procurement Article",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Article Excerpt",
      description:
        "Short summary used on the Resources page and article previews.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          {
            title: "Supplier Cost Reduction",
            value: "supplier-cost-reduction",
          },
          {
            title: "Strategic Sourcing",
            value: "strategic-sourcing",
          },
          {
            title: "Supplier Negotiation",
            value: "supplier-negotiation",
          },
          {
            title: "International Sourcing",
            value: "international-sourcing",
          },
          {
            title: "Direct Materials & Components",
            value: "direct-materials-components",
          },
          {
            title: "Fractional Procurement",
            value: "fractional-procurement",
          },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "updatedAt",
      title: "Last Updated",
      description:
        "Update this when meaningful changes are made to the article.",
      type: "datetime",
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          description:
            "Describe the image for accessibility and search engines.",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet List", value: "bullet" },
            { title: "Numbered List", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    name: "blank",
                    title: "Open in new tab",
                    type: "boolean",
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },

        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "KK Procurement Solutions",
      validation: (rule) => rule.required(),
    }),

    // SEO
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      description:
        "Optional search-engine title. Aim for roughly 50–60 characters. If blank, the article title will be used.",
      type: "string",
      validation: (rule) =>
        rule.max(70).warning("Consider keeping SEO titles under 70 characters."),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      description:
        "Search result description. Aim for approximately 140–160 characters.",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule
          .max(170)
          .warning("Consider keeping meta descriptions under 170 characters."),
    }),

    defineField({
      name: "targetKeyword",
      title: "Primary Target Keyword",
      description:
        "The primary search query this article is designed to target.",
      type: "string",
    }),

    defineField({
      name: "secondaryKeywords",
      title: "Secondary Keywords",
      description:
        "Related search terms and variations that naturally support the article.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // Conversion
    defineField({
      name: "relatedService",
      title: "Related KK Service",
      description:
        "Used to connect the article to the most relevant consulting service.",
      type: "string",
      options: {
        list: [
          {
            title: "Supplier Cost Reduction",
            value: "supplier-cost-reduction",
          },
          {
            title: "Strategic Sourcing",
            value: "strategic-sourcing",
          },
          {
            title: "Supplier Diversification",
            value: "supplier-diversification",
          },
          {
            title: "Fractional Procurement",
            value: "fractional-procurement",
          },
        ],
      },
    }),

    defineField({
      name: "ctaTitle",
      title: "Article CTA Headline",
      description:
        "Optional custom CTA headline. A default Supplier Savings Assessment CTA can be used when blank.",
      type: "string",
    }),

    defineField({
      name: "ctaText",
      title: "Article CTA Text",
      description:
        "Optional custom CTA copy shown near the end of the article.",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "featured",
      title: "Featured Article",
      description:
        "Use this to highlight especially important resources.",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      description:
        "Select other useful resources to recommend at the end of this article.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
      validation: (rule) => rule.max(3),
    }),
  ],

  preview: {
    select: {
      title: "title",
      category: "category",
      media: "featuredImage",
    },

    prepare({ title, category, media }) {
      const categoryLabels: Record<string, string> = {
        "supplier-cost-reduction": "Supplier Cost Reduction",
        "strategic-sourcing": "Strategic Sourcing",
        "supplier-negotiation": "Supplier Negotiation",
        "international-sourcing": "International Sourcing",
        "direct-materials-components": "Direct Materials & Components",
        "fractional-procurement": "Fractional Procurement",
      };

      return {
        title,
        subtitle: categoryLabels[category] || category || "Procurement Article",
        media,
      };
    },
  },
});