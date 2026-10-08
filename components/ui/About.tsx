import React from "react";
import { personalInfo } from "@/data";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative z-20 py-16 lg:py-24 max-w-[70rem] mx-auto sectionGradient6" id="about">
      <div className="px-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ba9cff40] bg-[#1a0a38]/60 text-xs font-semibold uppercase tracking-widest text-[#ba9cff] mb-3">
          Behind the Code
        </div>
        <h2 className="heading text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight sectionHeader font-extrabold">
          Engineering Philosophy & About Me
        </h2>
        <p className="text-sm lg:text-base max-w-2xl my-3 mx-auto text-neutral-400 font-normal">
          From architecting resilient backend conversion pipelines to crafting fluid cross-platform user interfaces
        </p>
      </div>

      <div className="relative flex justify-center py-5">
        <div className="flex flex-col items-start lg:w-3/5 w-full px-5 paraText gap-6 text-sm md:text-base lg:text-lg">
          {/* Subtle Decorative SVGs */}
          <img className="absolute top-0 sm:left-4 right-0 h-[110px] w-[110px] opacity-40 pointer-events-none" src="/1.svg" alt="" />
          <img className="absolute top-0 sm:left-4 right-0 h-[110px] w-[110px] opacity-40 pointer-events-none" src="/2.svg" alt="" />

          <img className="absolute top-96 sm:left-24 right-0 h-[110px] w-[110px] -rotate-180 opacity-30 pointer-events-none" src="/1.svg" alt="" />
          <img className="absolute top-96 sm:left-24 right-0 h-[110px] w-[110px] -rotate-180 opacity-30 pointer-events-none" src="/2.svg" alt="" />

          <p className="text-xl md:text-2xl font-bold text-white">
            Hello, I&apos;m <span className="text-[#ba9cff]">Suyash Kharade</span>.
          </p>

          <p className="leading-relaxed text-neutral-300">
            I am a <strong className="text-white">Software Development Engineer</strong> working on Product and Growth. Based in <span className="text-white">Bangalore, India</span>, I build software across the full stack: from interactive React, Gatsby, and Next.js interfaces to distributed Python, Django, and Celery backend pipelines and cross-platform Flutter applications.
          </p>

          <p className="leading-relaxed text-neutral-300">
            I believe that software should not just exist, it must <strong className="text-[#ba9cff]">truly resonate</strong>. Whether that is building telemetry pipelines that process events in the background, eliminating query bottlenecks, or crafting responsive interfaces that feel like second nature, I care deeply about craftsmanship, speed, and reliability.
          </p>

          <p className="leading-relaxed text-neutral-300">
            I do not follow generic trends blindly. I believe in rarity: building distinct digital experiences with clean architecture, intuitive design, and deep technical fundamentals.
          </p>

          {/* Education & Credentials Card */}
          <div className="w-full mt-4 p-5 rounded-2xl border border-white/10 bg-[#0d0722]/80 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3 mb-2 text-[#ba9cff]">
              <FaGraduationCap className="text-2xl" />
              <h4 className="text-base sm:text-lg font-bold text-white">
                Education & Background
              </h4>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-neutral-300 mt-2">
              <div>
                <p className="font-semibold text-white">{personalInfo.education.institution}</p>
                <p className="text-neutral-400">{personalInfo.education.degree}</p>
              </div>
              <div className="sm:text-right mt-1 sm:mt-0">
                <span className="inline-block px-3 py-1 rounded-full bg-[#ba9cff]/10 border border-[#ba9cff]/30 text-[#ba9cff] font-bold">
                  {personalInfo.education.score}
                </span>
                <p className="text-neutral-400 text-xs mt-1">Class of {personalInfo.education.year}</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Chips */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#ba9cff]" />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#ba9cff]" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#ba9cff]" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          <div className="w-full flex justify-between pt-2 text-xs sm:text-sm text-neutral-400">
            <p>Followed by the road.</p>
            <p className="text-[#ba9cff] font-medium">- Suyash Kharade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
