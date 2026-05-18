import { motion } from "motion/react";
import { Target, Rocket, Star } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Rollen passer meg",
    points: [
      "Kombinerer det tekniske jeg kan med noe jeg vil lære mer av",
      "Variasjon mellom systemer, folk og problemstillinger",
    ],
  },
  {
    icon: Star,
    title: "Kongsberg IT spesifikt",
    points: [
      "Solid faglig miljø med erfarne folk",
      "Systemer og infrastruktur som faktisk betyr noe",
      "En arbeidsplass jeg kan vokse i over tid",
    ],
  },
  {
    icon: Rocket,
    title: "Hva jeg kan bidra med",
    points: [
      "Praktisk erfaring fra Arribatec kombinert med bredere teknisk kompetanse fra utdanning",
      "Ett fint smil og en positiv innstilling",
      "Motivert og klar for å ta ansvar fra dag én",
    ],
  },
];

export default function KongsbergSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 px-4 sm:px-8 py-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-6xl font-bold text-white mb-2">
            Hvorfor Kongsberg IT?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Icon className="w-5 h-5 text-orange-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {reason.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-orange-100 text-sm"
                    >
                      <span className="text-orange-400 mt-0.5 shrink-0">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
