import { ContextSection } from "./modules/landing/ContextSection";
import { FAQ } from "./modules/landing/FAQ";
import { Footer } from "./modules/landing/Footer";
import { Hero } from "./modules/landing/Hero";
import { LeadCapture } from "./modules/landing/LeadCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Hero />
      <ContextSection />
      <LeadCapture />
      <FAQ />
      <Footer />
    </main>
  );
}
