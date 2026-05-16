import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science',
    field: 'Computer Science',
    institution: 'Stanford University',
    period: '2016 - 2018',
    gpa: '3.9/4.0',
    honors: 'Summa Cum Laude',
    focus: 'Artificial Intelligence & Machine Learning'
  },
  {
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    institution: 'MIT',
    period: '2012 - 2016',
    gpa: '3.8/4.0',
    honors: 'Magna Cum Laude',
    focus: 'Distributed Systems & Algorithms'
  }
];

const certifications = [
  'AWS Solutions Architect Professional',
  'Google Cloud Professional Developer',
  'Certified Kubernetes Administrator',
  'Professional Scrum Master',
  'MongoDB Certified Developer',
  'Azure DevOps Engineer Expert'
];

export default function EducationSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-8 py-16 overflow-y-auto">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-4">Education</h2>
          <p className="text-2xl text-purple-200">Academic excellence and continuous learning</p>
        </motion.div>

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-xl text-purple-200">{edu.field}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-300" />
                    <span className="text-white font-semibold">{edu.institution}</span>
                  </div>
                  <p className="text-purple-200">{edu.period}</p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-green-500/30 rounded-full text-green-200 text-sm">
                      GPA: {edu.gpa}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-yellow-200 text-sm flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {edu.honors}
                    </span>
                  </div>
                  <p className="text-purple-100 italic mt-4">Focus: {edu.focus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=400&fit=crop"
            alt="Graduation celebration"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end">
            <div className="p-8">
              <p className="text-2xl text-white font-semibold">Committed to lifelong learning and growth</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-7 h-7 text-yellow-400" />
            <h3 className="text-3xl font-bold text-white">Professional Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                <span className="text-white">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}