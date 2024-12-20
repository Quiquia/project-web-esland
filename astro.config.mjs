import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import auth from "auth-astro";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true }), auth()],

  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    optimizeDeps: {
      include: ["@fontsource-variable/onest"],
    },
  },
  output: "server",
  adapter: vercel(),
});
