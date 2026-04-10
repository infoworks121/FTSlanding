import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
              What is <span className="text-gradient">FTS</span>?
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              FTS (Farm & Tech Service) is a transparent, scalable, and automated multi-business ecosystem
              designed to empower individuals to earn, grow, and scale through structured business networks.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div variants={fadeUp} className="glass rounded-2xl p-8 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To build a transparent, scalable and automated multi-business ecosystem that transforms how people connect, trade, and grow together.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass rounded-2xl p-8 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                Empowering individuals to earn, grow and scale through structured business networks with complete automation and transparency.
              </p>
            </motion.div>
          </div>

          {/* Leadership */}
          <motion.div variants={fadeUp}>
            <h3 className="font-display text-2xl font-bold text-center mb-8">Leadership Team</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                { role: "CEO & Founder", name: "Coming Soon", bio: "Visionary leader driving the FTS ecosystem to empower businesses globally." },
                { role: "CTO", name: "Coming Soon", bio: "Tech architect building the automated, scalable infrastructure behind FTS." },
              ].map((person) => (
                <div key={person.role} className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary/50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" /></svg>
                  </div>
                  <h4 className="font-display font-bold text-lg">{person.name}</h4>
                  <span className="text-primary text-sm font-medium">{person.role}</span>
                  <p className="text-muted-foreground text-sm mt-2">{person.bio}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
