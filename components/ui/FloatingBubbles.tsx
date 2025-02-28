import React, { useEffect, useState } from "react";

const FloatingBubbles = () => {
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    
    const bubbles = Array.from({ length: 5 }).map(() => ({
      top: Math.random() * 80 + "%",  
      animationDelay: Math.random() * 5 + "s", 
    }));
    setPositions(bubbles);
  }, []);

  return (
    <div className="absolute md:w-[80%] w-full md:left-14 h-full md:h-full overflow-hidden bg-transparent">
      
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center w-full h-full">
        {positions.map((pos, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden animate-floating"
            style={{
              top: pos.top,  
              animationDelay: pos.animationDelay,
              background: 'radial-gradient(circle, #21083a 40%, #000000 100%)',
              boxShadow: '0 0 15px #21083a',
            }}
          >
            
            <div className="z-10">
              {index === 0 && <img src="/react-2.svg" alt="React" className="w-12 h-12" />}
              {index === 1 && <img src="/fastapi-1.svg" alt="FastAPI" className="w-12 h-12" />}
              {index === 2 && <img src="/nextjs-icon.svg" alt="Next.js" className="w-12 h-12" />}
              {index === 3 && <img src="/ex.svg" alt="Express" className="w-12 h-12" />}
              {index === 4 && <img src="/tailwind-css-2.svg" alt="Tailwind CSS" className="w-12 h-12" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingBubbles;
