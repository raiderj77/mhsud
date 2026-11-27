"use client";

import { useMemo, useState, useCallback } from "react";
import { buildResultCardData, planResultCardMeaning } from "@/lib/resultCard.mjs";

interface Props {
  /** Display name of the tool, as shown on its results screen. */
  toolName: string;
  /** Canonical path of the tool, e.g. "/audit-c-alcohol-screen". */
  toolPath: string;
  /** Display-ready score from the results screen, e.g. "3 / 12". */
  score: string | number;
  /** The results screen's own band label for this score. */
  band: string;
  /** One plain-language line explaining the band. */
  meaning: string;
}

type CardData = ReturnType<typeof buildResultCardData>;

/**
 * The glanceable result card: one screen holding the test name, the
 * person's score, its band, and what the band means, with MindCheck Tools
 * branding, the tool's URL as an invitation, the screening line, and the
 * privacy line.
 *
 * The card is generated entirely on the device. The download renders a PNG
 * on a local canvas and saves it through a blob URL, the same on-device
 * export pattern as ReflectionSummary: the file is generated locally,
 * no server endpoint receives a result, and no URL encodes answers. The card carries
 * no norms or crowd comparisons, because MindCheck Tools holds no response
 * data to compare against.
 *
 * If the card data is invalid, the component renders nothing: the card is
 * an addition to the results screen and must never break it.
 */
