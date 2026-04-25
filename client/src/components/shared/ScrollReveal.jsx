import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function ScrollReveal({ children, variants = fadeUp, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
