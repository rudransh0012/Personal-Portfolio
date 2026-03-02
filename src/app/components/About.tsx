import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Brain, Target, Trophy, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Focused',
    description: 'Specialized in artificial intelligence and machine learning applications',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Focused on innovative technology solutions and automation',
  },
  {
    icon: Trophy,
    title: 'Continuous Learner',
    description: 'Committed to staying current with industry trends',
  },
  {
    icon: Heart,
    title: 'Passionate Developer',
    description: 'Love building real-time apps and intelligent systems',
  },
];

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a Computer Science (AI & ML) student at Hi-Tech Institute of Engineering and Technology, 
                passionate about creating innovative solutions through code.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As an aspiring Software Developer, I focus on problem-solving and building impactful applications. 
                I'm proficient in <span className="text-purple-400 font-medium">Python, Java, and C++</span> for 
                software development, and skilled in web technologies including 
                <span className="text-pink-400 font-medium"> React and Django</span>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey includes working on real-time projects, exploring AI and Machine Learning, 
                and continuously learning cutting-edge technologies. I'm eager to contribute my technical 
                knowledge and creative thinking to meaningful software projects.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-purple-600/20 border border-purple-600/30 rounded-xl flex-1 text-center">
                <div className="text-3xl font-bold text-purple-400">4+</div>
                <div className="text-sm text-gray-400">Months Experience</div>
              </div>
              <div className="p-4 bg-pink-600/20 border border-pink-600/30 rounded-xl flex-1 text-center">
                <div className="text-3xl font-bold text-pink-400">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
