# Citation Backlog — MindCheck Tools Blog

**Generated:** 2026-06-04  
**Branch:** chore/citation-backlog  
**Status:** Reference only — do not merge until PR #36 (fix/ymyl-clinical-figures) is approved

---

## Methodology

### Traffic data
| Source | File | Window | Metric |
|---|---|---|---|
| GA4 | `Pages_and_screens_Page_path_and_screen_class.csv` | Feb 5 – May 5 2026 (90 days) | Active Users |
| GSC | `baselines/mindchecktools_gsc_extracted/Pages.csv` | Last 28 days (~Apr 19 – May 17 2026) | Impressions |

**Score = Active Users (GA4) + Impressions (GSC)**

### Citation scan
Pattern detected: `\d+(\.\d+)?(&ndash;|–|-)?(\d+(\.\d+)?)?%`  
Cited = parenthetical `(Author, year)` pattern `\([A-Z][a-z][^)]*\d{4}[^)]*\)` present on same line  
Uncited = percentage claim with no `(Author, year)` on same line  
Excluded from scan: JSX/CSS utility classes, import lines, ABV/BAC definitional constants

**Total % claims across 107 blog posts: 237**  
**Cited: 35 | Uncited: 202 | Posts with at least one uncited claim: 66**

### Coverage note
Only 34 of 107 blog posts appear in either traffic export. The remaining **73 posts have zero recorded sessions and impressions** in these windows — they are too new, too low-traffic, or not yet indexed. These are **deprioritised** for citation work until they achieve measurable traffic.

---

## Top 15 — Highest-traffic posts with uncited clinical claims

Ranked by Score descending. Posts not in this table either have zero traffic or zero uncited claims.

| Rank | Slug | Sessions | Impressions | Score | Uncited % claims |
|---|---|---|---|---|---|
| 1 | `what-does-asrs-score-mean` | 0 | 99 | **99** | 3 |
| 2 | `halt-checkin-guide` | 0 | 65 | **65** | 1 |
| 3 | `alcohol-screening-military-guide` | 0 | 48 | **48** | 2 |
| 4 | `depression-screening-guide` | 1 | 32 | **33** | 4 |
| 5 | `understanding-mental-health-screening-results` | 0 | 24 | **24** | 1 |
| 6 | `burnout-parents-guide` | 0 | 23 | **23** | 3 |
| 7 | `bpd-young-adults-guide` | 0 | 14 | **14** | 1 |
| 8 | `audit-guide` | 0 | 12 | **12** | 1 |
| 9 | `social-anxiety-college-guide` | 0 | 9 | **9** | 4 |
| 10 | `sleep-and-mood` | 3 | 5 | **8** | 5 |
| 11 | `bipolar-vs-depression` | 0 | 7 | **7** | 1 |
| 12 | `burnout-nurses-guide` | 0 | 7 | **7** | 3 |
| 13 | `anxiety-coping-strategies` | 1 | 5 | **6** | **10** |
| 14 | `sobriety-calculator-guide` | 0 | 3 | **3** | 1 |
| 15 | `insomnia-test-guide` | 0 | 3 | **3** | 3 |

---

## Full ranked table — all 30 posts with measurable traffic

`!` = has uncited clinical claims

