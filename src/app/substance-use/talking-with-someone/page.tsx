import Link from "next/link";
import { SubstanceGuide } from "@/components/SubstanceGuide";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({ path: "/substance-use/talking-with-someone", title: "Talking With Someone About Their Drinking or Drug Use", description: "Prepare a respectful conversation about alcohol or drugs, offer practical help and find support for yourself. No diagnosis, confrontation script or promised outcome." });

export default function TalkingPage() {
  return <SubstanceGuide path="/substance-use/talking-with-someone" title="Talking with someone about their drinking or drug use" answer="Aim for a calm conversation about what you have noticed and what help the person might want. Listening and offering a practical next step do not require you to diagnose them, win an argument or take responsibility for their choices." steps={["Prepare a calm conversation", "Listen and offer a choice", "Keep your own support in view"]}>
    <h2>Prepare a calm conversation</h2>
    <p><a href="https://alcoholtreatment.niaaa.nih.gov/support-through-the-process/starting-the-conversation" rel="noreferrer">NIAAA recommends a supportive, nonjudgmental approach</a>, preparation, and a time when the person is safe and stable rather than intoxicated. It advises against cornering the person or having a group confront them. If there is immediate danger, use emergency help instead of trying to have this discussion.</p>
    <p>An original example is: “I care about you. I noticed you missed something important to you, and I wanted to ask how things are going.” Use a real observation you can describe accurately. Avoid labels, an online score used as proof, or claims about what is happening inside someone else&apos;s mind.</p>
    <h2>Listen and offer a choice</h2>
    <p>You might ask, “Would you like me to listen, help find information, or leave this for another time?” That is a suggested opening, not a tested intervention or a promise that the conversation will go well. Leave room for the person to describe their own priorities.</p>
    <p>If they want information, our <Link href="/substance-use/find-support">support-finding guide</Link> provides official starting points. NIAAA suggests involving the person in exploring options and giving them time if they are not ready to choose. Offering another conversation can be more useful than repeatedly pushing the same option.</p>
    <h2>Keep your own support in view</h2>
    <p>You can be clear about what help you can realistically offer and what you cannot take on. This page cannot advise you on a dangerous relationship or an individual safety plan. Seek appropriate professional or crisis support when safety is uncertain.</p>
    <p><a href="https://alcoholtreatment.niaaa.nih.gov/support-through-the-process/caretaker-support-resources" rel="noreferrer">NIAAA lists support for family and friends</a>, including Al-Anon and SMART Recovery Family and Friends, as well as professional support. Their formats differ; check the organizations&apos; own descriptions and choose based on your needs. Supporting someone does not require handling everything alone.</p>
    <h2>What this guide cannot establish</h2>
    <p>A conversation, checklist or screening result cannot establish that another person has a substance-use disorder or determine their treatment. Do not secretly administer a screener on their behalf. See <Link href="/substance-use/screening-limits">what screening measures and leaves unanswered</Link>.</p>
    <p>If you save notes for yourself, keep them private and avoid recording another person&apos;s disclosures on a shared device or public page. You do not need to send personal stories to MindCheckTools to use these resources.</p>
  </SubstanceGuide>;
}
