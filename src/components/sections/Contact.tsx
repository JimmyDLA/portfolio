import { Github, Linkedin, Mail, Download, FileUser } from "lucide-react";
import Resume from "../../../Jimmy Web Dev Res.pdf";
import { Card } from "../ui/card";

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/jimmydla",
    label: "View my repositories and contributions",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/jimmydla",
    label: "Connect with me professionally",
  },
  {
    name: "Resume",
    icon: FileUser,
    href: Resume,
    label: "Download my resume",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:jimmydelosangeles@me.com",
    label: "jimmydelosangeles@me.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card
                  key={link.name}
                  className="p-6 card-gradient hover:shadow-lg transition-all animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(link.href, "_blank")}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{link.name}</h3>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                </Card>
              );
            })}
          </div>

          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:jimmy@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
