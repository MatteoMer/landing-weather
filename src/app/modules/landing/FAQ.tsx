import { faqs } from "./data";

export function FAQ() {
  return (
    <section id="faq" className="bg-white text-[#1A1A1A]">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Questions fréquentes</h2>
          <p className="mt-3 text-base text-[#6B7280]">
            Des réponses rapides pour valider la couverture avec votre équipe.
          </p>
        </div>
        <dl className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <dt className="text-base font-semibold text-[#1A1A1A]">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#6B7280]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
