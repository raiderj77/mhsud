export function CrisisBanner() {
  return (
    <div
      role="alert"
      className="bg-neutral-800 dark:bg-neutral-900 text-neutral-300 text-center text-[13px] leading-relaxed px-4 py-2.5"
    >
      <span className="opacity-70">Educational self-checks only — not a diagnosis or treatment.</span>{" "}
      <span className="font-semibold text-warm-300">
        If you are in crisis, please call your local emergency number or a crisis hotline.
      </span>
    </div>
  );
}
