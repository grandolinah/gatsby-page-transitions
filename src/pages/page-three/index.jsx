import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import Section from "../../components/Section";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";
import Popup from "../../components/Popup";

const SUB_NAVIGATION = [
  {
    id: 'nav-1',
    dotColor: 'bg-purple-300',
  },
  {
    id: 'nav-2',
    dotColor: 'bg-purple-500'
  },
  {
    id: 'nav-3',
    dotColor: 'bg-purple-700'
  },
];

const IndexPage = () => {
  const { scrollY } = useViewportScroll();
  const [ref, inView, entry] = useInView({
    threshold: 0.7,
    triggerOnce: false
  });
  const [active, setActive] = useState('');
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);

  useEffect(() => {
    const onScrollHandler = () => {
      setIsAgeOpen(false);
      setIsCookieOpen(false);
    };

    document.addEventListener('scroll', onScrollHandler);

    return () => {
      document.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return (
    <div className="relative min-h-[300vh] bg-black">
      <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50">
        <ul>
          {SUB_NAVIGATION.map((item) => (
            <motion.li
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive(item.id)} className={`relative flex items-center justify-centerfont-bold my-5 text-slate-100 cursor-pointer ${active === item.id ? 'text-sky-500' : ''}`}
              key={item.id}

            >
              <span>{item.id}</span>
              <span className={`relative inline-block w-4 h-4 mx-2 rounded-full bg-white`}>
                {active === item.id && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 inline-block w-3 h-3 rounded-full bg-sky-500`}
                  />
                )}
              </span>
            </motion.li>
          ))}
        </ul>
      </nav>
      {SUB_NAVIGATION.map((item, index) => (
        <div className={`${index !== 0 ? '-mt-[30px]' : ''}`}>
          {/* <FadeInWhenVisible duration={0.4} delay={0.2}> */}
          <motion.div
            ref={index === SUB_NAVIGATION.length - 1 ? ref : null}
            initial={{ scaleY: 1, scaleX: 1, y: 0 }}
            animate={inView ? { scaleY: 0.95, scaleX: 0.98, y: -50 } : { scaleY: 1, scaleX: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 1, delay: 0.4 }}>
            <Section
              bgColor={item.dotColor}
              isActive={item.id === active}
              onActiveChange={() => setActive(item.id)}
              key={item.id}
              content={(
                <div className="px-4">
                  <FadeInWhenVisible duration={0.4}>
                    <h1 className="text-2xl my-40 text-white font-bold">{item.id}</h1>
                  </FadeInWhenVisible>
                  <FadeInWhenVisible duration={1.0} delay={0.4}>
                    <p className="text-base text-slate-50 my-40 p-3 bg-slate-600 border-sky-500 border-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit elementum lectus, in imperdiet nulla dapibus at. Aliquam pharetra molestie massa quis blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vel mauris finibus, pulvinar ante id, consectetur erat. Praesent facilisis ipsum eu varius.</p>
                  </FadeInWhenVisible>
                </div>
              )}
            />
          </motion.div>
          {/* </FadeInWhenVisible> */}
        </div>
      ))}
      <div className={`fixed bottom-20 right-10 ${isCookieOpen ? 'z-50' : 'z-10'}`}>
        <FadeInWhenVisible duration={0.5}>
          <Popup icon="" isOpen={isCookieOpen} onChangeState={(isOpen) => {
            if (isOpen) {
              setIsAgeOpen(false);
            }

            setIsCookieOpen(isOpen);
          }} type="cookie" content={(
            <div
              className="text-xs"
            >
              <p>This website uses cookies.
              </p>
              <p>For more information read our <a href="/" className="underline">Privacy Policy</a></p>
            </div>
          )} />
        </FadeInWhenVisible>
      </div>
      <div className={`fixed bottom-20 left-10  ${isAgeOpen ? 'z-50' : 'z-10'}`}>
        <FadeInWhenVisible duration={0.5}>
          <Popup icon="" isOpen={isAgeOpen} onChangeState={(isOpen) => {
            if (isOpen) {
              setIsCookieOpen(false);
            }
            setIsAgeOpen(isOpen);
          }}
            type="age" content={(
              <div className="text-xs">
                <p>This website is intended for users over 18 years of age.
                </p>
                <p>For more information read our <a href="/" className="underline">Terms of Service</a></p>
              </div>
            )} />
        </FadeInWhenVisible>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
