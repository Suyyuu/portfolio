"use client";

import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaCopy, FaCheck, FaFileAlt } from "react-icons/fa";
import { personalInfo } from "@/data";
import { ResumeModal } from "./ResumeModal";

const Footer = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMailto = () => {
    const subject = "Let's connect & build!";
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full sectionGradient5 min-h-[22rem] text-white py-14 relative mt-10" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-5 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ba9cff40] bg-[#1a0a38]/60 text-xs font-semibold uppercase tracking-widest text-[#ba9cff]">
          Let&apos;s Connect
        </div>

        <h3 className="text-3xl lg:text-5xl lg:leading-tight max-w-2xl mx-auto tracking-tight sectionHeader font-extrabold">
          Ready to scale systems or collaborate?
        </h3>

        <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
          Whether you want to discuss full-stack engineering, async conversion pipelines, or have an exciting opportunity, my inbox is always open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleMailto}
            className="bg-[#ba9cff] text-black font-bold py-2.5 px-6 rounded-lg text-sm sm:text-base transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(186,156,255,0.4)]"
          >
            Send Email Directly
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-5 rounded-lg text-sm transition-all border border-white/10"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400" />
                <span className="text-emerald-400">Copied Email!</span>
              </>
            ) : (
              <>
                <FaCopy />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/15 text-[#ba9cff] font-medium py-2.5 px-5 rounded-lg text-sm transition-all border border-[#ba9cff]/30"
          >
            <FaFileAlt />
            <span>View Resume</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 pt-2">
          <FaPhoneAlt className="text-[#ba9cff]" />
          <span>{personalInfo.phone}</span>
          <span className="mx-2">•</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400">
        <p>&#169; 2026 {personalInfo.name}. Built with Next.js, React, Tailwind & Framer Motion.</p>

        <div className="flex space-x-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            title="Twitter / X"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </footer>
  );
};

export default Footer;
