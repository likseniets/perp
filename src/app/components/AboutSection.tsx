import { motion } from "motion/react";
import {
  Search,
  BarChart2,
  Users,
  Zap,
  MapPin,
  Linkedin,
  Mail,
} from "lucide-react";

const traits = [
  {
    icon: Search,
    label: "Nysgjerrig",
    description: "Liker å forstå hvordan ting fungerer og finne nye løsninger",
  },
  {
    icon: BarChart2,
    label: "Analytisk",
    description: "Finner mønstre og løsninger i komplekse problemer",
  },
  {
    icon: Users,
    label: "Sosial",
    description: "Trives godt med folk og i team",
  },
  {
    icon: Zap,
    label: "Automatisering",
    description: "Hvis noe kan automatiseres, vil jeg automatisere det",
  },
];

export default function AboutSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
          </div>

          {/* Personality Trait Cards */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-blue-300 shrink-0" />
                    <p className="text-base font-bold text-white">
                      {trait.label}
                    </p>
                  </div>
                  <p className="text-xs text-blue-200 leading-snug">
                    {trait.description}
                  </p>
                </motion.div>
              );
            })}
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
            <h2 className="text-5xl font-bold text-white mb-2">Hvem er jeg?</h2>
            <ul className="space-y-3 text-xl text-blue-100">
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Utvikler
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Liker å forstå
                <em>hvorfor,</em> ikke bare fikse
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Elsker å sette
                meg inn i komplekse systemer
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-300 text-2xl">→</span>Trives både i
                team og selvstendig
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
                <span className="text-blue-300">→</span>Alltid noe nytt å lære
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-4 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span>Norge</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-300" />
              <span>steineskil@gmail.com</span>
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
