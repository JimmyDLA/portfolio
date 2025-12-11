import { Code2, Smartphone, Database, Globe, Palette, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "iOS",
      "Android",
      "Mobile UI/UX",
      "Expo",
      "Xcode",
      "Android Studio",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Unit Testing",
      "ES6+",
      "Redux",
      "Ember.js",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: [
      "Node.js",
      "REST APIs",
      "WebSocket",
      "Firebase",
      "Express.js",
      "MongoDB",
      "SQL",
      "GraphQL",
      "OAuth",
    ],
  },
  {
    title: "Real-time Communication",
    icon: Globe,
    skills: ["WebRTC", "Socket.io", "Peer-to-Peer", "Live Streaming"],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: [
      "Responsive Design",
      "Lottie",
      "Animations",
      "Figma",
      "Prototyping",
      "User Experience",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Cpu,
    skills: [
      "Git",
      "Vite",
      "npm",
      "Yarn",
      "ESLint",
      "Prettier",
      "CI/CD",
      "Debugging",
      "Performance Optimization",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A diverse toolkit built through continuous learning and hands-on
            experience across frontend, mobile, and backend technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="card-gradient hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
