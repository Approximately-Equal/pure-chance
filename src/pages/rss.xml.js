import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = await getCollection("articles");
  return rss({
    title: "Crescent Moon",
    description: "...",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.dates.published,
      description: article.data.abstract,
      link: `/articles/${article.id}/`,
    })),
  });
}
