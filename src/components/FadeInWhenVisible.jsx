import React from "react";
import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children }) => {
  return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 'some' }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
  );
}

export default FadeInWhenVisible;
