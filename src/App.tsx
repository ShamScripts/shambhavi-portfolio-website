import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Clubs } from "@/components/Clubs";
import { Volunteering } from "@/components/Volunteering";
import { Art } from "@/components/Art";
import { Certifications } from "@/components/Certifications";
import { WhatIBring } from "@/components/WhatIBring";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ParticleBackground } from "@/components/ParticleBackground";
import { BackToTop } from "@/components/BackToTop";
import { FloatingNav } from "@/components/FloatingNav";
import { SectionDots } from "@/components/SectionDots";

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-background text-[var(--text)]">
      {/* Global overlays */}
      <div className="grain-overlay" aria-hidden />
      <ParticleBackground />
      <ScrollProgress />
      <BackToTop />
      <FloatingNav />
      <SectionDots />

      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <div className="section-alt"><About /></div>
        <div className="section-divider" />
        <WhatIBring />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <div className="section-alt"><Projects /></div>
        <div className="section-divider" />
        <Research />
        <div className="section-divider" />
        <div className="section-alt"><Education /></div>
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <div className="section-alt"><Clubs /></div>
        <div className="section-divider" />
        <Volunteering />
        <div className="section-divider" />
        <div className="section-alt"><Art /></div>
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
