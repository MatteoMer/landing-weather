import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-[#1A1A1A]">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-base font-semibold text-[#1A1A1A]">TODO</span>
          <p className="mt-1 text-xs text-[#6B7280]">© {new Date().getFullYear()} TODO. Tous droits réservés.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/" className="transition hover:text-[#1D4ED8]">
            Mentions légales
          </Link>
          <Link href="/" className="transition hover:text-[#1D4ED8]">
            Données personnelles
          </Link>
          <Link href="mailto:contact@todo.fr" className="transition hover:text-[#1D4ED8]">
            contact@todo.fr
          </Link>
        </div>
      </div>
    </footer>
  );
}
