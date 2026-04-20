#!/usr/bin/env python3
"""
WS2 mindchecktools.com — pilot AuthorByline rollout on 5 high-traffic tool pages.

Source: 2026-04-19 core-update audit Pattern 2 (missing named author byline on
tool pages) + Pattern 5 (hardcoded stale 'Last updated' dates).

One fix solves both audit findings on each page: replace the hardcoded
"Last updated: March 16, 2026" paragraph with <AuthorByline> which
auto-renders Jason Ramirez + CADC-II + dynamic updated date.

Pilot scope: 5 pages across 3 tool types (screening, calculator, clinical
screening) to validate placement/styling before scaling to remaining 40+.

Idempotent: re-running skips files that already have AuthorByline.
"""
import re
import sys
from pathlib import Path

_here = Path(__file__).resolve().parent
REPO = _here.parent if _here.name == "scripts" else Path.cwd()

# Pilot pages — mix of screening, calculator, and clinical tools
PILOT_PAGES = [
    "src/app/phq-9-depression-test/page.tsx",
    "src/app/gad-7-anxiety-test/page.tsx",
    "src/app/audit-alcohol-test/page.tsx",
    "src/app/pcl-5-ptsd-screening/page.tsx",
    "src/app/bac-calculator/page.tsx",
]

IMPORT_LINE = 'import { AuthorByline } from "@/components/AuthorByline";'

# Insertion point for the byline in the JSX: replace the hardcoded
# "Last updated: March 16, 2026" paragraph with AuthorByline wrapped
# in the site's standard content container.
BYLINE_BLOCK = '      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">\n        <AuthorByline publishedDate="2025-01-01" modifiedDate={new Date().toISOString().split("T")[0]} />\n      </div>'

# Pattern matching the hardcoded date paragraph (allows whitespace variants)
DATE_PARAGRAPH_RE = re.compile(
    r'\s*<p className="text-sm text-gray-500[^"]*"\s*>\s*Last updated:\s*[A-Z][a-z]+\s+\d+,\s*\d{4}\s*</p>',
    re.MULTILINE,
)


def patch_page(rel_path):
    p = REPO / rel_path
    if not p.exists():
        return "FAIL", "file not found"
    src = p.read_text(encoding="utf-8")

    if "AuthorByline" in src:
        return "SKIP", "already has AuthorByline"

    # Step 1: add import after AnswerBlock import
    answerblock_import = 'import AnswerBlock from "@/components/AnswerBlock";'
    if answerblock_import not in src:
        return "FAIL", "AnswerBlock import anchor not found"
    src = src.replace(
        answerblock_import,
        answerblock_import + "\n" + IMPORT_LINE,
        1,
    )

    # Step 2: replace hardcoded date paragraph with AuthorByline block
    match = DATE_PARAGRAPH_RE.search(src)
    if not match:
        return "FAIL", 'date paragraph pattern not found — skipping whole page'
    src = src[: match.start()] + "\n" + BYLINE_BLOCK + src[match.end():]

    p.write_text(src, encoding="utf-8")
    return "OK", "patched (import + byline)"


def main():
    print(f"Repo root: {REPO}\n")
    for rel in PILOT_PAGES:
        status, msg = patch_page(rel)
        print(f"  [{status}] {rel}: {msg}")
    print()


if __name__ == "__main__":
    main()
