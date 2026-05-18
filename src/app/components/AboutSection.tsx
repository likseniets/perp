import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 sm:px-8 py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/suuubway.jpg"
              alt="Profilbilde"
              className="w-full h-130 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
          </div>
        </motion.div>

        {/* Right: About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
              Hvem er jeg?
            </h2>
            <ul className="space-y-3 text-base sm:text-xl text-blue-100">
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Hyggelig og
                omtenksom
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Liker å forstå
                hvordan ting fungerer
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Elsker å sette
                meg inn i komplekse systemer
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Trives sammen
                med andre, men også godt alene
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Alltid glad i å
                lære nye ting
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Utenom jobben
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <span className="text-blue-300">→</span>Gaming
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-300">→</span>Musikk
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-300">→</span>Hobbyprosjekter
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-300">→</span>Sosialt
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
