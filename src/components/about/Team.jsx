// Team.jsx

import React from 'react';

// The TeamMember interface is removed, and the data structure remains in JS
export const Team = () => {
  const members = [
    { 
      name: "Sarah Connor", 
      role: "CEO & Founder", 
      quote: "Innovation is not just about new tech; it's about new value.",
      initial: "S"
    },
    { 
      name: "David Chen", 
      role: "CTO", 
      quote: "Code is poetry written for machines to build the future.",
      initial: "D"
    },
    { 
      name: "Elena Ross", 
      role: "Head of Product", 
      quote: "Great products don't just solve problems; they anticipate them.",
      initial: "E"
    },
    { 
      name: "Michael K.", 
      role: "Lead Architect", 
      quote: "Scalability is a mindset, not just a server configuration.",
      initial: "M"
    }
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4">Driven by Expertise, United by Vision</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Our team combines decades of enterprise experience with a passion for cutting-edge technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, i) => (
          <div key={i} className="group relative bg-nova-dark/50 border border-white/10 p-6 hover:-translate-y-2 transition-transform duration-300">
             {/* Decorative corner accents */}
             <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-nova-peach transition-colors"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-nova-peach transition-colors"></div>
             
             <div className="w-full aspect-4/5 bg-white/5 mb-6 overflow-hidden relative group-hover:bg-white/10 transition-colors">
               <div className="absolute inset-0 bg-linear-to-t from-nova-dark to-transparent opacity-80"></div>
               {/* Placeholder Avatar - Abstract Typography */}
               <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-8xl font-bold select-none group-hover:text-nova-peach/20 transition-colors">
                 {member.initial}
               </div>
             </div>
             
             <h3 className="text-xl font-bold text-white">{member.name}</h3>
             <p className="text-nova-peach text-sm mb-4 font-mono">{member.role}</p>
             <p className="text-white/60 text-sm italic border-t border-white/10 pt-4">"{member.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team