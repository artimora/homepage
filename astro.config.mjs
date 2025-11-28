// @ts-check
import { defineConfig } from 'astro/config';


import sitemap from "@astrojs/sitemap";


import react from "@astrojs/react";


import cloudflare from "@astrojs/cloudflare";


import studiocmsUi from "@studiocms/ui";


// https://astro.build/config
export default defineConfig({
  site: "https://artimora.dev",
  integrations: [sitemap(), react(), studiocmsUi()],
  adapter: cloudflare(),
});