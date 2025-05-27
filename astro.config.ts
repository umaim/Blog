import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import AstroPWA from "@vite-pwa/astro";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    AstroPWA({
      manifest: {
        name: "Cloud's Time Caplsule",
        short_name: "Cloud's Blog",
        start_url: ".",
        display: "standalone",
        orientation: "any",
        description: "Cloud's Blog | Stay Hungry, Stay Foolish.",
        lang: "zh-cn",
        icons: [
          {
            src: "/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
      },
      registerType: "autoUpdate",
      /* enable sw on development */
      devOptions: {
        enabled: true,
        /* other options */
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, [remarkToc, { heading: "目录" }]],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "github-light", dark: "github-dark" },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: "constrained",
  },
  experimental: {
    responsiveImages: true,
    preserveScriptOrder: true,
  },
});
