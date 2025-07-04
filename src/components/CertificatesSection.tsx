
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Academy Graduate",
      issuer: "Amazon Web Services",
      description: "Cloud Foundations certification covering core AWS services and architecture principles",
      badge: "AWS",
      color: "bg-orange-500"
    },
    {
      title: "NPTEL Java Programming",
      issuer: "NPTEL",
      description: "Comprehensive Java programming course covering OOP concepts and advanced Java features",
      badge: "JAVA",
      color: "bg-red-500"
    },
    {
      title: "Smart Coder Challenge",
      issuer: "Smart Interviews",
      description: "All India Rank 2833 out of 43,376 participants in competitive programming challenge",
      badge: "AIR",
      color: "bg-blue-500"
    },
    {
      title: "Cambridge English Certificate",
      issuer: "Lingua Skills",
      description: "English language proficiency certification demonstrating advanced communication skills",
      badge: "ENG",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through recognized certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in">
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <div className={`w-12 h-12 rounded-lg ${cert.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">
                    {cert.badge}
                  </span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {cert.issuer}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Badge variant="outline" className="text-lg px-4 py-2">
            <a 
              href="https://smartinterviews.in/profile/sheker"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              View Smart Interviews Profile →
            </a>
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
