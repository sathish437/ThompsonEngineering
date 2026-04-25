import { Award, Users, Shield, CheckCircle } from 'lucide-react';
import { qualityPoints, workforceItems, safetyItems } from '../data/constants';
import { fadeRight, fadeLeft } from '../utils/animations';
import qualityImg from '../assets/1000109950.jpg';
import SectionTitle from './shared/SectionTitle';
import ScrollReveal from './shared/ScrollReveal';
import StaggerReveal from './shared/StaggerReveal';
import { motion } from 'framer-motion';

export default function QualityAssurance() {
  return (
    <section id="quality" className="py-20 sm:py-28 bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Standards">Quality Assurance</SectionTitle>

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
