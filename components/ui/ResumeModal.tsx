"use client";

import React, { useState } from "react";
import { personalInfo, workExperience, projects, skillsCategories } from "@/data";
import { FaTimes, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaExternalLinkAlt, FaPrint, FaCopy, FaCheck } from "react-icons/fa";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0a0518] border border-[#ba9cff40] rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(186,156,255,0.2)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Actions */}
        <div className="flex justify-between items-center pb-6 border-b border-white/10 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-xs uppercase tracking-widest text-[#ba9cff] font-semibold">Latest Resume</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-neutral-200"
              title="Print or Save as PDF"
            >
              <FaPrint className="text-xs" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="mt-6 space-y-8 font-sans">
          {/* Header */}
          <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight sectionHeader">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-[#ba9cff] font-medium mt-1">
                {personalInfo.title}
              </p>
              <p className="text-sm text-neutral-400 mt-0.5">
                {personalInfo.location} • {personalInfo.currentRole} at {personalInfo.currentCompany}
              </p>
            </div>

            {/* Contacts */}
            <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-neutral-300 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#ba9cff] text-xs" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#ba9cff] text-xs" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 hover:text-white text-neutral-400 transition"
                  title="Copy email"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                </button>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#ba9cff] hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#ba9cff] hover:underline"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[#ba9cff] font-bold border-b border-[#ba9cff]/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[#ba9cff] font-bold border-b border-[#ba9cff]/20 pb-1 mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#ba9cff]/40 pl-4 py-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#ba9cff] font-medium">
                        {exp.title}
                      </p>
                    </div>
                    <div className="text-xs text-neutral-400 mt-1 sm:mt-0 sm:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-neutral-300 list-disc list-outside ml-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        <strong className="text-neutral-100">{h.category}:</strong> {h.text}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[#ba9cff] font-bold border-b border-[#ba9cff]/20 pb-1 mb-4">
              Production Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                      <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                        {proj.year}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {proj.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-[#ba9cff]/10 text-[#ba9cff]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[#ba9cff] font-bold border-b border-[#ba9cff]/20 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {skillsCategories.map((cat, i) => (
                <div key={i} className="flex gap-2 items-baseline">
                  <span className="text-neutral-400 font-semibold min-w-[120px]">
                    {cat.title}:
                  </span>
                  <span className="text-neutral-200">{cat.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[#ba9cff] font-bold border-b border-[#ba9cff]/20 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-neutral-300">
              <div>
                <p className="font-bold text-white">{personalInfo.education.institution}</p>
                <p>{personalInfo.education.degree}</p>
              </div>
              <div className="sm:text-right mt-1 sm:mt-0">
                <p>{personalInfo.education.year}</p>
                <p className="text-[#ba9cff] font-semibold">{personalInfo.education.score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
