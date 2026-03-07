import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";
import { BlogListClient } from "./BlogListClient";

export const metadata: Metadata = createMetadata({
  path: "/blog",
  title: "Mental Health Guides & Education",
  description: "Free articles on mental health screening, depression, anxiety, and alcohol use. Evidence-based, plain-language guides. No signup required.",
});

export default function BlogPage() {
  // Sort newest first
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Extract unique categories
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
            ])
          ),
        }}
      />
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <header className="mb-10">
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Guides &amp; Education
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Plain-language articles about mental health screening tools, what they measure, and when to seek professional help.
        </p>
      </header>

      <BlogListClient posts={sortedPosts} categories={categories} />
    </div>
    </>
  );
}
