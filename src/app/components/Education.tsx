import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science - AI & Machine Learning',
    institution: 'Hi-Tech Institute of Engineering and Technology, Ghaziabad',
    year: '2022 - Present',
    icon: GraduationCap,
  },
  {
    degree: 'High School Diploma',
    field: 'Senior Secondary Education',
    institution: 'Soni Pariya Public School',
    year: '2021 - 2022',
    icon: BookOpen,
  },
  {
    degree: 'High School Diploma',
    field: 'Secondary Education',
    institution: 'Soni Pariya Public School',
    year: '2019 - 2020',
    icon: BookOpen,
  },
];

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="education" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="px-3 py-1 bg-purple-600/20 border border-purple-600/30 rounded-full text-sm text-purple-400">
                        {edu.year}
                      </span>
                    </div>
                    
                    <p className="text-purple-300 font-medium mb-2">{edu.field}</p>
                    <p className="text-gray-400">{edu.institution}</p>
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
