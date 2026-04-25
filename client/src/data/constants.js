import { Zap, Shield, Award } from 'lucide-react';

export const services = [
  'Sheet Metal Fabrication', 'Shearing', 'Profile Cutting', 'Trimming',
  'Notching', 'Punching', 'Bending', 'Forming', 'Welding (CO2)', 'Burr Cleaning', 'Finishing',
];

export const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Quality Assured' },
];

export const navLinks = [
  { id: 'overview', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'infrastructure', label: 'Facility' },
  { id: 'quality', label: 'Quality' },
  { id: 'contact', label: 'Contact' },
];

export const infraItems = [
  { icon: Zap, title: 'Power Press Machines', desc: 'Multiple tonnage power press machines for high-precision sheet metal forming and stamping.', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Shield, title: 'Shearing Machines', desc: 'Heavy-duty shearing machines cutting a wide range of metal gauges with accuracy.', color: 'bg-blue-50 text-blue-600' },
  { icon: Zap, title: 'Welding Units', desc: 'CO2 welding units operated by certified welders, ensuring strong and clean weld joints.', color: 'bg-red-50 text-red-600' },
  { icon: Award, title: 'High Production Capacity', desc: 'Optimized workflow and shift scheduling to handle high-volume orders consistently.', color: 'bg-green-50 text-green-600' },
];

export const qualityPoints = [
  { num: '01', title: 'In-Process Inspection', desc: 'Dimensional checks at each stage of fabrication using calibrated instruments.' },
  { num: '02', title: 'Final Inspection', desc: 'Comprehensive review against customer drawings before dispatch.' },
  { num: '03', title: 'Industry Standards', desc: 'Adherence to micro-tolerances and specific quality requirements.' },
];

export const workforceItems = ['Skilled Operators', 'Certified Welders'];

export const safetyItems = ['PPE Compliance', 'Safety Training'];

export const achievementsData = [
  { title: 'Clients Served', desc: 'Steel fabrication contractors, construction firms, and industrial manufacturers across Chennai region.' },
  { title: 'Key Strengths', desc: 'End-to-end fabrication capability, strict quality control, and ability to handle both small and high-volume runs.' },
  { title: 'Future Plans', desc: 'CNC press brakes, laser cutting units, ISO certification, and lean manufacturing adoption.' },
];

export const contactInfo = [
  { type: 'address', content: '150 & 151, Tiny Sector, SIDCO Industrial Estate, Ambattur, Chennai - 600 098' },
  { type: 'phone', content: '+91 98765 43210', href: 'tel:+919876543210' },
  { type: 'email', content: 'info@thompsonengineering.in', href: 'mailto:info@thompsonengineering.in' },
];
