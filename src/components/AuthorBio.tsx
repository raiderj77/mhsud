/**
 * Author bio component for blog posts.
 * Displays clinical reviewer credentials and experience.
 * Required on every blog post per TOOLS.md.
 */

export function AuthorBio() {
  return (
    <div className="card p-5 sm:p-6 mb-8 border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-sage-100 dark:bg-sage-900 flex items-center justify-center flex-shrink-0">
          <span className="text-sage-600 dark:text-sage-400 text-lg">👨‍⚕️</span>
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-1">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
            with 11 years of clinical experience in substance abuse counseling
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">
            Our clinical reviewer has worked in diverse clinical settings including inpatient treatment, outpatient programs,
            and community mental health, specializing in evidence-based screening tools and their appropriate
            clinical application. All content on MindCheck Tools is reviewed for clinical accuracy and
            adherence to best practices in mental health education.
          </p>
        </div>
      </div>
    </div>
  );
}