import Link from "next/link";
import { SubstanceGuide } from "@/components/SubstanceGuide";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ path: "/substance-use/find-support", title: "How to Find Substance-Use Support That Fits Your Needs", description: "Find official alcohol and drug support resources, prepare provider questions and distinguish treatment from peer support. No paid referrals or personalized recommendations." });

export default function FindSupportPage() {
  return <SubstanceGuide path="/substance-use/find-support" title="How to find substance-use support that fits your needs" answer="Start with an official information service or treatment directory, then confirm the provider's services, availability and costs directly. A directory entry or screening score does not establish which care is right for you." steps={["Find an official starting point", "Ask about practical fit", "Confirm the next step directly"]}>
    <h2>Find an official starting point</h2>
    <p><a href="https://www.samhsa.gov/find-help/national-helpline" rel="noreferrer">SAMHSA&apos;s National Helpline</a>, <a href="tel:18006624357">1-800-662-4357</a>, provides free treatment information and referrals, around the clock, in English and Spanish. You can call for yourself or to seek information for someone else. It is not emergency medical care. SAMHSA also links to <a href="https://findtreatment.gov/" rel="noreferrer">FindTreatment.gov</a> for finding services.</p>
    <p>For adults looking for alcohol treatment, the <a href="https://alcoholtreatment.niaaa.nih.gov/how-to-find-alcohol-treatment" rel="noreferrer">NIAAA Alcohol Treatment Navigator</a> explains how to search for providers, ask questions and compare options. These are information resources, not endorsements by MindCheckTools of a particular provider.</p>
    <h2>Prepare for the first contact</h2>
    <p>You can begin with a simple request: “I am looking for information about alcohol or drug support. What services do you provide, and how do I find out whether they fit my situation?” This is an original example, not a required script. Before sharing personal details, ask the service how it handles the information you give it.</p>
    <p>If you are helping someone else, ask what kind of practical help they want. Offering to find a phone number or sit nearby during a call is different from speaking for them or sending their health information without permission.</p>
    <h2>Ask about practical fit</h2>
    <p><a href="https://alcoholtreatment.niaaa.nih.gov/how-to-find-alcohol-treatment/10-questions-for-alcohol-treatment-programs" rel="noreferrer">NIAAA&apos;s provider questions</a> cover availability, cost, qualifications, assessment and treatment approach. Confirm language and accessibility needs, appointment format and any travel requirements with the provider. If insurance is involved, verify coverage with the insurer as well. Our <Link href="/treatment-cost-estimator">cost-planning guide</Link> helps organize unanswered questions without inventing a price.</p>
    <h2>Peer support and treatment have different roles</h2>
    <p>Peer groups can be another source of support. <a href="https://www.aa.org/find-aa" rel="noreferrer">Alcoholics Anonymous</a> offers a way to locate AA groups. <a href="https://smartrecovery.org/about-us/frequently-asked-questions" rel="noreferrer">SMART Recovery</a> describes its discussion meetings and tools. Check each group&apos;s official information about format, audience and participation. These are options to explore, not a ranking or a substitute for medical assessment.</p>
    <h2>Confirm a concrete next step</h2>
    <p>Before ending a call, you may want to write down whom to contact next, when to expect a reply, and what you still need to confirm. An unanswered call or unsuitable option does not tell you that no help is available. Return to the information service or directory for another option.</p>
    <p>For possible withdrawal or immediate danger, do not wait for a routine appointment or use a screening result to determine safety. See <Link href="/withdrawal-timeline">withdrawal safety information</Link> and the urgent resources below.</p>
  </SubstanceGuide>;
}
