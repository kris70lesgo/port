'use client';

import Image from 'next/image';
import localFont from 'next/font/local';
import { useHeroIntro } from '@/hooks/use-hero-intro';

// Load Doto Bold font from public folder
const dotoBold = localFont({
  src: '../../public/Doto-Bold.ttf',
  weight: '700',
  variable: '--font-doto',
});

export default function Hero() {
  useHeroIntro();
  
  return (
    <section className="flex items-center justify-center px-6 pt-24 pb-0">
      <div className="max-w-2xl w-full">
        {/* Profile Picture and Name Section - Left aligned */}
        <div className="flex items-center gap-5 mb-8" data-intro-hero>
          {/* Profile Picture */}
          <div className="relative w-20 h-20 overflow-hidden rounded-full flex-shrink-0">
            <Image
              src="/pfp.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="object-cover transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
              priority
            />
          </div>

          {/* Name and Username */}
          <div className="flex flex-col justify-center">
            <h1 className={`${dotoBold.className} text-4xl text-white tracking-[0.01em] leading-none`}>
              Agastya
            </h1>
            <a
            href="https://x.com/krish725_"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs mt-1 text-gray-400 hover:text-white transition-colors duration-300"
            >
            @krish725_
            </a>
          </div>
        </div>

        {/* Bio - Left aligned but within centered container */}
        <div className="space-y-3 text-white/70 font-mono text-[13px] leading-snug mb-8" data-intro-content>
          <p>
            I&apos;m <span className="text-white font-medium">Agastya</span>, a 19yo developer living in India, exploring <span className="italic">AI and Machine Learning</span>.
          </p>
          
          <p>
            I love building things from the <span className="text-white font-medium">ground up </span>from frontend to backend to production ready systems that actually make sense<span className="italic">(I can ship faster)</span>
          </p>
          
          <p>
            When I&apos;m <span className="text-white font-medium">not busy</span>, you&apos;ll usually find me watching movies, playing chess, hitting the gym, cycling, or just catching up on some much-needed sleep.
          </p>
          
          <p>
            Let&apos;s <span className="text-white font-medium">be real</span> <span className="text-white font-medium">I get shit done</span>!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap mb-8" data-intro-content>
          <a
            href="https://x.com/krish725_" // replace with your X handle
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a1a1a] text-white/80 font-mono text-xs px-4 py-2 rounded-md border border-white/10 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
              {/* ripple – sits behind the dot, overflows only 1.8× the dot */}
              <span className="absolute inset-0 rounded-full bg-pink-500 opacity-75
                              animate-ping scale-[1.2]" />
              {/* dot – sits on top, masks the ripple centre */}
              <span className="rounded-full bg-pink-500 h-2.5 w-2.5" />
            </span>


            Available for new opportunities
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>

          
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 font-mono text-xs px-4 py-2 rounded-md border border-white/10 transition-colors duration-300">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
             Resume/CV
          </button>
        </div>

        {/* Social Links Section */}
        <div className="pt-6 border-t border-white/5" data-intro-content>
          <p className="text-white/40 font-mono text-xs mb-4">
            Where to find me <span className="text-white/30">(digitally)</span> if you wish to
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="mailto:fukutsu07@gmail.com"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            
            <a
              href="https://x.com/krish725_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a>
            
            <a
              href="https://github.com/kris70lesgo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/agk25k/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}