import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-[300vh]">
        <div className="h-[500px]" />
        <Parallax className="w-40 h-40 rounded-md mx-auto bg-red-200 opacity-90" speed={-10} />
        <Parallax className="w-40 h-40 rounded-md mx-auto bg-sky-200 opacity-90" speed={10} />
        <div className="h-[500px]" />
      </div>
    </ParallaxProvider>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;
