import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Code,
  Lightbulb,
  Users,
  Trophy,
} from "lucide-react";

const highlights = [
  { icon: Code, label: "Technical Excellence", value: "8+ Years" },
  { icon: Users, label: "Team Leadership", value: "15+ Projects" },
  { icon: Lightbulb, label: "Innovation", value: "5+ Patents" },
  { icon: Trophy, label: "Awards", value: "10+ Honors" },
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
              src="/profile.jpg"
              alt="Professional portrait"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
          </div>

          {/* Stats Overlay */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-sm text-blue-200">{item.label}</p>
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
            <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-blue-100 leading-relaxed">
              <p>
                I am a dedicated professional with over 8 years of experience in
                software engineering and technology leadership. My passion lies
                in creating innovative solutions that make a real difference.
              </p>
              <p>
                Throughout my career, I've led cross-functional teams,
                architected scalable systems, and mentored dozens of developers.
                I believe in continuous learning and staying at the forefront of
                technology.
              </p>
              <p>
                I'm excited to bring my expertise, leadership skills, and
                passion for innovation to new challenges.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-blue-100">
                <Mail className="w-5 h-5 text-blue-300" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Phone className="w-5 h-5 text-blue-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Linkedin className="w-5 h-5 text-blue-300" />
                <span>linkedin.com/in/yourprofile</span>
              </div>
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Core Strengths
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Leadership",
                "Innovation",
                "Problem Solving",
                "Communication",
                "Strategy",
                "Mentoring",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 bg-blue-500/30 backdrop-blur-sm text-white rounded-full border border-blue-300/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
