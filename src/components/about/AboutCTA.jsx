import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

// The ': React.FC' type annotation is removed
export const AboutCTA = () => {
  const navigate = useNavigate();

  // Function to handle navigation and smooth scroll to the #contact section on the home page
  const handleContactClick = () => {
    navigate('/#contact');
  };

  return (
    <section className="py-24 bg-nova-peach text-nova-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
         <div className="md:w-1/2">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ready to Build Your Future?</h2>
             <p className="text-nova-dark/70 text-xl font-medium">Let's discuss how NovaStack can engineer your success.</p>
         </div>
         <div>
           <Button 
               // Use the defined function for cleaner onClick handling
               onClick={handleContactClick} 
               size="lg" 
               className="group text-nova-dark hover:bg-white border-none shadow-2xl"
           >
             Contact Us <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"  />
           </Button>
         </div>
      </div>
      
      {/* Decorative background element for visual interest */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute left-10 bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
    </section>
  );
};

export default AboutCTA