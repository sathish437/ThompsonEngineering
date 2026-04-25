import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger } from '../../utils/animations';

export default function StaggerReveal({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}
