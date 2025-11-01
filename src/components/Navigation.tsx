import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const navItems = ['about', 'projects', 'machine-coding', 'notes', 'education', 'contact'];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const getNavLabel = (item: string) => {
    if (item === 'machine-coding') return 'Coding Challenges';
    if (item === 'notes') return 'Study Notes';
    return item.charAt(0).toUpperCase() + item.slice(1);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent`}
          >
            Portfolio
          </button>
          
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } hover:text-cyan-400 transition-colors font-medium text-sm xl:text-base`}
              >
                {getNavLabel(item)}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl border border-white/20"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-6 py-4 text-gray-700 hover:text-cyan-500 hover:bg-gray-50/50 font-medium border-b border-gray-100 last:border-b-0"
              >
                {getNavLabel(item)}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}