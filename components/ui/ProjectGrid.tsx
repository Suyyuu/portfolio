"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projects as projectData } from "@/data";

interface Highlight {
  text: string;
  image?: string;
}

interface Project {
  title: string;
  tagline?: string;
  description: string;
  techStack: string[];
  summary: string;
  year: string;
  imageSrc: string;
  highlights: Highlight[];
  videoSrc?: string;
  url: string;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>(
    "rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = (mouseY - centerY) / 25;
    const rotateY = (centerX - mouseX) / 25;

    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      className="relative bg-[#0c051f]/80 border border-[#ba9cff30] hover:border-[#ba9cff80] p-5 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(186,156,255,0.15)] flex flex-col justify-between group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div>
        <div className="overflow-hidden rounded-xl border border-white/10 relative">
          <img
            ref={imageRef}
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-64 sm:h-72 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{
              transform: transformStyle,
              transition: "transform 0.15s ease-out",
            }}
          />
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10 font-semibold">
            {project.year}
          </div>
        </div>

        <div className="mt-4">
          {project.tagline && (
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#ba9cff]">
              {project.tagline}
            </span>
          )}
          <h3 className="text-white text-xl font-bold mt-1 group-hover:text-[#ba9cff] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
        <div className="flex flex-wrap gap-1 max-w-[70%]">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ba9cff]/10 text-[#ba9cff]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#ba9cff] hover:text-black text-white transition-all"
        >
          Details →
        </button>
      </div>
    </div>
  );
};

const Modal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-[6000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      <div
        className="relative bg-[#0c051f] border border-[#ba9cff50] flex flex-col max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 rounded-2xl shadow-[0_0_50px_rgba(186,156,255,0.25)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          ✕
        </button>

        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover rounded-xl border border-white/10 mb-4"
        />

        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-[#ba9cff] font-bold">
            {project.tagline || "Production System"}
          </span>
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-neutral-300">
            {project.year}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
          {project.title}
        </h2>
        <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 my-4">
          <Link
            href={project.url}
            target="_blank"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-[#ba9cff] text-black hover:bg-white transition-colors"
          >
            <FaGithub className="text-base" /> Source / Repository
          </Link>
          <Link
            href={project.url}
            target="_blank"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
          >
            <HiOutlineExternalLink className="text-base" /> Live Link / Details
          </Link>
        </div>

        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.summary && (
          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-1">
              Architecture Overview
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 list-disc list-inside">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="leading-relaxed">
                  {highlight.text}
                  {highlight.image && (
                    <img
                      src={highlight.image}
                      alt={`Highlight ${index + 1}`}
                      className="mt-2 w-full max-h-48 object-cover rounded-lg border border-white/10"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="container mx-auto px-4 md:py-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div key={index}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectGrid;
