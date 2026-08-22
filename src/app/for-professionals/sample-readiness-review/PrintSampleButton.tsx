"use client";

export function PrintSampleButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-secondary no-print">
      Print fictional sample
    </button>
  );
}
