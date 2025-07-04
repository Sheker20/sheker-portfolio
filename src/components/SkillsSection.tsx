
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "Python", "Java", "JSP", "RESTful APIs"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Drizzle ORM", "Prisma"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Vercel", "Docker", "Git", "GitHub Actions"]
    },
    {
      title: "AI & Modern Tools",
      skills: ["Gemini AI", "OpenAI", "Clerk Auth", "Inngest", "Socket.IO", "WebRTC"]
    }
  ];

  const achievements = [
    {
      platform: "LeetCode",
      rating: "1575",
      color: "bg-orange-500"
    },
    {
      platform: "CodeChef", 
      rating: "1381",
      color: "bg-amber-600"
    },
    {
      platform: "HackerRank",
      rating: "⭐⭐⭐⭐⭐",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I solve problems not just with code, but with thought.
          </p>
        </div>

        {/* Problem Solving Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">
                    {achievement.platform.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.platform}</h3>
                <p className="text-2xl font-bold text-primary">{achievement.rating}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in-left">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
