import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-5">
            Join the <span className="text-gradient">FTS Network</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            Ready to be part of the ecosystem? Reach out and let's grow together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto mb-8 glass rounded-2xl p-6 flex items-start gap-4"
        >
          <div className="mt-1 text-primary shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-0.5">Head Office</p>
            <p className="text-sm text-muted-foreground">KASHIMBAJAR, BERHAMPUR,<br />NEAR MURSHIDABAD NURSHING HOME - 742102</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            {submitted && (
              <div className="p-3 rounded-xl bg-primary/10 text-primary text-sm text-center font-medium">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-secondary-foreground mb-1.5 block">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary transition placeholder:text-muted-foreground"
                placeholder="Your full name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-secondary-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary transition placeholder:text-muted-foreground"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-secondary-foreground mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary transition placeholder:text-muted-foreground"
                  placeholder="+880 1XXX XXXXXX"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-secondary-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary transition resize-none placeholder:text-muted-foreground"
                placeholder="Tell us how you'd like to join the ecosystem..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition glow-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
