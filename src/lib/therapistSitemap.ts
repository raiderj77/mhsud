import { SITE_URL } from "@/lib/metadata";
import { registryProviders, therapistSnapshot } from "@/lib/therapists";
import { therapistPath } from "@/lib/therapistsCore.mjs";

const CHUNK_SIZE = 45_000;
const landingPaths = registryProviders.length ? ["/therapists", "/therapists/pricing"] : ["/therapists/pricing"];
const urlCount = landingPaths.length + registryProviders.length;
const partCount = Math.ceil(urlCount / CHUNK_SIZE);
const dated = therapistSnapshot.generatedAt ? `<lastmod>${therapistSnapshot.generatedAt}</lastmod>` : "";

function xml(content: string) {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${content}\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

export function therapistSitemap(part?: number) {
  if (part === undefined && partCount > 1) {
    const entries = Array.from({ length: partCount }, (_, index) =>
      `<sitemap><loc>${SITE_URL}/therapists/sitemap.xml?part=${index + 1}</loc></sitemap>`
    );
    return xml(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</sitemapindex>`);
  }

  const current = part ?? 1;
  if (current < 1 || current > partCount || (part !== undefined && partCount === 1)) {
    return new Response(null, { status: 404 });
  }
  const start = (current - 1) * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  const landing = landingPaths.slice(start, end).map(path => `<url><loc>${SITE_URL}${path}</loc></url>`);
  const providers = registryProviders.slice(Math.max(0, start - landingPaths.length), end - landingPaths.length)
    .map(provider => `<url><loc>${SITE_URL}${therapistPath(provider.slug)}</loc>${dated}</url>`);
  return xml(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...landing, ...providers].join("\n")}\n</urlset>`);
}
