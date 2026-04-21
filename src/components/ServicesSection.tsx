import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Digital Marketing & AI",
    tag: "Technology",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    glow: "bg-violet-500/20",
    desc: "End-to-end digital marketing solutions powered by AI — including SEO, social media management, paid ads, content creation, lead generation, and intelligent analytics to grow your brand and maximize ROI.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Solar Facility",
    tag: "Clean Energy",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30",
    glow: "bg-yellow-500/20",
    desc: "Supply and installation of solar panels, inverters, and complete solar energy systems for homes, offices, and industries. We deliver cost-effective, eco-friendly power solutions with after-sales support.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Electric Vehicles (EV)",
    tag: "Green Transport",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
    glow: "bg-green-500/20",
    desc: "Distribution and retail of electric vehicles — from e-bikes and e-rickshaws to electric scooters. We support the green mobility revolution with competitive pricing and nationwide dealer partnerships.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Battery & Inverter",
    tag: "Power Solutions",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    glow: "bg-blue-500/20",
    desc: "Wholesale and retail supply of high-capacity batteries and inverters for residential, commercial, and industrial use. Reliable backup power systems from trusted brands with installation and warranty support.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C6.48 3 2 6.92 2 11.7c0 2.94 1.63 5.55 4.17 7.22V21l3.5-1.75A10.84 10.84 0 0012 19.4c5.52 0 10-3.92 10-8.7S17.52 3 12 3z" />
      </svg>
    ),
    title: "Seasonal Fruits",
    tag: "Agri Trade",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/30",
    glow: "bg-orange-500/20",
    desc: "Farm-fresh seasonal fruits sourced directly from local and regional farmers. We ensure quality grading, cold-chain logistics, and timely bulk supply to retailers, wholesalers, and export markets.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.503-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" />
      </svg>
    ),
    title: "Seasonal Vegetables",
    tag: "Agri Trade",
    color: "from-lime-500/20 to-green-500/10",
    border: "border-lime-500/30",
    glow: "bg-lime-500/20",
    desc: "Fresh seasonal vegetables supplied from verified farms across regions. We bridge the gap between farmers and markets through efficient procurement, packaging, and distribution with transparent pricing.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Garments",
    tag: "Textile & Fashion",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    glow: "bg-pink-500/20",
    desc: "Bulk and retail supply of readymade garments — men's, women's, and children's wear. We work directly with manufacturers to offer competitive prices, OEM options, and timely delivery for resellers and retailers.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Ginger, Garlic, Onion, Tea & Spices",
    tag: "Commodities",
    color: "from-amber-600/20 to-yellow-500/10",
    border: "border-amber-600/30",
    glow: "bg-amber-600/20",
    desc: "Wholesale trade of essential kitchen commodities — ginger, garlic, onion, premium teas, and masala blends. Sourced from quality farms, processed hygienically, and supplied in bulk to traders and exporters.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Dry Fruits",
    tag: "Premium Foods",
    color: "from-red-700/20 to-orange-600/10",
    border: "border-red-700/30",
    glow: "bg-red-700/20",
    desc: "Premium quality dry fruits including almonds, cashews, raisins, pistachios, dates, and more. Imported and locally sourced, hygienically packed, and supplied in bulk or retail quantities to distributors and stores.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "MSME Business",
    tag: "Enterprise Support",
    color: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/30",
    glow: "bg-indigo-500/20",
    desc: "Dedicated support for Micro, Small & Medium Enterprises — including business registration, loan facilitation, digital tools, supply chain integration, and growth consulting to help MSMEs scale sustainably.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Construction",
    tag: "Infrastructure",
    color: "from-slate-500/20 to-gray-500/10",
    border: "border-slate-500/30",
    glow: "bg-slate-500/20",
    desc: "End-to-end construction services — residential, commercial, and industrial projects. From architectural planning and material supply to site execution and project management, we deliver quality builds on time and within budget.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 mb-5">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cutting-edge technology to essential commodities — FTS delivers
            across diverse sectors under one unified ecosystem.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`group relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} backdrop-blur-sm p-6 flex flex-col gap-4 overflow-hidden cursor-default`}
            >
              {/* Glow on hover */}
              <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full ${s.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Icon */}
              <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center border ${s.border} bg-background/20 dark:bg-white/5 text-foreground dark:text-white`}>
                {s.icon}
              </div>

              {/* Tag + Title */}
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 dark:text-white/40 mb-1 block">
                  {s.tag}
                </span>
                <h3 className="text-lg font-bold text-foreground dark:text-white leading-snug">
                  {s.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="relative z-10 h-px w-10 rounded-full bg-gradient-to-r from-foreground/20 dark:from-white/30 to-transparent group-hover:w-full transition-all duration-700" />

              {/* Description */}
              <p className="relative z-10 text-sm text-foreground/60 dark:text-white/55 leading-relaxed group-hover:text-foreground/80 dark:group-hover:text-white/75 transition-colors duration-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
