import React, { useState } from 'react';
import { motion } from "framer-motion";

const Popup = ({ icon, content, type, isOpen, onChangeState }) => {
  return (
    <motion.div
      layout
      whileHover={!isOpen && {
        scale: 1.2,
        transition: { duration: 1 },
      }}
      initial={{ borderRadius: 100 }}
      className={`flex justify-center items-center w-30 h-10  bg-white cursor-pointer ${isOpen ? 'min-w-fit w-full h-20 p-4' : ''}`}
      onClick={() => {
        onChangeState(!isOpen);
      }}
    >
      <motion.div layout className="w-10 h-10 bg-fuchsia-600 rounded-full">{icon && icon}</motion.div>
      <motion.div className={`mx-2 ${isOpen ? 'inline' : 'hidden'}`}>{content}</motion.div>
    </motion.div>
)};

export default Popup;
