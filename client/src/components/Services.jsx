import { motion } from 'framer-motion';
import { services } from '../data/constants';
import { fadeUp } from '../utils/animations';
import SectionTitle from './shared/SectionTitle';
import StaggerReveal from './shared/StaggerReveal';

export default function Services() {
  return (
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
  );
}
