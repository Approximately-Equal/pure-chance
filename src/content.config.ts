import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    abstract: z.string().optional(),
    dates: z.object({
      published: z.coerce.date(),
      updated: z.coerce.date().optional(),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
