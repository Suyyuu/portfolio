"use client";

import React from "react";
import { cn } from "@/utils/cn";
import DesignComponent from "./DesignComponent";
import Cogs from "./Cogs";
import IntegrationCard from "./IntegrationCard";
import Thunder from "./Thunder";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "",
      description: "",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-2 row-span-1",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-1",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonFive />,
      className: "col-span-1 lg:col-span-1 row-span-2",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-1 ",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-2 ",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonSix />,
      className: "col-span-1 lg:col-span-1 row-span-2",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonSeven />,
      className: "col-span-1 lg:col-span-2",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonEight />,
      className: "col-span-1 lg:col-span-1",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonNine />,
      className: "col-span-1 lg:col-span-1",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonTen />,
      className: "col-span-1 lg:col-span-2",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-16 max-w-[70rem] mx-auto sectionGradient2" id="features">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight sectionHeader">
          Creativity that Resonates
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300 text-pretty">
          Whether it’s crafting interactive web applications, deploying cloud
          infrastructures, or integrating cutting-edge frameworks, i gotcha mate
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 mt-12 gap-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `relative overflow-hidden rounded-xl border-solid border-2 border-[#6c3f8e60] min-h-72`,
        className
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-5 text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-5 md:text-sm"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex gap-10 h-full growthBg">
      <div className="growthText">
        <h1>Frontend Engineering.</h1>
        <h4>UI is only as good as it converts</h4>
      </div>
      <img className="growthDollar1 dollar" src="/dollar1.png" alt="dollar" />
      <img className="growthDollar2 dollar" src="/dollar2.png" alt="dollar" />
      <img className="growthDollar3 dollar" src="/dollar3.png" alt="dollar" />
      <img className="growthDollar4 dollar" src="/dollar4.png" alt="dollar" />
      <img className="growthDollar5 dollar" src="/dollar5.png" alt="dollar" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="flex w-full h-full flex-col items-center relative lockCard">
      <h1 className="lockHeader">Enchanted. Secure.</h1>
      <h1 className="lockHeader1">E**hanted. Secu**.</h1>
      <div className="lockBg"></div>
      <img className="lock" src="/lock.png" alt="lockIcon" />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative h-full overflow-hidden ">
      <div className="growthText">
        <h1>Actually working</h1>
        <h4>Idk how, but it does work.</h4>
      </div>
      <Cogs />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-full md:h-full flex flex-col relative]">
      <div className="growthText">
        <h1>Fluid. Adapt. Responsive.</h1>
        <h4>Designs that flow through all screens</h4>
      </div>
      <DesignComponent />
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <div className="h-full md:h-full flex flex-col items-center relative ">
      <IntegrationCard />
    </div>
  );
};

export const SkeletonSix = () => {
  return (
    <div className="h-full md:h-full flex flex-col items-center relative thunderBg">
      <Thunder />
    </div>
  );
};

export const SkeletonSeven = () => {
  return (
    <div className="h-full md:h-full flex flex-col items-center relative scaleBg ">
      <div className="w-full h-full flex flex-col justify-between p-5">
        <h1 className="text-[24px]">Iterate, Refine, Repeat</h1>
        <h4 className="text-[14px]">Deploy, get feedback, Iterate, Deploy Again. <br />
        [This is actually an empty block.. Oh wait i can quote something here]
        </h4>
        <h4 className="text-[18px] text-pretty">"Real Engineering is driving progress by iteratively refining solutions"</h4>
        <h5 className="text-end">- by Me</h5>
      </div>
    </div>
  );
};

export const SkeletonEight = () => {
  return (
    <div className="h-full md:h-full flex flex-col items-center relative ">
      <h1 className="seoHeader">Maximize Visibility.</h1>
      <div className="seoBg"></div>
      <img className="seoMagnifier" src="/magnifier1.svg" alt="magnifier" />
    </div>
  );
};

export const SkeletonNine = () => {
  return (
    <div className="h-full md:h-full flex flex-col relative ">
      <div className="w-full h-fit flex flex-col justify-between px-5 pt-5">
        <h1 className="text-[24px]">Smart Networking.</h1>
        <h4 className="text-[14px]">I'm into tech, science and space</h4>
      </div>
      <a 
          href="https://x.com/Suyash170502" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <img src="/x.svg" alt="x logo" className="h-2/3 w-2/3 absolute top-20 left-1/2 transform -translate-x-1/2 opacity-70" />
        </a>
    </div>
  );
};

export const SkeletonTen = () => {
  return (
    <div className="h-full md:h-full flex flex-col relative scaleBg">
      <div className="growthText">
        <h1>Always Learning.</h1>
        <h4>You gotta do what you gotta do right?</h4>
      </div>
      <div className="journeyBG"></div>
    </div>
  );
};
