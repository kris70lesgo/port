'use client';

export default function HeroButtons() {
  return (
    <div data-intro-content>
      <div className="flex flex-wrap gap-3 items-center mb-8">
      <a
        href="https://x.com/krish725_"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white/80 font-mono text-xs px-4 py-2 rounded-md border border-white/10 transition-all duration-300 hover:bg-white/5 hover:text-white"
      >
        <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
          {/* ripple – sits behind the dot, overflows only 1.8× the dot */}
          <span className="absolute inset-0 rounded-full bg-pink-500 opacity-75
                          animate-ping scale-[1.2]" />
          {/* dot – sits on top, masks the ripple centre */}
          <span className="rounded-full bg-pink-500 h-2.5 w-2.5" />
        </span>

        <span className="whitespace-nowrap">Available for new opportunities</span>
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

      <a
        href="https://drive.google.com/file/d/1dSO5ajg_ECr2vhnmGgRJ98EQ5IM23spi/view"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 font-mono text-xs px-4 py-2 rounded-md border border-white/10 transition-colors duration-300 cursor-pointer"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
         Resume/CV
      </a>
      </div>
    </div>
  );
}
