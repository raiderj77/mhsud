"use client";

import { useState, useCallback } from "react";

interface Props {
  toolName: string;
  toolUrl: string;
  score: string | number;
  severityLabel: string;
  scoreRange: string;
  interpretation: string;
  suggestion: string;
  reflectionPrompts: string[];
  /** Optional per-question responses for answer summary */
  responses?: { question: string; answer: string }[];
}

/**
 * "Download Reflection Summary" button that generates and downloads
 * a clean HTML file — entirely in the browser, zero server calls.
 *
 * Appears below results, above educational content.
 * Keyboard accessible, includes aria-label and loading/success states.
 */
export function ReflectionSummary({
  toolName,
  toolUrl,
  score,
  severityLabel,
  scoreRange,
  interpretation,
  suggestion,
  reflectionPrompts,
  responses,
}: Props) {
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");

  const handleDownload = useCallback(() => {
    setStatus("generating");

    // Allow UI to update before generating
    requestAnimationFrame(() => {
      const dateStr = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const responsesHtml = responses
        ? `
        <h2>Your Responses</h2>
        <table>
          <thead><tr><th>#</th><th>Question</th><th>Your Answer</th></tr></thead>
          <tbody>
            ${responses
              .map(
                (r, i) =>
                  `<tr><td>${i + 1}</td><td>${escapeHtml(r.question)}</td><td>${escapeHtml(r.answer)}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>`
        : "";

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(toolName)} — Reflection Summary</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; max-width: 700px; margin: 0 auto; padding: 32px 24px; line-height: 1.6; font-size: 15px; }
  h1 { font-size: 22px; margin-bottom: 4px; }
  h2 { font-size: 17px; margin-top: 28px; margin-bottom: 10px; color: #4a7c59; border-bottom: 1px solid #e5e5e5; padding-bottom: 6px; }
  p { margin-bottom: 10px; }
  .date { color: #888; font-size: 13px; margin-bottom: 20px; }
  .score-box { background: #f5f9f5; border: 1px solid #c8dcc8; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0; }
  .score-number { font-size: 42px; font-weight: 700; color: #4a7c59; }
  .score-label { font-size: 15px; font-weight: 600; color: #5a8a69; margin-top: 4px; }
  .interpretation { background: #fafaf8; border: 1px solid #e5e5e5; border-radius: 8px; padding: 16px; margin: 12px 0; }
  .warning-box { background: #fef3e2; border: 1px solid #f0d8a8; border-radius: 8px; padding: 16px; margin: 16px 0; }
  .warning-box strong { color: #b45309; }
  ol { padding-left: 24px; }
  ol li { margin-bottom: 10px; }
  .crisis { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; margin: 16px 0; }
  .crisis strong { color: #dc2626; }
  .crisis p { margin-bottom: 4px; font-size: 14px; }
  table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
  th, td { border: 1px solid #e5e5e5; padding: 8px 10px; text-align: left; }
  th { background: #f5f9f5; font-weight: 600; color: #4a7c59; }
  .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e5e5; color: #888; font-size: 12px; text-align: center; }
  .footer p { margin-bottom: 4px; }
  @media print { body { padding: 16px; } }
</style>
</head>
<body>
  <h1>${escapeHtml(toolName)}</h1>
  <p class="date">Completed on ${escapeHtml(dateStr)}</p>

  <div class="score-box">
    <div class="score-number">${escapeHtml(String(score))}</div>
    <div class="score-label">${escapeHtml(severityLabel)} (${escapeHtml(scoreRange)})</div>
  </div>

  <div class="interpretation">
    <p>${escapeHtml(interpretation)}</p>
  </div>

  <p><strong>What you can consider next:</strong> ${escapeHtml(suggestion)}</p>

  <div class="warning-box">
    <p><strong>What this score cannot tell you:</strong> This is a screening tool, not a clinical assessment. A single score from a self-check cannot capture the full picture of your mental health. Many factors — how you felt today, recent events, sleep, and physical health — influence your responses. Only a qualified healthcare professional who knows your situation can properly evaluate your well-being.</p>
  </div>

  ${responsesHtml}

  <h2>Reflection Questions</h2>
  <p>These questions are for personal reflection. There are no right or wrong answers.</p>
  <ol>
    ${reflectionPrompts.map((p) => `<li>${escapeHtml(p)}</li>`).join("\n    ")}
  </ol>

  <h2>Suggested Next Steps</h2>
  <p>Consider sharing this summary with a healthcare provider — a doctor, therapist, or counselor. You might say:</p>
  <p><em>"I took a ${escapeHtml(toolName)} online and scored ${escapeHtml(String(score))}. I would like to discuss what this means for me."</em></p>

  <div class="crisis">
    <strong>Crisis Resources (available 24/7)</strong>
    <p><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong></p>
    <p><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (free, confidential)</p>
    <p><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></p>
  </div>

  <div class="footer">
    <p>Generated locally in your browser. Nothing was stored or transmitted.</p>
    <p>${escapeHtml(toolUrl)}</p>
    <p>This is a screening tool, not a clinical assessment. Consult a healthcare professional for evaluation.</p>
  </div>
</body>
</html>`;

      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${toolName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}-reflection-summary.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    });
  }, [toolName, toolUrl, score, severityLabel, scoreRange, interpretation, suggestion, reflectionPrompts, responses]);

  return (
    <div className="mb-5">
      <button
        onClick={handleDownload}
        disabled={status === "generating"}
        aria-label="Download your reflection summary as a file"
        className="btn-secondary w-full sm:w-auto px-5 py-3 flex items-center justify-center gap-2 min-h-[44px] text-sm font-medium"
      >
        {status === "generating" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Generating…
          </>
        ) : status === "done" ? (
          <>
            <svg className="w-4 h-4 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sage-600 dark:text-sage-400">Summary ready — check your downloads</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
            </svg>
            Download Reflection Summary
          </>
        )}
      </button>
    </div>
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
