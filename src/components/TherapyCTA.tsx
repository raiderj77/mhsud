interface Props {
  show: boolean;
}

export function TherapyCTA({ show }: Props) {
  const url = process.env.NEXT_PUBLIC_THERAPY_AFFILIATE_URL;

  if (!show || !url) return null;

  return (
    <div className="card p-5 sm:p-6 mb-5 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800">
      <h2 className="font-serif text-lg font-semibold text-sage-800 dark:text-sage-200 mb-2">
        Talking to someone can help
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
        A therapist or counselor can help you make sense of how you&apos;re feeling and find
        a path forward. Many offer online sessions so you can connect from wherever you are.
      </p>
      <a
        href={url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        referrerPolicy="no-referrer"
        className="inline-block bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
      >
        Find a therapist
      </a>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4 pt-4 border-t border-sage-200 dark:border-sage-800">
        <strong>Affiliate Disclosure:</strong> We may earn a commission if you sign up through this link. This does not change the price you pay or our editorial standards. Your screening answers and score are not sent with the link.
      </p>
    </div>
  );
}
