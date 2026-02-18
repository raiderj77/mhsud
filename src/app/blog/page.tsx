import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = createMetadata({
  path: "/blog",
  title: "Mental Health Guides & Education",
  description: "Educational articles about mental health screening tools, depression, anxiety, alcohol use, and when to seek professional help. Evidence-based, plain-language guides.",
});

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <header className="mb-10">
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Guides &amp; Education
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Plain-language articles about mental health screening tools, what they measure, and when to seek professional help.
        </p>
      </header>

      <div className="space-y-4">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="card p-5 sm:p-6 hover:border-sage-300 dark:hover:border-sage-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">{post.category}</span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">{post.readTime}</span>
                </div>
                <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 leading-snug mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-3">
                  <Link
                    href={post.toolSlug}
                    className="text-xs font-medium text-sage-600 dark:text-sage-400 hover:underline"
                  >
                    Related tool →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
