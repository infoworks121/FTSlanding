import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  BrainCircuit, 
  Globe2, 
  Briefcase, 
  ShoppingCart, 
  CheckCircle2 
} from "lucide-react";

const roles = [
  {
    id: "admin",
    icon: BrainCircuit,
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
    icon: Globe2,
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
    icon: Briefcase,
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
    icon: ShoppingCart,
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

  const activeRole = roles.find((r) => r.id === active);
  const ActiveIcon = activeRole?.icon;

  return (
    <section 
      id="roles" 
      className="py-24 relative bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500" 
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-wider uppercase mb-4 border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
            Ecosystem Roles
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-2 text-slate-900 dark:text-white">
            Detailed <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-500">Role Breakdown</span>
          </h2>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {roles.map((r) => {
            const Icon = r.icon;
            const isActive = active === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105"
                    : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-500 dark:text-slate-400"}`} />
                {r.title}
              </button>
            );
          })}
        </motion.div>

        {/* Active Role Card (Glassmorphism + Dark Mode) */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="max-w-4xl mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl dark:shadow-none rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Decorative background blur inside card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/40 dark:to-blue-900/40 border border-emerald-200 dark:border-emerald-800/50 mb-6 shadow-inner">
              {ActiveIcon && <ActiveIcon className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />}
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {activeRole?.title}
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mt-3 text-lg">
              {activeRole?.tagline}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {activeRole?.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-transparent dark:border-white/5 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RoleDetailsSection;