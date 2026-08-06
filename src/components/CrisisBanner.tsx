export function CrisisBanner() {
  const crisisLinkClass =
    "inline-flex min-h-[44px] items-center font-semibold underline decoration-amber-500/60 underline-offset-2 hover:text-amber-950 dark:hover:text-amber-50";

  return (
    <aside
      aria-label="Clinical disclaimer and crisis support"
      className="bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-center text-base leading-relaxed px-4 py-3"
    >
      <div className="max-w-4xl mx-auto">
        <span className="font-medium">Clinical disclaimer:</span>{" "}
        <span className="opacity-90">
          These are educational screening tools only, not a diagnosis or treatment.
          If you are in immediate danger, call your local emergency services. U.S. crisis resources: the{" "}
          <strong className="font-semibold">988 Suicide & Crisis Lifeline</strong> ({" "}
          <a
            href="tel:988"
            className={crisisLinkClass}
            aria-label="Call the United States 988 Suicide and Crisis Lifeline"
          >
            call 988
          </a>{" "}
          or{" "}
          <a
            href="sms:988"
            className={crisisLinkClass}
            aria-label="Open a text message to the United States 988 Suicide and Crisis Lifeline"
          >
            text 988
          </a>
          ), the <strong className="font-semibold">Crisis Text Line</strong> ({" "}
          <a
            href="sms:741741"
            className={crisisLinkClass}
            aria-label="Open a text message to the United States Crisis Text Line at 741741; type HOME to begin"
          >
            text HOME to 741741
          </a>
          ), or the{" "}
          <a
            href="tel:+18006624357"
            className={crisisLinkClass}
            aria-label="Call the United States SAMHSA National Helpline at 1-800-662-4357"
          >
            SAMHSA National Helpline at 1-800-662-4357
          </a>
          .{" "}
          <a
            href="https://988lifeline.org/get-help/"
            target="_blank"
            rel="noopener noreferrer"
            className={crisisLinkClass}
            aria-label="Visit the official 988 Lifeline help page"
          >
            Official 988 help options
          </a>
          . Outside the U.S.,{" "}
          <a
            href="https://findahelpline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={crisisLinkClass}
            aria-label="Find crisis support by country and language through Find A Helpline"
          >
            find local crisis support
          </a>
          .
        </span>
      </div>
    </aside>
  );
}
