// Services.jsx

import React from 'react';
// Lucide icons are used for visual appeal in the service boxes
import { Cloud, ShieldCheck, Cpu, Database, Globe, Zap } from 'lucide-react';

// The ServiceItem interface is removed, but the data structure remains
const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly transition your legacy systems to modern cloud architectures with zero downtime.",
    icon: Cloud,
    colSpan: "md:col-span-2",
  },
  {
    title: "Data Security",
    description: "Enterprise-grade encryption and threat detection to keep your most valuable assets safe.",
    icon: ShieldCheck,
    colSpan: "md:col-span-1",
  },
  {
    title: "AI Integration",
    description: "Leverage large language models and predictive analytics to automate workflows and gain insights.",
    icon: Cpu,
    colSpan: "md:col-span-1",
  },
  {
    title: "Edge Computing",
    description: "Bring computation and data storage closer to the sources of data for faster response times.",
    icon: Zap,
    colSpan: "md:col-span-2",
  },
];

// The ': React.FC' type annotation is removed
export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built for Scale</h2>
          <p className="text-white/60 text-lg">
            Our comprehensive suite of services ensures your technology stack is robust, secure, and ready for whatever comes next.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              // Using index as a key is okay if the list order is static
              key={index} 
              className={`
                group relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm 
                hover:bg-white/10 transition-colors duration-300
                flex flex-col justify-between min-h-80
                ${service.colSpan || "md:col-span-1"}
              `}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-nova-peach/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Decorative corner accents for sharp look matching Testimonials */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-nova-peach transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-nova-peach transition-colors"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 bg-white/10 flex items-center justify-center text-nova-peach">
                  {/* Icon component is rendered dynamically */}
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>

              <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
                 <span className="text-xs uppercase tracking-widest font-display">Explore</span>
                 <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services