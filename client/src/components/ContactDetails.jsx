import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import ScrollReveal from './shared/ScrollReveal';
import { fadeLeft, fadeRight } from '../utils/animations';

const contactItems = [
  { icon: <MapPin size={18} />, content: '150 & 151, Tiny Sector, SIDCO Industrial Estate, Ambattur, Chennai - 600 098', href: null },
  { icon: <Phone size={18} />, content: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: <Mail size={18} />, content: 'info@thompsonengineering.in', href: 'mailto:info@thompsonengineering.in' },
];

export default function ContactDetails() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Reach Us">Contact Us</SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <ScrollReveal variants={fadeLeft} className="space-y-6">
            <p className="text-2xl font-extrabold text-white">THOMPSON ENGINEERING</p>
            <p className="text-gray-400 leading-relaxed">
              Located in the SIDCO Industrial Estate, Ambattur — one of Chennai's key industrial hubs.
              We welcome visits, inquiries, and project discussions.
            </p>
            {contactItems.map(item => (
              <div key={item.content} className="flex items-start gap-4 group">
                <div className="bg-primary-600/20 text-primary-400 p-2.5 rounded-lg shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed self-center">{item.content}</a>
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed self-center">{item.content}</p>
                )}
              </div>
            ))}
          </ScrollReveal>

          {/* Quick-inquiry form (static) */}
          <ScrollReveal variants={fadeRight}>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-1.5">Phone</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5">Company / Industry</label>
                <input type="text" placeholder="Your company name"
                  className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-medium mb-1.5">Requirement</label>
                <textarea rows="4" placeholder="Describe your fabrication requirement..."
                  className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors text-sm resize-none" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-primary-600 hover:bg-primary-500 text-white rounded-lg py-3 font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Enquiry <ArrowRight size={18} />
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
