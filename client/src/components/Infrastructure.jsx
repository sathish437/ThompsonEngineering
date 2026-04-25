import { motion } from 'framer-motion';
import { infraItems } from '../data/constants';
import { fadeUp } from '../utils/animations';
import info1Img from '../assets/info1.png';
import info2Img from '../assets/info2.png';
import info3Img from '../assets/info3.png';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-16 sm:py-24 bg-secondary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-8 md:mb-12">
            <p className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Our Facility</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Infrastructure & Facility</h2>
            <div className="mt-3 w-12 h-1 bg-primary-500 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Common Image Gallery - info1, info2, info3 */}
        <ScrollReveal variants={fadeUp} className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden border border-secondary-700 shadow-lg bg-secondary-800">
              <img src={info1Img} alt="Power Press Machines" className="w-full max-h-40 sm:max-h-64 object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden border border-secondary-700 shadow-lg bg-secondary-800">
              <img src={info2Img} alt="Shearing Machines" className="w-full max-h-40 sm:max-h-64 object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden border border-secondary-700 shadow-lg bg-secondary-800">
              <img src={info3Img} alt="Welding Units" className="w-full max-h-40 sm:max-h-64 object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-6">
          {infraItems.map(item => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp}
                className="bg-secondary-800 rounded-2xl p-7 hover:bg-secondary-700 transition-colors duration-300 group border border-secondary-700 hover:border-primary-600">
                <div className={`inline-flex p-3 rounded-xl mb-5 ${item.color}`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
