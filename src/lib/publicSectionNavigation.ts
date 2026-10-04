// Public directory navigation only. Never accept answers, results, arbitrary
// fragments or query parameters, and never expand analytics eligibility.
const DIRECTORY_SECTIONS = new Set([
  "#choose-a-tool", "#depression", "#anxiety", "#trauma-ptsd",
  "#alcohol-substance", "#adhd", "#eating-disorders", "#bpd", "#autism",
  "#personality", "#stress-burnout", "#wellbeing", "#loneliness", "#sleep",
  "#grief", "#clinical-guides", "#recovery-tools", "#coping",
]);

export function publicSectionHash(pathname: string, hash: string): string {
  return pathname === "/screening-tools" && DIRECTORY_SECTIONS.has(hash) ? hash : "";
}
