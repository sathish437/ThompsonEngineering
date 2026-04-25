import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';
import { Users, CheckCircle, Clock } from 'lucide-react';

export default function AchievementsSection() {
  const credibilityIndicators = [
    {
      icon: Users,
      title: 'Client Base',
      desc: 'Steel fabrication contractors, construction firms, and industrial manufacturers across Chennai region'
    },
    {
      icon: CheckCircle,
      title: 'Execution Capability',
      desc: 'End-to-end fabrication with strict quality control, handling both small and high-volume production runs'
    },
    {
      icon: Clock,
      title: 'Delivery Consistency',
      desc: 'Reliable project completion with established workflows and production scheduling'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-600 to-primary-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-8 md:mb-12">
            <p className="text-primary-200 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Our Track Record</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Credibility & Experience</h2>
            <div className="mt-3 w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-6">
          {credibilityIndicators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-secondary-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </StaggerReveal>

        {/* Trust Statement */}
        <ScrollReveal variants={fadeUp} className="mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 text-base leading-relaxed text-center max-w-3xl mx-auto">
              Our consistent delivery and adherence to quality standards have established trust with clients across diverse industrial sectors. We focus on reliable execution and long-term partnerships rather than promotional claims.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
