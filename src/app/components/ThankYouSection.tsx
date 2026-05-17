import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function ThankYouSection() {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-7xl font-bold text-white mb-4"
        >
          Takk!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl text-blue-200 mb-4"
        >
          Spørsmål, innspill eller bare en god prat?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-white/50 mb-12"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-lg">Jeg tar gjerne spørsmål</span>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:din@epost.no"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/10"
          >
            <Mail className="w-5 h-5" />
            <span>din@epost.no</span>
          </a>
          <a
            href="https://linkedin.com/in/dinprofil"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/10"
          >
            <Linkedin className="w-5 h-5" />
            <span>linkedin.com/in/dinprofil</span>
          </a>
          <a
            href="https://github.com/likseniets"
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/10"
          >
            <Github className="w-5 h-5" />
            <span>github.com/likseniets</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
