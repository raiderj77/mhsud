import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { DailyCheckInClient } from "./DailyCheckInClient";

const TOOL_URL = `${SITE_URL}/daily-recovery-check-in`;

export const metadata: Metadata = createMetadata({
  path: "/daily-recovery-check-in",
  title: "Daily Recovery Check-In | Free Sobriety Journal",
  description:
    "Quick daily wellness check for recovery. Track mood, cravings, sleep, stress, connection, and health. See 7-day and 30-day trends with streak counter. Free, private, saves locally.",
  keywords: [
    "daily recovery check in", "sobriety check in",
    "recovery journal online", "daily sobriety tracker",
    "recovery wellness check", "addiction recovery journal",
    "daily mood tracker recovery", "sobriety journal app",
    "recovery check in tool", "daily wellness assessment",
    "craving tracker", "recovery streak counter",
  ],
  openGraph: {
    title: "Daily Recovery Check-In | Free Sobriety Journal",
    description: "Track mood, cravings, sleep, stress, connection, and health daily. See trends over time with a streak counter. Free and private.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "Why should I do a daily check-in during recovery?", answer: "Daily check-ins build self-awareness, which is one of the strongest predictors of sustained recovery. When you track your mood, cravings, sleep, and stress every day, you start to see patterns that are invisible in the moment. You might notice that your cravings spike after poor sleep, or that your mood drops on days when you feel disconnected from others. These patterns are early warning signs — and catching them early gives you time to use coping skills before a craving becomes overwhelming. Research in behavioral health consistently shows that people who self-monitor are more likely to maintain positive changes." },
  { question: "Where is my check-in data stored?", answer: "Your data is stored in your browser's localStorage — a small storage space on your device. It never leaves your computer or phone. We do not have a server, database, or any way to see your entries. This means your data is completely private, but it also means that clearing your browser data or switching devices will erase your history. If keeping a long-term record is important to you, consider periodically taking a screenshot of your trends or writing key observations in a physical journal." },
  { question: "What is the streak counter?", answer: "The streak counter tracks how many consecutive days you have completed a check-in. If you check in today and checked in yesterday, your streak continues. If you miss a day, the streak resets to zero (but your longest streak is remembered). Streaks are a simple but powerful motivational tool — many people find that maintaining a streak makes them more likely to check in even on difficult days. The streak measures consistency, not perfection. If your streak breaks, start a new one. The habit matters more than any single number." },
  { question: "How should I interpret the trend charts?", answer: "Look for patterns rather than individual numbers. A single bad day is normal — everyone has them. What matters is the trend over 7 to 30 days. Are your average scores stable, improving, or declining? Is there a connection between your sleep score and your craving score the next day? Do your mood scores drop on certain days of the week? If you see a consistent downward trend across multiple dimensions, that is a signal to reach out for additional support — talk to your counselor, sponsor, or therapist about what you are seeing." },
  { question: "Can I edit a past check-in?", answer: "You can edit today's check-in by tapping the Edit button on the dashboard. Past entries cannot be edited, and this is intentional — the value of the check-in comes from capturing how you genuinely feel in the moment. Editing past entries to look better would undermine the tool's purpose. If you realize a past entry was inaccurate, just note it mentally and focus on being honest going forward. Honesty with yourself is the foundation of recovery." },
  { question: "What time should I do my daily check-in?", answer: "The best time is whenever you will actually do it consistently. Many people prefer evening check-ins because they can reflect on the whole day, including sleep from the previous night. Others prefer morning check-ins to set an intention for the day. Some do both — a quick morning mood check and a fuller evening reflection. The most important thing is consistency: pick a time that works with your schedule and try to check in at roughly the same time each day. Setting a phone reminder can help build the habit." },
];

export default function DailyCheckInPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Daily Recovery Check-In",
              description: "A free daily wellness check for people in recovery. Track mood, craving level, sleep quality, stress, connection to others, and physical health on 1-10 scales. Includes gratitude and goal entries. Saves to browser localStorage for 7-day and 30-day trend tracking with streak counter.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Daily Recovery Check-In", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Daily Recovery Check-In?</h2>
        <h2>How Does the Recovery Check-In Work?</h2>
        <h2>What Do My Recovery Check-In Results Mean?</h2>
      </section>
<DailyCheckInClient faqData={FAQ_DATA} />
    </>
  );
}
