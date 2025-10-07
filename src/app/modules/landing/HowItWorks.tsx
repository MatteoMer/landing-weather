import { steps } from "./data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] text-[#1A1A1A]">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How Pluvia works</h2>
          <p className="mt-3 text-lg text-[#475569]">
            Three simple steps—no calls, no claim forms. We handle the weather monitoring and payouts for you.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1D4ED8]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
