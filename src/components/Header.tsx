'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [time, setTime] = useState<string>('');
  const [location] = useState<string>('Dehradun, India');

  useEffect(() => {
    const updateTime = (): void => {
      const now = new Date();
      const hours: number = now.getHours();
      const minutes: number = now.getMinutes();
      setTime(`IN ${hours}:${minutes.toString().padStart(2, '0')}`);
    };

    updateTime();
    const interval: NodeJS.Timeout = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Time */}
        <div className="text-white/90 font-mono text-sm tracking-wider">
          {time}
        </div>

        {/* Right - Location */}
        <div className="flex items-center gap-2 text-white/90 font-mono text-sm tracking-wider">
          <Image 
            src="/target.png" 
            alt="Location" 
            width={16} 
            height={16}
            className="opacity-70 invert"
          />
          {location}
        </div>
      </div>
    </header>
  );
}

