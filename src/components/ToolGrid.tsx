"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type ToolCategory =
  | "Depression & Mood"
  | "Anxiety & Stress"
  | "PTSD & Trauma"
  | "Substance Use & Addiction"
  | "Other Conditions"
  | "Stress, Burnout & Well-Being"
  | "Recovery Tools";

export interface Tool {
  href: string;
  title: string;
  description: string;
  badge: string;
  time: string;
  questions: number;
  color: "sage";
  status: "live" | "coming";
  category: ToolCategory;
}

export interface TargetedScreening {
  href: string;
  title: string;
  description: string;
  badge: string;
}

/* ------------------------------------------------------------------ */
/*  Filter categories (tabs)                                           */
/* ------------------------------------------------------------------ */

const ALL_FILTER = "All" as const;
const TARGETED_FILTER = "Targeted Screenings" as const;

const FILTER_CATEGORIES = [
  ALL_FILTER,
  "Depression & Mood",
  "Anxiety & Stress",
  "PTSD & Trauma",
  "Substance Use & Addiction",
  "Other Conditions",
  "Stress, Burnout & Well-Being",
  "Recovery Tools",
  TARGETED_FILTER,
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function matchesSearch(query: string, ...fields: string[]): boolean {
  const q = query.toLowerCase();
  return fields.some((f) => f.toLowerCase().includes(q));
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function ToolGrid({
  tools,
  toolCategories,
  targetedScreenings,
}: {
  tools: Tool[];
  toolCategories: ToolCategory[];
  targetedScreenings: TargetedScreening[];
}) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const isFiltering = search.trim() !== "" || activeFilter !== "All";

  /* Filtered main tools */
  const filteredTools = useMemo(() => {
    return tools.filter((t) => {
      if (activeFilter === TARGETED_FILTER) return false;
      if (activeFilter !== "All" && t.category !== activeFilter) return false;
      if (search.trim() && !matchesSearch(search, t.title, t.description, t.category)) return false;
      return true;
    });
  }, [tools, search, activeFilter]);

  /* Filtered targeted screenings */
  const filteredTargeted = useMemo(() => {
    return targetedScreenings.filter((t) => {
      if (activeFilter !== "All" && activeFilter !== TARGETED_FILTER) return false;
      if (search.trim() && !matchesSearch(search, t.title, t.description, "Targeted Screenings")) return false;
      return true;
    });
  }, [targetedScreenings, search, activeFilter]);

  const totalResults = filteredTools.length + filteredTargeted.length;

  return (
    <>
      {/* ============ SELF-CHECK TOOLS SECTION ============ */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            Self-Check Tools
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Choose a screening tool to get started. Each one runs entirely in your browser.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6">
          <label htmlFor="tool-search" className="sr-only">
            Search tools
          </label>
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-500 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              id="tool-search"
              type="search"
              role="searchbox"
              aria-label="Search tools by name, description, or category"
              placeholder="Search tools — depression, anxiety, alcohol, burnout..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-night-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-base focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mb-8" role="tablist" aria-label="Filter tools by category">
          <div className="flex flex-wrap gap-2">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 dark:focus:ring-offset-night-900 ${
                    isActive
                      ? "bg-sage-600 text-white shadow-sm"
                      : "bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 hover:bg-sage-100 dark:hover:bg-sage-950/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* No results */}
        {isFiltering && totalResults === 0 && (
          <div className="text-center py-12" role="status" aria-live="polite">
            <p className="text-neutral-500 dark:text-neutral-400 text-lg">
              No tools found for &ldquo;{search.trim() || activeFilter}&rdquo;
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-3 text-sage-600 dark:text-sage-400 text-sm font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {!isFiltering ? (
          /* Default view: grouped by category */
          <div className="space-y-10">
            {toolCategories.map((category) => {
              const categoryTools = tools.filter((t) => t.category === category);
              if (categoryTools.length === 0) return null;
              return (
                <div key={category}>
                  <h3 className="font-serif text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categoryTools.map((tool) => (
                      <ToolCard key={tool.href} tool={tool} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered view: unified grid */
          totalResults > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.href} tool={tool} />
              ))}
              {filteredTargeted.map((item) => (
                <TargetedCard key={item.href} item={item} />
              ))}
            </div>
          )
        )}
      </section>

      {/* ============ TARGETED SCREENINGS SECTION ============ */}
      {/* Show as separate section only in default (unfiltered) view */}
      {!isFiltering && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              Screenings for Specific Groups
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400">
              The same validated tools, with educational context tailored to your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetedScreenings.map((item) => (
              <TargetedCard key={item.href} item={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Card sub-components                                                */
/* ------------------------------------------------------------------ */

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.status === "live" ? tool.href : "#"}
      className={`card p-6 group transition-all hover:shadow-md hover:border-sage-300 dark:hover:border-sage-700 ${
        tool.status === "coming" ? "opacity-60 pointer-events-none" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-2">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
            {tool.badge}
          </span>
          {tool.status === "coming" && (
            <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">
              Coming Soon
            </span>
          )}
        </div>
        <svg
          className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-sage-500 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
      <h4 className="font-serif font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-1.5 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
        {tool.title}
      </h4>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
        {tool.description}
      </p>
      <div className="flex gap-4 text-xs text-neutral-500 dark:text-neutral-400">
        <span>{tool.questions} questions</span>
        <span>{tool.time}</span>
        <span>&#128274; Private</span>
      </div>
    </Link>
  );
}

function TargetedCard({ item }: { item: TargetedScreening }) {
  return (
    <Link
      href={item.href}
      className="card p-5 group hover:shadow-md hover:border-sage-300 dark:hover:border-sage-700 transition-all"
    >
      <span className="badge bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 mb-3 inline-block">
        {item.badge}
      </span>
      <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-1.5 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
        {item.description}
      </p>
    </Link>
  );
}
