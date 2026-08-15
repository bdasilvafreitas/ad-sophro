import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ad-sophrologie.fr", // __A_COMPLETER__ : remplacer par le nom de domaine définitif
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
