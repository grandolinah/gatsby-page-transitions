import React from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children, duration = 0.3, delay=0 }) => {
  return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 'some' }}
        transition={{ duration: duration, delay: delay }}
        variants={{
          visible: { opacity: 1, scale: 1, y: 0 },
          hidden: { opacity: 0, scale: 0,  y: 50 }
        }}
      >
        {children}
      </motion.div>
  );
}

export default FadeInWhenVisible;
