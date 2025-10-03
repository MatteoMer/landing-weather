import Image from "next/image";
import Link from "next/link";

const containerRadius = "rounded-2xl";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-32 h-96 w-96 rounded-full bg-[#1D4ED8]/18 blur-3xl" />
        <div className="absolute -top-16 right-[-30%] h-[420px] w-[420px] rounded-full bg-[#2563EB]/18 blur-3xl" />
        <div className="absolute bottom-[-18%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#1D4ED8]/18 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-20 pt-16 lg:px-12">
        <div className="space-y-5 max-w-2xl">
          <span className="inline-flex w-fit items-center rounded-full bg-[#1D4ED8]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1D4ED8]">
            TODO
          </span>
          <h1 className="text-[2.75rem] font-semibold leading-[1.15] sm:text-[3.1rem]">
            Il pleut en été? On vous dédommage automatiquement.
          </h1>
          <p className="text-[1.125rem] leading-[1.65] text-[#1A1A1A]">
            Pour les bars et restos parisiens : si l’été est plus pluvieux que prévu, vous recevez une compensation financière sans paperasse.
          </p>
          <p className="text-[0.95rem] leading-[1.7] text-[#94A3B8]">
            Nous ouvrons bientôt notre programme pilote. Rejoignez la liste d&apos;attente pour être contacté en priorité.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#liste-attente"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#1D4ED8] px-8 py-3 text-base font-semibold text-white shadow-[0_20px_32px_-18px_rgba(37,99,235,0.7)] transition hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              Rejoindre le pilote parisien
            </Link>
            <Link
              href="#comment-ca-marche"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBD5F5] px-5 py-3 text-sm font-semibold text-[#1D4ED8] transition hover:border-[#1D4ED8]/70 hover:text-[#2563EB]"
            >
              En savoir plus
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <figure
            className={`${containerRadius} relative aspect-[4/3] w-full overflow-hidden bg-white shadow-[0_26px_60px_-40px_rgba(15,23,42,0.25)]`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#E2E8F0]/80" />
            <Image
              src="/weather.png"
              alt="Illustration d&apos;un bar parisien protégé de la pluie"
              fill
              priority
              className="object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
