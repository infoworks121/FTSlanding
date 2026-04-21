import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is FTS and how does it work?",
    a: "FTS (Farm & Tech Service) is a multi-layer business ecosystem that connects Admins, Core Body members, Businessmen, and Customers. Each layer earns through structured profit distribution — automated and transparent.",
  },
  {
    q: "How do I join the FTS network?",
    a: "You can join by filling out the contact form on this page. Our team will reach out to guide you through the onboarding process and assign you the right role based on your goals.",
  },
  {
    q: "Is there any investment required to join?",
    a: "It depends on the role. Some roles like Customer require zero investment. Businessman and Core Body roles may require a small initial setup. Full details are shared during onboarding.",
  },
  {
    q: "How are profits distributed?",
    a: "Profits are distributed transparently across all layers. In the B2B model: Admin gets 10%, Core Body 15%, and Businessman 20%. In B2C, the remaining margin covers product cost, platform fee, distribution, and retail.",
  },
  {
    q: "Is FTS available outside India?",
    a: "FTS is currently operating within India with plans for multi-region expansion in 2025 and global scaling by 2026 as per our roadmap.",
  },
  {
    q: "How does the automation work?",
    a: "FTS uses an automated platform to handle order tracking, profit calculations, role management, and reporting — so members can focus on growth instead of manual operations.",
  },
  {
    q: "Can I upgrade my role later?",
    a: "Yes. Members can grow within the ecosystem. A Customer can become a Businessman, and a Businessman can progress to a Core Body member based on performance and network growth.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            Everything you need to know before joining the FTS ecosystem.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-sm md:text-base">{faq.q}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
