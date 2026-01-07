
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#0d0d0d]">
      {/* Sidebar Contact from Screenshot */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 items-center gap-6">
        <span className="vertical-text text-[10px] uppercase tracking-[0.5em] font-bold text-slate-500">
          Contact us <span className="text-[#ff4d3d] ml-1">now!</span>
        </span>
        <div className="w-12 h-12 rounded-full bg-[#ff4d3d] flex items-center justify-center shadow-2xl shadow-[#ff4d3d]/20 cursor-pointer hover:scale-110 transition-all duration-300">
          <MessageSquare size={20} className="text-white fill-current" />
        </div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Experience />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
