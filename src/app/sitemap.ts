import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/phq-9-depression-test`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/gad-7-anxiety-test`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/audit-alcohol-test`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/audit-c-alcohol-screen`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 },
  ];

  // Blog posts will be added dynamically as they're published
  // const blogPosts = BLOG_POSTS.filter(p => p.status === 'published').map(...)

  return staticPages;
}
