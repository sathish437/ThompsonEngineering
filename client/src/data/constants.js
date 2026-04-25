import { Zap, Shield, Award, Scissors, Cog, Hammer, Wrench, Sparkles, FileText, Wind, Layers } from 'lucide-react';

export const services = [
  {
    name: 'Sheet Metal Fabrication',
    icon: Layers,
    description: 'Comprehensive sheet metal fabrication services for industrial and commercial applications. We transform raw metal sheets into precision components using advanced cutting, forming, and assembly techniques.',
    details: 'Custom fabrication for enclosures, brackets, chassis, panels, and structural components with tight tolerances and superior finish quality.',
    capabilities: ['Custom Design', 'Precision Cutting', 'Assembly', 'Surface Treatment'],
    applications: 'Industrial equipment, electrical enclosures, automotive components, HVAC systems'
  },
  {
    name: 'Shearing',
    icon: Scissors,
    description: 'High-precision shearing operations for cutting metal sheets to exact dimensions. Our heavy-duty shearing machines ensure clean, straight cuts across various metal gauges.',
    details: 'Capacity to handle sheets up to 3mm thickness with length accuracy of ±0.5mm, ensuring minimal material waste and optimal edge quality.',
    capabilities: ['Straight Cutting', 'Gauge Variety', 'Edge Quality', 'Batch Processing'],
    applications: 'Blank preparation, material sizing, pre-form cutting, component blanks'
  },
  {
    name: 'Profile Cutting',
    icon: FileText,
    description: 'Precision profile cutting for complex shapes and patterns. We deliver accurate cut profiles that meet exact specifications for downstream processing.',
    details: 'Specialized cutting for notches, slots, and custom profiles with dimensional accuracy maintained throughout the production run.',
    capabilities: ['Complex Shapes', 'Pattern Cutting', 'Dimensional Accuracy', 'Repeatable Quality'],
    applications: 'Custom brackets, decorative panels, structural components, specialty parts'
  },
  {
    name: 'Trimming',
    icon: Sparkles,
    description: 'Professional trimming services to remove excess material and achieve precise edge finishes. Essential for post-forming operations and final component preparation.',
    details: 'Precision trimming operations that ensure clean edges, remove burrs, and prepare components for assembly or further processing.',
    capabilities: ['Edge Finishing', 'Burr Removal', 'Dimensional Control', 'Surface Prep'],
    applications: 'Post-form cleanup, assembly preparation, final finishing, quality control'
  },
  {
    name: 'Notching',
    icon: Cog,
    description: 'Accurate notching operations for creating precise cutouts and notches in metal sheets. Critical for component assembly and interlocking parts.',
    details: 'V-notch, U-notch, and custom notch configurations with positional accuracy ensuring proper fit and function in final assemblies.',
    capabilities: ['V-Notch', 'U-Notch', 'Custom Notches', 'Positional Accuracy'],
    applications: 'Assembly tabs, interlocking parts, ventilation holes, connector features'
  },
  {
    name: 'Punching',
    icon: Hammer,
    description: 'High-speed punching operations for creating holes and perforations in metal sheets. Efficient for batch production with consistent hole quality.',
    details: 'Punching capacity for various hole diameters and patterns, with tooling options for round, square, and custom hole shapes.',
    capabilities: ['Round Holes', 'Square Holes', 'Perforations', 'Pattern Punching'],
    applications: 'Ventilation panels, mounting holes, perforated sheets, decorative patterns'
  },
  {
    name: 'Bending',
    icon: Wind,
    description: 'Precision bending and forming operations to create angles, curves, and complex geometries in metal sheets. Essential for structural and functional components.',
    details: 'Bending accuracy maintained within ±1 degree, with capability for various bend angles and radii using precision tooling.',
    capabilities: ['Angle Bending', 'Curve Forming', 'Radius Control', 'Multi-Bend'],
    applications: 'Brackets, enclosures, channels, structural frames, chassis components'
  },
  {
    name: 'Forming',
    icon: Wrench,
    description: 'Advanced forming operations to shape metal sheets into three-dimensional components. Deep drawing and complex forming for specialized applications.',
    details: 'Forming capabilities for shallow and deep draws, with consistent wall thickness and dimensional stability across production runs.',
    capabilities: ['Deep Drawing', 'Shallow Forming', 'Complex Shapes', 'Wall Thickness Control'],
    applications: 'Enclosures, covers, containers, specialized components, custom parts'
  },
  {
    name: 'Welding (CO2)',
    icon: Zap,
    description: 'Professional CO2 welding services for strong, clean, and reliable metal joints. Performed by certified welders ensuring structural integrity and visual quality.',
    details: 'CO2 welding for mild steel and compatible materials, with penetration control and minimal distortion for optimal joint strength.',
    capabilities: ['Structural Welds', 'Cosmetic Welds', 'Penetration Control', 'Certified Operators'],
    applications: 'Structural assemblies, frame construction, component joining, repair work'
  },
  {
    name: 'Burr Cleaning',
    icon: Shield,
    description: 'Thorough burr removal and edge finishing to ensure safe handling and proper assembly. Critical for quality control and downstream processing.',
    details: 'Manual and mechanical deburring processes that remove sharp edges, burrs, and surface imperfections for professional finish quality.',
    capabilities: ['Edge Deburring', 'Surface Smoothing', 'Safety Finishing', 'Quality Prep'],
    applications: 'Pre-assembly preparation, safety compliance, surface finishing, quality assurance'
  },
  {
    name: 'Finishing',
    icon: Award,
    description: 'Comprehensive finishing services including surface treatment, coating, and final inspection. Delivers components ready for immediate use or further processing.',
    details: 'Surface preparation, cleaning, and protective finishing to enhance appearance, corrosion resistance, and overall component quality.',
    capabilities: ['Surface Prep', 'Cleaning', 'Protective Coating', 'Final Inspection'],
    applications: 'Final product delivery, corrosion protection, aesthetic enhancement, quality certification'
  },
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
