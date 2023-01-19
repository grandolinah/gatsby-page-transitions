import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import Header from "./Header"
import Footer from "./Footer"

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
  return (
  <>
    <Header/>
      <div className="min-h-layout">
        <AnimatePresence>
          <motion.main
            key={location?.pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <main>
              {children}
            </main>
          </motion.main>
        </AnimatePresence>
      </div>
    <Footer />
  </>
)}

export default Layout
