import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'Deloitte Australia - Technology Job Simulation',
    issuer: 'Deloitte Australia',
    category: 'Technology',
  },
  {
    title: 'Deloitte Australia - Cyber Job Simulation',
    issuer: 'Deloitte Australia',
    category: 'Cybersecurity',
  },
  {
    title: 'React Hooks Crash Course',
    issuer: 'Online Platform',
    category: 'Web Development',
  },
  {
    title: 'JavaScript Fundamentals',
    issuer: 'Online Platform',
    category: 'Programming',
  },
];

export function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="certifications" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>{cert.issuer}</span>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-xs text-purple-400">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
