import React, { useRef, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import FlipCard from "../components/FlipCard";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <>
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
        <div className="relative w-full m-4">
          {[...Array(5)].map((item, index) => (
            <div>
            <FadeInWhenVisible>
              <motion.div
                animate={{
                  // x: [0, 10, (index + 1) * 20],
                  // y: ['0%', '0%', '0%'],
                  // scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0.5, 1, 1],
                  repeat: 1,
                }}
              >
                <FlipCard />
              </motion.div>
            </FadeInWhenVisible>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
