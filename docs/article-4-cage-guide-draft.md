# Article 4 (DRAFT for coordinator review, do not publish as-is)

Program: MindCheck article program, Family 6 (CAGE questionnaire).
Primary keyword: **cage questionnaire** (9,900 vol, CPC $8.89 [SV], difficulty 23 [KD]).
Secondary keyword: **cage questionnaire scoring** (difficulty 0 [KD]).
Family total: 9,930 [KI]. Head-led family: nearly all the demand is the head term itself. Psychology Today holds no top-10 slot in this family; its "cage" rankings are literal cages [RK].

## Step 0 rights finding, read before porting (this determined the article's shape)

**Shape chosen: the explainer variant, modeled on article 3 (the DAST guide). No questionnaire is administered, no item text is printed, and the CTAs route to the AUDIT and AUDIT-C.** The evidence, all verified 2026-11-25:

1. **The rights register has no plain CAGE row at all.** docs/instrument-evidence-rights-register.md in the mhsud repo covers 27 instrument routes. The only CAGE-family entry is row 11, `/cage-aid-substance-abuse-screening` (CAGE-AID), marked **BLOCKED**: "reproduction terms, form/scoring parity, exact wording, and canonical date; not public access." Its recorded basis: the University of Washington National HIV Curriculum publicly administers the full CAGE-AID form, but "that page does not grant third-party commercial reproduction rights." The register's remediation table says the CAGE-AID route needs a "Written public-electronic/commercial reproduction grant plus exact form/scoring review." For the plain CAGE there is no row, no route, and no documented grant or determination on file.
2. **The live site has no CAGE tool and no CAGE page.** The repo route inventory contains exactly one cage route (cage-aid-substance-abuse-screening). The live sitemap (checked 2026-11-25) contains the CAGE-AID information URL and no plain CAGE URL. The live CAGE-AID page states the site's posture in its own words: "MindCheck Tools does not reproduce, administer, score, or interpret the CAGE-AID on this public website," with rights status "No authoritative grant for public commercial electronic reproduction is on file."
3. **The family research premise is false, same failure as the DAST.** keyword-families.md says "We already run the CAGE screening," and competitor-keyword-map.md's Family 6 plan calls for "the four questions" and "the working CAGE embedded (we already run it)." Neither is true. There is no CAGE screening on the site to embed, and no register clearance to print the questions. Both files need the same correction treatment the DAST claim got.
4. **The honest nuance, so the coordinator sees the whole picture:** the plain CAGE's external posture is genuinely different from the DAST's. No rights holder is asserting permission terms for it the way CAMH does for the DAST. State health agencies publish the full form and its scoring openly (the Virginia Department of Behavioral Health and Developmental Services CAGE document and the Connecticut DMHAS questionnaire PDF, both read for this draft, print the scoring rule and cite Ewing 1984), and scale-library references describe the CAGE as reproduced freely in clinical and public-health materials for decades with no licensing process. That makes the plain CAGE a plausible candidate for a future register determination. But a determination is not on file today, and the site's standing rule for instruments without one is explain, do not administer. This article follows that rule. If the register ever records a clearance, this page is the natural home for the tool, and its opening and FAQ 3 get rewritten at that point, exactly as article 3 notes for the DAST.

## Porting spec (matches src/app/what-is-the-audit-test/page.tsx conventions)

