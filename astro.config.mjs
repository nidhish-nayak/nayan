import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://nayan-blog.vercel.app",
  integrations: [mdx(), sitemap(), prefetch(), tailwind(), preact()]
});