import { motion } from "motion/react";
import { GraduationCap, BookOpen, FileText, Users, Cpu } from "lucide-react";

const subjects = [
  "Matematikk",
  "Algoritmer og datastrukturer",
  "Programmering (Python, Java, C)",
  "Databaser",
  "Systemarkitektur og design",
  "Nettverkssikkerhet",
  "Sky løsninger",
  "Smidig metodikk (Scrum)",
];

export default function BachelorSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-4 sm:px-8 py-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 sm:mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-purple-300" />
            <h2 className="text-3xl sm:text-6xl font-bold text-white">
              OsloMet
            </h2>
          </div>
          <p className="text-purple-300 text-base sm:text-xl">
            Bachelor - Dataingeniør · 2022-2026
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Subjects */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-5 h-5 text-purple-300" />
              <p className="text-white font-semibold">Hva jeg har studert</p>
            </div>
            <ul className="space-y-3">
              {subjects.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-2 text-purple-100"
                >
                  <span className="text-purple-400 mt-0.5 shrink-0">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Bachelor thesis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col gap-5"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-300" />
              <p className="text-white font-semibold">Bacheloroppgave</p>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              Prosjekt i samarbeid med{" "}
              <span className="text-purple-300 font-medium">Innsikt.ai</span>,
              med fokus på en chatbot som hjelper foresatte til å bli bedre på
              samtaler med sine barn.
            </p>

            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              <p className="text-purple-200 text-sm">
                Gruppeprosjekt på 5 personer - fra idé til ferdig produkt med
                brukertester, design og implementasjon.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Cpu className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              <p className="text-purple-200 text-sm">
                AI-drevet samtaleassistent med konstruktiv tilbakemelding.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {["React Native", "FastAPI", "PostgreSQL", "OpenAI API"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/20"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
