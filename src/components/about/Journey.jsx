import React from 'react';

export const Journey = () => {
  const milestones = [
    {
      year: "2018",
      title: "The Genesis",
      description: "Founded in 2018, NovaStack emerged from a critical observation: mid-market enterprises were being held back by outdated, complex IT systems that couldn't keep pace with their vision. We set out to bridge that gap.",
      align: "left"
    },
    {
      year: "2020",
      title: "The Growth",
      description: "We launched our proprietary 'Nova-Core' framework, a cloud-native architecture pattern that allowed our first major client to reduce infrastructure costs by 40% while doubling transaction speed. This pivotal moment defined our trajectory.",
      align: "right"
    },
    {
      year: "Today",
      title: "The Present",
      description: "NovaStack is a recognized leader in scalable solutions, trusted by over 200 visionary companies. We continue to push boundaries, turning complex challenges into streamlined, future-proof competitive advantages.",
      align: "left"
    }
  ];

  return (
    <section className="bg-white/5 border-y border-white/10 py-24 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-display font-bold mb-20 text-center">From Concept to Catalyst: Our Founding Story</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line (Visible on Desktop) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Side (The actual content box) */}
                <div className={`w-full md:w-1/2 ${item.align === 'right' ? 'md:pl-16' : 'md:pr-16'} text-center md:text-left`}>
                  <div className="inline-block px-3 py-1 bg-nova-peach/10 border border-nova-peach/20 text-nova-peach text-sm font-mono mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Node (Desktop) - Rotated Diamond */}
                {/* This node is centered over the main vertical line using absolute positioning relative to the parent div */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-nova-dark border-2 border-nova-peach rotate-45 hidden md:block z-20"></div>

                {/* Empty Side for Spacing - Used on desktop to push the text column */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey