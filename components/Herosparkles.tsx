"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import HeroContent from "./sub/HeroContent";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-t-md rounded-b-customLarge">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <div className="max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center justify-center">

            {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Nothing fancy here
            </h2> */}

            <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-6xl" 
            words="Followed by the Road, Leaving Trail Behind"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Suyash, a Software Developer based in India
            </p>

            <HeroContent />

            <a href="#projects">
                <MagicButton
                title="Show my work" 
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>

        </div>
    </div>
  );
}
