import { useState } from "react";
import { ProjectCard } from "../features/ProjectCard";
import { Button } from "../ui/button";
import fictionDev from "../../../public/fiction-dev.png";

const categories = ["All", "Mobile Apps", "Web Apps"];

const projects = [
    {
    id: 0,
    title: "Fiction Dev",
    category: "Web Apps",
    description:
      "Fiction Development Making Imagination Reality. This is company website that bridges the gap between complex technical requirements and intuitive user experiences.",
    techStack: [
      "JavaScript",
      "React",
      "TypeScript",
      "Vite",
      "Tailwinds",
      "HTML",
      "CSS",
      "Framer Motion",

    ],
    image: fictionDev,
    demoUrl: "https://fictiondev.com/",
    sourceUrl: "https://github.com/JimmyDLA/fiction-dev",
  },
  {
    id: 1,
    title: "Baby Monitor",
    category: "Mobile Apps",
    description:
      "This is a mobile app that will allow you to monitor your baby from any where with any 2 device (phone, table, or laptop). This is all possible with the help of React Native and WebRTC.",
    techStack: [
      "React Native",
      "React",
      "WebRTC",
      "Node.js",
      "WebSocket",
      "Xcode",
      "Android Studio",
      "iOS",
      "Android",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1685195883710-fe01b26e7a4d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "",
    sourceUrl: "https://github.com/JimmyDLA/Baby-Monitor",
  },
  {
    id: 2,
    title: "Mathid",
    category: "Mobile Apps",
    description:
      "An interactive mathematics game. Mathid (math+kid) is a fun and engaging math game app built specifically for my kids.",
    techStack: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Xcode",
      "Android Studio",
      "iOS",
      "Android",
      "Lottie",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1676422355857-4a5c488c0a17?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "",
    sourceUrl: "https://github.com/JimmyDLA/Mathid",
  },
  {
    id: 3,
    title: "Retro Snake",
    category: "Web Apps",
    description:
      "A modern take on the classic Snake game with retro aesthetics, featuring smooth gameplay and nostalgic pixel art.",
    techStack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Collision Detection",
      "HTML Canvas",
      "Animation",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1669077046608-60f50affe482?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://jimmydla.github.io/RetroSnake",
    sourceUrl: "https://github.com/JimmyDLA/RetroSnake",
  },
  {
    id: 4,
    title: "MobileIM",
    category: "Mobile Apps",
    description:
      "Real-time instant messaging application with WebRTC integration for peer-to-peer communication and file sharing.",
    techStack: [
      "React Native",
      "WebRTC",
      "Firebase",
      "Socket.io",
      "Node.js",
      "iOS",
      "Android",
      "OAuth",
    ],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    demoUrl: "",
    sourceUrl: "https://github.com/JimmyDLA/mobileIM",
  },
  {
    id: 5,
    title: "D-Ball Game",
    category: "Web Apps",
    description:
      "An addictive physics-based game where precision and timing are key. Challenge yourself across increasingly difficult levels.",
    techStack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Collision Detection",
      "HTML Canvas",
    ],
    image:
      "https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://jimmydla.github.io/d-ball-project1/frontPage.html",
    sourceUrl: "https://github.com/JimmyDLA/d-ball-project1",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A collection of my work spanning from practical applications to
            creative experiments. Each project represents a unique challenge and
            learning experience.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
