import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, MapPin, Send, Phone, Github } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (frontend only)
    alert('Thank you for your message! This is a demo form.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rudransh9458@gmail.com',
      href: 'mailto:rudransh9458@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rudransh-63165a361',
      href: 'https://www.linkedin.com/in/rudransh-63165a361',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                      >
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-white">{info.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-white">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/rudransh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rudransh-63165a361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
                  </a>
                  <a
                    href="mailto:rudransh9458@gmail.com"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
