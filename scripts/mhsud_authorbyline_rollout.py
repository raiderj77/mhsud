#!/usr/bin/env python3
"""
WS2 mindchecktools.com — full AuthorByline rollout to all tool pages.

Scales the validated pilot pattern to every tool/screening/calculator page
under src/app/. Auto-discovers page.tsx files; excludes non-tool directories
(about, blog, contact, utility pages) and any already-processed pages.

Per-page change (same as pilot):
  - Adds: import { AuthorByline } from "@/components/AuthorByline";
  - Replaces hardcoded "Last updated: <Month> <Day>, <Year>" <p> block
    with <AuthorByline> wrapped in standard content container.

Skips silently (expected):
  - Pages that already have AuthorByline (re-running, or pilot pages)
  - Pages without the AnswerBlock import anchor (non-standard layouts)
  - Pages without the hardcoded date pattern (different date formats)

Logs FAIL with reason for investigation — no page is broken, just reported.
"""
import re
import sys
from pathlib import Path

_here = Path(__file__).resolve().parent
REPO = _here.parent if _here.name == "scripts" else Path.cwd()

# Non-tool directories under src/app — these page.tsx files are NOT tool pages
EXCLUDE_DIRS = {
    "about",
    "blog",
    "contact",
    "accessibility",
    "privacy",
    "disclaimer",
    "terms",
    "cookies",
    "offline",
    "api",
    "how-to-talk-to-your-doctor-about-mental-health",
}

IMPORT_LINE = 'import { AuthorByline } from "@/components/AuthorByline";'

BYLINE_BLOCK = (
    '      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">\n'
    '        <AuthorByline publishedDate="2025-01-01" modifiedDate={new Date().toISOString().split("T")[0]} />\n'
    '      </div>'
)

DATE_PARAGRAPH_RE = re.compile(
    r'\s*<p className="text-sm text-gray-500[^"]*"\s*>\s*'
    r'Last updated:\s*[A-Z][a-z]+\s+\d+,\s*\d{4}\s*</p>',
    re.MULTILINE,
)

ANSWERBLOCK_IMPORT = 'import AnswerBlock from "@/components/AnswerBlock";'


def discover_tool_pages():
    """Find every src/app/*/page.tsx that isn't in an excluded directory."""
    app_dir = REPO / "src" / "app"
    if not app_dir.is_dir():
        return []
    pages = []
    for child in sorted(app_dir.iterdir()):
        if not child.is_dir():
            continue
        if child.name in EXCLUDE_DIRS:
            continue
        # Skip if the directory starts with . (hidden, route groups, etc.)
        if child.name.startswith(".") or child.name.startswith("("):
            continue
        page_file = child / "page.tsx"
        if page_file.is_file():
            pages.append(page_file)
    return pages


def patch_page(page_path):
    rel = page_path.relative_to(REPO)
    src = page_path.read_text(encoding="utf-8")

    if "AuthorByline" in src:
        return "SKIP", "already has AuthorByline", rel

    if ANSWERBLOCK_IMPORT not in src:
        return "FAIL", "no AnswerBlock import (non-standard layout)", rel

    match = DATE_PARAGRAPH_RE.search(src)
    if not match:
        return "FAIL", "no hardcoded Last updated paragraph", rel

    # Apply both edits
    new_src = src.replace(
        ANSWERBLOCK_IMPORT,
        ANSWERBLOCK_IMPORT + "\n" + IMPORT_LINE,
        1,
    )
    match = DATE_PARAGRAPH_RE.search(new_src)
    new_src = new_src[: match.start()] + "\n" + BYLINE_BLOCK + new_src[match.end():]

    page_path.write_text(new_src, encoding="utf-8")
    return "OK", "patched (import + byline)", rel


def main():
    print(f"Repo root: {REPO}")
    pages = discover_tool_pages()
    print(f"Discovered {len(pages)} candidate tool pages\n")

    ok_count = 0
    skip_count = 0
    fail_count = 0
    fails = []

    for p in pages:
        status, msg, rel = patch_page(p)
        print(f"  [{status}] {rel}: {msg}")
        if status == "OK":
            ok_count += 1
        elif status == "SKIP":
            skip_count += 1
        else:
            fail_count += 1
            fails.append((rel, msg))

    print(f"\nSummary: {ok_count} patched, {skip_count} skipped (already done), {fail_count} failed")
    if fails:
        print("\nPages requiring manual investigation:")
        for rel, msg in fails:
            print(f"  - {rel} ({msg})")

    return 0


if __name__ == "__main__":
    sys.exit(main())
