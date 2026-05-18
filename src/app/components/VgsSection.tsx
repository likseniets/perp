import { motion } from "motion/react";
import { School, Wrench } from "lucide-react";

const subjects = [
  "Automasjon",
  "Scripting",
  "Nettverk og infrastruktur",
  "Hardware, montering og feilsøking",
  "Installasjon og konfigurasjon av OS (Windows og Linux)",
  "Mikrokontrollere og elektronikk",
  "Praktisk IT-arbeid i bedrift (lærlingtid)",
];

export default function VgsSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 px-4 sm:px-8 py-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-6xl font-bold text-white mb-2">
            Videregående
          </h2>
          <p className="text-cyan-300 text-base sm:text-xl">
            Starten på IT-karrieren
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Degrees */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <School className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Elektro</h3>
                  <p className="text-cyan-400 text-sm">
                    Vg1 - Videregående skole
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Introduksjon til elektronikk og teknologi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <School className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Dataelektroniker
                  </h3>
                  <p className="text-cyan-400 text-sm">
                    Vg2 + Vg3 - Videregående skole
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Nettverk, operativsystemer og programvare
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Wrench className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Fagbrev — Dataelektroniker
                  </h3>
                  <p className="text-green-400 text-sm">
                    Lærlingtid + fagprøve · 2021/2022
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Fullført med bestått fagprøve, med fokus på utvikling
              </p>
            </motion.div>
          </div>

          {/* Right: What I learned */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <p className="text-white/60 text-sm uppercase tracking-wide mb-4">
              Hva jeg lærte
            </p>
            <ul className="space-y-3">
              {subjects.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-2 text-cyan-100"
                >
                  <span className="text-cyan-400 mt-0.5 shrink-0">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
