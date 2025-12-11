import { Card } from "../ui/card";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <Card className="p-8 card-gradient border-gradient">
            <img
              src="./public/profilePic2.png"
              alt="Profile Picture"
              className="profilePic mb-10 mx-auto rounded-full border-4 border-border w-56 h-56 md:w-96 md:h-96"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-lg">
              <p>
                Born in New York, and raised in the Dominican Republic, my
                journey into technology has been anything but conventional. I
                initially pursued a path in finance and accounting, drawn to the
                world of numbers and systems. But somewhere along the way,
                curiosity led me down a different road. I discovered that coding
                is the truest expression of my curiosity and imagination. It
                allows me to transform complex ideas and challenges into
                elegant, relevant solutions. What began as tinkering with simple
                scripts quickly grew into building full-featured applications.
                Along the way, I developed a deep passion for JavaScript, React,
                and React Native, and explored advanced technologies like WebRTC
                and mobile development.
              </p>

              <p>
                Today, with over 8+ years of experience, I channel my background
                in analytical thinking and my technical skills into creating
                meaningful digital experiences. From real-time communication
                apps to retro games, each project is a reflection of my journey
                — a blend of creative problem-solving and technical
                craftsmanship.
              </p>

              <p>
                I believe the best code comes from passion, persistence, and a
                willingness to learn. And I'm just getting started.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
