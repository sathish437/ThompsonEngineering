import { Award, Users, Shield, CheckCircle, ClipboardCheck, Wrench, Eye, FileText, Truck, Settings } from 'lucide-react';
import { qualityPoints, workforceItems, safetyItems } from '../data/constants';
import { fadeRight, fadeLeft, fadeUp } from '../utils/animations';
import qualityImg from '../assets/1000109950.jpg';
import qualityImg2 from '../assets/Quality.jpg';
import SectionTitle from './shared/SectionTitle';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';
import { motion } from 'framer-motion';

export default function QualityAssurance() {
  const inspectionSteps = [
    { icon: Wrench, title: 'Raw Material Inspection', desc: 'Comprehensive material testing and verification before production begins' },
    { icon: Settings, title: 'Process Monitoring', desc: 'Real-time quality checks at every fabrication stage' },
    { icon: Eye, title: 'Dimensional Verification', desc: 'Precision measurement using calibrated instruments' },
    { icon: FileText, title: 'Final Inspection', desc: 'Thorough examination against technical specifications' },
    { icon: Truck, title: 'Pre-Dispatch Audit', desc: 'Final quality assurance before shipment to client' },
  ];

  return (
    <section id="quality" className="py-16 sm:py-24 bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Standards">Quality Assurance</SectionTitle>

        {/* Quality Commitment Intro */}
        <ScrollReveal className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              At Thompson Engineering, quality is not just a process—it's our commitment to excellence. Every component that leaves our facility undergoes rigorous inspection protocols, ensuring precision engineering meets the highest industry standards. Our systematic approach to quality control guarantees consistent performance, reliability, and customer satisfaction across all fabrication projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Command Center Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Featured Quality Image with Industrial Overlay */}
          <ScrollReveal variants={fadeLeft} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-600/15 to-secondary-600/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img src={qualityImg} alt="Quality Inspection" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="text-primary-400" size={24} />
                      <p className="font-bold text-white text-lg">Mass Production Ready</p>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Capable of handling bulk fabrication orders with consistent precision across all units.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Quality Standards Process Cards */}
          <ScrollReveal variants={fadeRight} className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900">Quality Standards Process</h3>
              </div>
              <StaggerReveal className="space-y-4">
                {qualityPoints.map(item => (
                  <motion.div key={item.num} variants={fadeRight}
                    className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-extrabold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-1 group-hover:text-primary-700 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>
        </div>

        {/* Quality Inspection Workflow - Unique Concept */}
        <ScrollReveal variants={fadeUp} className="mb-12">
          <div className="bg-secondary-900 rounded-2xl shadow-2xl p-8 border border-secondary-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <ClipboardCheck className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Quality Inspection Workflow</h3>
                <p className="text-gray-400 text-sm">Our systematic 5-stage quality control process</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {inspectionSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div key={step.title} variants={fadeRight}
                    className="bg-secondary-800 rounded-xl p-5 border border-secondary-700 hover:border-primary-500 transition-colors group">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                      <IconComponent className="text-primary-400 group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div className="text-xs text-primary-400 font-semibold mb-2">STEP {index + 1}</div>
                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Second Quality Image with Premium Presentation */}
        <ScrollReveal variants={fadeLeft} className="mb-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-600/10 to-secondary-600/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <img src={qualityImg2} alt="Quality Control Operations" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 hidden lg:block">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 text-lg mb-2">ISO-Compliant Quality Management</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our quality management system follows international standards, ensuring every fabrication project meets stringent quality benchmarks and customer requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile: Content below image */}
            <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg border border-gray-100 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900 text-base mb-2">ISO-Compliant Quality Management</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Our quality management system follows international standards, ensuring every fabrication project meets stringent quality benchmarks and customer requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Workforce & Safety Trust Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal variants={fadeLeft}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">Workforce Excellence</h3>
                  <p className="text-gray-500 text-sm">Skilled & Certified Team</p>
                </div>
              </div>
              <div className="space-y-3">
                {workforceItems.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={fadeRight}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">Safety Standards</h3>
                  <p className="text-gray-500 text-sm">Zero Compromise Protocol</p>
                </div>
              </div>
              <div className="space-y-3">
                {safetyItems.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
