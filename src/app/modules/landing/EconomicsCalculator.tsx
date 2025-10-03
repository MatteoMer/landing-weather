"use client";

import { useMemo, useState } from "react";

const MONTHLY_BASELINE = 9;

export function EconomicsCalculator() {
  const [rainDays, setRainDays] = useState(12);
  const [monthlyRevenue, setMonthlyRevenue] = useState(65000);

  const payoutEstimate = useMemo(() => {
    const extraRainDays = Math.max(0, rainDays - MONTHLY_BASELINE);
    if (extraRainDays === 0) {
      return 0;
    }
    const lossPerDay = monthlyRevenue * 0.018;
    return Math.round(extraRainDays * lossPerDay);
  }, [rainDays, monthlyRevenue]);

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Model a rainy-month payout in seconds.
            </h2>
            <p className="mt-4 text-lg text-slate-200">
              Adjust the sliders to see how many dollars a wetter-than-average month could return to your bar.
            </p>
            <div className="mt-10 space-y-8">
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-slate-200">
                  <span>Average monthly revenue</span>
                  <span>${monthlyRevenue.toLocaleString()}</span>
                </div>
                <input
                  aria-label="Average monthly revenue"
                  type="range"
                  min={20000}
                  max={160000}
                  step={5000}
                  value={monthlyRevenue}
                  onChange={(event) => setMonthlyRevenue(Number(event.target.value))}
                  className="mt-3 w-full accent-sky-400"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>$20k</span>
                  <span>$160k</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-slate-200">
                  <span>Rainy days this month</span>
                  <span>{rainDays} days</span>
                </div>
                <input
                  aria-label="Rainy days this month"
                  type="range"
                  min={5}
                  max={20}
                  value={rainDays}
                  onChange={(event) => setRainDays(Number(event.target.value))}
                  className="mt-3 w-full accent-sky-400"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>5 days</span>
                  <span>20 days</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-slate-500">
              Baseline trigger assumes {MONTHLY_BASELINE} rainy days based on 10-year city averages. Actual underwriting may vary by location.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-10 text-center">
            <div className="text-sm uppercase tracking-wide text-slate-500">Estimated payout</div>
            <div className="mt-6 text-5xl font-semibold text-sky-300">
              ${payoutEstimate.toLocaleString()}
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Based on {rainDays} rainy days compared with your baseline of {MONTHLY_BASELINE}. We assume a 1.8% revenue impact per rainy day.
            </p>
            <div className="mt-8 rounded-full border border-sky-500/60 bg-sky-500/10 px-6 py-3 text-sm text-sky-100">
              We will tailor the trigger and payout rate to your bar group during underwriting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
