import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TODO | Assurance météo pour bars",
  description:
    "TODO propose une assurance météo simple pour les bars parisiens : rejoignez la liste d'attente pour le programme pilote.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TODO | Assurance météo pour bars",
    description:
      "Rejoignez la liste d'attente TODO et soyez parmi les premiers bars parisiens à bénéficier d'une protection météo automatisée.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
