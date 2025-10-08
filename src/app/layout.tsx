import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const ANALYTICS_ID = "AW-16736785308";

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
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
