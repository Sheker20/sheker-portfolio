
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 Kalivarapu Sheker. Built with React, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
