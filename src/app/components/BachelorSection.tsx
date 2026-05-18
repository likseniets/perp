import { motion } from "motion/react";
import { GraduationCap, BookOpen, FolderGit2 } from "lucide-react";

const subjects = [
  "Matematikk",
  "Algoritmer og datastrukturer",
  "Programmering (Python, Java, C)",
  "Databaser",
  "Systemarkitektur og design",
  "Nettverkssikkerhet",
  "Sky løsninger",
  "Smidig metodikk (Scrum/Kanban)",
];

const projects = [
  {
    title: "[Prosjekt 1 — fyll inn]",
    description: "Kort beskrivelse av prosjektet og teknologiene brukt",
    tags: ["React", "Node.js"],
  },
  {
    title: "[Prosjekt 2 — fyll inn]",
    description: "Kort beskrivelse av prosjektet og teknologiene brukt",
    tags: ["Python", "SQL"],
  },
  {
    title: "Bacheloroppgave",
    description:
      "Prosjekt i samarbeid med Innsikt.ai, med fokus på en chatbot for foresatte til å bli bedre på samtaler med sine barn",
    tags: ["React Native", "FastAPI", "PostgreSQL", "OpenAI API"],
  },
];

export default function BachelorSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-purple-300" />
            <h2 className="text-6xl font-bold text-white">OsloMet</h2>
          </div>
          <p className="text-purple-300 text-xl">
            Bachelor — Dataingeniør · 2022–2026
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

          {/* Right: Projects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <FolderGit2 className="w-5 h-5 text-purple-300" />
              <p className="text-white font-semibold">Prosjekter</p>
            </div>
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
              >
                <h3 className="text-white font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-purple-200 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
