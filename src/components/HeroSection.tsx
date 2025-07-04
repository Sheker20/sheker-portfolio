
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Sheker</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              A full-stack developer who builds{' '}
              <span className="text-primary font-semibold">real-time</span>,{' '}
              <span className="text-primary font-semibold">AI-integrated</span>, and{' '}
              <span className="text-primary font-semibold">cloud-powered</span> applications
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              B.Tech CSE at Vardhaman College of Engineering (JNTUH) • CGPA: 9.2
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Sheker20" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/sheker-kalivarapu-430465257" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToProjects}
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
