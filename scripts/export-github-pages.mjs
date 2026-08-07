import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = path.join(projectRoot, "dist", "client");
const outputRoot = path.join(projectRoot, "_github-pages");
const workerUrl = new URL(`../dist/server/index.js?github-pages=${Date.now()}`, import.meta.url);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://hangeol.github.io/", {
    headers: {
      accept: "text/html",
      host: "hangeol.github.io",
      "x-forwarded-host": "hangeol.github.io",
      "x-forwarded-proto": "https",
    },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

const html = await response.text();
await Promise.all([
  writeFile(path.join(outputRoot, "index.html"), html),
  writeFile(path.join(outputRoot, ".nojekyll"), ""),
  writeFile(
    path.join(outputRoot, "robots.txt"),
    "User-agent: *\nAllow: /\n\nSitemap: https://hangeol.github.io/sitemap.xml\n",
  ),
  writeFile(
    path.join(outputRoot, "sitemap.xml"),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://hangeol.github.io/</loc></url>\n</urlset>\n',
  ),
]);

console.log(`GitHub Pages export written to ${outputRoot}`);
