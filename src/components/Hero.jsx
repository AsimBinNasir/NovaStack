import React from 'react';
import { ArrowRight } from 'lucide-react';
import  { Button }  from './ui/Button'; 
import { useNavigate } from 'react-router-dom';
export const Hero = () => {
  const navigate = useNavigate();

  // Function to handle navigation and smooth scroll to the #contact section on the home page
  const handleGetStarted = () => {
    navigate('/services');
    window.scrollTo( 0,0);
  };
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-nova-blue/20 rounded-full blur-3xl pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-display tracking-widest uppercase text-nova-peach">
            Next Generation Tech
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Future-Proofing Your <span className="text-transparent bg-clip-text bg-linear-to-r from-nova-peach to-white">Digital Infrastructure</span>
          </h1>
          
          <p className="text-lg text-white/70 max-w-lg leading-relaxed border-l-2 border-nova-peach/50 pl-6">
            We build resilient, scalable, and secure technology ecosystems that empower your business to thrive in an unpredictable digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
            <Button size="lg" className="group"
              onClick={handleGetStarted}>
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Visual Element - Pure CSS Geometric Art */}
        <div className="hidden md:flex justify-center items-center h-full relative">
          <div className="relative w-full aspect-square max-w-md">
            {/* Decorative Sharp Elements */}
            <div className="absolute inset-0 border border-white/10 animate-spin-slow"></div>
            <div className="absolute inset-4 border border-white/20 animate-spin-reverse-slow bg-white/5 backdrop-blur-sm"></div>
            <div className="absolute inset-12 border-2 border-nova-peach/30 animate-spin-slower flex items-center justify-center bg-nova-dark/20 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-2 p-8 w-full h-full opacity-50">
                <div className="bg-white/10 w-full h-full"></div>
                <div className="bg-nova-purple/20 w-full h-full"></div>
                <div className="bg-nova-blue/20 w-full h-full"></div>
                <div className="bg-white/5 w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero