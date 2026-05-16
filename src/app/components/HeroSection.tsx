import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/profile.jpg"
          alt="Professional background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-green-950/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-7xl font-bold text-white mb-4"
        >
          Stein-Eskil H. Losvar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl text-blue-200 mb-12"
        >
          Data Ingeniør | ITSM System Administrator
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Passionate professional dedicated to excellence and innovation
          </p>
          <p className="text-lg text-white/70">
            Let me share my journey with you
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
      </motion.div>
    </div>
  );
}
