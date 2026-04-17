"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * ModernHero Component
 *
 * Professional homepage hero section with:
 * - Inspiring headline with gradient background
 * - Trust signals (CADC-II credentials)
 * - Quick access screening tool grid
 * - Call-to-action section
 * - Works offline (all content cached)
 * - Full dark mode support
 * - Semantic HTML and ARIA labels
 *
 * Usage:
 * <ModernHero />
 */

interface ToolButton {
  label: string;
  href: string;
  icon: string;
  description: string;
}

const FEATURED_TOOLS: ToolButton[] = [
  {
    label: "Depression Screen",
    href: "/phq-9-depression-test",
    icon: "🧠",
    description: "PHQ-9 screening",
  },
  {
    label: "Anxiety Check",
    href: "/gad-7-anxiety-test",
    icon: "⚡",
    description: "GAD-7 assessment",
  },
  {
    label: "Alcohol Screen",
    href: "/audit-c-alcohol-screen",
    icon: "🥤",
    description: "AUDIT-C brief screen",
  },
  {
    label: "Stress & Burnout",
    href: "/burnout-assessment-tool",
    icon: "🔥",
    description: "Burnout assessment",
  },
  {
    label: "PTSD Check",
    href: "/pc-ptsd-5-screening",
    icon: "🛡️",
    description: "PC-PTSD-5 screen",
  },
  {
    label: "Sleep & Mood",
    href: "/sleep-and-mood-check",
    icon: "😴",
    description: "Sleep connection tool",
  },
];

export function ModernHero() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-sage-50 via-sand-50 to-warm-50
          dark:from-night-900 dark:via-sage-950 dark:to-night-900"
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200/20 dark:bg-sage-900/10 rounded-full blur-3xl
          -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-warm-200/20 dark:bg-warm-900/10 rounded-full blur-3xl
          -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main headline */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold
              bg-gradient-to-br from-sage-700 via-sage-600 to-warm-600
              dark:from-sage-300 dark:via-sage-400 dark:to-warm-300
              bg-clip-text text-transparent
              leading-tight mb-4 md:mb-6"
          >
            Mental Health Screening Tools
          </h1>

          <p
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto
              leading-relaxed mb-6"
          >
            Confidential, science-backed assessments to understand your mental health. Used by{" "}
            <span className="font-semibold">thousands</span> for self-reflection and clinical referral.
          </p>

          {/* Trust signal */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/50 dark:bg-white/5 border border-sage-200/50 dark:border-sage-800/30
              backdrop-blur-sm mb-8"
          >
            <span className="text-sm" aria-hidden="true">
              ✓
            </span>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Reviewed by CADC-II credential holder
            </span>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="#featured-tools"
              className="px-8 py-3.5 rounded-xl font-semibold text-white text-lg
                bg-gradient-to-br from-sage-500 to-sage-600
                hover:from-sage-600 hover:to-sage-700
                shadow-lg hover:shadow-xl
                transition-all duration-200
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600
                active:scale-95"
            >
              Start Screening
            </Link>

            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl font-semibold
                text-sage-700 dark:text-sage-300
                border-2 border-sage-300 dark:border-sage-700
                hover:bg-sage-50 dark:hover:bg-sage-900/20
                transition-colors duration-200
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Featured tools grid */}
        <div
          id="featured-tools"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-slide-up"
          role="region"
          aria-label="Featured screening tools"
        >
          {FEATURED_TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`group relative p-5 md:p-6 rounded-xl border-2 transition-all duration-200
                ${
                  selectedTool === tool.href
                    ? "border-sage-500 bg-white dark:bg-night-800 shadow-lg"
                    : "border-sand-200 dark:border-neutral-700 bg-white/50 dark:bg-white/5 hover:border-sage-300 dark:hover:border-sage-600 hover:shadow-md"
                }
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500
                active:scale-95`}
              onMouseEnter={() => setSelectedTool(tool.href)}
              onMouseLeave={() => setSelectedTool(null)}
              onFocus={() => setSelectedTool(tool.href)}
              onBlur={() => setSelectedTool(null)}
            >
              {/* Icon */}
              <div
                className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              >
                {tool.icon}
              </div>

              {/* Content */}
              <h3
                className="font-semibold text-neutral-900 dark:text-white mb-1 text-lg
                  group-hover:text-sage-600 dark:group-hover:text-sage-300 transition-colors"
              >
                {tool.label}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {tool.description}
              </p>

              {/* Arrow indicator */}
              <div
                className="absolute top-4 right-4 text-sage-500 opacity-0 group-hover:opacity-100
                  group-focus:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
              >
                →
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary CTA section */}
        <div
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-2xl
            bg-gradient-to-br from-sage-500/10 to-warm-500/10
            dark:from-sage-900/20 dark:to-warm-900/20
            border border-sage-200/30 dark:border-sage-800/30
            backdrop-blur-sm"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
              Understanding Your Results
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              Each screening tool provides immediate feedback about your symptoms. Results are{" "}
              <span className="font-semibold">never stored</span> without your consent and work entirely{" "}
              <span className="font-semibold">offline</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "🔒", title: "Private", desc: "Your data stays on your device" },
                { icon: "🔍", title: "Accurate", desc: "Based on validated instruments" },
                { icon: "🚀", title: "Fast", desc: "Instant results and guidance" },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
