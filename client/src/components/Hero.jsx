import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { navLinks } from '../data/constants';
import logoImg from '../assets/logo.jpeg';
import frontPageImg from '../assets/frontPage.jpg';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* NavBar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-secondary-900/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div
            className="cursor-pointer min-w-0 flex items-center gap-3"
            onClick={() => scrollTo('hero')}
          >
            <div className="flex gap-2 justify-center items-center">
              <span className="text-white text-base sm:text-lg font-black tracking-tight leading-tight">THOMPSON</span>
              <span className="text-blue-200 text-xs sm:text-sm font-bold tracking-wide">ENGINEERING</span>
            </div>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button onClick={() => scrollTo('contact')}
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary-900/50">
              Get In Touch
            </button>
          </nav>

          {/* Mobile */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary-900/98 backdrop-blur-md border-t border-secondary-700 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map(l => (
                  <button key={l.id} onClick={() => scrollTo(l.id)}
                    className="text-left text-gray-300 hover:text-white py-1 text-sm font-medium transition-colors">
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-900">
        {/* Cinematic Background Image - frontPage */}
        <div className="absolute inset-0 z-0">
          <img src={frontPageImg} alt="Fabrication Workshop" className="w-full h-full object-cover select-none pointer-events-none" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-linear-to-b from-secondary-900/60 via-secondary-900/70 to-secondary-900"></div>
        </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 z-1"
        style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      {/* Gradient glow */}
      <div className="absolute inset-0 z-2">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <img src={logoImg} alt="Thompson Engineering" className="h-20 sm:h-24 w-auto mx-auto mb-6 object-contain" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6"
        >
          <span className="font-serif tracking-wider uppercase">Thompson Engineering</span><br />
          <span className="text-primary-400 font-sans font-medium text-2xl sm:text-3xl md:text-4xl tracking-wide">Steel Fabrication Components</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-gray-400 text-base sm:text-xl mb-8 sm:mb-10 font-light max-w-2xl mx-auto"
        >
          Precision. Efficiency. Customer Satisfaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Explore Services <ArrowRight size={18} />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}
