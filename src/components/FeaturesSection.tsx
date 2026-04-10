import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "⚡",
    title: "Full Automation",
    desc: "Automated profit distribution, stock management, and settlement — zero manual work.",
  },
  {
    icon: "📈",
    title: "Infinite Scalability",
    desc: "Multi-layer network designed to grow without limits across districts and regions.",
  },
  {
    icon: "🔒",
    title: "Complete Transparency",
    desc: "Every transaction, commission, and distribution is tracked and visible in real-time.",
  },
  {
    icon: "💰",
    title: "Multi-Layer Earnings",
    desc: "Earn from sales margin, referrals, bulk supply, and fulfillment — multiple income streams.",
  },
  {
    icon: "🔗",
    title: "Smart Supply Chain",
    desc: "Integrated inventory management from admin to customer with automated reordering.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Comprehensive dashboards for every role with actionable business intelligence.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Platform Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
            Built for <span className="text-gradient">Growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Enterprise-grade features powering the next generation of business ecosystems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-all group hover:glow-sm"
            >
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform">{f.icon}</span>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
