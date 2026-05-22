import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { publicSeoPages } from "../src/utils/seoConfig.js";

const today = new Date().toISOString().slice(0, 10);

const urls = publicSeoPages
  .map(
    (page) => `  <url>
    <loc>${page.canonicalUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve("public/sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap.xml with ${publicSeoPages.length} public URLs.`);
