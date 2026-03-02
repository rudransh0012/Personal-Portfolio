import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Code2, Database, Zap, Box, Palette, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    color: 'from-purple-600 to-purple-400',
    skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'from-pink-600 to-pink-400',
    skills: ['Node.js', 'Express.js', 'Django', 'WebSockets', 'Socket.IO'],
  },
  {
    title: 'Languages',
    icon: Code2,
    color: 'from-blue-600 to-blue-400',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Tools & Tech',
    icon: Terminal,
    color: 'from-green-600 to-green-400',
    skills: ['Git', 'GitHub', 'VS Code', 'MS Office', 'Excel'],
  },
  {
    title: 'Real-time',
    icon: Zap,
    color: 'from-yellow-600 to-yellow-400',
    skills: ['WebRTC', 'Socket.IO', 'Real-time Apps', 'Live Updates'],
  },
  {
    title: 'AI & ML',
    icon: Box,
    color: 'from-red-600 to-red-400',
    skills: ['Machine Learning', 'Deep Learning', 'AI Applications', 'Cloud Computing'],
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A diverse toolkit of technologies and frameworks for building modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Top Skills Proficiency</h3>
          <div className="space-y-4">
            {[
              { name: 'JavaScript', level: 90 },
              { name: 'Node.js', level: 85 },
              { name: 'React', level: 88 },
              { name: 'Python', level: 82 },
              { name: 'Machine Learning', level: 75 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">{skill.name}</span>
                  <span className="text-sm text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
