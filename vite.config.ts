import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { lingui } from "@lingui/vite-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import { copyFileSync, mkdirSync } from "fs";
import type { Plugin } from "vite";

// Generates index.html copies for each SPA route so GitHub Pages
// returns 200 instead of 404 for direct navigation / crawlers.
function spaFallbackPages(routes: string[]): Plugin {
  return {
    name: "spa-fallback-pages",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      for (const route of routes) {
        const dir = path.join(distDir, route);
        mkdirSync(dir, { recursive: true });
        copyFileSync(
          path.join(distDir, "index.html"),
          path.join(dir, "index.html")
        );
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({ plugins: [["@lingui/swc-plugin", {}]] }),
    lingui(),
    viteStaticCopy({
      targets: [
        {
          src: "README.md",
          dest: ".",
        },
        {
          src: ".gitignore",
          dest: ".",
        },
      ],
    }),
    spaFallbackPages(["about", "projects", "contact"]),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
