import { motion } from "motion/react";
import { Zap, Users, Layers, Compass } from "lucide-react";

const preferences = [
  {
    icon: Zap,
    title: "Motivasjon",
    points: [
      "Løse problemer som faktisk betyr noe",
      "Se at arbeidet mitt gjør en forskjell",
      "Lære noe nytt underveis",
    ],
  },
  {
    icon: Layers,
    title: "Ideell arbeidsdag",
    points: [
      "Variasjon — ikke det samme om og om igjen",
      "Mulighet til å gå i dybden når det trengs",
      "Klare mål, men frihet til å løse dem selv",
    ],
  },
  {
    icon: Users,
    title: "Team vs. selvstendig",
    points: [
      "Trives godt i begge deler",
      "Foretrekker team der man kan diskutere og sparke idéer",
      "Kan jobbe selvstendig uten å bli fulgt opp hele tiden",
    ],
  },
  {
    icon: Compass,
    title: "Hva jeg verdsetter",
    points: [
      "Godt faglig miljø",
      "Kollegaer som bryr seg om det de gjør",
      "En arbeidsgiver som investerer i folk",
    ],
  },
];

export default function WorkdaySection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-2">
            Hva jeg ser etter
          </h2>
          <p className="text-teal-300 text-xl">I en god arbeidshverdag</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {preferences.map((pref, index) => {
            const Icon = pref.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-500/20 rounded-lg">
                    <Icon className="w-5 h-5 text-teal-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {pref.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {pref.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-teal-100 text-sm"
                    >
                      <span className="text-teal-400 mt-0.5 shrink-0">→</span>
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
