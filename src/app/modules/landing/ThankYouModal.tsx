"use client";

import { useEffect } from "react";

type ThankYouModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ThankYouModal({ open, onClose }: ThankYouModalProps) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="max-w-sm rounded-2xl bg-white p-8 text-center text-[#1A1A1A] shadow-xl">
        <h3 className="text-xl font-semibold">You’re on the Tenerife list!</h3>
        <p className="mt-3 text-sm text-[#475569]">
          We’ll email you as soon as the Pluvia pilot opens so you can lock in weather protection for your trip.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
