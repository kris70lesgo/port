'use client'

import { Marquee } from "./ui/marquee";
import Image from "next/image";
import localFont from 'next/font/local';

const dotoBold = localFont({
  src: '../../public/Doto-Bold.ttf',
  weight: '700',
  variable: '--font-doto',
});


// Tech Stack Data
const techStack = [
  // Languages
  { name: "JavaScript", category: "language", icon: "/tech-icons/javascript.svg", color: "bg-gray-500" },
  { name: "TypeScript", category: "language", icon: "/tech-icons/typescript.svg", color: "bg-gray-500" },
  { name: "Go", category: "language", icon: "/tech-icons/Go.svg", color: "bg-gray-500" },
  { name: "Python", category: "language", icon: "/tech-icons/python.svg", color: "bg-gray-500" },
  { name: "SQL", category: "language", icon: "/tech-icons/sql.svg", color: "bg-gray-500" },
  { name: "C", category: "language", icon: "/tech-icons/C.svg", color: "bg-gray-500" },
  { name: "C++", category: "language", icon: "/tech-icons/C++ (CPlusPlus).svg", color: "bg-gray-500" },


  
  // Frameworks & Libraries
  { name: "React.js", category: "framework", icon: "/tech-icons/react.svg", color: "bg-gray-500" },
  { name: "Next.js", category: "framework", icon: "/tech-icons/nextjs.svg", color: "bg-gray-500" },
  { name: "Express.js", category: "framework", icon: "/tech-icons/express.svg", color: "bg-gray-500" },
  { name: "Node.js", category: "framework", icon: "/tech-icons/nodejs.svg", color: "bg-gray-500" },
  { name: "FastAPI", category: "framework", icon: "/tech-icons/fastapi.svg", color: "bg-gray-500" },
  { name: "Tailwind CSS", category: "framework", icon: "/tech-icons/tailwind.svg", color: "bg-gray-500" },
  { name: "PyTorch", category: "framework", icon: "/tech-icons/PyTorch.svg", color: "bg-gray-500" },
  { name: "TensorFlow", category: "framework", icon: "/tech-icons/TensorFlow.svg", color: "bg-gray-500" },
  { name: "Three.js", category: "framework", icon: "/tech-icons/Three.js.svg", color: "bg-gray-500" },


  
  // Databases & Tools
  { name: "MongoDB", category: "database", icon: "/tech-icons/mongodb.svg", color: "bg-gray-500" },
  { name: "PostgreSQL", category: "database", icon: "/tech-icons/postgresql.svg", color: "bg-gray-500" },
  { name: "Redis", category: "database", icon: "/tech-icons/redis.svg", color: "bg-gray-500" },
  
  // Developer Tools
  { name: "Git", category: "tool", icon: "/tech-icons/Git.svg", color: "bg-gray-500" },
  { name: "Docker", category: "tool", icon: "/tech-icons/docker.svg", color: "bg-gray-500" },
  { name: "AWS", category: "tool", icon: "/tech-icons/AWS.svg", color: "bg-gray-500" },
  { name: "Google Cloud", category: "tool", icon: "/tech-icons/gcp.svg", color: "bg-gray-500" },
  { name: "Postman", category: "tool", icon: "/tech-icons/Postman.svg", color: "bg-gray-500" },
  { name: "Vercel", category: "tool", icon: "/tech-icons/Vercel.svg", color: "bg-white-500" },
  { name: "Linux", category: "tool", icon: "/tech-icons/Linux.svg", color: "bg-gray-500" },
  { name: "Docker", category: "tool", icon: "/tech-icons/docker.svg", color: "bg-gray-500" },

];

interface TechIconProps {
  tech: typeof techStack[0];
  className?: string;
}

function TechIcon({ tech, className = "" }: TechIconProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-105 min-w-[90px] group ${className}`}>
      {/* Icon Container */}
      <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
        {/* Try to load actual SVG, fallback to grey placeholder */}
        <div className="w-full h-full relative">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={40}
            height={40}
            className="w-full h-full object-contain opacity-70 hover:opacity-90 transition-opacity"
            style={{
              filter: 'grayscale(1) invert(0.7) brightness(1.1)'
            }}
            onError={(e) => {
              // If image fails to load, replace with grey placeholder
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full ${tech.color} rounded-lg flex items-center justify-center text-white text-base font-bold">
                    ${tech.name.substring(0, 2).toUpperCase()}
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
      
      {/* Tech Name */}
      <span className="text-xs text-center font-medium text-gray-400 leading-tight group-hover:text-gray-200 transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

interface TechStackMarqueeProps {
  className?: string;
}

export default function TechStackMarquee({ className = "" }: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Title - matching other component styles */}
      <div className="mb-6">
        <p className="text-gray-500 font-mono text-xs mb-1">Technologies & Tools</p>
        <h2 className={`${dotoBold.className} text-3xl text-white mb-3`}>
          Stack I use
        </h2>
        <p className="text-[13px] text-gray-500 font-mono leading-relaxed">
          Technologies I have work with to build products
        </p>
      </div>

      {/* Single Marquee Container */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:80s] [--gap:1rem]">
          {techStack.map((tech, index) => (
            <TechIcon key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </Marquee>

        {/* Fade edges for better visual effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}