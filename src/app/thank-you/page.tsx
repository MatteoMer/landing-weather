import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 text-center text-[#1A1A1A]">
      <div className="max-w-lg space-y-6">
        <span className="inline-flex items-center rounded-full bg-[#1D4ED8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1D4ED8]">
          Pluvia
        </span>
        <h1 className="text-3xl font-semibold sm:text-4xl">You’re on the Tenerife waitlist</h1>
        <p className="text-base leading-relaxed text-[#475569]">
          Thanks for signing up. We’ll email you as soon as the pilot opens so you can add weather protection to your holiday plans.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
        >
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
