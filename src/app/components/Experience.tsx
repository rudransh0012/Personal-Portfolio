import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experience = {
  company: 'Unified Mentor',
  role: 'Fullstack Web Development Internship',
  duration: 'August 2025 - November 2025 (4 months)',
  location: 'Uttar Pradesh, India',
  description: 'Fullstack Web Development intern at Unified Mentor, working on real-time projects, enhancing skills, applying knowledge, and contributing to innovative solutions.',
  achievements: [
    'Developed and deployed real-time web applications',
    'Enhanced fullstack development skills across modern technologies',
    'Collaborated on innovative solutions for client projects',
    'Applied best practices in software development',
  ],
};

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="experience" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            <div className="relative pl-16 md:pl-20 pb-8">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-slate-950"></div>

              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
                    <div className="flex items-center gap-2 text-purple-400 font-medium mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
