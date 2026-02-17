"use client";

import Link from "next/link";
import { useState } from "react";
import { DarkModeToggle } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/phq-9-depression-test", label: "PHQ-9" },
  { href: "/gad-7-anxiety-test", label: "GAD-7" },
  { href: "/audit-alcohol-test", label: "AUDIT" },
  { href: "/audit-c-alcohol-screen", label: "AUDIT-C" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md border-b border-sand-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-serif font-bold text-lg text-neutral-800 dark:text-neutral-100 tracking-tight">
              MindCheck
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-sage-700 dark:hover:text-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 border-l border-sand-200 dark:border-neutral-700 pl-2">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            <DarkModeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg hover:bg-sand-200 dark:hover:bg-night-700"
              aria-label="Toggle menu"
            >
              {open ? (
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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-sand-200 dark:border-neutral-700 mt-1 pt-3 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-sage-50 dark:hover:bg-sage-950/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