export function ResultCard({ toolName, toolPath, score, band, meaning }: Props) {
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");

  const card = useMemo<CardData | null>(() => {
    try {
      return buildResultCardData({ toolName, toolPath, score, band, meaning });
    } catch {
      return null;
    }
  }, [toolName, toolPath, score, band, meaning]);

  const handleDownload = useCallback(() => {
    if (!card) return;
    setStatus("generating");
    requestAnimationFrame(() => {
      try {
        const canvas = drawResultCardPng(card);
        canvas.toBlob((blob) => {
          if (!blob) {
            setStatus("idle");
            return;
          }
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = card.fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          setStatus("done");
          setTimeout(() => setStatus("idle"), 3000);
        }, "image/png");
      } catch {
        setStatus("idle");
      }
    });
  }, [card]);

  if (!card) return null;

  return (
    <div className="card overflow-hidden mb-5">
      <div className="p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <p className="font-serif text-base font-bold text-neutral-900 dark:text-neutral-50">
            {card.brand}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{card.dateLabel}</p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Your result card · {card.toolName}
        </p>

        <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl px-5 py-4 mb-4">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-serif text-5xl font-bold text-sage-700 dark:text-sage-400 leading-none">
              {card.score}
            </span>
            <span className="text-base font-semibold text-sage-700 dark:text-sage-400">
              {card.band}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
            {card.meaning}
          </p>
        </div>

        <p className="text-xs text-sage-600 dark:text-sage-400 break-all">{card.inviteLine}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{card.privacyLine}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{card.screeningLine}</p>

        <div className="mt-4">
          <p className="sr-only" role="status" aria-live="polite">
            {status === "generating"
              ? "Generating your result card."
              : status === "done"
                ? "Result card downloaded."
                : ""}
          </p>
          <button
            type="button"
            onClick={handleDownload}
            disabled={status === "generating"}
            aria-label="Download your result card as an image"
            className="btn-secondary px-4 py-2.5 text-sm flex items-center gap-2 min-h-[44px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
            </svg>
            {status === "done" ? "Card saved, check your downloads" : "Download Result Card"}
          </button>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            The image is created on this device; the site does not upload it. Anyone who can
            see the image can see this score, so share it only where you are comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PNG rendering (canvas, fully on-device)                            */
/* ------------------------------------------------------------------ */

const PNG_SIZE = 1080;
const PNG_MARGIN = 72;
const PNG_WIDTH = PNG_SIZE - PNG_MARGIN * 2;

const SANS = `-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`;
const SERIF = `Georgia, "Times New Roman", serif`;

function fitFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  startSize: number,
  minSize: number,
  fontFor: (size: number) => string,
): number {
  let size = startSize;
  ctx.font = fontFor(size);
  while (size > minSize && ctx.measureText(text).width > PNG_WIDTH) {
    size -= 2;
    ctx.font = fontFor(size);
  }
  return size;
}

function drawResultCardPng(card: CardData): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = PNG_SIZE;
  canvas.height = PNG_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is unavailable in this browser.");

  // Background and accent bar
  ctx.fillStyle = "#FBFAF7";
  ctx.fillRect(0, 0, PNG_SIZE, PNG_SIZE);
  ctx.fillStyle = "#4A7C59";
  ctx.fillRect(0, 0, PNG_SIZE, 28);

  const x = PNG_MARGIN;
  ctx.textBaseline = "alphabetic";

  // Brand and date
  ctx.fillStyle = "#1F2937";
  ctx.font = `700 46px ${SERIF}`;
  ctx.fillText(card.brand, x, 128);
  ctx.font = `400 30px ${SANS}`;
  ctx.fillStyle = "#6B7280";
  const dateWidth = ctx.measureText(card.dateLabel).width;
  ctx.fillText(card.dateLabel, PNG_SIZE - PNG_MARGIN - dateWidth, 128);

  // Tool name
  ctx.fillStyle = "#374151";
  const toolSize = fitFontSize(ctx, card.toolName, 42, 30, (s) => `600 ${s}px ${SANS}`);
  ctx.font = `600 ${toolSize}px ${SANS}`;
  ctx.fillText(card.toolName, x, 196);

  // Divider
  ctx.fillStyle = "#E5E0D5";
  ctx.fillRect(x, 232, PNG_WIDTH, 2);

  // Result label
  ctx.fillStyle = "#4A7C59";
  ctx.font = `700 28px ${SANS}`;
  ctx.fillText("YOUR RESULT", x, 316);

  // Score
  ctx.fillStyle = "#2F5D3A";
  const scoreSize = fitFontSize(ctx, card.score, 180, 72, (s) => `700 ${s}px ${SERIF}`);
  ctx.font = `700 ${scoreSize}px ${SERIF}`;
  ctx.fillText(card.score, x, 500);

  // Band pill
  const bandSize = fitFontSize(ctx, card.band, 42, 26, (s) => `600 ${s}px ${SANS}`);
  ctx.font = `600 ${bandSize}px ${SANS}`;
  const bandWidth = ctx.measureText(card.band).width;
  const pillWidth = Math.min(bandWidth + 56, PNG_WIDTH);
  ctx.fillStyle = "#E7F0E9";
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(x, 548, pillWidth, 76, 38);
  } else {
    ctx.rect(x, 548, pillWidth, 76);
  }
  ctx.fill();
  ctx.fillStyle = "#2F5D3A";
  ctx.fillText(card.band, x + 28, 600);

  // Meaning: fit-to-box. The font steps down from 42px until the whole
  // wrapped text fits the meaning block; words are never dropped. Every
  // real tool meaning fits (pinned by tests); a meaning that fit at no
  // size is drawn in full anyway and reported loudly here.
  ctx.fillStyle = "#374151";
  const meaningPlan = planResultCardMeaning((text, size) => {
    ctx.font = `400 ${size}px ${SANS}`;
    return ctx.measureText(text).width;
  }, card.meaning);
  if (!meaningPlan.fits) {
    console.error(
      "Result card meaning does not fit the PNG meaning block at any size:",
      card.toolName,
    );
  }
  ctx.font = `400 ${meaningPlan.size}px ${SANS}`;
  meaningPlan.lines.forEach((line, i) => {
    ctx.fillText(line, x, 700 + i * meaningPlan.lineHeight);
  });

  // Footer: invitation, then privacy line
  ctx.fillStyle = "#E5E0D5";
  ctx.fillRect(x, 940, PNG_WIDTH, 2);

  ctx.fillStyle = "#4A7C59";
  ctx.font = `400 30px ${SANS}`;
  ctx.fillText("Try it yourself, free and private:", x, 992);
  const url = card.toolUrl;
  const urlSize = fitFontSize(ctx, url, 32, 22, (s) => `600 ${s}px ${SANS}`);
  ctx.font = `600 ${urlSize}px ${SANS}`;
  ctx.fillText(url, x, 1032);

  ctx.fillStyle = "#6B7280";
  ctx.font = `400 26px ${SANS}`;
  // Screening line, then the privacy line, above the footer divider.
  ctx.fillText(card.screeningLine, x, 866);
  ctx.fillText(card.privacyLine, x, 906);

  return canvas;
}
