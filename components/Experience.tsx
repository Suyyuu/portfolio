"use client";

import React from "react";
import { workExperience } from "@/data";
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const featuredMeragi = workExperience.find((exp) => exp.id === 1);
  const otherExperiences = workExperience.filter((exp) => exp.id !== 1);

  return (
    <div className="md:py-20 py-10 sectionGradient" id="experience">
      <div className="text-center px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ba9cff40] bg-[#1a0a38]/60 text-xs font-semibold uppercase tracking-widest text-[#ba9cff] mb-3">
          Experience
        </div>
        <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight sectionHeader font-extrabold">
          Where I&apos;ve <span className="text-purple">Engineered</span>
        </h2>
        <p className="text-sm lg:text-base max-w-2xl my-3 mx-auto text-neutral-400 font-normal">
          Building production web platforms, backend pipelines, and mobile systems
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-10 px-4 space-y-8">
        {/* Featured Flagship Experience: Meragi Events */}
        {featuredMeragi && (
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-[#ba9cff80] via-[#7928ca80] to-[#ba9cff80] shadow-[0_0_30px_rgba(186,156,255,0.15)]">
            <div className="relative bg-[#0b051b] rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-2 bg-white border border-white/20 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                    <img
                      src={featuredMeragi.thumbnail}
                      alt={featuredMeragi.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {featuredMeragi.company}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                        {featuredMeragi.statusBadge}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#ba9cff] mt-1">
                      {featuredMeragi.title}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 text-xs sm:text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                    <FaCalendarAlt className="text-[#ba9cff]" />
                    {featuredMeragi.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                    <FaMapMarkerAlt className="text-[#ba9cff]" />
                    {featuredMeragi.location}
                  </span>
                </div>
              </div>

              {/* Tagline summary */}
              <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed font-medium">
                {featuredMeragi.tagline}
              </p>

              {/* Engineering Highlights */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredMeragi.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-[#ba9cff]">
                        <FaCheckCircle className="text-xs shrink-0" />
                        <h5 className="text-xs sm:text-sm font-bold tracking-wide text-white">
                          {hl.category}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {hl.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {featuredMeragi.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#ba9cff]/10 border border-[#ba9cff]/30 text-neutral-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Previous Career Steps Grid */}
        <div>
          <h3 className="text-lg font-bold text-neutral-300 mb-4 px-1">
            Previous Roles & Early Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherExperiences.map((card) => (
              <div
                key={card.id}
                className="relative rounded-xl border border-white/10 bg-[#0d0722]/80 backdrop-blur-md p-5 flex flex-col justify-between hover:border-[#ba9cff]/50 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                      {card.period}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#ba9cff]">
                      {card.statusBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={card.thumbnail}
                      alt={card.company}
                      className="w-10 h-10 rounded-lg p-1 bg-white/10 object-contain"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {card.company}
                      </h4>
                      <p className="text-xs text-[#ba9cff] font-medium">
                        {card.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {card.highlights[0]?.text || card.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-white/5">
                  {card.techStack.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
