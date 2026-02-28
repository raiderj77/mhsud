"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: BlogPost[];
  categories: string[];
}

export function BlogListClient({ posts, categories }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = posts.filter((post) => {
    const matchesSearch =
      search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search + Filter */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400/40 focus:border-sage-400 transition-all"
          />
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-sage-500 text-white"
                : "bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 hover:bg-sage-50 dark:hover:bg-sage-950/30 hover:text-sage-700 dark:hover:text-sage-400"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-sage-500 text-white"
                  : "bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 hover:bg-sage-50 dark:hover:bg-sage-950/30 hover:text-sage-700 dark:hover:text-sage-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        {search && ` matching "${search}"`}
        {activeCategory && ` in ${activeCategory}`}
      </p>

      {/* Posts */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className="card p-8 text-center">
            <p className="text-neutral-400 dark:text-neutral-500">No articles found. Try a different search or filter.</p>
          </div>
        )}
        {filtered.map((post) => (
          <article
            key={post.slug}
            className={`card p-5 sm:p-6 ${post.status === "draft" ? "opacity-60" : "hover:border-sage-300 dark:hover:border-sage-700"} transition-colors`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">{post.category}</span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">{post.readTime}</span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  {post.status === "draft" && (
                    <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-600 dark:text-warm-400">Coming Soon</span>
                  )}
                </div>
                <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 leading-snug mb-2">
                  {post.status === "draft" ? (
                    post.title
                  ) : (
                    <Link href={`/blog/${post.slug}`} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                      {post.title}
                    </Link>
                  )}
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
    </>
  );
}
