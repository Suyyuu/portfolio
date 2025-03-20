import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import SkillsSection from "@/components/SkillsSection";
import About from "@/components/ui/About";
import { FeaturesSectionDemo } from "@/components/ui/Features";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-[#000000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="shape"></div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <FeaturesSectionDemo />
        <About />
        <SkillsSection />
        <RecentProjects />
        <Experience />
        <Footer />
        
        
      </div>
    </main>
  );
}