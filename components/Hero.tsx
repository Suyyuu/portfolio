import { Spotlight } from "./ui/Spotlight";
import { SparklesPreview } from "./Herosparkles";

const Hero = () => {
  return (
    <div className="pb-7 pt-10" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 
            md:right-12 md:-top-20 h-[screen]"
          fill="#FF00FF"
        />
        <Spotlight
          className="top-90 -right-90 h-[150vh] 
            w-[10vw]"
          fill="#2da6cd"
        />
        <Spotlight
          className="-top-8 -right-80 h-[screen] 
            w-[50vw]"
          fill="#a2acf0"
        />
      </div>
      <SparklesPreview />
    </div>
  );
};

export default Hero;
