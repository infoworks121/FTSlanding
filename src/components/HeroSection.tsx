import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        {/* Glowing orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[80px]"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-6 tracking-wider uppercase">
            Next-Gen Business Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Revolutionizing Business
          <br />
          <span className="text-gradient">Ecosystem with FTS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10"
        >
          A Smart, Automated, Multi-Layer Business Network for Unlimited Growth.
          Connect, Scale, and Earn — all in one ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#system-flow"
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition glow-primary"
          >
            Explore System
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg glass text-foreground font-semibold text-base hover:border-primary/50 transition"
          >
            Join Network
          </a>
        </motion.div>

        {/* Floating network nodes decoration */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-16 opacity-30">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
