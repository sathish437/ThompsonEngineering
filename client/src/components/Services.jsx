import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { services } from '../data/constants';
import { fadeUp } from '../utils/animations';
import SectionTitle from './shared/SectionTitle';
import ScrollReveal from './shared/ScrollReveal';
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="What We Do">Our Services</SectionTitle>

        {/* Services Intro */}
        <ScrollReveal className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Thompson Engineering delivers comprehensive sheet metal fabrication solutions with precision engineering and industrial expertise. Our end-to-end capabilities transform raw materials into finished components, serving diverse industries with quality-driven manufacturing processes.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Services List */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === index;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-primary-500 transition-all duration-300 overflow-hidden"
              >
                {/* Collapsed State - Clickable Header */}
                <button
                  onClick={() => toggleService(index)}
                  className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-primary-600 font-semibold">SERVICE {String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-lg font-bold text-secondary-900">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-1">{service.description}</p>
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {isExpanded ? <ChevronUp className="text-gray-600" size={20} /> : <ChevronDown className="text-gray-600" size={20} />}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                        {/* Full Description */}
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Technical Details */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                          <div className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">Technical Specifications</div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {service.details}
                          </p>
                        </div>

                        {/* Capabilities Tags */}
                        <div className="mb-4">
                          <div className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">Capabilities</div>
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.map((cap, capIndex) => (
                              <span key={capIndex} className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full border border-primary-100">
                                <CheckCircle size={10} />
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Applications */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                            <ArrowRight size={12} />
                            Applications
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.applications}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Service Capability Summary - Unique Concept */}
        <ScrollReveal variants={fadeUp} className="mt-12">
          <div className="bg-secondary-900 rounded-2xl shadow-2xl p-8 border border-secondary-700">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary-400 mb-2">11+</div>
                <div className="text-gray-400 text-sm font-medium">Specialized Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm font-medium">Quality Control</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary-400 mb-2">±0.5mm</div>
                <div className="text-gray-400 text-sm font-medium">Precision Tolerance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-primary-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm font-medium">Production Capacity</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
