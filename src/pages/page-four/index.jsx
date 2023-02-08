import React, { useState, useEffect, useRef } from 'react';
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndexPage = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, -300]);

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return (
    <div className="min-h-[300vh] pt-40">
      <motion.div className="w-40 h-40 rounded-md mx-auto bg-red-200 opacity-90" style={{ y: y1, x: -50 }} />
      <motion.div
        className="w-40 h-40 rounded-md mx-auto bg-red-400 opacity-90"
        style={{ y: y2, x: 50,}}
      />

      <motion.div className="w-40 h-40 rounded-md mx-auto bg-red-600 opacity-90" style={{ y: y3, x: -50 }} />
      <div className="h-[500px]" />
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className="w-40 h-40 rounded-md mx-auto bg-sky-700 opacity-90"
      />
    </div>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;
