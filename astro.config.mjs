import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	site: "https://nayan-m.vercel.app",
	integrations: [mdx(), sitemap(), prefetch(), tailwind(), preact()],
});
