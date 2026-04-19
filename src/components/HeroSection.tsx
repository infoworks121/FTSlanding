import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      
      {/* 1. Background Video Section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          src="/all_details_ok_ami_amr_website.mp4"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        
        {/* Adaptive Overlay for Day/Night Mode (Premium Look) */}
        {/* Light mode-এ সাদা গ্লাস এফেক্ট এবং Dark mode-এ কালো গ্লাস এফেক্ট */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-[3px] transition-colors duration-500" />
      </div>

      {/* 2. Animated glowing orbs (Premium Tech Feel) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500/30 dark:bg-green-400/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/30 dark:bg-blue-400/20 blur-[80px]"
        />
        
        {/* Futuristic Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(100,100,100,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* 3. Main Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-gray-300 dark:border-gray-800 shadow-sm text-xs font-bold text-green-700 dark:text-green-400 mb-6 tracking-wider uppercase">
            Next-Gen Business Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"
        >
          Revolutionizing Business
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 drop-shadow-sm">
            Ecosystem with FTS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10 font-medium"
        >
          A Smart, Automated, Multi-Layer Business Network for Unlimited Growth.
          Connect, Scale, and Earn — all in one ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#system-flow"
            className="px-8 py-3.5 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold text-base transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1"
          >
            Explore System
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold text-base hover:bg-white/50 dark:hover:bg-white/20 transition-all hover:-translate-y-1 shadow-sm"
          >
            Join Us
          </a>
        </motion.div>

        {/* 4. Floating network nodes decoration */}
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-16 opacity-60 dark:opacity-40 pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;