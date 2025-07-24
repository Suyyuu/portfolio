import React from "react";

const About = () => {
  return (
    <div className="relative z-20 py-10 lg:py-16 max-w-[70rem] mx-auto sectionGradient6" id="about">
      <div className="px-8 pb-5">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight sectionHeader">
          Little About Me
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From making mistakes, and learning from them, from having good
          experiences as well as bad ones, What is it that makes me - ME?
        </p>
      </div>

      <div className="relative flex justify-center py-5">
        <div className="flex flex-col items-start lg:w-2/4 w-full px-5 paraText gap-5 text-sm md:text-lg lg:text-xl">

          <img className="absolute top-0 sm:left-2 right-0 h-[130px] w-[130px]" src="/1.svg" alt="" />
          <img className="absolute top-0 sm:left-2 right-0 h-[130px] w-[130px]" src="/2.svg" alt="" />

          <img className="absolute top-80 sm:left-32 right-0 h-[130px] w-[130px] -rotate-180" src="/1.svg" alt="" />
          <img className="absolute top-80 sm:left-32 right-0 h-[130px] w-[130px] -rotate-180" src="/2.svg" alt="" />

          <img className="absolute -bottom-5 sm:right-48 right-0 h-[130px] w-[130px] rotate-90" src="/1.svg" alt="" />
          <img className="absolute -bottom-5 sm:right-48 right-0 h-[130px] w-[130px] rotate-90" src="/2.svg" alt="" />

          <img className="absolute top-36 right-16 h-[130px] w-[130px] -rotate-90" src="/1.svg" alt="" />
          <img className="absolute top-36 right-16 h-[130px] w-[130px] -rotate-90" src="/2.svg" alt="" />

          <p className="">hello there, I am Suyash.</p>

          <p>
            Looked at this website?? this is what I do. I make creative ideas
            happen. I create things that not only work, but resonates.
          </p>

          <p>
            I do not follow generic trends, I believe in rarity.
            I craft websites that are responsive, performant, visually mesmerizing as well as User friendly. 
            I like to think about all possible ways to make my craft distinct.
          </p>

          <p>
            I am always looking forward towards learning new technologies.. that being said, I truly believe 
            that, you don&apos;t have to master every technology, if you have resources, make use of them and get 
            the job done.
          </p>

          <p>
            I believe that every line of my code, carries a piece of Who I am- my values, 
            my vision, my relentless pursuit of something meaningful.
          </p>

          <div className="paraText w-full flex justify-between pt-5">
            <p>Followed by the road.</p>
            <p>This is me, Suyash</p>
          </div>

          
        </div>

      </div>
    </div>
  );
};

export default About;
