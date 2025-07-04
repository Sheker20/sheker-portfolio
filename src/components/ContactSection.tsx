
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ContactSection = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "kalivarapusheker123@gmail.com",
      href: "mailto:kalivarapusheker123@gmail.com",
      icon: "📧"
    },
    {
      label: "GitHub",
      value: "github.com/Sheker20",
      href: "https://github.com/Sheker20",
      icon: "💻"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sheker-kalivarapu",
      href: "https://linkedin.com/in/sheker-kalivarapu-430465257",
      icon: "🔗"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build something amazing together? I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{contact.label}</h3>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <a 
                      href={contact.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      {contact.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto text-center animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Ready to Start a Project?
              </CardTitle>
              <CardDescription className="text-lg">
                I'm currently available for freelance work and full-time opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <a href="mailto:kalivarapusheker123@gmail.com">
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/sheker-kalivarapu-430465257" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
