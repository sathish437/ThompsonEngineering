import { Target, Eye } from 'lucide-react';
import overviewImg from '../assets/1000109924.jpg';
import SectionTitle from './shared/SectionTitle';
import ScrollReveal from './shared/ScrollReveal';
import { fadeLeft, fadeRight } from '../utils/animations';

export default function CompanyOverview() {
  return (
    <section id="overview" className="py-6 sm:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle tag="Who We Are">Company Overview</SectionTitle>
            <ScrollReveal variants={fadeLeft}>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Thompson Engineering is a premier fabrication company based in Chennai, India.
                With over 15 years of hands-on experience in precision sheet metal fabrication,
                we deliver reliable, high-quality components to industries across the region.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {[
                  { icon: <Target size={22} />, title: 'Our Vision', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'To deliver high-quality fabrication solutions that set the benchmark for precision and reliability in the industry.' },
                  { icon: <Eye size={22} />, title: 'Our Mission', color: 'text-green-600', bg: 'bg-green-50', desc: 'To ensure complete customer satisfaction through precision engineering, operational efficiency, and consistent quality.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className={`${item.bg} ${item.color} p-2.5 rounded-lg h-fit shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-900 mb-0.5">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variants={fadeRight} className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-600/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
              <img src={overviewImg} alt="Our Products" className="relative rounded-2xl shadow-2xl w-full h-auto object-contain" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-white/50 animate-bounce">
                <p className="text-primary-700 font-bold text-sm">Industrial Components</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
