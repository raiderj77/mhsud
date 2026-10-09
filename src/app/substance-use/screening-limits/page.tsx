import Link from "next/link";
import { SubstanceGuide } from "@/components/SubstanceGuide";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ path: "/substance-use/screening-limits", title: "What Substance-Use Screening Measures: What It Cannot Establish", description: "Understand substance-use screening, diagnostic limits, instrument rights and a practical next step. No questionnaire, scoring, diagnosis or personalized treatment advice." });

export default function ScreeningLimitsPage() {
  return <SubstanceGuide path="/substance-use/screening-limits" title="What substance-use screening measures: what it cannot establish" answer="A substance-use screening organizes reported information about alcohol or drug use to identify concerns worth discussing. A screening result cannot by itself diagnose a disorder, rule one out, establish safety or decide which treatment you need." steps={["Know the instrument and its purpose", "Keep the limits beside the result", "Choose a next conversation"]}>
    <h2>Know what the particular instrument asks about</h2>
    <p>Screeners differ in purpose, population and time period. WHO describes the AUDIT as a tool for identifying hazardous and harmful patterns of alcohol consumption in primary care. Read the <a href="https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a" rel="noreferrer">WHO AUDIT manual overview</a> for its intended context. Do not assume every alcohol or drug questionnaire measures the same thing.</p>
    <p>For orientation, this site provides <Link href="/audit-alcohol-test">AUDIT alcohol screening information</Link>, an <Link href="/audit-score-interpretation">AUDIT score guide</Link> and <Link href="/who-assist-substance-screening">information about WHO ASSIST</Link>. ASSIST remains information-only here: that page does not administer its questions or calculate a result. This explainer reproduces no protected instrument items or cutoffs.</p>
    <h2>Keep the limits beside the result</h2>
    <p>A number without the instrument name, intended audience and limitations can be misleading. Results also depend on the information supplied. A brief online measure does not include a full medical history, examination or assessment of your circumstances.</p>
    <p><a href="https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder" rel="noreferrer">NIAAA explains how healthcare professionals assess alcohol use disorder</a>. Screening and professional assessment have different roles. You do not need to reach a particular score before asking for support, and a low score does not cancel a concern you have.</p>
    <h2>Choose a useful next conversation</h2>
    <p>An optional way to prepare is to note the tool&apos;s name and one question you want answered. For example: “What does this screening result leave unanswered?” or “Who can help me understand my options?” These are suggested conversation starters, not a clinical interpretation.</p>
    <p>Discuss your result with a qualified professional. If you want help locating services, use our <Link href="/substance-use/find-support">support-finding guide</Link>. A result should never be used to decide whether withdrawal is safe; see <Link href="/withdrawal-timeline">withdrawal safety information</Link>.</p>
    <h2>Why rights and privacy matter</h2>
    <p>A questionnaire being available online does not grant this site permission to administer it. Our <Link href="/for-professionals/screening-instrument-rights-guide">instrument-rights guide</Link> distinguishes availability from permission. Only instruments approved for the exact interactive use may have that treatment here.</p>
    <p>If you choose to share a result with a professional, decide how and with whom you share it. Avoid putting answers or scores into a public link or a public comment. This site&apos;s local processing cannot protect a copy you deliberately send elsewhere.</p>
  </SubstanceGuide>;
}
