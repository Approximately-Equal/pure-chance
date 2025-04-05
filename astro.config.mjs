// @ts-check
import { defineConfig } from "astro/config";
// html
import minify from "@frontendista/astro-html-minify";
// math
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// markdown
import remarkSmartypants from "remark-smartypants";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  site: "https://pure-chance.io",

  markdown: {
    remarkPlugins: [
      remarkMath,
      [
        remarkSmartypants,
        {
          dashes: "oldschool",
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            {
              left: "\\begin{equation}",
              right: "\\end{equation}",
              display: true,
            },
            { left: "\\begin{align}", right: "\\end{align}", display: true },
            {
              left: "\\begin{alignat}",
              right: "\\end{alignat}",
              display: true,
            },
            { left: "\\begin{gather}", right: "\\end{gather}", display: true },
            { left: "\\begin{CD}", right: "\\end{CD}", display: true },
          ],
        },
      ],
    ],
  },

  integrations: [minify()],
  adapter: vercel(),
});