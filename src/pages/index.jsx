import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll, AnimatePresence } from "framer-motion";

import FlipCard from "../components/FlipCard";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeModalInfo, setActiveModalInfo] = useState(null);

  return (
    <div>
      <section className="flex items-center justify-center bg-pink-500 min-h-layout">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </section>
      <section className="flex flex-col items-center justify-center bg-pink-500 min-h-layout">
        <h2 className="text-3xl font-bold underline">
          Card example
        </h2>
        <div className="relative w-full max-w-[300px] md:max-w-full flex min-h-[600px] p-10 overflow-auto">
          {[...Array(5)].map((item, index) => {
            return (
              <div
                className={`mx-2`}
              >
                <FadeInWhenVisible>
                  <FlipCard>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="save-button"
                      onClick={() => setIsModalVisible(!isModalVisible)} // TODO: add modal info
                    >
                      Launch modal
                    </motion.button>
                  </FlipCard>

                </FadeInWhenVisible>
              </div>
            )
          })}
        </div>
      </section>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isModalVisible && (
          <motion.div
            onClick={() => setIsModalVisible(!isModalVisible)}
            className="absolute top-0 left-0 h-full w-full bg-indigo-500 flex items-center ustify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center bg-pink-500 rounded-lg" // TODO: negative translates do not work
              variants={flip} // dropIn or flip or the others in the demohttps://github.com/fireship-io/framer-demo/
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="">
              <p className="">modal</p>
              <button onClick={() => setIsModalVisible(!isModalVisible)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )
        }
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
