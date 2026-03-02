import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzhjOGM4YyIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNG0wLTJoLTR2NGg0di00eiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-40"></div>
      
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="relative border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>© 2026 Rudransh. Crafted with passion & code.</p>
        </div>
      </footer>
    </div>
  );
}
