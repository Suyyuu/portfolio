"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CurtainReveal = ({ children }: { children: React.ReactNode }) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Natural fabric wave glides down and leaves the canvas completely clear
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#070709] text-[#e4e4e7] overflow-x-hidden selection:bg-[#252233] selection:text-[#dcd6f7]">
      {/* Portfolio Content */}
      <div className="relative w-full">
        {children}
      </div>

      {/* Fabric Wave Reveal Overlay */}
      <AnimatePresence>
        {!revealed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
          >
            {/* The traveling wave boundary receding downwards */}
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "108%" }}
              transition={{
                duration: 1.45,
                ease: [0.22, 1, 0.36, 1], // natural soft wave velocity
              }}
              className="absolute inset-x-0 bottom-0"
            >
              {/* Blur zone directly above the reveal line (creates soft organic wave distortion on the fabric) */}
              <div
                className="absolute -top-32 inset-x-0 h-36 backdrop-blur-[7px] pointer-events-none"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 40%, black 85%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 40%, black 85%, transparent 100%)",
                }}
              />

              {/* Soft feather fade where visible text transitions into the unrevealed fabric */}
              <div className="absolute -top-20 inset-x-0 h-20 bg-gradient-to-b from-transparent to-[#070709]" />

              {/* Solid dark veil: 100% blocks everything below the reveal line */}
              <div className="w-full h-full bg-[#070709]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
