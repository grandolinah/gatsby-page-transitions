import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import Header from "../components/Header"
import Footer from "../components/Footer"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    x: 100
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
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
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
