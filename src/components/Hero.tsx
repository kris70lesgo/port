'use client';

import Image from 'next/image';
import localFont from 'next/font/local';

// Load Doto Bold font from public folder
const dotoBold = localFont({
  src: '../../public/Doto-Bold.ttf',
  weight: '700',
  variable: '--font-doto',
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        {/* Profile Picture and Name Section - Left aligned */}
        <div className="flex items-center gap-5 mb-8">
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
        <div className="space-y-4 text-white/70 font-mono text-[13px] leading-relaxed mb-8">
          <p>
            I'm <span className="text-white font-medium">Megh</span>, a 19yo developer living in Mumbai, India. I love to code and make <span className="italic">(break)</span> things.
          </p>
          
          <p>
            I love both <span className="text-white font-medium">Development & Design</span>. So yes, I can make things look good and actually work. <span className="italic">(Shocking, I know)</span>
          </p>
          
          <p>
            When I'm <span className="text-white font-medium">not busy</span>, you'll usually find me watching movies, playing chess, hitting the gym, cycling, or just catching up on some much-needed sleep.
          </p>
          
          <p>
            Let's <span className="text-white font-medium">be real</span>: I'm always chasing new things to learn, new problems to solve, and if I'm lucky maybe one day <span className="text-white font-medium">my parents</span> will finally understand <span className="text-white font-medium">what I actually do</span>!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap mb-12">
          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-mono text-xs px-4 py-2 rounded-md transition-colors duration-300">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Available for new opportunities
          </button>
          
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 font-mono text-xs px-4 py-2 rounded-md border border-white/10 transition-colors duration-300">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
        </div>

        {/* Social Links Section */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-white/40 font-mono text-xs mb-4">
            Where to find me <span className="text-white/30">(digitally)</span> if you wish to
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </button>
            
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </button>
            
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </button>
            
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 font-mono text-xs px-3 py-2 rounded-md border border-white/10 transition-colors duration-300">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Peerlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}