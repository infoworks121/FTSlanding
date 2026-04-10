import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const roles = [
  {
    id: "admin",
    icon: "🧠",
    title: "Admin Panel",
    tagline: "The Brain, Rule-Maker & Controller of FTS Ecosystem",
    features: [
      "Product onboarding & category management",
      "Profit rules & commission configuration",
      "Stock distribution to Core Bodies",
      "Role control & access management",
      "Analytics & system-wide monitoring",
      "Automated settlement engine",
    ],
  },
  {
    id: "corebody",
    icon: "🌍",
    title: "Core Body Panel",
    tagline: "District Authority with Strong Control & High Earning Potential",
    features: [
      "District-level inventory & supply chain",
      "Core Body A & B tiered structure",
      "Investment-based earning model",
      "Limited members per district for exclusivity",
      "Regional analytics & performance tracking",
      "Automated distribution management",
    ],
  },
  {
    id: "businessman",
    icon: "💼",
    title: "Businessman Panel",
    tagline: "Zero Investment to Start – Unlimited Growth Potential",
    features: [
      "Unified role: Retailer + Stock Point + Bulk",
      "Earn through margin on sales",
      "Bulk supply & wholesale opportunities",
      "Referral & network growth rewards",
      "Fulfillment-based earnings",
      "Personal dashboard & analytics",
    ],
  },
  {
    id: "customer",
    icon: "🛒",
    title: "Customer Panel",
    tagline: "Smart E-commerce Experience with Trusted Network",
    features: [
      "Browse & buy products/services",
      "Smart fulfillment system",
      "Real-time order tracking",
      "Rating & review system",
      "Customer support integration",
      "Secure payment processing",
    ],
  },
];

const RoleDetailsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("admin");

  const activeRole = roles.find((r) => r.id === active)!;

  return (
    <section id="roles" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Ecosystem Roles</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Detailed <span className="text-gradient">Role Breakdown</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === r.id
                  ? "bg-primary text-primary-foreground glow-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-2">{r.icon}</span>
              {r.title}
            </button>
          ))}
        </motion.div>

        {/* Active role card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <span className="text-5xl mb-4 block">{activeRole.icon}</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold">{activeRole.title}</h3>
            <p className="text-primary font-medium mt-2">{activeRole.tagline}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {activeRole.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50"
              >
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-secondary-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleDetailsSection;
