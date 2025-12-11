import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col transition-all hover:shadow-xl hover:shadow-primary/10 border-gradient">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {project.category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-4">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {project.demoUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {project.sourceUrl && (
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Source
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