| Rank | Slug | Sessions | Impressions | Score | Uncited |
|---|---|---|---|---|---|
| 1 | `what-does-oci-r-score-mean` | 0 | 497 | 497 | 0 |
| 2 | `dass-21-score-guide` | 0 | 199 | 199 | 0 |
| 3 | `what-does-asrs-score-mean` ! | 0 | 99 | 99 | 3 |
| 4 | `halt-checkin-guide` ! | 0 | 65 | 65 | 1 |
| 5 | `alcohol-screening-military-guide` ! | 0 | 48 | 48 | 2 |
| 6 | `depression-screening-guide` ! | 1 | 32 | 33 | 4 |
| 7 | `what-does-gad-7-score-mean` | 0 | 30 | 30 | 0 |
| 8 | `gad-7-guide` | 0 | 25 | 25 | 0 |
| 9 | `understanding-mental-health-screening-results` ! | 0 | 24 | 24 | 1 |
| 10 | `burnout-parents-guide` ! | 0 | 23 | 23 | 3 |
| 11 | `bpd-young-adults-guide` ! | 0 | 14 | 14 | 1 |
| 12 | `phq-9-guide` | 1 | 12 | 13 | 0 |
| 13 | `audit-guide` ! | 0 | 12 | 12 | 1 |
| 14 | `social-anxiety-college-guide` ! | 0 | 9 | 9 | 4 |
| 15 | `sleep-and-mood` ! | 3 | 5 | 8 | 5 |
| 16 | `bipolar-vs-depression` ! | 0 | 7 | 7 | 1 |
| 17 | `burnout-nurses-guide` ! | 0 | 7 | 7 | 3 |
| 18 | `anxiety-coping-strategies` ! | 1 | 5 | 6 | 10 |
| 19 | `sobriety-calculator-guide` ! | 0 | 3 | 3 | 1 |
| 20 | `mental-health-and-sleep` | 0 | 3 | 3 | 0 |
| 21 | `insomnia-test-guide` ! | 0 | 3 | 3 | 3 |
| 22 | `dast-10-guide` | 2 | 0 | 2 | 0 |
| 23 | `how-to-talk-to-doctor-about-mental-health` | 0 | 2 | 2 | 0 |
| 24 | `work-stress-vs-burnout` ! | 2 | 0 | 2 | 1 |
| 25 | `dast-10-scoring-interpretation` | 1 | 0 | 1 | 0 |
| 26 | `ptsd-first-responders-guide` ! | 0 | 1 | 1 | 4 |
| 27 | `social-anxiety-vs-introversion` | 1 | 0 | 1 | 0 |
| 28 | `ptsd-screening-guide` ! | 0 | 1 | 1 | 1 |
| 29 | `seasonal-affective-disorder` ! | 1 | 0 | 1 | 2 |
| 30 | `what-is-adhd-in-adults` ! | 0 | 1 | 1 | 1 |

---

## Editorial notes

### Highest citation debt by volume
`anxiety-coping-strategies` has **10 uncited % claims** — the most of any post in the entire blog — but ranks only #13 by traffic score (6). The topic is high-value and competitive; it will attract scrutiny when it starts ranking. Address before it gains traffic.

### Most urgent by traffic × YMYL risk
`depression-screening-guide` (score 33, 4 uncited claims) is the highest-YMYL-risk post with meaningful impressions. Its uncited claims include the PHQ-9 88%/88% sensitivity/specificity figure and treatment response rates, both of which are verifiable from published validation studies (Kroenke et al., 2001).

`what-does-asrs-score-mean` (score 99, 3 uncited) is the single highest-traffic post needing citations. Two of its three uncited lines are restatements of figures that are cited on a nearby line — a quick copy-citation fix.

### Clean top two (no action needed)
`what-does-oci-r-score-mean` (score 497) and `dass-21-score-guide` (score 199) are the two highest-traffic posts and have zero uncited claims.

### Citation pattern note
Several posts show as "uncited" because the detected citation uses an org abbreviation (`(NIDA)`, `(2023 YRBS)`, `(VA)`) rather than the `(Author, year)` parenthetical the scanner requires. Before adding new citations, verify whether an org-name attribution already exists on the line — it may only need a year appended, not a full new citation.

### Deprioritised posts (73 with zero traffic)
The 73 blog posts absent from both GA4 and GSC exports have no measurable traffic and are excluded from this backlog. Re-run this scan after the next GSC/GA4 export cycle to catch any that begin ranking.

---

## How to re-run this scan

```bash
# From repo root — regenerates uncited % counts per post
python3 - <<'EOF'
import re, os, csv
# ... (see scripts/citation_scan.py once extracted)
EOF
```

Raw data files:
- `~/Downloads/Pages_and_screens_Page_path_and_screen_class.csv` (GA4 export)
- `~/empire/baselines/mindchecktools_gsc_extracted/Pages.csv` (GSC export)
