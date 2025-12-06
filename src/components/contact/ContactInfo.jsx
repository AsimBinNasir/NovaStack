import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Clock } from 'lucide-react';


export const ContactInfo = () => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-display font-bold mb-6 text-white">Other Ways to Connect</h3>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Located in the heart of the Innovation District, our headquarters serves as the central hub for our global operations and R&D labs.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-nova-peach group-hover:bg-nova-peach group-hover:text-nova-dark transition-colors duration-300">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-1">Email Us</h4>
              <a href="mailto:info@novastack.tech" className="text-white/60 hover:text-white transition-colors">info@novastack.tech</a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-nova-peach group-hover:bg-nova-peach group-hover:text-nova-dark transition-colors duration-300">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-1">Call Us</h4>
              <p className="text-white/60">+1 (555) 123-4567</p>
            </div>
          </div>

            <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-nova-peach group-hover:bg-nova-peach group-hover:text-nova-dark transition-colors duration-300">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-1">Hours</h4>
              <p className="text-white/60">Mon-Fri: 9am - 6pm PST</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="font-display font-bold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {/* LinkedIn Link */}
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-nova-dark transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            {/* Twitter Link */}
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-nova-dark transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Abstract Tech Map Visual */}
      <div className="relative w-full aspect-video bg-nova-dark/50 border border-white/10 overflow-hidden group">
        <div className="absolute inset-0 opacity-30" 
              style={{ 
                // Grid pattern background
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}>
        </div>
        
        {/* Animated Map Nodes */}
        <div className="absolute inset-0">
            {/* Central Node (Headquarters) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-nova-peach shadow-[0_0_20px_rgba(255,200,150,0.5)]">
              <div className="absolute inset-0 animate-ping bg-nova-peach opacity-50"></div>
            </div>
            
            {/* Connecting Lines and Secondary Nodes using SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 2" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 2" />
              <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 2" />
              <circle cx="20%" cy="30%" r="3" fill="rgba(255,255,255,0.5)" />
              <circle cx="80%" cy="20%" r="3" fill="rgba(255,255,255,0.5)" />
              <circle cx="70%" cy="80%" r="3" fill="rgba(255,255,255,0.5)" />
            </svg>
        </div>
        
        {/* Location Coordinates */}
        <div className="absolute bottom-4 left-4 text-xs font-mono text-nova-peach/50">
          LAT: 37.7749° N <br/>
          LNG: 122.4194° W
        </div>
      </div>
    </div>
  );
};

export default ContactInfo