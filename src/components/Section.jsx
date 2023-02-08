import React, { useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const Section = ({ isActive, content, onActiveChange, bgColor }) => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.5
  });

  const setRefs = useCallback(
    (node) => {
      ref.current = node;

      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) {
      onActiveChange();
    }
  }, [inView])

  useEffect(() => {
    if (ref.current && isActive) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [ref, isActive]);

  return (
    <section
      ref={setRefs}
      className={`min-h-screen min-w-full relative py-20 px-4 rounded-b-lg ${bgColor}`}
    >
      <div>{content}</div>
    </section>
  );
};

export default Section;
