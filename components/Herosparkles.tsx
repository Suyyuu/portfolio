"use client";

import React, { useState } from "react";
import { SparklesCore } from "./ui/Sparkles";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaFileAlt, FaCheck, FaCopy, FaEnvelope } from "react-icons/fa";
import HeroContent from "./sub/HeroContent";
import { personalInfo } from "@/data";
import { ResumeModal } from "./ui/ResumeModal";
import { motion } from "framer-motion";

export function SparklesPreview() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-[46rem] relative w-full flex flex-col items-center justify-center overflow-hidden pt-12 pb-14">
      {/* Background Sparkles */}
      <div className="w-full absolute inset-0 h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={14}
          className="w-full h-full"
          particleColor="#ba9cff"
        />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center z-10 px-4">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#ba9cff40] bg-[#150a30]/80 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(186,156,255,0.2)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-200">
            Software Development Engineer at{" "}
            <span className="text-[#ba9cff] font-semibold">Meragi Events</span>
          </span>
        </motion.div>

        {/* Dynamic Atmospheric Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight sectionHeader max-w-4xl leading-[1.15]"
        >
          Followed by the Road, Crafting What Resonates
        </motion.h1>

        {/* Personal & Authentic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-neutral-300 max-w-2xl text-sm sm:text-base md:text-lg mt-5 font-normal leading-relaxed text-pretty"
        >
          Hey, I&apos;m <strong className="text-white font-semibold">Suyash Kharade</strong>. A software engineer who crafts sleek web platforms, resilient backends, and fluid cross-platform mobile apps. I don&apos;t follow generic trends, I believe in building software that actually resonates.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a href="#experience">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="inline-flex h-12 items-center justify-center rounded-lg border border-[#ba9cff50] bg-[linear-gradient(110deg,#0a0518,45%,#2b124c,55%,#0a0518)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:border-[#ba9cff] hover:shadow-[0_0_20px_rgba(186,156,255,0.3)] gap-2 text-sm sm:text-base"
          >
            <FaFileAlt className="text-[#ba9cff]" />
            Resume
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white gap-2 text-sm"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400" />
                <span className="text-emerald-400">Copied Email!</span>
              </>
            ) : (
              <>
                <FaEnvelope className="text-[#ba9cff]" />
                <span>{personalInfo.email}</span>
                <FaCopy className="text-xs text-neutral-400" />
              </>
            )}
          </button>
        </motion.div>

        {/* Architectural Pillars */}
        <HeroContent />
      </div>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
