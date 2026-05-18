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
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-7xl font-bold text-white mb-4"
        >
          Stein-Eskil H. Losvar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-3xl text-blue-200 mb-6"
        >
          Dataingeniørstudent ved OsloMet
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm sm:text-xl text-white/70 italic"
        >
          Nysgjerrig, løsningorientert og alltid klar for en utfordring
        </motion.p>
      </div>
    </div>
  );
}
