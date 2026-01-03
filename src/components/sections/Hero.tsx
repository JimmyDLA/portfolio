import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 md:w-96 md:h-96 bg-primary/40 rounded-full blur-3xl opacity-50"
        animate={{
          x: [0, 300, -200, 400, -100],
          y: [0, -200, 300, -100, 200],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 md:w-96 md:h-96 bg-cyan-500/40 rounded-full blur-3xl opacity-50"
        animate={{
          x: [0, -300, 200, -400, 100],
          y: [0, 300, -200, 400, -100],
          scale: [1, 0.8, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 md:w-96 md:h-96 bg-cyan-500/40 rounded-full blur-3xl opacity-50"
        animate={{
          x: [0, 400, -300, 200, -500],
          y: [0, -400, 200, -300, 100],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-40 h-40 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl opacity-50"
        animate={{
          x: [0, -400, 300, -200, 500],
          y: [0, 400, -300, 200, -100],
          scale: [1, 0.9, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-80 md:h-80 bg-green-500/30 rounded-full blur-3xl opacity-50"
        animate={{
          x: [0, 500, -400, 300, -200],
          y: [0, -300, 400, -200, 300],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg md:text-xl">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Jimmy
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight !mt-0">
              De Los Angeles
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gradient pb-3">
              Software Engineer & Creative Developer
            </h2>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Crafting elegant solutions through code, from New York to the world.
            Building games, apps, and digital experiences that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
