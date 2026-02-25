export function CrisisBanner() {
  return (
    <div
      role="alert"
      className="bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-center text-sm leading-relaxed px-4 py-3"
    >
      <div className="max-w-4xl mx-auto">
        <span className="font-medium">⚠️ Clinical Disclaimer:</span>{" "}
        <span className="opacity-90">
          These are educational screening tools only — not a diagnosis or treatment.
          If you are in crisis, please call{" "}
          <strong className="font-semibold">988 Suicide & Crisis Lifeline</strong> (call or text 988) or{" "}
          <strong className="font-semibold">SAMHSA National Helpline: 1-800-662-4357</strong>.
        </span>
      </div>
    </div>
  );
}