- New route: `src/app/what-is-the-cage-questionnaire/page.tsx`, a React server page in the
  exact pattern of the AUDIT explainer (PR #177) and articles 1 to 3.
- Constants: PAGE_URL = `${SITE_URL}/what-is-the-cage-questionnaire`; TITLE and DESCRIPTION
  below; LINK_CLASS, H2, P, and the Bullets helper copied from the AUDIT article,
  **with one change: LINK_CLASS must include `break-all` from the first commit**
  (article 1 lesson: its PR failed its first check run because full source URLs as
  link text overflowed a 390px viewport; the fix was adding break-all to that
  page's LINK_CLASS).
- Worktree note for whoever ports this: worktrees branched off current main need
  `npm install` after copying node_modules, because the backend merge (PR #201)
  added Supabase packages that a stale node_modules copy will miss.
- Metadata: `createMetadata({ path: "/what-is-the-cage-questionnaire", title: TITLE, description: DESCRIPTION })`.
- JSON-LD scripts, same three as the AUDIT article: articleJsonLd (datePublished and
  dateModified set to the ship date at publish), faqJsonLd built from the FAQ_DATA in
  the FAQ section below, breadcrumbJsonLd: Home > Tools and guides (/screening-tools) > TITLE.
- Header: "Guide" badge, H1 = TITLE, byline line in the AUDIT article's format:
  "By Jason Ramirez, CADC-II. Published: [SHIP DATE]. Updated: [SHIP DATE]."
  Draft dates in the copy below read November 25, 2026; set them to the actual ship
  date at publish, per the honest-dates rule.
- Both tables port to the AUDIT article's HTML table pattern (overflow-x-auto
  wrapper, border-sand-200 table, bg-sand-50 thead). The concept table's sr-only
  caption: "The four CAGE concept areas named by the acronym". The scoring table's
  sr-only caption: "CAGE questionnaire score interpretation: total yes answers and
  what each range means". The comparison table's sr-only caption: "The CAGE, the
  CAGE-AID, and the AUDIT compared".
- The crisis card near the end uses the AUDIT article's card pattern (card p-5
  sm:p-6; crisis entries with the same three resources and the same colors).
- Footer: reviewer-scope block in the AUDIT article's format (see the footer
  section) plus `<ToolReviewerBio lastReviewed="[SHIP DATE]" />`.
- Also touch at port time, mirroring the earlier articles: add the route to
  src/app/sitemap.ts, add one line each to public/llms.txt and public/llms-full.txt,
  add a related-reading link from src/app/what-is-the-audit-test/page.tsx, from
  src/app/what-is-the-dast-test/page.tsx (article 3), and from the CAGE-AID
  information page (src/app/cage-aid-substance-abuse-screening/page.tsx), where this
  guide is the natural next read.
- Rights guard at port: do not add the questionnaire, a score calculator, or any
  item text to this page at port time or later without a documented register
  determination for the plain CAGE. The page is an explainer until that
  determination exists.

TITLE: What Is the CAGE Questionnaire? Scoring, the 2-Answer Threshold, and What a Positive Screen Means
DESCRIPTION: The CAGE questionnaire explained: the four topic areas behind the acronym, how scoring works, why 2 or more yes answers is the clinically significant threshold, how it compares to the CAGE-AID and the AUDIT, and what a positive screen does and does not mean.

<!-- BEGIN ARTICLE COPY -->

## [Answer first]

The CAGE questionnaire is a four-question alcohol screening tool used in clinics since the 1980s. Each question is answered yes or no, each "yes" scores one point, and a total of **2 or more out of 4 is considered clinically significant**: a positive screen that calls for a fuller conversation about drinking. The name is an acronym built from the four things the questions ask about: feeling you should **C**ut down, being **A**nnoyed by criticism of your drinking, feeling **G**uilty about drinking, and needing an **E**ye-opener, a drink first thing in the morning. Unusually for a screening tool, the questions are asked in a lifetime frame, "have you ever," so the CAGE flags a history of problem drinking rather than measuring what you drank this month.

One honest note before the details. MindCheck Tools does not offer the CAGE as an online questionnaire, and this page explains the instrument instead of administering it. The site's instrument register has no documented clearance on file for the CAGE, and MindCheck does not run questionnaires it has not cleared, the same boundary it keeps for the [CAGE-AID](https://mindchecktools.com/cage-aid-substance-abuse-screening) and the DAST. What does run here, free and private, is the alcohol screening family the CAGE is most often compared with: the [AUDIT-C](https://mindchecktools.com/audit-c-alcohol-screen) (3 questions about current drinking) and the full [AUDIT](https://mindchecktools.com/audit-alcohol-test) (10 questions). If a clinician has handed you the CAGE, or a CAGE score appears in your records and you want to know what it means, this page is the explanation.

## What the CAGE is

The CAGE is a brief screening questionnaire for alcohol problems, designed to be asked in an ordinary clinical interview in under a minute. It does not ask how much you drink or how often. It asks about four experiences that tend to show up when drinking has become a problem: trying or feeling you should cut back, other people's criticism of your drinking getting under your skin, guilt about drinking, and morning drinking to steady yourself. A screening tool's job is triage, not verdicts: the CAGE sorts people into "probably fine, no further questions" and "worth a real assessment," and it does that job with four questions instead of forty.

