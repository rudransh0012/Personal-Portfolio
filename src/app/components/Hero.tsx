import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, Sparkles, Code2, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Rudransh
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Code2 className="w-6 h-6 text-purple-400" />
              <span>Fullstack Developer</span>
              <span className="text-purple-400">•</span>
              <span>AI & ML Enthusiast</span>
              <Rocket className="w-6 h-6 text-pink-400" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            B.Tech CSE (AI & ML) Student passionate about building real-time applications 
            and intelligent systems with cutting-edge technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-12 flex-wrap"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/rudransh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/rudransh-63165a361"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
            </a>
            <a
              href="mailto:rudransh9458@gmail.com"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mx-auto"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
