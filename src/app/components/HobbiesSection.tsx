import { motion } from "motion/react";
import {
  Book,
  Camera,
  Music,
  Plane,
  Dumbbell,
  Palette,
  Coffee,
  Bike,
} from "lucide-react";

const hobbies = [
  {
    icon: Book,
    title: "Reading",
    description: "Technology, business, and personal growth",
    image:
      "https://images.unsplash.com/photo-1758686254227-b727e3ade717?w=400&h=300&fit=crop",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and creative compositions",
    image:
      "https://images.unsplash.com/photo-1758686254118-39ae3a990826?w=400&h=300&fit=crop",
  },
  {
    icon: Music,
    title: "Music",
    description: "Playing instruments and exploring genres",
    image:
      "https://images.unsplash.com/photo-1758691031703-ebb80755aa8e?w=400&h=300&fit=crop",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring cultures around the world",
    image:
      "https://images.unsplash.com/photo-1758691031235-9db55497d898?w=400&h=300&fit=crop",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Regular exercise and healthy living",
    image:
      "https://images.unsplash.com/photo-1758612897350-3a00876f2a35?w=400&h=300&fit=crop",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Painting, design, and visual creativity",
    image:
      "https://images.unsplash.com/photo-1758686254227-b727e3ade717?w=400&h=300&fit=crop",
  },
];

export default function HobbiesSection() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 px-4 sm:px-8 py-8 sm:py-16 overflow-y-auto">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-6xl font-bold text-white mb-4">
            My Passions
          </h2>
          <p className="text-base sm:text-2xl text-blue-200">
            Beyond work, these activities inspire and energize me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {hobby.title}
                      </h3>
                    </div>
                    <p className="text-blue-100">{hobby.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 text-center"
        >
          <p className="text-base sm:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            These hobbies help me maintain balance, foster creativity, and bring
            fresh perspectives to problem-solving. They teach me discipline,
            patience, and the value of continuous improvement—qualities I bring
            to every professional challenge.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
