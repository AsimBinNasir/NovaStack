import React from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your existing infrastructure and business goals to identify bottlenecks and opportunities."
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Our engineers craft a blueprint for a scalable, secure system tailored to your specific needs."
  },
  {
    number: "03",
    title: "Agile Implementation",
    description: "We build in iterative sprints, ensuring transparency and allowing for rapid feedback and adjustment."
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description: "Post-launch, we continuously monitor performance and refine the system to handle growth."
  }
];

export const Process = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-display font-bold mb-6">The NovaStack Methodology</h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          A disciplined, transparent approach to complex engineering challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-8 left-0 w-full h-px bg-white/10 hidden md:block z-0"></div>

        {steps.map((step, index) => (
          <div key={index} className="relative z-10">
            {/* Step Number Node */}
            <div className="w-16 h-16 bg-nova-dark border border-white/20 flex items-center justify-center text-xl font-mono font-bold text-nova-peach mb-8 mx-auto md:mx-0 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              {step.number}
            </div>
            
            <h3 className="text-xl font-display font-bold text-white mb-4 text-center md:text-left">{step.title}</h3>
            <p className="text-white/60 leading-relaxed text-sm text-center md:text-left border-l border-white/10 pl-4 md:border-none md:pl-0">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process