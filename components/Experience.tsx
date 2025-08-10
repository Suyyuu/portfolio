import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="md:py-20 py-5 sectionGradient" id="experience">
      <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight sectionHeader">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid md:grid-cols-4 gap-10">
        {workExperience.map((card) => (
            <Button 
            key={card.id}
            duration={Math.floor(Math.random() * 1000) + 3000}
            borderRadius="10px"
            className="flex-1 text-white dark:border-[#6c3f8e90] bg-[rgba(244,244,244,0.01)]"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
                <img src={card.thumbnail} alt={card.thumbnail} className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] bg-[#fff]" />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold ">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold ">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
