#!/usr/bin/env python3
"""
Phase 2 attribution sweep: swap CADC-II personal byline → brand (Organization)
on all general-MH tool pages and blog pages.
"""

import re
import os
import sys

BASE = os.path.join(os.path.dirname(__file__), "..", "src", "app")

# ── Files to KEEP (substance-use + exceptions) ────────────────────────────────
# Relative paths from src/app/
KEEP = {
    "alcohol-screening-for-college-students/page.tsx",
    "alcohol-screening-for-women/page.tsx",
    "alcohol-screening-military/page.tsx",
    "am-i-an-alcoholic-quiz/page.tsx",
    "audit-alcohol-test/page.tsx",
    "audit-c-alcohol-screen/page.tsx",
    "audit-c-score-interpretation/page.tsx",
    "audit-score-interpretation/page.tsx",
    "audit-vs-audit-c/page.tsx",
    "bac-calculator/page.tsx",
    "cage-aid-substance-abuse-screening/page.tsx",
    "crafft-substance-screening/page.tsx",
    "daily-recovery-check-in/page.tsx",
    "drug-screening-teens/page.tsx",
    "family-impact-assessment/page.tsx",
    "halt-check-in/page.tsx",
    "health-recovery-timeline/page.tsx",
    "money-saved-recovery-calculator/page.tsx",
    "readiness-to-change/page.tsx",
    "relapse-prevention-plan/page.tsx",
    "sobriety-calculator/page.tsx",
    "standard-drinks-calculator/page.tsx",
    "substance-abuse-test-parents/page.tsx",
    "treatment-cost-estimator/page.tsx",
    "trigger-identification-worksheet/page.tsx",
    "urge-surfing-timer/page.tsx",
    "who-assist-substance-screening/page.tsx",
    "withdrawal-timeline/page.tsx",
    # Exceptions: keep CADC-II per user instruction
    "methodology/page.tsx",
    # Blog: substance-use
    "blog/alcohol-screening-college-guide/page.tsx",
    "blog/alcohol-screening-military-guide/page.tsx",
    "blog/audit-guide/page.tsx",
    "blog/daily-recovery-checkin-guide/page.tsx",
    "blog/drug-screening-teens-guide/page.tsx",
    "blog/family-impact-addiction-guide/page.tsx",
    "blog/halt-checkin-guide/page.tsx",
    "blog/health-recovery-timeline-guide/page.tsx",
    "blog/helping-family-member-addiction/page.tsx",
    "blog/money-saved-recovery-guide/page.tsx",
    "blog/quit-drinking-timeline/page.tsx",
    "blog/readiness-to-change-guide/page.tsx",
    "blog/relapse-prevention-guide/page.tsx",
    "blog/relapse-prevention-plan-guide/page.tsx",
    "blog/sobriety-calculator-guide/page.tsx",
    "blog/stages-of-change-recovery/page.tsx",
    "blog/standard-drinks-bac-guide/page.tsx",
    "blog/substance-abuse-parents-guide/page.tsx",
    "blog/treatment-cost-guide/page.tsx",
    "blog/trigger-identification-guide/page.tsx",
    "blog/urge-surfing-guide/page.tsx",
    "blog/what-are-substance-use-disorders/page.tsx",
    "blog/what-does-audit-score-mean/page.tsx",
    "blog/what-does-cage-aid-score-mean/page.tsx",
    "blog/what-is-alcohol-use-disorder/page.tsx",
    "blog/withdrawal-symptoms-guide/page.tsx",
    # Phase 1 already done
    "blog/anxiety-coping-strategies/page.tsx",
    # Homepage already done
    "page.tsx",
}

# ── JSX templates ─────────────────────────────────────────────────────────────

