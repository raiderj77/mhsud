export function printSensitiveResults(): void {
  if (typeof window === "undefined") return;

  const approved = window.confirm(
    "Printing may expose your private answers or score to anyone who can access the printer or saved file. Continue?",
  );
  if (!approved) return;

  const cleanup = () => document.body.classList.remove("print-approved");
  document.body.classList.add("print-approved");
  window.addEventListener("afterprint", cleanup, { once: true });
  window.print();
}
