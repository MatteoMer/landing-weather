import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Pluvia | Weather protection for Tenerife holidays",
  description:
    "Pluvia reimburses Tenerife trips when rare rain hits—join the waitlist to access the pilot program.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pluvia | Weather protection for Tenerife holidays",
    description:
      "Join the Pluvia waitlist and be among the first travelers protected against rainy days in Tenerife.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
