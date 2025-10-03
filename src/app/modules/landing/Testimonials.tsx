import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Bar operators already cashing rainy-day payouts</h2>
          <p className="mt-4 text-lg text-slate-200">
            Pilot partners received coverage for both rooftop and neighborhood concepts through a single policy.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-10">
              <blockquote className="leading-relaxed text-slate-100">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{testimonial.name}</span> · {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
