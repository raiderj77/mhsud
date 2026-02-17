import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
        Page not found
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/phq-9-depression-test" className="btn-secondary">
          Take PHQ-9
        </Link>
      </div>
    </div>
  );
}
