import { motion } from 'framer-motion';
import { stats } from '../data/constants';
import { fadeUp } from '../utils/animations';
import StaggerReveal from './shared/StaggerReveal';
import AnimatedCounter from './shared/AnimatedCounter';

export default function StatsBand() {
  return (
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
  );
}