def brand_byline(pub_dt_attr, pub_date_expr, mod_dt_attr, mod_date_expr):
    return (
        '<div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">\n'
        '  <div className="flex flex-col gap-1">\n'
        '    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">\n'
        '      Published by MindCheck Tools &middot; Your Friendly Developer LLC\n'
        '    </p>\n'
        '    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">\n'
        '      <span>\n'
        '        Published:{" "}\n'
        '        <time dateTime=' + pub_dt_attr + '>\n'
        '          {new Date(' + pub_date_expr + ').toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}\n'
        '        </time>\n'
        '      </span>\n'
        '      <span>\n'
        '        Last reviewed:{" "}\n'
        '        <time dateTime=' + mod_dt_attr + '>\n'
        '          {new Date(' + mod_date_expr + ').toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}\n'
        '        </time>\n'
        '      </span>\n'
        '    </div>\n'
        '  </div>\n'
        '</div>'
    )

BRAND_BIO = (
    '<div className="card p-5 sm:p-6 mb-8 border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20">\n'
    '  <div className="flex gap-4 items-start">\n'
    '    <div className="w-12 h-12 rounded-full bg-sage-100 dark:bg-sage-900 flex items-center justify-center flex-shrink-0">\n'
    '      <span className="text-sage-600 dark:text-sage-400 text-lg">&#x1F4BB;</span>\n'
    '    </div>\n'
    '    <div>\n'
    '      <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-1">\n'
    '        MindCheck Tools &mdash; Your Friendly Developer LLC\n'
    '      </h3>\n'
    '      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">\n'
    '        Publisher and maintainer of free, evidence-based mental health screening tools for adults.\n'
    '      </p>\n'
    '      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">\n'
    '        Content reviewed for clinical accuracy against authoritative sources including NIMH, APA, CDC, and WHO.\n'
    '      </p>\n'
    '    </div>\n'
    '  </div>\n'
    '</div>'
)

ORG_ENTITY = '{ "@type": "Organization", "name": "Your Friendly Developer LLC" }'

# ── Helpers ───────────────────────────────────────────────────────────────────

def parse_date_prop(raw):
    """
    Given a JSX prop value like:
      "2025-01-01"
      {"2026-05-12"}
      {POST_DATA.publishedDate}
    Return (dateTime_attr_str, new_Date_arg_str) for use in JSX.
    """
    raw = raw.strip()
    if raw.startswith('{') and raw.endswith('}'):
        inner = raw[1:-1].strip()
        if (inner.startswith('"') and inner.endswith('"')) or \
           (inner.startswith("'") and inner.endswith("'")):
            # String literal in braces: {"2026-05-12"}
            str_val = inner[1:-1]
            return (f'"{str_val}"', f'"{str_val}T00:00:00"')
        else:
            # JS expression: {POST_DATA.publishedDate}
            return (f'{{{inner}}}', f'{inner} + "T00:00:00"')
    elif raw.startswith('"') and raw.endswith('"'):
        str_val = raw[1:-1]
        return (f'"{str_val}"', f'"{str_val}T00:00:00"')
    else:
        return (f'"{raw}"', f'"{raw}T00:00:00"')

# Regex: <AuthorByline publishedDate=VAL modifiedDate=VAL />
# Handles any combination of string or expression props, optional whitespace/newlines
BYLINE_RE = re.compile(
    r'<AuthorByline\s+'
    r'publishedDate=(\{[^}]+\}|"[^"]*"|\'[^\']*\')\s+'
    r'modifiedDate=(\{[^}]+\}|"[^"]*"|\'[^\']*\')\s*/>',
    re.DOTALL
)

# Regex: <AuthorBio publishedDate=VAL modifiedDate=VAL />
BIO_RE = re.compile(
    r'<AuthorBio\s+'
    r'publishedDate=(\{[^}]+\}|"[^"]*"|\'[^\']*\')\s+'
    r'modifiedDate=(\{[^}]+\}|"[^"]*"|\'[^\']*\')\s*/>',
    re.DOTALL
)

def replace_byline(m):
    pub_dt, pub_expr = parse_date_prop(m.group(1))
    mod_dt, mod_expr = parse_date_prop(m.group(2))
    return brand_byline(pub_dt, pub_expr, mod_dt, mod_expr)

def replace_bio(m):
    return BRAND_BIO

