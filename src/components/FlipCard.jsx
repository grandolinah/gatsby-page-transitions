import React from 'react';

const FlipCard = ({ children }) => {
  return (
    <div
      className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
    >
      <div
        className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000"
      >
        <div className="absolute backface-hidden border-2 w-[300px] h-[420px] bg-cyan-400">
        </div>
        <div
          className="absolute rotate-y-180 backface-hidden border-2 w-full h-full bg-fuchsia-400 overflow-hidden"
        >
          <div
            className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
          >
            <h1 className="text-3xl font-semibold">Card example</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
