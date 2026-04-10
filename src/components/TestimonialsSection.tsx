import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Core Body Member",
    text: "FTS transformed how I manage my regional business. The automation is incredible — I focus on growth, not paperwork.",
  },
  {
    name: "Fatima Akter",
    role: "Businessman",
    text: "Started with zero investment and now earning consistently through multiple channels. The ecosystem truly delivers.",
  },
  {
    name: "Kamal Hossain",
    role: "Customer",
    text: "The marketplace experience is seamless. Trusted products, fast delivery, and excellent support every time.",
  },
];

const roadmap = [
  { year: "2024", milestone: "Platform Launch & Core Features" },
  { year: "2025", milestone: "Multi-Region Expansion & Mobile App" },
  { year: "2026", milestone: "AI-Powered Analytics & Global Scale" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Trusted by <span className="text-gradient">Our Network</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-primary text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Vision / Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Roadmap</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Future <span className="text-gradient">Vision</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          {roadmap.map((r, i) => (
            <motion.div
              key={r.year}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="glass rounded-2xl p-6 text-center flex-1 w-full"
            >
              <div className="font-display text-2xl font-bold text-gradient mb-2">{r.year}</div>
              <p className="text-muted-foreground text-sm">{r.milestone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
