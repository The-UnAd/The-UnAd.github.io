import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://theunad.com/",
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: [
          "lightbulb-outline",
          "message-alert",
          "clock-time-four-outline",
          "graph",
          "search-web",
          "currency-usd",
          "code-braces",
          "menu",
          "close",
          "form-textbox",
          "share",
          "message-alert-outline",
          "telescope",
          "rocket",
          "rocket-launch",
          "close",
          "home",
        ],
        "fa-brands": ["github-alt", "stripe-s"],
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  base: "/",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