def transform_article_json_ld(content):
    """
    articleJsonLd() is always a one-liner in blog pages.
    JSON.stringify(articleJsonLd({ ... }))
    → JSON.stringify({ ...articleJsonLd({ ... }), author: ORG, reviewedBy: ORG })
    """
    return re.sub(
        r'JSON\.stringify\((articleJsonLd\(\{[^}]+\}\))\)',
        lambda m: (
            'JSON.stringify({ ...' + m.group(1) +
            ', author: ' + ORG_ENTITY +
            ', reviewedBy: ' + ORG_ENTITY + ' })'
        ),
        content
    )

def transform_tool_json_ld(content):
    """
    Multi-line: JSON.stringify(\n  toolPageJsonLd({...})\n)
    → JSON.stringify({\n  ...toolPageJsonLd({...}),\n  reviewedBy: ORG\n})

    Also handles medicalWebPageJsonLd the same way.
    """
    def repl(m):
        fn_call = m.group(1)  # the whole toolPageJsonLd({...}) or medicalWebPageJsonLd({...})
        return 'JSON.stringify({\n      ...' + fn_call + ',\n      reviewedBy: ' + ORG_ENTITY + ',\n    })'

    # toolPageJsonLd - multiline with nested content
    content = re.sub(
        r'JSON\.stringify\(\s*(toolPageJsonLd\(\{[\s\S]*?\}\))\s*\)',
        repl,
        content
    )
    # medicalWebPageJsonLd - multiline with nested content
    content = re.sub(
        r'JSON\.stringify\(\s*(medicalWebPageJsonLd\(\{[\s\S]*?\}\))\s*\)',
        repl,
        content
    )
    return content

def transform_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    content = original

    # 1. Remove AuthorByline import
    content = re.sub(
        r'^import \{ AuthorByline \} from "@/components/AuthorByline";\n',
        '', content, flags=re.MULTILINE
    )
    # 2. Remove AuthorBio import
    content = re.sub(
        r'^import \{ AuthorBio \} from "@/components/AuthorBio";\n',
        '', content, flags=re.MULTILINE
    )

    # 3. JSON-LD transformations
    if 'articleJsonLd(' in content:
        content = transform_article_json_ld(content)
    if 'toolPageJsonLd(' in content or 'medicalWebPageJsonLd(' in content:
        content = transform_tool_json_ld(content)

    # 4. Replace AuthorByline JSX
    if 'AuthorByline' in content:
        content = BYLINE_RE.sub(replace_byline, content)

    # 5. Replace AuthorBio JSX
    if 'AuthorBio' in content:
        content = BIO_RE.sub(replace_bio, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# ── Main ──────────────────────────────────────────────────────────────────────

def collect_targets():
    targets = []
    for root, dirs, files in os.walk(BASE):
        # Skip node_modules etc
        dirs[:] = [d for d in dirs if d not in ('node_modules', '.next', '__pycache__')]
        for fname in files:
            if fname != 'page.tsx':
                continue
            full = os.path.join(root, fname)
            rel = os.path.relpath(full, BASE).replace('\\', '/')
            if rel in KEEP:
                continue
            # Only process files that actually use AuthorByline or AuthorBio
            with open(full, 'r', encoding='utf-8') as f:
                c = f.read()
            if 'AuthorByline' not in c and 'AuthorBio' not in c:
                continue
            targets.append((rel, full))
    return targets

def main():
    targets = collect_targets()
    changed = []
    skipped = []

    for rel, full in sorted(targets):
        ok = transform_file(full)
        if ok:
            changed.append(rel)
        else:
            skipped.append(rel)

    print(f"\n=== CHANGED ({len(changed)}) ===")
    for p in changed:
        print(f"  SWITCHED  {p}")

    if skipped:
        print(f"\n=== NO CHANGE ({len(skipped)}) ===")
        for p in skipped:
            print(f"  SKIPPED   {p}")

    print(f"\nDone. {len(changed)} files updated.")

if __name__ == "__main__":
    main()
