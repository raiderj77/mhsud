"use client";

export function PrintChecklistButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-secondary no-print">
      Print this checklist
    </button>
  );
}
