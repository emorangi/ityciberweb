"use client";

import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectorsSection from "@/components/SectorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SectorsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}