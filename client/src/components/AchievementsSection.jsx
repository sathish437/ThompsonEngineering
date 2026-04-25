import { motion } from 'framer-motion';
import { achievementsData } from '../data/constants';
import { fadeUp } from '../utils/animations';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';

export default function AchievementsSection() {
  return (
    <section className="py-16 sm:py-24 bg-primary-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Achievements & Strengths</h2>
          <div className="w-14 h-1 bg-white/30 rounded-full mb-12"></div>
        </ScrollReveal>
        <StaggerReveal className="grid md:grid-cols-3 gap-6">
          {achievementsData.map(item => (
            <motion.div key={item.title} variants={fadeUp}
              className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <h3 className="font-bold text-white mb-3">{item.title}</h3>
              <p className="text-primary-100 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
