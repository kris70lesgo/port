'use client'

import Image from 'next/image'
import { Instrument_Serif } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

interface CallToActionProps {
  profileImage?: string
  profileAlt?: string
  linkText?: string
  linkUrl?: string
  preText?: string
}

export default function CallToAction({
  profileImage = "/pfp.jpg",
  profileAlt = "Profile",
  linkText = "Book a Free Call",
  linkUrl = "https://cal.com/agastya/15min",
  preText = "If you've read this far, you might be interested in what I do."
}: CallToActionProps) {
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-12 text-center">
      <p className={`${instrumentSerif.className} text-gray-400 text-lg mb-6`}>
        {preText}
      </p>
      <a 
        href={linkUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-transparent hover:border-white/20 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
      >
        <div className="flex items-center transition-all duration-300 relative">
          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 z-10">
            <Image 
              alt={profileAlt} 
              width={24} 
              height={24} 
              className="w-full h-full object-cover" 
              src={profileImage}
            />
          </div>
          
          {/* + You animation - appears on hover */}
          <div className="absolute left-7 flex items-center gap-1 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-400"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[9px] text-gray-400">
              You
            </div>
          </div>
          
          <span className="text-white text-base whitespace-nowrap ml-2 group-hover:ml-16 transition-all duration-300">
            {linkText}
          </span>
        </div>
      </a>
    </div>
  )
}