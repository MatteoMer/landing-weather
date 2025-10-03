import { steps } from "./data";

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Comment ça marche ?</h2>
          <p className="mt-3 text-lg text-slate-300">
            Trois étapes, aucun dossier à remplir : nous gérons le suivi météo et les paiements pour vous.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-sky-100">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
