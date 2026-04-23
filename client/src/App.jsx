import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Mail, ChevronDown, Menu, X, ArrowRight, Shield, Users, Zap, Award, Target, Eye } from 'lucide-react';

import heroImg from './assets/1000109948.png';
import overviewImg from './assets/1000109924.jpg';
import factoryImg from './assets/1000109964.jpg';
import qualityImg from './assets/1000109950.jpg';

/* ─── DATA ──────────────────────────────────────────── */
const services = [
  'Sheet Metal Fabrication', 'Shearing', 'Profile Cutting', 'Trimming',
  'Notching', 'Punching', 'Bending', 'Forming', 'Welding (CO2)', 'Burr Cleaning', 'Finishing',
];

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Quality Assured' },
];

const navLinks = [
  { id: 'overview', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'infrastructure', label: 'Facility' },
  { id: 'quality', label: 'Quality' },
  { id: 'contact', label: 'Contact' },
];

const infraItems = [
  { icon: <Zap size={28} />, title: 'Power Press Machines', desc: 'Multiple tonnage power press machines for high-precision sheet metal forming and stamping.', color: 'bg-yellow-50 text-yellow-600' },
  { icon: <Shield size={28} />, title: 'Shearing Machines', desc: 'Heavy-duty shearing machines cutting a wide range of metal gauges with accuracy.', color: 'bg-blue-50 text-blue-600' },
  { icon: <Zap size={28} />, title: 'Welding Units', desc: 'CO2 welding units operated by certified welders, ensuring strong and clean weld joints.', color: 'bg-red-50 text-red-600' },
  { icon: <Award size={28} />, title: 'High Production Capacity', desc: 'Optimized workflow and shift scheduling to handle high-volume orders consistently.', color: 'bg-green-50 text-green-600' },
];

/* ─── ANIMATION UTILITIES ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ScrollReveal({ children, variants = fadeUp, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerReveal({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── ANIMATED COUNTER ──────────────────────────────── */
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function NavBar() {
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
          className="cursor-pointer min-w-0"
          onClick={() => scrollTo('hero')}
        >
          <span className="text-white text-base sm:text-xl font-black tracking-tight">THOMPSON</span>
          <span className="text-primary-400 text-base sm:text-xl font-black tracking-tight hidden xs:inline sm:inline"> ENGINEERING</span>
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
  );
}

