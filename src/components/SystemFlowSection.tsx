import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Admin",
    subtitle: "Central Control",
    icon: "🧠",
    description: "Product onboarding, profit rules, stock distribution, and full ecosystem governance.",
    color: "from-primary to-accent",
  },
  {
    title: "Core Body",
    subtitle: "Regional Distribution",
    icon: "🌍",
    description: "District-level authority managing inventory, supply chain, and regional business operations.",
    color: "from-accent to-primary",
  },
  {
    title: "Businessman",
    subtitle: "Sales Execution",
    icon: "💼",
    description: "Unified role combining retailer, stock point, and bulk — earning through margin, referrals, and fulfillment.",
    color: "from-primary to-accent",
  },
  {
    title: "Customer",
    subtitle: "Marketplace",
    icon: "🛒",
    description: "Smart e-commerce experience with trusted network, order tracking, ratings, and support.",
    color: "from-accent to-primary",
  },
];

const SystemFlowSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="system-flow" className="py-24 relative" ref={ref}>
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">System Architecture</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
            How <span className="text-gradient">FTS</span> Works
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A streamlined 4-layer system designed for maximum efficiency and transparent profit distribution.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-primary/50" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:gap-8`}
            >
              {/* Node on line */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary items-center justify-center text-xl z-10">
                {step.icon}
              </div>

              {/* Card */}
              <div className={`md:w-5/12 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:glow-sm">
                  <span className="text-3xl mb-3 block md:hidden">{step.icon}</span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{step.subtitle}</span>
                  <h3 className="font-display text-2xl font-bold mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemFlowSection;
