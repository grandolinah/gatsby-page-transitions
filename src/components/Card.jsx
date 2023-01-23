import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const Card = ({ emoji, hueA, hueB }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="overflow-hidden flex items-center justify-center relative pt-4 -mb-10"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-300" style={{ background }} />
      <motion.div className="w-[300px] h-[430px] flex items-center justify-center bg-white rounded-md shadow-lg text-8xl" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
};

export default Card;
