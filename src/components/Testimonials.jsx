// Testimonials.jsx

import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

// The TestimonialItem interface is removed
const testimonials = [
  {
    quote: "NovaStack transformed our archaic infrastructure into a streamlined, cloud-native powerhouse. The efficiency gains were immediate.",
    author: "Elena Rodriguez",
    role: "CTO",
    company: "Orbital Dynamics"
  },
  {
    quote: "Security was our biggest concern. NovaStack didn't just patch holes; they redesigned our entire security posture from the ground up.",
    author: "Marcus Chen",
    role: "VP of Engineering",
    company: "Vertex Financial"
  },
  {
    quote: "The AI integration has reduced our manual data entry by 80%. It's not just technology; it's a fundamental business advantage.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "LogiChain"
  },
  {
    quote: "The scalability NovaStack provided allowed us to handle our 10x growth spurt without a single hiccup.",
    author: "James Wilson",
    role: "Director of AI",
    company: "Nexus Corp"
  },
  {
    quote: "Their edge computing solutions gave us the low-latency performance our research critically depended on.",
    author: "Dr. Emily Zhang",
    role: "Lead Researcher",
    company: "Quantum Systems"
  }
];

// The ': React.FC' type annotation is removed
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Loop back to 0 when the last item is reached
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slides every 5 seconds (5000ms)
    return () => clearInterval(interval);
  }, []);

  // Duplicate first few items to ensure we always have content to the right on desktop views
  // (Index 4 shows Item 4 + Copy 0 + Copy 1)
  const displayItems = [...testimonials, testimonials[0], testimonials[1]];

  // Updated sponsor list
  const logoStripNames = [
    'Quantum', 
    'Nexus', 
    'Apex', 
    'Byte', 
    'Pixel', 
    'Logic', 
    'Sync', 
    'Spark', 
    'Core'
  ];

  return (
    <section id="about" className="py-24 relative bg-nova-dark/30 backdrop-blur-sm border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Trusted by Visionaries</h2>
              <p className="text-white/60">Join the companies redefining their industries.</p>
            </div>
            
            {/* Dynamic Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 transition-all duration-500 ease-out ${
                    // Indicator changes size and color to reflect current slide
                    index === currentIndex ? 'w-12 bg-nova-peach' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
        </div>

        {/* Carousel Track */}
        <div className="relative -mx-4">
            {/* Embed internal CSS for responsive custom property calculation */}
            <style>{`
              #testimonial-track-wrapper {
                --slide-width: 100%;
                transition: transform 1000ms cubic-bezier(0.16, 1, 0.3, 1);
              }
              /* Desktop breakpoint for showing 3 items */
              @media (min-width: 768px) {
                #testimonial-track-wrapper {
                  --slide-width: 33.3333%;
                }
              }
            `}</style>
            
            <div 
              id="testimonial-track-wrapper" 
              className="flex w-full" 
              style={{
                // Applies the transform based on currentIndex and the CSS variable --slide-width
                transform: `translateX(calc(-${currentIndex} * var(--slide-width)))`,
              }}
            >
              {displayItems.map((item, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 shrink-0 px-4"
                >
                  <div className="bg-nova-dark/40 border border-white/10 p-8 flex flex-col h-full hover:border-nova-purple/50 transition-colors duration-300 relative group">
                    {/* Decorative corner accents for sharp look matching bento boxes */}
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-nova-peach transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-nova-peach transition-colors"></div>

                    <Quote className="text-nova-purple mb-6 w-8 h-8 opacity-50" />
                    <p className="text-lg leading-relaxed text-white/90 mb-8 grow font-light">
                      "{item.quote}"
                    </p>
                    
                    <div className="mt-auto border-t border-white/10 pt-4">
                      <p className="font-display font-bold text-white tracking-wide">{item.author}</p>
                      <p className="text-sm text-white/50">{item.role}, {item.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Logo Strip Placeholder (Updated Names) */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
            {logoStripNames.map((logo) => (
                <span key={logo} className="text-xl font-display font-bold tracking-widest hover:text-white transition-colors cursor-default">{logo}</span>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials