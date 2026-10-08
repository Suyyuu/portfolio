"use client";

import React from "react";
import { cn } from "@/utils/cn";
import DesignComponent from "./DesignComponent";
import Cogs from "./Cogs";
import IntegrationCard from "./IntegrationCard";
import Thunder from "./Thunder";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
      <div className="px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ba9cff40] bg-[#1a0a38]/60 text-xs font-semibold uppercase tracking-widest text-[#ba9cff] mb-3">
          Architecture
        </div>
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight sectionHeader font-extrabold">
          Engineering Craft & Architecture
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-3 mx-auto text-neutral-400 font-normal">
          From high-throughput server-side pipelines to distributed databases, cross-platform apps, and automated SEO engines
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 mt-12 gap-3">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
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
        `relative overflow-hidden rounded-xl border-solid border-2 border-[#6c3f8e60] min-h-72 bg-[#0c051f]/50 backdrop-blur-md`,
        className
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-5 text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-neutral-300 text-left max-w-sm mx-5 md:text-sm font-normal"
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
        <h1 className="text-white font-extrabold">Frontend Engineering.</h1>
        <h4 className="text-neutral-200">Interactive, fluid UI crafted for engagement and conversion</h4>
      </div>
      <img className="growthDollar1 dollar" src="/dollar1.png" alt="growth icon" />
      <img className="growthDollar2 dollar" src="/dollar2.png" alt="growth icon" />
      <img className="growthDollar3 dollar" src="/dollar3.png" alt="growth icon" />
      <img className="growthDollar4 dollar" src="/dollar4.png" alt="growth icon" />
      <img className="growthDollar5 dollar" src="/dollar5.png" alt="growth icon" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="flex w-full h-full flex-col items-center relative lockCard">
      <h1 className="lockHeader">Secure Auth & SSO.</h1>
      <h1 className="lockHeader1">Google OAuth / OTP</h1>
      <div className="lockBg"></div>
      <img className="lock" src="/lock.png" alt="lockIcon" />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="growthText">
        <h1 className="text-white font-extrabold">Async Pipelines</h1>
        <h4 className="text-neutral-200">Django, Celery & SHA-256 idempotent deduplication</h4>
      </div>
      <Cogs />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-full md:h-full flex flex-col relative">
      <div className="growthText">
        <h1 className="text-white font-extrabold">Design System Tokens</h1>
        <h4 className="text-neutral-200">Standardized layout tokens and components across all screens</h4>
      </div>
      <DesignComponent />
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <div className="h-full md:h-full flex flex-col items-center relative">
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
    <div className="h-full md:h-full flex flex-col items-center relative scaleBg">
      <div className="w-full h-full flex flex-col justify-between p-6">
        <h1 className="text-[24px] font-extrabold text-white">Multi-Tenant Platforms</h1>
        <h4 className="text-[13px] text-neutral-300 leading-relaxed">
          Dynamic content generation, GraphQL query batching, and automated SEO architecture.
        </h4>
        <h4 className="text-[16px] text-pretty text-[#ba9cff] font-medium italic">
          &quot;Real engineering is driving progress by iteratively refining solutions at scale.&quot;
        </h4>
        <h5 className="text-end text-neutral-400 text-xs font-semibold">- Suyash Kharade</h5>
      </div>
    </div>
  );
};

export const SkeletonEight = () => {
  return (
    <div className="h-full md:h-full flex flex-col items-center relative">
      <h1 className="seoHeader">AEO & Structured Data</h1>
      <div className="seoBg"></div>
      <img className="seoMagnifier" src="/magnifier1.svg" alt="magnifier" />
    </div>
  );
};

export const SkeletonNine = () => {
  return (
    <div className="h-full md:h-full flex flex-col relative">
      <div className="w-full h-fit flex flex-col justify-between px-5 pt-5">
        <h1 className="text-[22px] font-bold text-white">Code & Connect</h1>
        <h4 className="text-[13px] text-neutral-300">Open source on GitHub & professional network</h4>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-6">
        <a
          href="https://github.com/Suyyuu"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-[#ba9cff] hover:text-black text-white transition-all shadow-lg"
          title="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/suyash-kharade1234"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-[#ba9cff] hover:text-black text-white transition-all shadow-lg"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/Suyash170502"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-[#ba9cff] hover:text-black text-white transition-all shadow-lg"
          title="Twitter / X"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export const SkeletonTen = () => {
  return (
    <div className="h-full md:h-full flex flex-col relative scaleBg">
      <div className="growthText">
        <h1 className="text-white font-extrabold">Mobile Ecosystem</h1>
        <h4 className="text-neutral-200">Operational Flutter apps with BLoC event architecture & real-time sync</h4>
      </div>
      <div className="journeyBG"></div>
    </div>
  );
};
