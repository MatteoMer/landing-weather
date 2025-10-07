"use client";

import { useState } from "react";

import { ThankYouModal } from "./ThankYouModal";

export function LeadCapture() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/movkwrqo", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();
      if (result?.ok === false || result?.errors) {
        throw new Error("Please try again in a moment.");
      }

      setStatus("success");
      form.reset();
      setModalOpen(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatus("idle");
    }
  }

  return (
    <section id="waitlist" className="bg-white text-[#1A1A1A]">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold sm:text-4xl">Join the waitlist</h2>
          <p className="mt-3 text-base text-[#6B7280]">
            Leave your details and we&apos;ll reach out as soon as the Pluvia Tenerife pilot opens to travelers.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" autoComplete="on">
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A]" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                placeholder="Alex Morgan"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                placeholder="alex@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A]" htmlFor="bar">
                Accommodation or booking name (optional)
              </label>
              <input
                id="booking"
                name="booking"
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                placeholder="Villa Ocean Breeze"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:bg-[#6B7280] disabled:text-white/70"
              disabled={status === "submitting"}
            >
              {status === "success" ? "You’re on the list" : status === "submitting" ? "Sending…" : "Join the waitlist"}
            </button>
            {errorMessage && (
              <p className="text-xs text-red-500">{errorMessage}</p>
            )}
            <p className="text-xs text-[#6B7280]">
              We only use your info to update you about Pluvia’s Tenerife launch.
            </p>
          </form>
        </div>
      </div>
      <ThankYouModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
