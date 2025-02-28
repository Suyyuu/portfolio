"use client"

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing social media icons from react-icons

const Footer = () => {
  const email = 'suyashkharade1234@gmail.com';
  const subject = "Let's Work Together!";

  const handleMailto = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="w-full sectionGradient5 h-80 text-white py-12 relative" id='contact'>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight sectionHeader">Let's work together?</p>
        <button
          onClick={handleMailto}
          className="bg-purple-900 text-white py-2 px-6 rounded-md text-lg transition-all hover:bg-violet-600 focus:outline-none"
        >
          Send me an Email
        </button>
      </div>
      
      
      <div className="absolute bottom-14 left-4 text-sm text-gray-400 w-[160px] md:w-full">
        <p>&#169; 2025 Suyash Kharade. All rights reserved.</p>
      </div>

      
      <div className="absolute bottom-14 right-4 flex space-x-6">
        <a 
          href="https://x.com/Suyash170502" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/suyash-kharade1234" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://github.com/suyyuu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
