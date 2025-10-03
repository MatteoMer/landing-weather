import { benefits } from "./data";

export function Benefits() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Pourquoi les bars nous choisissent</h2>
          <p className="mt-3 text-lg text-slate-300">
            Une assurance simple, pensée pour les responsables d&apos;exploitation qui dépendent du flux de clients.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-sky-200">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{benefit.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