What the CAGE is not:

- **Not a diagnosis.** A positive screen is a reason for a diagnostic evaluation, not the evaluation itself. Alcohol use disorder is diagnosed against clinical criteria by a professional who can ask follow-up questions.
- **Not a measure of current drinking.** The lifetime frame means a person who drank problematically a decade ago and has been sober since can still screen positive. That is by design, and it is also the tool's biggest interpretive trap, covered below.
- **Not a consumption count.** Someone drinking heavily right now whose drinking has not yet produced these four experiences can screen negative. The CAGE detects consequences and loss-of-control signals, not volume.
- **Not the CAGE-AID.** The CAGE-AID is a separate, later adaptation that widens the same four questions to cover other drugs as well as alcohol. It has its own evidence and its own rights status on this site, and the comparison section below separates the two.

## Where it came from

The questions were developed by Dr. John A. Ewing, a psychiatrist at the University of North Carolina, out of clinical interview work on alcohol problems. A first validation study by Mayfield, McLeod, and Hall appeared in the American Journal of Psychiatry in 1974. Ewing's own description, "Detecting alcoholism: The CAGE questionnaire," was published in JAMA in 1984, and it is the reference nearly every later paper cites. In that paper Ewing describes four clinical interview questions that had proved useful in identifying alcoholism, focusing on cutting down, annoyance at criticism, guilty feelings, and eye-openers, with the acronym serving as a memory aid for the physician.

Two things about that history matter for a modern reader. First, the tool was built for a clinician to ask out loud, in a conversation where the answers could be followed up. Its migration onto paper forms, PDFs, and websites came later. Second, the 1984 paper's language is of its time: it says "alcoholism," where clinicians today diagnose alcohol use disorder on a severity scale. The questions survived the vocabulary change because the four experiences they ask about did not change.

## The four questions, at the level of what they ask about

The item wording belongs to the instrument, so this page describes the four concept areas rather than reprinting the questions. In practice the areas are so widely summarized that the acronym itself gives them away:

| Letter | Concept area | What it is getting at |
| --- | --- | --- |
| C | Cut down | Whether the person has felt they should reduce their drinking, a sign the habit has grown past their own intentions |
| A | Annoyed | Whether criticism of their drinking from other people has annoyed them, a sign drinking has become visible and contested at home or at work |
| G | Guilty | Whether the person has felt bad or guilty about drinking, a sign their own judgment is registering a problem |
| E | Eye-opener | Whether the person has needed a drink first thing in the morning to steady nerves or clear a hangover, a physical sign associated with dependence and withdrawal relief |

Read as a set, the four areas trace a pattern rather than a quantity: intention failing (C), relationships straining (A), conscience registering it (G), and the body asking for alcohol to start the day (E). That is why the tool can be four questions long. It is not sampling your drinking; it is checking whether the recognizable footprint of problem drinking is present anywhere in your history.

## How CAGE scoring works

Scoring is the simplest in the screening family. Each "yes" scores 1 point and each "no" scores 0, for a total from 0 to 4. The published scoring rule, as printed on the form distributed by state health agencies citing Ewing's 1984 paper, reads the total like this:

| Total yes answers | Reading | What it calls for |
| --- | --- | --- |
| 0 | Negative screen | No indication of an alcohol problem from this tool |
| 1 | Below threshold | Not a positive screen; some primary care guidance still treats one yes as a reason to ask more |
| 2 to 4 | Positive screen, clinically significant | A fuller diagnostic evaluation of drinking |

Three reading notes that keep the table honest:

- **The cutoff is a decision point, not a severity ladder.** A score of 4 is not "twice as bad" as a score of 2. The CAGE has no zones and no gradient; it answers one question, whether the threshold for a closer look has been crossed. Severity is what the follow-up assessment is for.
- **Some clinicians lower the threshold to 1.** The Connecticut Department of Mental Health and Addiction Services' published form notes that the normal cutoff is two positive answers, and recommends primary care clinicians lower it to one to cast a wider net. Settings choose the tradeoff between catching more cases and flagging more people who turn out fine.
- **The frame is "ever."** Every question is about whether something has happened at any point, not in the last year. A positive screen can be entirely about the past, which is why the result has to be read alongside a conversation about the present.

## How well does it work? (methodology and validation)

