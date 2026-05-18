import { motion } from "motion/react";
import { Building2, ChevronRight } from "lucide-react";

const roles = [
  {
    title: "Opplæring",
    period: "",
    focus: "",
    learned: [
      "Grunnleggende programmering",
      "React (JavaScript/TypeScript)",
      "REST API-er og integrasjoner",
    ],
  },
  {
    title: "Geminor",
    period: "",
    focus: "",
    learned: [
      "Jobbet i et team med erfarne utviklere",
      "Kundedialog og utvikling basert på behov",
      "Første erfaring med et større kodebase og produksjonssystemer",
    ],
  },
  {
    title: "Fagprøve",
    period: "",
    focus: "",
    learned: [
      "Utviklet en fullstendig applikasjon fra start",
      "Tok mer ansvar og jobbet mer selvstendig",
      "Time management og prioritering",
    ],
  },
  {
    title: "Arribatec Hospitality",
    period: "",
    focus: "",
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
          className="mb-6 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              Arribatec
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-4 sm:gap-8"
              >
                {/* Dot */}
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center z-10">
                  <span className="text-blue-300 font-bold text-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base sm:text-xl font-bold text-white">
                      {role.title}
                    </h3>
                    <span className="text-gray-500 text-sm shrink-0 ml-4">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-blue-300 text-sm mb-4">{role.focus}</p>

                  <ul className="space-y-1">
                    {role.learned.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
