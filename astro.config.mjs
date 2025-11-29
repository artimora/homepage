// @ts-check

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import studiocmsUi from "@studiocms/ui";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://artimora.dev",
  integrations: [sitemap(), react(), studiocmsUi()],
  adapter: cloudflare(),
  trailingSlash: "ignore",
  output: "static",
  compressHTML: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
