// ServicesHero.jsx

import React from 'react';

// The ': React.FC' type annotation is removed
export const ServicesHero = () => {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28 relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-display tracking-widest text-nova-peach uppercase mb-6">
            Capabilities & Expertise
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-8">
            Solutions Engineered <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-nova-peach to-white">
              for Tomorrow
            </span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed border-l-2 border-nova-peach/50 pl-6 max-w-lg">
            We go beyond mere deployment. Our curated suite of services provides the foundational security, agility, and intelligence your business needs to thrive in an unpredictable digital landscape.
          </p>
        </div>

        {/* Right Side Visual: Abstract Tech Layers */}
        <div className="hidden md:flex justify-center items-center relative h-[400px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-nova-peach/5 blur-[80px] rounded-full"></div>
            
            <div className="relative w-full max-w-sm perspective-[1000px] group">
              {/* Layer 1: Bottom (Infrastructure) */}
              <div className="w-full h-40 bg-nova-dark border border-white/10 absolute top-20 left-0 transform rotate-x-12 group-hover:translate-y-4 transition-transform duration-500 flex items-center justify-center backdrop-blur-md">
                 <div className="text-white/20 font-mono text-sm tracking-[0.5em]">INFRASTRUCTURE</div>
                 {/* Sharp corners */}
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-nova-peach/50"></div>
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-nova-peach/50"></div>
              </div>

              {/* Layer 2: Middle (Data) */}
              <div className="w-full h-40 bg-nova-blue/30 border border-white/10 absolute top-10 left-4 transform rotate-x-12 group-hover:translate-y-0 transition-transform duration-500 z-10 flex items-center justify-center backdrop-blur-md">
                 <div className="text-white/40 font-mono text-sm tracking-[0.5em]">DATA LAYER</div>
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/50"></div>
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/50"></div>
              </div>

              {/* Layer 3: Top (Application) */}
              <div className="w-full h-40 bg-white/5 border border-white/20 absolute top-0 left-8 transform rotate-x-12 group-hover:-translate-y-4 transition-transform duration-500 z-20 flex items-center justify-center backdrop-blur-md shadow-2xl">
                 <div className="text-nova-peach font-mono text-sm tracking-[0.5em] font-bold">APPLICATION</div>
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-nova-peach"></div>
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-nova-peach"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero