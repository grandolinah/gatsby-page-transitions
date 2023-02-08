import React, { useState } from 'react';
import { motion } from "framer-motion";

const Popup = ({ icon, content, type, isOpen, onChangeState }) => {
  return (
    <motion.div
      layout
      whileHover={!isOpen && { scale: [null, 1.4, 1.1] }}
      transition={{ duration: 0.6 }}
      whileTap={!isOpen && { scale: 0.9 }}
      initial={{ borderRadius: 100 }}
      className={`flex justify-center items-center w-30 h-30 border-sky-500 border-4 bg-white cursor-pointer ${isOpen ? 'min-w-fit max-w-full h-20 p-4' : ''}`}
      onClick={() => {
        onChangeState(!isOpen);
      }}
    >
      <motion.div layout className="w-10 h-10 bg-fuchsia-600 rounded-full">{icon && icon}</motion.div>
      <div className={`mx-2 ${isOpen ? 'inline' : 'hidden'}`}>{content}</div>
    </motion.div>
)};

export default Popup;
