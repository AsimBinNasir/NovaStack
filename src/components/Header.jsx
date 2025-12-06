import React from 'react'
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
    // Changed 'href' to 'path' for better clarity with React Router
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();

    // Handles logo click to navigate to Home
    const handleClick = () => {
        navigate('/');
        window.scrollTo(0, 0);

    }

    // Handles general navigation using React Router
    const handleNavigation = (e,path) => {
        e.preventDefault(); // Prevent default link behavior
        navigate(path);
        window.scrollTo(0, 0);
        // Close the mobile menu automatically after navigating
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
            ? 'bg-nova-dark/80 backdrop-blur-lg border-white/10 py-4'
            : 'bg-transparent border-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={handleClick}
                >
                    <div className="w-8 h-8 relative flex items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-full stroke-white transition-all duration-300 group-hover:stroke-[2.5px]"
                        >
                            {/* Top Diamond */}
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                            {/* Middle Layer */}
                            <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                            {/* Bottom Layer */}
                            <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                        </svg>
                    </div>

                    {/* Logotype - Share Font, All White */}
                    <span className="text-3xl font-logo font-bold italic tracking-wider text-white select-none">
                        NOVASTACK
                    </span>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            onClick={(e) => handleNavigation(e,item.path)}
                            className="text-sm font-medium text-white/80 hover:text-white relative group cursor-pointer"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nova-peach transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-nova-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            onClick={(e) => handleNavigation(e,item.path)}

                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header