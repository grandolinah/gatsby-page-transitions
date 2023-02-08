import React, { useRef } from "react"
import { motion, AnimatePresence, useMotionValueEvent, useScroll, scrollYProgress } from "framer-motion"

import Header from "./Header";
import Footer from "./Footer";
import FadeInWhenVisible from "./FadeInWhenVisible";

const duration = 0.8

const variants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 1
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
    scale: 1
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: { duration: duration },
    scale: 2
  },
}

export const Layout = ({ children, location }) => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({ target: ref });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.main
          key={location?.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div className="fixed top-0 left-0 right-0 h-4 w-full origin-0 bg-lime-500" style={{ scaleX: scrollYProgress }} />
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout
