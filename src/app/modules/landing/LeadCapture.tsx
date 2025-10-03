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

    try {
      const response = await fetch("https://formspree.io/f/movkwrqo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("L'envoi a échoué");
      }

      const result = await response.json();
      if (result?.ok === false || result?.errors) {
        throw new Error("Merci de réessayer plus tard.");
      }

      setStatus("success");
      form.reset();
      setModalOpen(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Merci de réessayer."
      );
      setStatus("idle");
    }
  }

  return (
    <section id="liste-attente" className="bg-white text-[#1A1A1A]">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold sm:text-4xl">Inscription liste d&apos;attente</h2>
          <p className="mt-3 text-base text-[#6B7280]">
            Donnez-nous vos coordonnées et nous vous contacterons dès que les premières offres TODO seront disponibles à Paris.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" autoComplete="on">
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A]" htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                placeholder="Alex Martin"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A]" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                placeholder="alex@votrebar.fr"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1A1A1A]" htmlFor="bar">
                Nom du bar (optionnel)
              </label>
              <input
                id="bar"
                name="bar"
                className="mt-2 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
                placeholder="Bar du Canal"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:bg-[#6B7280] disabled:text-white/70"
              disabled={status === "submitting"}
            >
              {status === "success" ? "Inscription confirmée" : status === "submitting" ? "Envoi…" : "Rejoindre la liste"}
            </button>
            {errorMessage && (
              <p className="text-xs text-red-500">{errorMessage}</p>
            )}
            <p className="text-xs text-[#6B7280]">
              Nous n&apos;utiliserons vos informations que pour vous prévenir du lancement TODO.
            </p>
          </form>
        </div>
      </div>
      <ThankYouModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
