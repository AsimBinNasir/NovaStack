import React from 'react';
import { Target, Lightbulb } from 'lucide-react'; 
const PrincipleCard = ({ icon: Icon, title, description, theme }) => { // eslint-disable-line no-unused-vars
  const colors = {
    peach: {
      borderHover: 'hover:border-nova-peach/30',
      iconBg: 'bg-nova-peach/10',
      iconText: 'text-nova-peach',
      iconBorder: 'border-nova-peach/20',
    },
    purple: {
      borderHover: 'hover:border-nova-purple/30',
      iconBg: 'bg-nova-purple/10',
      iconText: 'text-nova-purple',
      iconBorder: 'border-nova-purple/20',
    }
  };

  const c = colors[theme];

  return (
    <div className={`p-10 border border-white/10 bg-nova-dark/40 backdrop-blur-md relative overflow-hidden group ${c.borderHover} transition-colors duration-300`}>
      {/* Background Large Icon Watermark */}
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        {/* The Icon is used here! */}
        <Icon size={120} strokeWidth={1} />
      </div>

      <div className="relative z-10">
        <div className={`w-16 h-16 ${c.iconBg} flex items-center justify-center mb-6 ${c.iconText} border ${c.iconBorder}`}>
          {/* And here! */}
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4 font-display text-white">{title}</h3>
        <p className="text-white/70 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Principles component (Functional component without type annotations)
export const Principles = () => {
  return (
    <section className="py-24 bg-linear-to-br from-white/5 to-transparent border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Guiding Principles</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PrincipleCard 
            icon={Target}
            title="Our Mission"
            theme="peach"
            description="To deliver scalable, secure, and intuitive technological solutions that empower mid-market enterprises to achieve 10x efficiency and robust security in an evolving digital world."
          />

          <PrincipleCard 
            icon={Lightbulb}
            title="Our Vision"
            theme="purple"
            description="To be the globally recognized benchmark for ethical, sustainable, and groundbreaking digital transformation, setting the standard for what modern infrastructure should look like."
          />
        </div>
      </div>
    </section>
  );
};

export default Principles;