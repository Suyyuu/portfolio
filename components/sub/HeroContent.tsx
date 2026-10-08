"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, BoltIcon, DevicePhoneMobileIcon, CircleStackIcon } from "@heroicons/react/24/solid";

const pillars = [
  {
    icon: SparklesIcon,
    title: "Web Platforms",
    detail: "React, Next.js, Gatsby & Modern Web",
    color: "#ba9cff",
  },
  {
    icon: BoltIcon,
    title: "Backend Pipelines",
    detail: "Python, Django, Celery & REST APIs",
    color: "#a48fff",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Ecosystem",
    detail: "Flutter, BLoC & Cross-Platform UI",
    color: "#67e8f9",
  },
  {
    icon: CircleStackIcon,
    title: "Data & Systems",
    detail: "PostgreSQL, Redis & Cloud Services",
    color: "#80d0ff",
  },
];

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full mt-8 z-[20]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full max-w-4xl mx-auto">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative group p-4 rounded-xl border border-[#ba9cff25] bg-[#0c051f]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all hover:border-[#ba9cff60] hover:shadow-[0_0_20px_rgba(186,156,255,0.15)] flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                  style={{ color: pillar.color }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[11px] text-neutral-400 mt-2 font-medium tracking-tight">
                {pillar.detail}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#ba9cff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HeroContent;
