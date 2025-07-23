"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Highlight {
  text: string;
  image?: string;
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  summary: string;
  year: string;
  imageSrc: string;
  highlights: Highlight[];
  videoSrc: string;
  url: string;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('rotateX(0deg) rotateY(0deg)');
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;
 
    const rotateX = (mouseY - centerY) / 10;  
    const rotateY = (mouseX - centerX) / 10;  

    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };
  
  const handleMouseLeave = () => {
    setTransformStyle('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div 
      className="relative bg-[rgba(244,244,244,0.01)] py-6 rounded-xl shadow-lg overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}  
    >
      
      <div className="border p-2 border-[#6c3f8e90] rounded-lg">
        
        <img 
          ref={imageRef}
          src={project.imageSrc} 
          alt={project.title} 
          className="w-full sm:h-96 object-cover rounded-lg sm:py-4 sm:px-4 py-2 px-2"
          style={{ transform: transformStyle, transition: 'transform 0.1s ease-out' }}
        />
      </div>
      
      <div className="mt-4 relative">
        <div className="absolute top-0 right-0 cursor-default bg-[rgba(255,247,247,0.1)] text-white py-1 px-3 rounded-full text-sm">
          {project.year}
        </div>
        <button
          onClick={onClick} 
          className="absolute top-8 right-0 knowMore text-white py-1 px-3 rounded-full text-sm"
        >
          Know More?
        </button>
        <h3 className="text-white text-xl font-semibold w-[180px] lg:w-full">{project.title}</h3>
        <p className="mt-2 text-gray-300 text-sm lg:w-full w-[180px]">{project.description}</p>
      </div>
    </div>
  );
};


const Modal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false); 

  
  const handleClose = () => {
    setIsClosing(true); 
    setTimeout(onClose, 300); 
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end pb-5 justify-center bg-black bg-opacity-80 transition-opacity duration-300 ease-out ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClose}
    >
      <div
        className={`relative modalBg flex flex-col items-center max-w-lg md:max-w-2xl w-full max-h-[90vh] md:h-[80vh] h-[70vh] overflow-y-auto py-10 px-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}
        onClick={(e) => e.stopPropagation()}
        style={{ animation: isClosing ? 'slide-down 0.3s ease-out forwards' : 'slide-up 0.3s ease-out forwards' }}
      >
        <button onClick={handleClose} className="absolute top-3 right-3 text-[#ffffff] hover:text-purple-950 text-[20px]">
          ✕
        </button>
        <img src={project.imageSrc} alt={project.title} className="w-full h-96 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
        <p className="text-sm text-white mb-4">{project.description}</p>

        <div className='md:w-[60%] w-full flex justify-around items-center mb-5'>
          <Link href={project.url} target='blank' className='flex items-center gap-3 text-[16px] knowMore p-2 rounded-lg'>Source Code<FaGithub className='text-[18px]' /></Link>
          <Link href={project.url} target='blank' className='flex items-center gap-3 text-[16px] knowMore p-2 rounded-lg'>Live Project<HiOutlineExternalLink className='text-[18px]' /></Link>
        </div>

        <h3 className="font-semibold mb-2 bg-[#00000060] text-white w-fit px-5 py-2"> Tech Stack</h3>

        <div className='flex items-center flex-wrap gap-2 pb-4 '>
        
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          
        </div>

        <p className='text-white-100 text-justify pb-5 indent-4'>{project.summary}</p>

        <div className="text-sm text-white-100 w-full flex flex-col items-center justify-between text-center">
          <h3 className="font-semibold mb-2 bg-[#00000060] text-white w-fit px-5 py-2"> Project Highlights</h3>
          <ul className="list-none flex flex-col space-y-4">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex flex-col items-center">
                <p>{highlight.text}</p>
                {highlight.image && (
                  <img 
                    src={highlight.image} 
                    alt={`Image for highlight ${index + 1}`} 
                    className="mt-2 w-full h-auto max-w-[500px] rounded-md" 
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex flex-col justify-between items-center mt-8">
          <Mockup videoSrc={project.videoSrc}  />
          <Mockup videoSrc="/path/to/video2.mp4"  />
          <Mockup videoSrc="/path/to/video3.mp4" />
        </div> */}

      </div>
    </div>
  );
};


const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  
  const projects: Project[] = [
    { title: "Zenith AI SaaS", description: "A Sleek, Interactive, Clean and Modern AI Saas Website...", techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], summary: "Zenith is a cutting-edge, frontend-focused SaaS platform crafted to enhance the productivity and collaboration of development teams. This all-in-one solution that integrates project management, team communication, document sharing, issue tracking, and more; entirely powered by an intuitive, visually engaging, and highly interactive frontend interface." , year: "2025", imageSrc: "/p1.png", highlights: [
      { text: "Responsive Design", image: "/p1f1.png" },
      { text: "Interactive Elements", image: "/p1f2.png" },
      { text: "Flyout Menu", image: "/p1f3.png" }
    ],  videoSrc: "/iPhone.png", url: "https://zenith-ai-saas.vercel.app/" },
    { title: "Aurelia- Crypto Swapping Platform", description: "Developed a polished, crypto website...",techStack: ["Next.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"], summary:"", year: "2025", imageSrc: "/p2.png", highlights: [
      { text: "Responsive design", image: "/responsive-design.png" },
      { text: "Interactive elements", image: "/interactive-elements.png" },
      { text: "Flyout Menu", image: "/flyout-menu.png" }
    ], videoSrc: "/v1.mp4", url: "https://zenith-ai-saas.vercel.app/" },
    // { title: "Health Insights", description: "Building a modern dashboard for health metrics...", summary:"", year: "2022", imageSrc: "/path/to/image3.jpg", highlights: ["Real-time data", "Custom charts", "User analytics"], videoSrc: "/v1.mp4", url: "https://zenith-ai-saas.vercel.app/" },
    // { title: "Smart Realty", description: "Developing a smart property management app...", summary:"", year: "2022", imageSrc: "/path/to/image4.jpg", highlights: ["Geo-location", "Listing updates", "User-friendly"], videoSrc: "/v1.mp4", url: "https://zenith-ai-saas.vercel.app/" },
    // { title: "E-Shop Redesign", description: "Revamping an e-commerce website with new UI...",summary:"", year: "2021", imageSrc: "/path/to/image5.jpg", highlights: ["Product filtering", "Responsive layout", "Fast load times"], videoSrc: "/v1.mp4", url: "https://zenith-ai-saas.vercel.app/" },
    // { title: "Tech Solutions Blog", description: "Designing a blog for tech solutions...",summary:"", year: "2021", imageSrc: "/path/to/image6.jpg", highlights: ["SEO-friendly", "Dark mode", "Interactive features"], videoSrc: "/v1.mp4", url: "https://zenith-ai-saas.vercel.app/" }
  ];

  return (
    <div className="container mx-auto px-4 md:py-8 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className={`transform ${index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'}`}>
            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
