// src/app/page.tsx
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LocationSection />
      <div className="bg-brand-green text-white p-4">
        Teste de bg-brand-green
      </div>
      <Footer />
    </main>
  );
}