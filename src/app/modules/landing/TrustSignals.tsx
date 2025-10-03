import { trustBadges } from "./data";

export function TrustSignals() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
        <div className="grid gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/80 p-8 backdrop-blur lg:grid-cols-3">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-6">
              <p className="text-base font-semibold text-sky-200">{badge.label}</p>
              <p className="mt-3 text-sm text-slate-300">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
