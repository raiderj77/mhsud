"use client";

interface AdSlotProps {
  position: string;
  className?: string;
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  npa?: boolean;
}

/**
 * Compatibility no-op.
 *
 * MindCheckTools permanently disables display advertising. Keeping this tiny
 * component temporarily avoids touching validated screening clients while the
 * old call sites are removed in the final micro-cleanup stage.
 */
export function AdSlot(_props: AdSlotProps) {
  return null;
}
