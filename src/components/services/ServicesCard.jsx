import React from 'react';

export const ServicesCard = ({ title, description, icon: Icon }) => {// eslint-disable-line no-unused-vars
  return (
    <div className="group relative bg-nova-dark border border-white/10 p-8 h-full min-h-[280px] flex flex-col justify-between overflow-hidden hover:border-nova-peach/50 transition-colors duration-300">
      {/* Subtle Geometric Wireframe Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      />
      
      {/* Sharp Corner Accents */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-nova-peach transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-nova-peach transition-colors duration-300"></div>

      <div className="relative z-10">
        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-nova-peach mb-6 group-hover:bg-nova-peach group-hover:text-nova-dark transition-colors duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-nova-peach transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-white/60 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Bottom Line - Solid line animating from left to right */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-nova-peach transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
    </div>
  );
};

export default ServicesCard