
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Study Material Generator",
      description: "An intelligent platform that generates personalized study materials using AI, with real-time collaboration features and comprehensive user management.",
      tech: ["Gemini 2.0", "Next.js", "Clerk", "Inngest", "PostgreSQL", "Drizzle ORM"],
      github: "https://github.com/Sheker20",
      demo: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging, user authentication, and responsive design built with the MERN stack.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
      github: "https://github.com/Sheker20",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application providing accurate forecasts with interactive maps and location-based services.",
      tech: ["React.js", "OpenWeatherMap API", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/Sheker20",
      demo: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    },
    {
      title: "Collaborative Whiteboard",
      description: "A real-time collaborative whiteboard application with drawing tools, shapes, and multi-user support using WebSockets.",
      tech: ["React.js", "WebSockets", "Canvas API", "Node.js", "Express.js"],
      github: "https://github.com/Sheker20",
      demo: "#",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my skills in full-stack development, AI integration, and real-time applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
