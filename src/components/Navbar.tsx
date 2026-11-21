"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

const itemClass =
  "flex min-h-[44px] items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-sage-50 hover:text-sage-800";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const helpRef = useRef<HTMLDivElement>(null);
  const helpButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isOnline } = useOnlineStatus();

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 0);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!helpRef.current?.contains(event.target as Node)) setHelpOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const focus = document.activeElement;
      if (helpOpen) {
        setHelpOpen(false);
        if (helpRef.current?.contains(focus)) {
          helpButtonRef.current?.focus();
          return;
        }
      }
      if (menuOpen) {
        setMenuOpen(false);
        if (menuRef.current?.contains(focus)) mobileButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [helpOpen, menuOpen]);

  function closeNavigation() {
    setHelpOpen(false);
    setMenuOpen(false);
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`no-print sticky top-0 z-50 border-b bg-sand-50/95 backdrop-blur-md ${hasScrolled ? "border-sand-200 shadow-md" : "border-sand-100"}`}
    >
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" onClick={closeNavigation} aria-label="MindCheck Tools - Home" className="flex min-h-[44px] shrink-0 items-center gap-2.5 rounded-lg">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sage-400 to-sage-600 shadow-sm">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
          <span className="font-serif text-lg font-bold tracking-tight text-neutral-800">MindCheck</span>
        </Link>

        <div className="ml-auto flex items-center gap-2 md:order-last md:ml-0">
          {!isOnline && (
            <span className="rounded-lg bg-crisis-50 px-2 py-1 text-xs font-medium text-crisis-700" aria-hidden="true">
              Offline
            </span>
          )}
          <button
            ref={mobileButtonRef}
            id="mobile-menu-button"
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setHelpOpen(false);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-neutral-700 hover:bg-sand-200 md:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <div
          ref={menuRef}
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto border-b border-sand-200 bg-sand-50 p-4 shadow-md md:static md:flex md:max-h-none md:flex-row md:items-center md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <Link href="/screening-tools" onClick={closeNavigation} className={itemClass}>Take a Screening</Link>
          <div ref={helpRef} className="relative">
            <button
              ref={helpButtonRef}
              type="button"
              onClick={() => setHelpOpen(!helpOpen)}
              aria-expanded={helpOpen}
              aria-controls="find-help-links"
              className={`${itemClass} w-full`}
            >
              Find Help
              <svg className={`h-3.5 w-3.5 ${helpOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <ul
              id="find-help-links"
              hidden={!helpOpen}
              className="ml-3 border-l border-sand-200 pl-2 md:absolute md:left-0 md:top-full md:ml-0 md:w-48 md:rounded-lg md:border md:bg-white md:p-1 md:shadow-md"
            >
              <li><Link href="/therapists" onClick={closeNavigation} className={itemClass}>Therapists</Link></li>
              <li><Link href="/facilities" onClick={closeNavigation} className={itemClass}>Treatment Centers</Link></li>
            </ul>
          </div>
          <Link href="/conditions" onClick={closeNavigation} className={itemClass}>Conditions</Link>
          <Link href="/crisis-resources" onClick={closeNavigation} className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium text-crisis-700 hover:bg-crisis-50 focus-visible:outline-crisis-600">
            Crisis Help
          </Link>
        </div>
      </div>
    </nav>
  );
}
