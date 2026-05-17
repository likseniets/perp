import { motion } from "motion/react";
import { GraduationCap, Wrench, BookOpen } from "lucide-react";

const education = [
  {
    icon: Wrench,
    degree: "Fagbrev — IT-servicefag",
    institution: "Videregående skole",
    period: "2018 – 2022",
    color: "from-blue-500 to-cyan-500",
    learned: [
      "Nettverk og infrastruktur",
      "Hardware, feilsøking og kundestøtte",
      "Installasjon og konfigurasjon av systemer",
      "Praktisk IT-arbeid fra dag én",
    ],
  },
  {
    icon: GraduationCap,
    degree: "Bachelor — Dataingeniør",
    institution: "OsloMet",
    period: "2022 – 2026",
    color: "from-indigo-500 to-purple-500",
    learned: [
      "Programmering, databaser og systemarkitektur",
      "Nettverkssikkerhet og skyteknologi",
      "Prosjektarbeid og smidig metodikk",
      "Kombinerer teori med praktisk erfaring",
    ],
  },
];

export default function EducationSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-2">Utdanning</h2>
          <p className="text-purple-300 text-xl">
            Fagbrev + bachelor — teori møter praksis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${edu.color} mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-purple-300 mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>
                <p className="text-purple-400 text-sm mb-6">{edu.period}</p>

                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wide mb-3">
                    Hva jeg lærte
                  </p>
                  <ul className="space-y-2">
                    {edu.learned.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-purple-100"
                      >
                        <span className="text-purple-400 mt-1 shrink-0">
                          {`->`}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