/* ─── SECTION TITLE ─────────────────────────────────── */
function SectionTitle({ tag = '', children }) {
  return (
    <ScrollReveal>
      <div className="mb-8 md:mb-12">
        {tag && <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">{tag}</p>}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary-900">{children}</h2>
        <div className="mt-3 w-12 h-1 bg-primary-600 rounded-full"></div>
      </div>
    </ScrollReveal>
  );
}

/* ─── MAIN APP ───────────────────────────────────────── */
export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen overflow-x-hidden">
      <NavBar />

      {/* ── HERO ─────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-900">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Fabrication Workshop" className="w-full h-full object-cover opacity-30 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/60 via-secondary-900/80 to-secondary-900"></div>
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
            <span className="inline-block bg-primary-600/20 border border-primary-500/30 text-primary-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Since 2009 · Chennai, India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4 sm:mb-6"
          >
            High-Quality<br />
            <span className="text-primary-400">Fabrication</span> Solutions
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

      {/* ── STATS BAND ───────────────────────────── */}
      <section className="bg-primary-700 py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-white py-2">
                <p className="text-3xl sm:text-4xl font-extrabold mb-1">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-primary-200 text-xs sm:text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────── */}
      <section id="overview" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle tag="Who We Are">Company Overview</SectionTitle>
              <ScrollReveal variants={fadeLeft}>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Thompson Engineering is a premier fabrication company based in Chennai, India.
                  With over 15 years of hands-on experience in precision sheet metal fabrication,
                  we deliver reliable, high-quality components to industries across the region.
                </p>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { icon: <Target size={22} />, title: 'Our Vision', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'To deliver high-quality fabrication solutions that set the benchmark for precision and reliability in the industry.' },
                    { icon: <Eye size={22} />, title: 'Our Mission', color: 'text-green-600', bg: 'bg-green-50', desc: 'To ensure complete customer satisfaction through precision engineering, operational efficiency, and consistent quality.' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className={`${item.bg} ${item.color} p-2.5 rounded-lg h-fit shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary-900 mb-0.5">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variants={fadeRight} className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary-600/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                <img src={overviewImg} alt="Our Products" className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-white/50 animate-bounce">
                  <p className="text-primary-700 font-bold text-sm">Industrial Components</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle tag="What We Do">Our Services</SectionTitle>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div key={s} variants={fadeUp}
                className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-primary-500 hover:shadow-lg transition-all duration-300 cursor-default flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary-50 text-primary-600 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="font-medium text-secondary-900 group-hover:text-primary-700 transition-colors duration-200">{s}</span>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ───────────────────────── */}
      <section id="infrastructure" className="py-16 sm:py-24 bg-secondary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <SectionTitle tag="Our Facility">Infrastructure & Facilities</SectionTitle>
            <ScrollReveal variants={fadeUp}>
              <img src={factoryImg} alt="Factory Floor" className="rounded-2xl border border-secondary-700 shadow-2xl opacity-80" />
            </ScrollReveal>
          </div>
          <StaggerReveal className="grid md:grid-cols-2 gap-6">
            {infraItems.map(item => (
              <motion.div key={item.title} variants={fadeUp}
                className="bg-secondary-800 rounded-2xl p-7 hover:bg-secondary-700 transition-colors duration-300 group border border-secondary-700 hover:border-primary-600">
                <div className={`inline-flex p-3 rounded-xl mb-5 ${item.color}`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── QUALITY ──────────────────────────────── */}
      <section id="quality" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal variants={fadeLeft}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary-600/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                <img src={qualityImg} alt="Quality Inspection" className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-secondary-900 text-white p-6 rounded-2xl shadow-2xl hidden lg:block border border-secondary-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-primary-400" size={24} />
                    <p className="font-bold">Mass Production</p>
                  </div>
                  <p className="text-xs text-gray-400 max-w-[200px]">Capable of handling bulk fabrication orders with consistent precision across all units.</p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <SectionTitle tag="Standards">Quality Assurance</SectionTitle>
              <StaggerReveal className="space-y-4 mb-8">
                {[
                  { num: '01', title: 'In-Process Inspection', desc: 'Dimensional checks at each stage of fabrication using calibrated instruments.' },
                  { num: '02', title: 'Final Inspection', desc: 'Comprehensive review against customer drawings before dispatch.' },
                  { num: '03', title: 'Industry Standards', desc: 'Adherence to micro-tolerances and specific quality requirements.' },
                ].map(item => (
                  <motion.div key={item.num} variants={fadeRight}
                    className="flex gap-4 group">
                    <span className="text-3xl font-extrabold text-primary-100 group-hover:text-primary-200 transition-colors w-10 shrink-0 leading-none">{item.num}</span>
                    <div className="border-t-2 border-gray-100 group-hover:border-primary-500 pt-3 transition-colors flex-1">
                      <h4 className="font-bold text-secondary-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerReveal>

              <ScrollReveal variants={fadeUp}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-wrap gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary-700 font-semibold mb-2">
                      <Users size={18} /> Workforce
                    </div>
                    <ul className="space-y-1">
                      {['Skilled Operators', 'Certified Welders'].map(it => (
                        <li key={it} className="flex items-center gap-2 text-gray-600 text-xs text-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-primary-700 font-semibold mb-2">
                      <Shield size={18} /> Safety
                    </div>
                    <ul className="space-y-1">
                      {['PPE Compliance', 'Safety Training'].map(it => (
                        <li key={it} className="flex items-center gap-2 text-gray-600 text-xs text-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS & ACHIEVEMENTS ───────────────── */}
      <section className="py-16 sm:py-24 bg-primary-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Achievements & Strengths</h2>
            <div className="w-14 h-1 bg-white/30 rounded-full mb-12"></div>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Clients Served', desc: 'Steel fabrication contractors, construction firms, and industrial manufacturers across Chennai region.' },
              { title: 'Key Strengths', desc: 'End-to-end fabrication capability, strict quality control, and ability to handle both small and high-volume runs.' },
              { title: 'Future Plans', desc: 'CNC press brakes, laser cutting units, ISO certification, and lean manufacturing adoption.' },
            ].map(item => (
              <motion.div key={item.title} variants={fadeUp}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-24 bg-secondary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle tag="Reach Us">Contact Us</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <ScrollReveal variants={fadeLeft} className="space-y-6">
              <p className="text-2xl font-extrabold text-white">THOMPSON ENGINEERING</p>
              <p className="text-gray-400 leading-relaxed">
                Located in the SIDCO Industrial Estate, Ambattur — one of Chennai's key industrial hubs.
                We welcome visits, inquiries, and project discussions.
              </p>
              {[
                { icon: <MapPin size={18} />, content: '150 & 151, Tiny Sector, SIDCO Industrial Estate, Ambattur, Chennai - 600 098', href: null },
                { icon: <Phone size={18} />, content: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <Mail size={18} />, content: 'info@thompsonengineering.in', href: 'mailto:info@thompsonengineering.in' },
              ].map(item => (
                <div key={item.content} className="flex items-start gap-4 group">
                  <div className="bg-primary-600/20 text-primary-400 p-2.5 rounded-lg shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed self-center">{item.content}</a>
                  ) : (
                    <p className="text-gray-300 text-sm leading-relaxed self-center">{item.content}</p>
                  )}
                </div>
              ))}
            </ScrollReveal>

            {/* Quick-inquiry form (static) */}
            <ScrollReveal variants={fadeRight}>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-1.5">Name</label>
                    <input type="text" placeholder="Your name"
                      className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-1.5">Phone</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Company / Industry</label>
                  <input type="text" placeholder="Your company name"
                    className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Requirement</label>
                  <textarea rows="4" placeholder="Describe your fabrication requirement..."
                    className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm resize-none" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-primary-600 hover:bg-primary-500 text-white rounded-lg py-3 font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send Enquiry <ArrowRight size={18} />
                </motion.button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="bg-black text-gray-500 py-8 text-center text-sm border-t border-secondary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-white font-bold text-base">THOMPSON <span className="text-primary-500">ENGINEERING</span></span>
          <span>&copy; {new Date().getFullYear()} Thompson Engineering. All rights reserved. | Chennai, India</span>
        </div>
      </footer>
    </div>
  );
}
