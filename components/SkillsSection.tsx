"use client";

import React, { useState } from "react";
import HexagonalGrid from "./ui/HexagonalGrid";
import { skillsCategories } from "@/data";
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaChartLine } from "react-icons/fa";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <FaCode className="text-[#ba9cff]" />,
  Frontend: <FaLaptopCode className="text-[#67e8f9]" />,
  "Backend / Data": <FaServer className="text-[#a48fff]" />,
  "Mobile / Cloud": <FaMobileAlt className="text-[#80d0ff]" />,
  "Growth / Analytics": <FaChartLine className="text-[#f472b6]" />,
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsCategories.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skillsCategories
      : skillsCategories.filter((c) => c.title === activeCategory);

  return (
    <div className="flex flex-col items-center sectionGradient py-16 px-4" id="skills">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ba9cff40] bg-[#1a0a38]/60 text-xs font-semibold uppercase tracking-widest text-[#ba9cff] mb-3">
          Full-Stack Stack & Tooling
        </div>
        <h2 className="text-3xl lg:text-5xl lg:leading-tight tracking-tight sectionHeader font-extrabold">
          Technical Arsenal & <span className="text-purple">Expertise</span>
        </h2>
        <p className="text-sm lg:text-base text-neutral-400 mt-2 font-normal">
          Battle-tested across high-scale production web platforms, conversion engines, and mobile monorepos
        </p>
      </div>

      {/* Hexagonal Interactive Visual */}
      <div className="relative w-full flex flex-col items-center justify-center my-4 overflow-hidden">
        <img
          className="opacity-20 absolute max-w-xs md:max-w-md pointer-events-none"
          src="/Heda2.png"
          alt=""
        />
        <HexagonalGrid />
      </div>

      {/* Categorized Skills Matrix */}
      <div className="w-full max-w-5xl mx-auto mt-12 z-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs sm:text-sm px-4 py-1.5 rounded-full transition-all font-medium border ${
                activeCategory === cat
                  ? "bg-[#ba9cff] text-black border-[#ba9cff] shadow-[0_0_15px_rgba(186,156,255,0.4)]"
                  : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-white/10 bg-[#0c051f]/80 backdrop-blur-md shadow-lg hover:border-[#ba9cff]/50 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-white/10 mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {categoryIcons[cat.title] || <FaCode className="text-[#ba9cff]" />}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-200 hover:border-[#ba9cff]/60 hover:text-[#ba9cff] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;