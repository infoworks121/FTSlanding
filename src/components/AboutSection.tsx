import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background" ref={ref}>
      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-24">
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Our Identity
            </h4>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
              The Architecture of <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">FTS</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/20 pl-6 italic">
              "FTS (Farm & Tech Service) is a transparent, scalable, and automated multi-business ecosystem 
              designed to empower individuals to earn, grow, and scale."
            </p>
          </motion.div>

          {/* Vision & Mission Bento Grid */}
          <div className="grid md:grid-cols-12 gap-6 mb-32">
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-card border border-border p-10"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  To build a transparent, scalable and automated multi-business ecosystem that transforms how people connect, trade, and grow together.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black">01</div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-primary border border-primary/20 p-10 text-primary-foreground"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">Our Mission</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Empowering individuals to earn, grow and scale through structured business networks with complete automation.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Leadership Section */}
          <motion.div variants={fadeInUp}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h3 className="font-display text-3xl font-bold">The Leadership</h3>
                <p className="text-muted-foreground mt-2">The minds architecting the future of FTS.</p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent mx-8 hidden md:block"></div>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { role: "CEO & Founder", name: "Ashraful Alam", bio: "Visionary leader driving the FTS ecosystem to empower businesses globally." },
                { role: "Director", name: "Syed Fahad Reza", bio: "Tech architect building the automated, scalable infrastructure behind FTS." },
                { role: "Director", name: "Merina Begum", bio: "Strategic director overseeing operations and growth within the FTS ecosystem." },
              ].map((person, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative rounded-3xl overflow-hidden border border-border bg-card/60 backdrop-blur-sm p-8 flex flex-col items-center text-center cursor-default"
                >
                  {/* Glow blob */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Role badge */}
                  <span className="relative z-10 inline-block px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 mb-6">
                    {person.role}
                  </span>

                  {/* Name */}
                  <h4 className="relative z-10 text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-foreground leading-tight">
                    {person.name}
                  </h4>

                  {/* Divider line */}
                  <div className="relative z-10 w-12 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent mb-4 group-hover:w-20 transition-all duration-500" />

                  {/* Bio */}
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                    {person.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;