import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const b2bFlow = [
  { label: "Admin", pct: "10%", desc: "Platform fee & governance" },
  { label: "Core Body", pct: "15%", desc: "Regional management margin" },
  { label: "Businessman", pct: "20%", desc: "Sales & fulfillment margin" },
];

const b2cFlow = [
  { label: "Product Cost", pct: "55%", desc: "Manufacturer / sourcing" },
  { label: "Platform", pct: "10%", desc: "FTS ecosystem fee" },
  { label: "Distribution", pct: "15%", desc: "Core Body + logistics" },
  { label: "Retail Margin", pct: "20%", desc: "Businessman earnings" },
];

const ProfitSection = () => {
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Revenue Model</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
            Profit <span className="text-gradient">Distribution</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Transparent earning structure across all ecosystem layers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* B2B */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold mb-6 text-center">
              <span className="text-primary">B2B</span> Model
            </h3>
            <div className="space-y-4">
              {b2bFlow.map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm shrink-0">
                    {item.pct}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm">{item.label}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: item.pct } : {}}
                        transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* B2C */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold mb-6 text-center">
              <span className="text-primary">B2C</span> Model
            </h3>
            <div className="space-y-4">
              {b2cFlow.map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm shrink-0">
                    {item.pct}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm">{item.label}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: item.pct } : {}}
                        transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;
