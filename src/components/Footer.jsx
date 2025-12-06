// Footer.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

// The ': React.FC' type annotation is removed
export const Footer = () => {
  const navigate = useNavigate();

  // Function to navigate to home and scroll to the top of the page
  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    
    // 1. Navigate to the home path.
    // If the user is already on the home page, this does nothing but change the history state.
    navigate('/');

    // 2. Scroll to the top of the viewport.
    // The smooth scrolling effect is handled by the global CSS rule on <html>.
    window.scrollTo(0, 0); 
  };

  return (
    <footer id="contact" className="bg-nova-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            {/* Logo area - Now uses handleHomeClick */}
            <h3 
              className="text-2xl font-display font-bold mb-6 text-white cursor-pointer"
              onClick={handleHomeClick} // Clickable to go home/top
            >
              NOVASTACK
            </h3>
            <p className="text-white/50 max-w-sm mb-6">
              Engineering the digital backbone of tomorrow's enterprises. Secure. Scalable. Smart.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-nova-dark transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-nova-dark transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-nova-dark transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-nova-peach">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-nova-peach">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@novastack.tech</span>
              </li>
              <li>123 Innovation Drive<br/>Tech City, CA 94000</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          {/* Using JavaScript to get the current year for the copyright date */}
          <p>&copy; {new Date().getFullYear()} NovaStack Inc. All rights reserved.</p> 
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer