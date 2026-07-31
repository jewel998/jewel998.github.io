import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { lingui } from "@lingui/vite-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import type { Plugin } from "vite";

// Static hero shells for each route — shown instantly before JS loads
const routeShells: Record<string, { title: string; shell: string }> = {
  about: {
    title: "About | Jyotirmoy Barman",
    shell: `<div style="min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:5rem 1.5rem;max-width:48rem;margin:0 auto;font-family:system-ui,sans-serif">
      <p style="font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#30af5b;margin-bottom:0.5rem">✦ Fullstack Engineer</p>
      <h1 style="font-size:clamp(2rem,5vw,3rem);font-weight:500;line-height:1.2;margin:0">Jyotirmoy Barman</h1>
    </div>`,
  },
  projects: {
    title: "Projects | Jyotirmoy Barman",
    shell: `<div style="min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:5rem 1.5rem;max-width:48rem;margin:0 auto;font-family:system-ui,sans-serif">
      <p style="font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#30af5b;margin-bottom:0.5rem">✦ My Work</p>
      <h1 style="font-size:clamp(2rem,5vw,3rem);font-weight:500;line-height:1.2;margin:0">Creating next level digital products</h1>
    </div>`,
  },
  contact: {
    title: "Contact | Jyotirmoy Barman",
    shell: `<div style="min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:5rem 1.5rem;max-width:48rem;margin:0 auto;font-family:system-ui,sans-serif">
      <p style="font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#30af5b;margin-bottom:0.5rem">✦ Get in touch</p>
      <h1 style="font-size:clamp(2rem,5vw,3rem);font-weight:500;line-height:1.2;margin:0">Let's build something that scales and performs.</h1>
    </div>`,
  },
};

// Generates per-route index.html with route-specific static shells for FCP/LCP
function spaFallbackPages(routes: string[]): Plugin {
  return {
    name: "spa-fallback-pages",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const baseHtml = readFileSync(path.join(distDir, "index.html"), "utf-8");

      for (const route of routes) {
        const dir = path.join(distDir, route);
        mkdirSync(dir, { recursive: true });

        const routeData = routeShells[route];
        if (routeData) {
          // Replace title
          let html = baseHtml.replace(
            /<title>[^<]*<\/title>/,
            `<title>${routeData.title}</title>`
          );
          // Replace the shell content between markers
          html = html.replace(
            /<!-- ROUTE_SHELL_START -->[\s\S]*?<!-- ROUTE_SHELL_END -->/,
            `<!-- ROUTE_SHELL_START -->\n      ${routeData.shell}\n      <!-- ROUTE_SHELL_END -->`
          );
          writeFileSync(path.join(dir, "index.html"), html);
        } else {
          copyFileSync(
            path.join(distDir, "index.html"),
            path.join(dir, "index.html")
          );
        }
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