This guide was assembled from the instrument's primary sources and its main validation review: Ewing's 1984 JAMA paper for the design, the 1974 Mayfield validation study, Dhalla and Kopec's 2007 review of the reliability and validity literature for the accuracy figures, Brown and Rounds 1995 for the CAGE-AID comparison, and the scoring rule as published on state health agency forms citing Ewing. No number in this section comes from a rehab blog or a calculator site.

- **Validation review (Dhalla and Kopec, 2007).** Reviewing the CAGE literature across populations, the authors found high test-retest reliability (0.80 to 0.95) and adequate correlations (0.48 to 0.70) with other screening instruments. For detecting alcohol abuse and dependence, the CAGE performed validly in medical and surgical inpatients, ambulatory medical patients, and psychiatric inpatients, with average sensitivity of 0.71 and specificity of 0.90 at the standard cutoff.
- **Where it performs unevenly.** The same review found performance in primary care patients was varied, and that the CAGE has not performed well in white women, in prenatal women, and in college students. It also concluded the CAGE is not an appropriate screening test for less severe forms of drinking: it was built to catch abuse and dependence, the heavier end of the spectrum, and quieter hazardous drinking passes under it.
- **What those numbers mean at the kitchen table.** Specificity of 0.90 means most people without an alcohol problem screen negative, so a positive deserves to be taken seriously. Sensitivity of 0.71 means the tool misses a real share of people who do have a problem, roughly three in ten in the populations studied, so a negative screen is weaker evidence than a positive one. Both directions point the same way: the screen opens a conversation, and a proper diagnostic evaluation using standard clinical criteria is what settles the question, which is the review's own conclusion.

**The honest limits, stated plainly:**

- It flags history, not the present. Because the frame is lifetime, the CAGE cannot tell a clinician whether drinking is a problem now. A positive screen in someone years sober is a prompt to ask about the past, not evidence about today.
- It misses current heavy drinking that has not yet produced its four experiences, and it was not designed for the less severe end of drinking problems at all.
- Its accuracy varies by population, and it has underperformed in women in several studied groups, including prenatal women, which is one reason pregnancy care developed its own screening tools.
- It is four self-reported answers. Like every screen, it is only as good as the honesty of the answers, and it screens; it does not diagnose.

## CAGE vs CAGE-AID vs AUDIT

The three names get mixed up constantly, and they are different instruments with different jobs:

