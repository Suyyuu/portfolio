// Mockup.tsx
"use client";

import React from "react";

interface MockupProps {
  videoSrc: string;
}

const Mockup: React.FC<MockupProps> = ({ videoSrc }) => {
  return (
    <div className="w-[75%] bg-[#ffffffd9] rounded-xl p-4 mb-5">
      <div className="relative">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl">
          <span>{title}</span>
        </div> */}
        <div className="w-full h-full bg-[#cdd] rounded-xl overflow-hidden">
          <video
            className=" w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
