import { motion } from 'motion/react';
import { Building2, Calendar, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Senior Software Engineer',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Leading cloud architecture and team mentorship',
    achievements: [
      'Architected systems handling 1M+ daily users',
      'Reduced infrastructure costs by 40%',
      'Mentored 8 engineers to senior positions'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=400&fit=crop'
  },
  {
    company: 'Digital Solutions Corp',
    position: 'Software Engineer',
    period: '2019 - 2021',
    location: 'New York, NY',
    description: 'Full-stack development for enterprise clients',
    achievements: [
      'Delivered 15+ client projects on time',
      'Implemented CI/CD reducing deploy time 60%',
      'Led migration to microservices architecture'
    ],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop'
  },
  {
    company: 'StartUp Dynamics',
    position: 'Junior Developer',
    period: '2018 - 2019',
    location: 'Austin, TX',
    description: 'Mobile and web app development',
    achievements: [
      'Built features for 50K+ user mobile app',
      'Improved app performance by 35%',
      'Collaborated in agile sprints'
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop'
  }
];

export default function WorkSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 px-8 py-16 overflow-y-auto">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-2xl text-gray-300">My professional journey and impact</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-102"
            >
              <div className="grid md:grid-cols-5 gap-6">
                {/* Image */}
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-blue-300">
                        <Building2 className="w-5 h-5" />
                        <span className="text-xl font-semibold">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-300 text-lg mb-4">{exp.description}</p>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <h4 className="font-semibold text-white">Key Impact:</h4>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}