import { Award, Users, Shield } from 'lucide-react';
import { qualityPoints, workforceItems, safetyItems } from '../data/constants';
import { fadeRight, fadeLeft } from '../utils/animations';
import qualityImg from '../assets/1000109950.jpg';
import SectionTitle from './shared/SectionTitle';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';
import { motion } from 'framer-motion';

export default function QualityAssurance() {
  return (
    <section id="quality" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal variants={fadeLeft}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
              <img src={qualityImg} alt="Quality Inspection" className="relative rounded-2xl shadow-2xl w-full aspect-4/3 object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-secondary-900 text-white p-6 rounded-2xl shadow-2xl hidden lg:block border border-secondary-800">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-primary-400" size={24} />
                  <p className="font-bold">Mass Production</p>
                </div>
                <p className="text-xs text-gray-400 max-w-50">Capable of handling bulk fabrication orders with consistent precision across all units.</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <SectionTitle tag="Standards">Quality Assurance</SectionTitle>
            <StaggerReveal className="space-y-4 mb-8">
              {qualityPoints.map(item => (
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

            <ScrollReveal variants={fadeLeft}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-wrap gap-6">
                <div>
                  <div className="flex items-center gap-2 text-primary-700 font-semibold mb-2">
                    <Users size={18} /> Workforce
                  </div>
                  <ul className="space-y-1">
                    {workforceItems.map(it => (
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
                    {safetyItems.map(it => (
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
  );
}
