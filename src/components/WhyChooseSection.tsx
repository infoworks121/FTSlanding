import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4", label: "Layer System" },
  { value: "100%", label: "Automated" },
  { value: "0", label: "Investment to Start" },
  { value: "∞", label: "Growth Potential" },
];

const reasons = [
  "Structured, transparent multi-layer business model",
  "Automated profit distribution — no manual calculations",
  "District-exclusive Core Body for maximum regional control",
  "Zero-investment entry for Businessmen",
  "Enterprise-grade technology stack",
  "Real-time analytics across every role",
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why FTS</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="text-muted-foreground text-sm mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8"
        >
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-secondary-foreground">{r}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
