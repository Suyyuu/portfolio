"use client";

import React, { useState } from "react";
import { personalInfo, workExperience, projects, skills } from "@/data";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUpRightFromSquare, FaCheck, FaCopy } from "react-icons/fa6";

export const MinimalistPortfolio = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#e4e4e7] antialiased selection:bg-[#252233] selection:text-[#dcd6f7]">
      {/* Background Subtle Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#ba9cff0a] via-transparent to-transparent blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-28 space-y-20 sm:space-y-24">
        {/* Intro / Header */}
        <header className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <p className="text-sm text-neutral-400 mt-1 font-mono">
                Software Engineer • Product &amp; Growth
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bangalore, India</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
            Building production web platforms, asynchronous pipelines, and mobile apps. Currently engineering at{" "}
            <span className="text-white font-medium">{personalInfo.company}</span>. Focused on clean systems, quiet performance, and thoughtful engineering.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-xs sm:text-sm text-neutral-400 font-mono">
            <button
              onClick={handleCopyEmail}
              className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <FaCheck className="text-[11px]" /> copied
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  {personalInfo.email} <FaCopy className="text-[11px] text-neutral-500" />
                </span>
              )}
            </button>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaGithub className="text-xs" /> GitHub
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin className="text-xs" /> LinkedIn
            </a>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaTwitter className="text-xs" /> X
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              Experience
            </h2>
            <span className="text-[11px] text-neutral-600 font-mono">
              Trajectory
            </span>
          </div>

          <div className="space-y-10">
            {workExperience.map((job) => (
              <div key={job.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm sm:text-base">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-white">{job.company}</span>
                    <span className="text-neutral-400 text-xs sm:text-sm">/ {job.role}</span>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 leading-relaxed list-disc list-inside">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="marker:text-neutral-600">
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#101014] text-neutral-400 border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              Selected Work
            </h2>
            <span className="text-[11px] text-neutral-600 font-mono">
              Projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((proj, idx) => (
              <a
                key={idx}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="group block p-5 rounded-xl bg-[#0c0c0f] hover:bg-[#121216] border border-white/[0.05] hover:border-[#ba9cff]/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between text-sm sm:text-base">
                    <div className="flex items-center gap-1.5 font-medium text-white group-hover:text-[#ba9cff] transition-colors">
                      <span>{proj.title}</span>
                      <FaArrowUpRightFromSquare className="text-[11px] opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">
                      {proj.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.04]">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.03] text-neutral-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              Stack
            </h2>
            <span className="text-[11px] text-neutral-600 font-mono">
              Tools &amp; Systems
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {skills.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0c0c0f] border border-white/[0.04] flex flex-col justify-between"
              >
                <span className="text-neutral-500 block mb-1.5 font-mono text-xs">
                  {s.category}
                </span>
                <span className="text-neutral-300 font-light leading-relaxed">
                  {s.items.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
              Education
            </h2>
            <span className="text-[11px] text-neutral-600 font-mono">
              Background
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs sm:text-sm text-neutral-400">
            <div>
              <p className="font-medium text-white">{personalInfo.education.institution}</p>
              <p className="text-neutral-500 mt-0.5">{personalInfo.education.degree}</p>
            </div>
            <div className="sm:text-right font-mono">
              <p className="text-neutral-300">{personalInfo.education.score}</p>
              <p className="text-neutral-600">{personalInfo.education.year}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <span>Suyash Kharade • {personalInfo.location}</span>
          <a
            href={`mailto:${personalInfo.email}?subject=Hello Suyash`}
            className="hover:text-neutral-300 transition-colors"
          >
            suyashkharade1234@gmail.com
          </a>
        </footer>
      </div>
    </div>
  );
};
