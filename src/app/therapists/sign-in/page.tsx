import { isProfessionalBackendConfigured } from "@/lib/professionalServer";
import SignInForm from "./SignInForm";

export const metadata = { title: "Professional sign-in", robots: { index: false, follow: false } };

export default function SignInPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="rounded-lg bg-navy px-5 py-6 text-3xl font-bold text-white">Professional sign-in</h1>
      {isProfessionalBackendConfigured() ? <SignInForm /> : <p>Professional sign-in opens shortly.</p>}
    </section>
  );
}
