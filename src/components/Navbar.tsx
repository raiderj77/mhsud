"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { DarkModeToggle } from "./ThemeProvider";

/* ─── Tool data organized by category ─── */
type Tool = { href: string; label: string; sub: string };
type Category = { id: string; name: string; icon: string; tools: Tool[] };

const CATEGORIES: Category[] = [
  {
    id: "depression",
    name: "Depression & Mood",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
    tools: [
      { href: "/phq-9-depression-test", label: "PHQ-9", sub: "Depression screening" },
      { href: "/ces-d-depression-scale", label: "CES-D", sub: "Depression scale (20 items)" },
      { href: "/dass-21-depression-anxiety-stress", label: "DASS-21", sub: "Depression, anxiety & stress" },
      { href: "/k6-distress-scale", label: "K6", sub: "Psychological distress" },
      { href: "/who-5-wellbeing-index", label: "WHO-5", sub: "Well-being index" },
    ],
  },
  {
    id: "anxiety",
    name: "Anxiety",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    tools: [
      { href: "/gad-7-anxiety-test", label: "GAD-7", sub: "Generalized anxiety" },
      { href: "/spin-social-anxiety-test", label: "SPIN", sub: "Social anxiety" },
    ],
  },
  {
    id: "ptsd",
    name: "PTSD & Trauma",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    tools: [
      { href: "/pcl-5-ptsd-screening", label: "PCL-5", sub: "PTSD checklist (20 items)" },
      { href: "/pc-ptsd-5-screening", label: "PC-PTSD-5", sub: "PTSD brief screen" },
      { href: "/ace-questionnaire", label: "ACE", sub: "Adverse childhood experiences" },
    ],
  },
  {
    id: "substance",
    name: "Substance Use",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    tools: [
      { href: "/audit-alcohol-test", label: "AUDIT", sub: "WHO alcohol screen (10 items)" },
      { href: "/audit-c-alcohol-screen", label: "AUDIT-C", sub: "Brief alcohol screen" },
      { href: "/dast-10-drug-screening", label: "DAST-10", sub: "Drug abuse screening" },
      { href: "/cage-aid-substance-abuse-screening", label: "CAGE-AID", sub: "Alcohol & drug screen" },
      { href: "/who-assist-substance-screening", label: "WHO ASSIST", sub: "Comprehensive substance screen" },
      { href: "/crafft-substance-screening", label: "CRAFFT", sub: "Adolescent substance screen" },
    ],
  },
  {
    id: "other",
    name: "Other Conditions",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    tools: [
      { href: "/asrs-adhd-screening", label: "ASRS", sub: "Adult ADHD screening" },
      { href: "/mdq-bipolar-screening", label: "MDQ", sub: "Bipolar screening" },
      { href: "/oci-r-ocd-screening", label: "OCI-R", sub: "OCD screening" },
      { href: "/scoff-eating-disorder-screening", label: "SCOFF", sub: "Eating disorder screen" },
      { href: "/aq-10-autism-screening", label: "AQ-10", sub: "Autism spectrum screen" },
    ],
  },
  {
    id: "wellbeing",
    name: "Stress & Well-Being",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    tools: [
      { href: "/holmes-rahe-stress-inventory", label: "Holmes-Rahe", sub: "Life stress inventory" },
      { href: "/burnout-assessment-tool", label: "Burnout", sub: "Burnout assessment" },
      { href: "/rosenberg-self-esteem-scale", label: "RSES", sub: "Self-esteem scale" },
      { href: "/ucla-loneliness-scale", label: "UCLA", sub: "Loneliness scale" },
      { href: "/athens-insomnia-scale", label: "AIS", sub: "Insomnia screening" },
      { href: "/brief-resilience-scale", label: "BRS", sub: "Resilience scale" },
      { href: "/work-stress-check", label: "Work Stress", sub: "Work stress & burnout" },
      { href: "/sleep-and-mood-check", label: "Sleep & Mood", sub: "Sleep-mood connection" },
      { href: "/mental-load-calculator", label: "Mental Load", sub: "Cognitive load check" },
      { href: "/box-breathing-exercise", label: "Box Breathing", sub: "Guided breathing exercise" },
      { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding", sub: "Sensory grounding exercise" },
      { href: "/cognitive-distortion-identifier", label: "Thought Patterns", sub: "CBT distortion identifier" },
      { href: "/safety-plan", label: "Safety Plan", sub: "Crisis safety planning tool" },
      { href: "/cbt-thought-record", label: "Thought Record", sub: "CBT thought diary worksheet" },
      { href: "/worry-time-scheduler", label: "Worry Time", sub: "CBT worry postponement" },
      { href: "/values-card-sort", label: "Values Card Sort", sub: "Personal values exercise" },
      { href: "/dbt-crisis-skills", label: "DBT Skills Cards", sub: "Crisis survival skills" },
    ],
  },
  {
    id: "recovery",
    name: "Recovery Tools",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    tools: [
      { href: "/sobriety-calculator", label: "Sobriety Calculator", sub: "Track your milestones" },
      { href: "/money-saved-recovery-calculator", label: "Money Saved", sub: "Recovery savings tracker" },
      { href: "/health-recovery-timeline", label: "Health Timeline", sub: "Body recovery stages" },
      { href: "/bac-calculator", label: "BAC Calculator", sub: "Blood alcohol estimate" },
      { href: "/standard-drinks-calculator", label: "Standard Drinks", sub: "Drink unit converter" },
      { href: "/halt-check-in", label: "HALT Check-In", sub: "Hungry, Angry, Lonely, Tired" },
      { href: "/withdrawal-timeline", label: "Withdrawal Timeline", sub: "What to expect" },
      { href: "/treatment-cost-estimator", label: "Treatment Costs", sub: "Estimate treatment costs" },
      { href: "/relapse-prevention-plan", label: "Prevention Plan", sub: "Build your plan" },
      { href: "/urge-surfing-timer", label: "Urge Surfing", sub: "Guided urge timer" },
      { href: "/readiness-to-change", label: "Readiness", sub: "Stages of change" },
      { href: "/trigger-identification-worksheet", label: "Triggers", sub: "Identify your triggers" },
      { href: "/coping-skills-randomizer", label: "Coping Skills", sub: "Random coping strategy" },
      { href: "/daily-recovery-check-in", label: "Daily Check-In", sub: "Daily recovery reflection" },
      { href: "/family-impact-assessment", label: "Family Impact", sub: "Family effects assessment" },
    ],
  },
];

const ALL_TOOLS = CATEGORIES.flatMap((c) => c.tools.map((t) => ({ ...t, category: c.id, categoryName: c.name })));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setToolsOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setToolsOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Filtered tools
  const filtered = useMemo(() => {
    let tools = activeCategory === "all" ? ALL_TOOLS : ALL_TOOLS.filter((t) => t.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      tools = tools.filter(
        (t) => t.label.toLowerCase().includes(q) || t.sub.toLowerCase().includes(q) || t.categoryName.toLowerCase().includes(q)
      );
    }
    return tools;
  }, [activeCategory, search]);

  const closeMobile = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md border-b border-sand-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-serif font-bold text-lg text-neutral-800 dark:text-neutral-100 tracking-tight">
              MindCheck
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Tools dropdown trigger */}
            <button
              ref={buttonRef}
              onClick={() => setToolsOpen(!toolsOpen)}
              className={`px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                toolsOpen
                  ? "text-sage-700 dark:text-sage-400 bg-sage-50 dark:bg-sage-950/30"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-sage-700 dark:hover:text-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/30"
              }`}
            >
              Tools
              <svg className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <Link href="/blog" className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-sage-700 dark:hover:text-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/30 transition-colors">
              Blog
            </Link>
            <Link href="/crisis-resources" className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg text-sm font-medium text-crisis-600 dark:text-crisis-400 hover:bg-crisis-50 dark:hover:bg-crisis-950/30 transition-colors">
              Crisis Help
            </Link>
            <Link href="/about" className="px-3 py-2.5 min-h-[44px] flex items-center rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-sage-700 dark:hover:text-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/30 transition-colors">
              About
            </Link>
            <div className="ml-2 border-l border-sand-200 dark:border-neutral-700 pl-2">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            <DarkModeToggle />
            <button
              onClick={() => { setMenuOpen(!menuOpen); setToolsOpen(false); }}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-sand-200 dark:hover:bg-night-700"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Desktop mega-menu dropdown ─── */}
      {toolsOpen && (
        <div
          ref={dropdownRef}
          className="hidden md:block absolute left-0 right-0 bg-white dark:bg-night-800 border-b border-sand-200 dark:border-neutral-700 shadow-xl animate-fade-in z-50"
        >
          <div className="max-w-6xl mx-auto px-6 py-5">
            {/* Search */}
            <div className="relative mb-4">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search tools... (e.g. depression, AUDIT, anxiety)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
                autoFocus
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-sage-600 text-white"
                    : "bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:bg-sand-200 dark:hover:bg-night-600"
                }`}
              >
                All Tools
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-sage-600 text-white"
                      : "bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:bg-sand-200 dark:hover:bg-night-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Tools grid */}
            <div className="max-h-[60vh] overflow-y-auto pr-1 -mr-1">
              {filtered.length === 0 ? (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 py-8 text-center">No tools match your search.</p>
              ) : activeCategory === "all" && !search.trim() ? (
                /* Grouped view when "All" and no search */
                <div className="space-y-5">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id}>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                        </svg>
                        {cat.name}
                      </h3>
                      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
                        {cat.tools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={() => setToolsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors group"
                          >
                            <div>
                              <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
                                {tool.label}
                              </p>
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">{tool.sub}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Flat grid for filtered/searched */
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
                  {filtered.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
                          {tool.label}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{tool.sub}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── Mobile menu ─── */}
      {menuOpen && (
        <MobileMenu categories={CATEGORIES} onClose={closeMobile} />
      )}
    </nav>
  );
}

/* ─── Mobile menu component ─── */
function MobileMenu({ categories, onClose }: { categories: Category[]; onClose: () => void }) {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const matchesSearch = (tool: Tool) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return tool.label.toLowerCase().includes(q) || tool.sub.toLowerCase().includes(q);
  };

  const filteredCategories = categories
    .map((cat) => ({ ...cat, tools: cat.tools.filter(matchesSearch) }))
    .filter((cat) => cat.tools.length > 0);

  return (
    <div className="md:hidden border-t border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-800 animate-fade-in max-h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="px-4 py-3">
        {/* Search */}
        <div className="relative mb-3">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
          />
        </div>

        {/* Category accordions */}
        <div className="space-y-1">
          {filteredCategories.map((cat) => (
            <div key={cat.id}>
              <button
                onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-sage-500 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                  </svg>
                  {cat.name}
                  <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">({cat.tools.length})</span>
                </span>
                <svg
                  className={`w-4 h-4 text-neutral-400 transition-transform ${expanded === cat.id ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {(expanded === cat.id || search.trim()) && (
                <div className="ml-4 pl-4 border-l-2 border-sage-100 dark:border-sage-900 space-y-0.5 pb-2">
                  {cat.tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={onClose}
                      className="block px-3 py-2 rounded-lg hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
                    >
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{tool.label}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{tool.sub}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Static nav links */}
        <div className="border-t border-sand-200 dark:border-neutral-700 mt-3 pt-3 space-y-0.5">
          <Link href="/blog" onClick={onClose} className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors">
            Blog &amp; Guides
          </Link>
          <Link href="/about" onClick={onClose} className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors">
            About
          </Link>
          <Link href="/crisis-resources" onClick={onClose} className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-crisis-600 dark:text-crisis-400 hover:bg-crisis-50 dark:hover:bg-crisis-950/30 transition-colors">
            Crisis Help
          </Link>
        </div>
      </div>
    </div>
  );
}
