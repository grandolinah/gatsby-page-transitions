import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => (
  <AnimatePresence>
    <motion.footer
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ ease: "easeIn", duration: 0.6 }}
      className="flex align-center justify-center w-full p-4 bg-black text-slate-200">
      {/* <motion.div
        className="w-full h-6 bg-red-300 "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 1.3 }}
        transition={{ ease: "easeIn", duration: 0.6, delay: 0.6 }}
      /> */}
      <p>Author: John Doe</p>
      <p><a href="mailto:jd@example.com">jd@example.com</a></p>
    </motion.footer>
  </AnimatePresence>
);

export default Footer;