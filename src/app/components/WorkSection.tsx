import { motion } from "motion/react";
import { Building2, ChevronRight } from "lucide-react";

const roles = [
  {
    title: "Opplæring",
    learned: [
      "Grunnleggende programmering",
      "React (JavaScript/TypeScript)",
      "REST API-er og integrasjoner",
    ],
  },
  {
    title: "Geminor",
    learned: [
      "Jobbet i et team med erfarne utviklere",
      "Kundedialog og utvikling basert på behov",
      "Første erfaring med et større kodebase og produksjonssystemer",
    ],
  },
  {
    title: "Fagprøve",
    learned: [
      "Utviklet en fullstendig applikasjon fra start",
      "Tok mer ansvar og jobbet mer selvstendig",
      "Time management og prioritering",
    ],
  },
  {
    title: "Arribatec Hospitality",
    learned: [
      "Fullstack-utvikling i et profesjonelt miljø",
      "Mer avanserte teknologier og systemer",
    ],
  },
];

export default function WorkSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 sm:px-8 py-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-8"
        >
          <div className="flex items-center gap-3 mb-1">
            <Building2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              Arribatec
            </h2>
          </div>
          <p className="text-blue-400 text-sm sm:text-base ml-1">
            Lærlingtid · 2020-2022
          </p>
        </motion.div>

        {/* 2x2 grid with progression arrows */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-5 border border-white/10"
            >
              {/* Step number + title */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center">
                  <span className="text-blue-300 font-bold text-xs sm:text-sm">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white">
                  {role.title}
                </h3>
              </div>

              <ul className="space-y-1">
                {role.learned.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-gray-300 text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
