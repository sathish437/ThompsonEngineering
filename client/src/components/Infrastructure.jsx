import { motion } from 'framer-motion';
import { infraItems } from '../data/constants';
import { fadeUp } from '../utils/animations';
import info1Img from '../assets/info1.png';
import info2Img from '../assets/info2.png';
import info3Img from '../assets/info3.png';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';
import { Factory, Settings, Wrench, Zap, Award } from 'lucide-react';

export default function Infrastructure() {
  const facilityHighlights = [
    { icon: Factory, label: 'SIDCO Industrial Estate', value: 'Strategic Location' },
    { icon: Settings, label: 'Advanced Machinery', value: 'Modern Equipment' },
    { icon: Wrench, label: 'Skilled Workforce', value: 'Certified Operators' },
    { icon: Zap, label: 'Power Capacity', value: 'Industrial Grade' },
  ];

  return (
    <section id="infrastructure" className="py-16 sm:py-24 bg-secondary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-12">
          <p className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Our Facility</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Infrastructure & Facility</h2>
          <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full"></div>
        </div>

        {/* Facility Overview */}
        <ScrollReveal className="mb-10">
          <p className="text-gray-300 text-base leading-relaxed max-w-4xl mx-auto">
            Our state-of-the-art fabrication facility in SIDCO Industrial Estate, Ambattur, Chennai is equipped with advanced machinery and supported by a skilled workforce. The workshop is designed for high-volume production with precision engineering capabilities.
          </p>
        </ScrollReveal>

        {/* Equipment Gallery */}
        <ScrollReveal variants={fadeUp} className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden border border-secondary-700 shadow-lg bg-secondary-800">
              <img src={info1Img} alt="Power Press Machines" className="w-full max-h-48 sm:max-h-56 object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden border border-secondary-700 shadow-lg bg-secondary-800">
              <img src={info2Img} alt="Shearing Machines" className="w-full max-h-48 sm:max-h-56 object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden border border-secondary-700 shadow-lg bg-secondary-800">
              <img src={info3Img} alt="Welding Units" className="w-full max-h-48 sm:max-h-56 object-contain" />
            </div>
          </div>
        </ScrollReveal>

        {/* Infrastructure Capabilities */}
        <StaggerReveal className="grid md:grid-cols-2 gap-6 mb-10">
          {infraItems.map(item => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp}
                className="bg-secondary-800 rounded-2xl p-6 hover:bg-secondary-700 transition-colors duration-300 group border border-secondary-700 hover:border-primary-600">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${item.color}`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </StaggerReveal>

        {/* Workshop Capacity Highlights */}
        <ScrollReveal variants={fadeUp}>
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-6 border border-primary-500">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-white" size={24} />
              <h3 className="text-xl font-bold text-white">Workshop Capacity & Readiness</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilityHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                      <IconComponent className="text-white" size={18} />
                    </div>
                    <div className="text-primary-100 text-xs font-semibold mb-1 uppercase tracking-wider">{highlight.label}</div>
                    <div className="text-white font-bold text-sm">{highlight.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
