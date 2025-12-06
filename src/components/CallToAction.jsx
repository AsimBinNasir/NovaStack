import React from 'react';
import { Button } from './ui/Button';

export const CallToAction = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background flare */}
      {/* Note: Tailwind colors like nova-purple/20 must be defined in your tailwind.config.js */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nova-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight">
          Ready to Transform <br /> Your Business?
        </h2>
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Stop reacting to the future. Start building it. Partner with NovaStack for infrastructure that evolves with you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button size="lg" className="px-12 py-5 text-lg">
            Contact Us Today
          </Button>
          <Button variant="outline" size="lg">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction