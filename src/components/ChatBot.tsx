import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, BrainCircuit, BotMessageSquare } from "lucide-react";

type Message = { from: "user" | "bot"; text: string };

const responses: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "start"],
    answer: "Hello! 👋 Welcome to FTS – Farm & Tech Service. Ask me anything about our ecosystem!",
  },
  {
    keywords: ["what is fts", "about fts", "what fts"],
    answer: "FTS (Farm & Tech Service) is a transparent, scalable, and automated multi-business ecosystem designed to empower individuals to earn, grow, and scale. 🌱",
  },
  {
    keywords: ["join", "how to join", "sign up", "register"],
    answer: "To join FTS, fill out the contact form on this page or message us on WhatsApp at +91 80016 29507. Our team will guide you through onboarding! 🚀",
  },
  {
    keywords: ["role", "roles", "admin", "core body", "businessman", "customer"],
    answer: "FTS has 4 roles:\n\n👑 Admin – Platform governance\n🏢 Core Body – Regional management\n💼 Businessman – Sales & fulfillment\n🛒 Customer – Buy from the marketplace",
  },
  {
    keywords: ["invest", "investment", "cost", "fee", "money"],
    answer: "Customers join with zero investment! 🎉 Businessman and Core Body roles may require a small setup. Contact us for full details.",
  },
  {
    keywords: ["earn", "profit", "income", "commission", "revenue"],
    answer: "FTS multi-layer earnings:\n\n📊 B2B: Admin 10% | Core Body 15% | Businessman 20%\n🛍️ B2C: Product 55% | Platform 10% | Distribution 15% | Retail 20%",
  },
  {
    keywords: ["feature", "features", "benefit", "automat"],
    answer: "Key features:\n\n⚡ Full Automation\n📈 Infinite Scalability\n🔒 Complete Transparency\n💰 Multi-Layer Earnings\n📊 Real-Time Analytics",
  },
  {
    keywords: ["contact", "phone", "whatsapp", "support"],
    answer: "Reach us via:\n\n📱 WhatsApp: +91 80016 29507\n📝 Contact Form: Scroll to the Contact section below!",
  },
  {
    keywords: ["roadmap", "future", "plan", "2025", "2026"],
    answer: "FTS Roadmap:\n\n📅 2024 – Platform Launch\n📅 2025 – Multi-Region Expansion & Mobile App\n📅 2026 – AI Analytics & Global Scale 🚀",
  },
  {
    keywords: ["thank", "thanks"],
    answer: "You're welcome! 😊 Feel free to ask anything else about FTS!",
  },
];

const quickReplies = ["How to join?", "What are the roles?", "How do I earn?", "Contact support"];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const r of responses) {
    if (r.keywords.some((k) => lower.includes(k))) return r.answer;
  }
  return "I'm not sure about that. 🤔 Please contact us on WhatsApp at +91 80016 29507 or use the Contact form below!";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! 👋 I'm the FTS AI Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getAnswer(text) }]);
    }, 1200); 
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-white/10 flex flex-col bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl"
            style={{ height: "520px", maxHeight: "80vh" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-4 flex items-center justify-between shrink-0 shadow-md relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner group">
                  {/* Updated Header Icon to BrainCircuit */}
                  <BrainCircuit className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-white font-bold text-base tracking-wide">FTS AI Assistant</h3>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-200 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <p className="text-emerald-50 text-xs font-medium">Online & Ready</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all backdrop-blur-sm relative z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-white/10">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={i} 
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed shadow-sm ${
                    m.from === "user"
                      ? "bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-2xl rounded-tr-sm" 
                      : "bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm border border-slate-200/50 dark:border-white/5" 
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-4 py-3.5 rounded-2xl rounded-tl-sm flex gap-1.5 items-center shadow-sm">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-3 flex gap-2 flex-nowrap overflow-x-auto shrink-0 scrollbar-none snap-x">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="snap-start whitespace-nowrap text-xs font-medium px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="p-3 bg-slate-50 dark:bg-white/5 border-t border-slate-200/50 dark:border-white/10 flex gap-2 shrink-0 items-center"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-white dark:bg-black/50 border border-slate-300 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner"
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all disabled:opacity-50 disabled:hover:shadow-none shrink-0"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.6)] transition-all relative group z-50"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              {/* Updated Main Button Icon to BotMessageSquare */}
              <BotMessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Dot */}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#0a0a0a] shadow-sm">
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;