| | CAGE | CAGE-AID | AUDIT |
| --- | --- | --- | --- |
| Covers | Alcohol only | Alcohol and other drugs together | Alcohol only |
| Questions | 4, yes or no | 4, yes or no, adapted to include drugs | 10, mostly frequency scales |
| Time frame | Lifetime ("have you ever") | Lifetime | Mostly the past 12 months |
| Output | A total, 0 to 4; 2 or more is a positive screen | A total, 0 to 4; read as a conjoint alcohol-and-drug screen | A total, 0 to 40, read in four risk zones |
| Origin | Ewing, JAMA, 1984 | Brown and Rounds, 1995, adapted from the CAGE | World Health Organization |
| Status on this site | Explained on this page; not administered | [Information only](https://mindchecktools.com/cage-aid-substance-abuse-screening); not administered | [Runs here](https://mindchecktools.com/audit-alcohol-test), free and private |

The CAGE-AID (CAGE Adapted to Include Drugs) was built because the plain CAGE says nothing about drugs other than alcohol. In Brown and Rounds' 1995 primary care study, the CAGE-AID was more sensitive than the CAGE for substance use disorders across most patient groups, and less specific, meaning it caught more real cases and raised more false alarms. It is a genuinely different tool, not a newer edition of the CAGE, and on this site it sits behind an explicit rights boundary: the register records it as blocked for reproduction, which is why its page explains without administering, like the DAST page. For drug-side screening questions in general, the [DAST guide](https://mindchecktools.com/what-is-the-dast-test) explains the instrument clinicians use there.

The practical difference between the CAGE and the AUDIT is the clock. The CAGE asks whether problem drinking has ever left its footprint; the AUDIT asks what your drinking looks like now and sorts it into zones with a next step attached to each. A clinician who wants a sixty-second lifetime check reaches for the CAGE. A reader who wants to understand their current pattern is better served by the AUDIT family, which is why those are the tools this site runs.

## Which screen fits your situation

- **Best fit for the CAGE:** a clinician who needs a very brief lifetime screen for alcohol abuse or dependence inside an interview, or a reader trying to understand a CAGE score that already exists in their records. Not a fit for: measuring current drinking, catching hazardous drinking early, or screening for drug use.
- **Best fit for the AUDIT or AUDIT-C:** anyone who wants to screen their drinking as it is now and get a zone with a concrete next step. Both run free and privately on this site: the [AUDIT-C](https://mindchecktools.com/audit-c-alcohol-screen) (3 questions) and the [full AUDIT](https://mindchecktools.com/audit-alcohol-test) (10 questions). Not a fit for: drugs other than alcohol.
- **Best fit for the CAGE-AID:** a primary care setting screening for alcohol and drug problems together, administered by the clinician. Not a fit for: self-scoring from this website, where it is information-only.
- **Best fit if you are worried about someone else:** none of these, answered on their behalf. The CAGE's questions are about the drinker's own experience (their guilt, their annoyance), and a partner's guesses are not a screen. The workable moves are in the worried-about-someone-else section below.

The objection that usually arrives here: "The four questions are printed on half the health websites in the country, so why won't this site just run them?" Two honest answers. First, widespread copying is not the same as a documented clearance, and MindCheck's register, the file where the site records what it may lawfully use, has no entry for the plain CAGE at all. Until that file records a determination, the site explains the instrument and runs the ones it has cleared, which is the same rule it applies to the DAST and the CAGE-AID. Second, the part readers actually need from this page, how the scoring works, where the threshold sits, and what a positive result does and does not mean, is all here. What is missing is only the answer form, and a clinician who uses the CAGE can put it in front of you in the setting it was designed for.

## What to do next, by result

If a clinician gave you the CAGE, or you answered it from a paper form and want to read your own total:

- **Score 0.** No action is called for by this tool. Keep the limit in mind: the CAGE cannot see current heavy drinking that has not yet caused its four experiences. If your drinking worries you anyway, the [AUDIT-C](https://mindchecktools.com/audit-c-alcohol-screen) reads the present tense and takes a minute.
- **Score 1.** Below the standard cutoff, and not nothing. One yes means one of the four experiences has happened. Some primary care guidance treats a single yes as enough to keep asking, and it is a reasonable prompt to run the AUDIT-C and see what your current pattern scores.
- **Score 2 to 4.** A positive screen, clinically significant by the published rule. The next step is a real assessment: a conversation with a clinician or a licensed substance use counselor who can separate past from present and judge severity properly. Bring the score; it tells the assessor where to start. If the drinking behind the score is in the past and you are sober now, say so plainly; the assessment will land very differently, and that conversation is still worth having once.

**Places to start:**

- Screen your current drinking with the [AUDIT-C](https://mindchecktools.com/audit-c-alcohol-screen) or the [full AUDIT](https://mindchecktools.com/audit-alcohol-test), free and private.
- Read how the AUDIT works in [What the AUDIT test is](https://mindchecktools.com/what-is-the-audit-test), including its four zones.
- Read the evidence and licensing notes for this and the site's other instruments on the [clinical evidence](https://mindchecktools.com/clinical-evidence) page.
- Browse [therapists](https://mindchecktools.com/therapists) in the MindCheck Tools California directory (listings cover Los Angeles, Monterey, San Benito, and Santa Cruz counties).
- Browse [substance use treatment programs](https://mindchecktools.com/facilities) in the facilities directory.
- Call SAMHSA's National Helpline at 1-800-662-4357 for free, confidential referrals anywhere in the U.S.

These links are the same for everyone who reads this article. Nothing here is matched to your answers, because this page collects none.

## If you are worried about someone else

Two of the four CAGE areas are, in effect, about you: the criticism that annoys the drinker is usually coming from the people who live with the drinking, and family complaints are often what brings the pattern into a clinic. You still cannot score the CAGE for them, because the other two areas, guilt and the felt need to cut down, live inside the drinker's own head. What you can do is name what you have seen, in specific events rather than verdicts, at a calm moment, and attach it to a concrete offer: an assessment appointment, a call to the SAMHSA helpline together, a ride. SAMHSA's National Helpline (1-800-662-4357) takes calls from family members too, and can talk through how to raise it. If the person drinks heavily every day, do not push a sudden stop on your own: withdrawal can be dangerous, and the [alcohol withdrawal timeline](https://mindchecktools.com/alcohol-withdrawal-timeline) explains why a clinician should plan it.

## Your privacy

This page asks you nothing. There is no CAGE questionnaire, form, or score on it. The screenings this site does run, like the AUDIT and AUDIT-C, process answers locally in your browser and are not intentionally sent to MindCheck Tools, and there is no account to create. Ordinary page requests can still create normal hosting records, and anything you copy, print, or leave open on a shared device is outside that protection. Learn more in the [Privacy Policy](https://mindchecktools.com/privacy).

## [Help and support, crisis card, standard pattern]

If you or someone you know is in crisis or immediate danger, call 911 or go to the nearest emergency room. For a suspected overdose, call 911 immediately; opioid overdoses can be reversed with naloxone if it is given in time.

- **988 Suicide and Crisis Lifeline:** call or text 988, 24 hours a day, 7 days a week (U.S.).
- **SAMHSA National Helpline:** 1-800-662-4357. Free, confidential, 24/7 treatment referral and information (U.S.).
- **Crisis Text Line:** text HOME to 741741 (U.S.).

More options are on the [crisis resources page](https://mindchecktools.com/crisis-resources).

## Frequently asked questions

### What is a positive CAGE score?

Two or more yes answers out of four. Each yes scores one point, and the published rule, printed on the form state health agencies distribute citing Ewing's 1984 paper, treats a total of 2 or greater as clinically significant: a positive screen that calls for a fuller diagnostic evaluation. A score of 1 sits below the cutoff, though some primary care guidance treats even one yes as a reason to keep asking.

### I would have answered yes to two of these years ago, but I barely drink now. Does that make me an alcoholic?

No, and the question shows the CAGE's main limit. The questions are framed as "have you ever," so a positive screen can be entirely about a past period of drinking; the tool flags history, not your current state. It also does not diagnose anything: alcohol use disorder is a clinical judgment made against diagnostic criteria, usually about the past 12 months. If an old positive screen is sitting in your records, the accurate reading is "this person once showed signs worth evaluating," and a clinician can update that picture in one conversation about the present.

### Why can't I take the CAGE questionnaire on this site?

Because MindCheck only administers instruments its rights register has cleared, and the register has no documented clearance on file for the CAGE. The site takes the same position on the CAGE-AID and the DAST, whose pages explain the instruments and their scoring without running them. The alcohol screens this site does run are the AUDIT-C and the full AUDIT, which ask about your drinking now and return a zone with next steps. If the register records a CAGE clearance in the future, this page will say so.

## Related reading on MindCheck Tools

- [What the AUDIT test is](https://mindchecktools.com/what-is-the-audit-test), the alcohol screening explained, with the questionnaire this site does run
- [What the DAST-10 is](https://mindchecktools.com/what-is-the-dast-test), the drug-side screening instrument, explained the same way
- [CAGE-AID information](https://mindchecktools.com/cage-aid-substance-abuse-screening), the combined alcohol-and-drug adaptation, and why this site explains it without administering it
- [Signs of alcoholism](https://mindchecktools.com/signs-of-alcoholism), the 11 signs clinicians use, in plain language
- [Alcohol withdrawal timeline](https://mindchecktools.com/alcohol-withdrawal-timeline), how long symptoms last, stage by stage
- [Clinical evidence](https://mindchecktools.com/clinical-evidence), sources, validation, and licensing notes for the instruments this site documents

## Sources

1. Ewing JA. Detecting alcoholism: The CAGE questionnaire. JAMA. 1984;252(14):1905-1907. https://pubmed.ncbi.nlm.nih.gov/6471323/
2. Mayfield D, McLeod G, Hall P. The CAGE questionnaire: validation of a new alcoholism screening instrument. American Journal of Psychiatry. 1974;131(10):1121-1123. https://pubmed.ncbi.nlm.nih.gov/4416585/
3. Dhalla S, Kopec JA. The CAGE questionnaire for alcohol misuse: a review of reliability and validity studies. Clinical and Investigative Medicine. 2007;30(1):E33-E41. https://pubmed.ncbi.nlm.nih.gov/17716538/
4. Brown RL, Rounds LA. Conjoint screening questionnaires for alcohol and other drug abuse: criterion validity in a primary care practice. Wisconsin Medical Journal. 1995;94(3):135-140. https://pubmed.ncbi.nlm.nih.gov/7778330/
5. Virginia Department of Behavioral Health and Developmental Services. The CAGE Questionnaire (form document): item responses scored 0 for "no" and 1 for "yes"; a total score of 2 or greater is considered clinically significant; source cited on the form: Ewing, 1984.
6. Connecticut Department of Mental Health and Addiction Services. CAGE-AID questionnaire document: the normal cutoff for the CAGE is two positive answers; primary care clinicians are advised to lower the threshold to one positive answer to cover a wider range.
7. Aisel scale library. CAGE: Scoring, Cutoffs and Interpretation. Development history entry: the questions were developed by John Ewing at the University of North Carolina, with a first validation study by Mayfield and colleagues in 1974, before Ewing's 1984 JAMA description.
8. MindCheck Tools instrument evidence and rights register, and the live CAGE-AID information page: the register's CAGE-AID row (blocked, reproduction terms unresolved), the absence of a plain CAGE row, and the site's information-only posture, verified against the live site 2026-11-25.

## [Footer: reviewer scope]

Written by Jason Ramirez, Certified Alcohol and Drug Counselor Level II (CADC-II). This credential covers substance use counseling. It is not medical, psychiatric, or psychological review. This article is general information about a screening instrument and how its scores are interpreted, not medical advice and not a diagnosis. The CAGE questionnaire remains the work of its author and publisher; this page neither reproduces nor administers it, and the CAGE-AID page on this site states the same boundary for that instrument. Questions about your own drinking and health belong with a medical professional or a licensed counselor who can evaluate you directly. Last reviewed November 25, 2026.

[ToolReviewerBio component, lastReviewed = ship date]

<!-- END ARTICLE COPY -->

## FAQ_DATA for the faqJsonLd script (same text as the FAQ section, kept in sync at port)

1. Q: "What is a positive CAGE score?" A: "Two or more yes answers out of four. Each yes scores one point, and the published rule, printed on the form state health agencies distribute citing Ewing's 1984 paper, treats a total of 2 or greater as clinically significant: a positive screen that calls for a fuller diagnostic evaluation. A score of 1 sits below the cutoff, though some primary care guidance treats even one yes as a reason to keep asking."
2. Q: "I would have answered yes to two of these years ago, but I barely drink now. Does that make me an alcoholic?" A: "No, and the question shows the CAGE's main limit. The questions are framed as 'have you ever,' so a positive screen can be entirely about a past period of drinking; the tool flags history, not your current state. It also does not diagnose anything: alcohol use disorder is a clinical judgment made against diagnostic criteria, usually about the past 12 months. If an old positive screen is sitting in your records, the accurate reading is 'this person once showed signs worth evaluating,' and a clinician can update that picture in one conversation about the present."
3. Q: "Why can't I take the CAGE questionnaire on this site?" A: "Because MindCheck only administers instruments its rights register has cleared, and the register has no documented clearance on file for the CAGE. The site takes the same position on the CAGE-AID and the DAST, whose pages explain the instruments and their scoring without running them. The alcohol screens this site does run are the AUDIT-C and the full AUDIT, which ask about your drinking now and return a zone with next steps. If the register records a CAGE clearance in the future, this page will say so."

## Competitive targets (from competitor-keyword-map.md, Family 6)

- On the head term "cage questionnaire" (difficulty 23): mdcalc.com at #1 (a clinician calculator: scoring math with no plain-language interpretation, no privacy story, no next step) and americanaddictioncenters.org at #2 are the strong holders and the long game. The first realistic takes are portal.ct.gov at #3 (a state health department PDF), jamanetwork.com at #4 (the 1984 paper itself, primary source but not a reader guide), and myhealth.alberta.ca at #5 (a Canadian provincial page ranking on a US term, pure geographic mismatch).
- On "cage questionnaire scoring" (difficulty 0): the keyword map's named first takes are addictionsandrecovery.org at #4 and zinniahealth.com at #3, with verahealth.ai (an AI calculator startup) at #1, europepmc.org at #2, and scribd, researchgate, and quizlet flashcards filling #5 to #7. None of the tier combines the scoring rule, the threshold nuance (the cutoff as a decision point, the one-yes primary care variant), a named credential, and a next step. This page's full scoring section and interpretation table are the direct answer.
- Honest limit on the pitch, same as article 3: several incumbents rank with reproduced copies of the instrument itself, and the keyword map's Family 6 plan assumed a working embedded CAGE that does not exist. This page competes without the items, on interpretation, credential, and next steps. If it cannot crack these slots without the questionnaire, that is evidence for the register determination (and possibly the tool) being the missing asset, and it should be reported back rather than worked around.

Checklist: [1 primary keyword congruent (head phrase "cage questionnaire" in title, H1, and slug /what-is-the-cage-questionnaire; secondary term "cage questionnaire scoring" carried in the scoring section heading and copy); 2 real author and dates (Jason Ramirez, CADC-II; November 25, 2026 draft dates, ship date set at publish); 3 answer first (what the CAGE is, the acronym, the 2-or-more threshold, and the honest no-questionnaire note with the AUDIT-C and AUDIT CTAs, all in the first screen); 4 definition early, including what the CAGE is not (not a diagnosis, not a measure of current drinking, not a consumption count, not the CAGE-AID); 5 methodology section (primary sources, the validation review's figures with their populations, the scoring rule's provenance on state-published forms, honest limits); 6 conditional framing in "Which screen fits your situation" (best fit and not a fit for the CAGE, the AUDIT family, the CAGE-AID, and the worried-about-someone-else case); 7 quantitative HTML tables (the four concept areas, the score interpretation table with the 0 / 1 / 2 to 4 bands, and the three-way CAGE vs CAGE-AID vs AUDIT comparison by coverage, format, time frame, output, origin, and site status); 9 how to choose (the same decision section, by reader situation, plus next steps by result band); 10 objection handled in-body ("the questions are printed everywhere, why won't this site run them?", answered with the register facts); 12 FAQ, 3 questions with short answers; 13 internal links (AUDIT, AUDIT-C, AUDIT explainer, DAST guide, CAGE-AID information, signs of alcoholism, withdrawal timeline, clinical evidence, screening framing, therapists, facilities, crisis resources, privacy) plus source links; 14 three-plus intent-matched CTAs (AUDIT-C and AUDIT screenings in the opening, screening and evidence links in-body, directories and helpline card at the end)] / [8 original evidence: partial, carried by the site's own rights register posture and the band-by-band reader translation of the published scoring rule, no screenshot exists because there is no tool to screenshot; 11 proof: no MindCheck proof section, by design, the only numbers are cited instrument and validation figures] / proof sources: Ewing 1984 (PubMed PMID 6471323, abstract read in full: four clinical interview questions focused on Cutting down, Annoyance by criticism, Guilty feeling, and Eye-openers, the acronym as the physician's memory aid), Mayfield, McLeod and Hall 1974 (PubMed PMID 4416585, citation and indexing read: the first validation of the instrument, American Journal of Psychiatry 131(10):1121-1123), Dhalla and Kopec 2007 (PubMed PMID 17716538, abstract read in full: test-retest reliability 0.80 to 0.95, correlations 0.48 to 0.70 with other instruments, average sensitivity 0.71 and specificity 0.90 for alcohol abuse and dependence in medical and surgical inpatients, ambulatory medical patients, and psychiatric inpatients, varied performance in primary care, not performed well in white women, prenatal women, and college students, not an appropriate test for less severe forms of drinking, positive screen to be followed by diagnostic evaluation), Brown and Rounds 1995 (PubMed PMID 7778330, abstract read in full: CAGE-AID adapted from the CAGE, more sensitive and less specific than the CAGE in a primary care sample of 124 patients, criterion validity against DSM-III-R diagnoses), Virginia DBHDS CAGE form document (scoring rule as published by a state agency: yes 1, no 0, total of 2 or greater clinically significant, source cited on the form as Ewing 1984), Connecticut DMHAS questionnaire document (normal CAGE cutoff is two positive answers, with the recommendation that primary care clinicians lower the threshold to one), Aisel scale library CAGE entry (development history: Ewing at the University of North Carolina, Mayfield validation 1974, JAMA description 1984), MindCheck rights register and live CAGE-AID page (register row 11 BLOCKED for CAGE-AID, no plain CAGE row, live sitemap and route inventory contain no CAGE tool or page, all verified 2026-11-25)
