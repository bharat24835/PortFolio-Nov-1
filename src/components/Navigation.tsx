'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const navItems = ['about', 'experience', 'projects', 'education', 'contact'];
// Hidden items: 'machine-coding', 'notes' - kept in code but hidden from navigation

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button 
            onClick={() => handleNavClick('hero')}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            aria-label="Go to top"
          >
            Portfolio
          </button>
          
          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Items */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden mt-2 mb-4 rounded-lg shadow-xl border z-50 relative ${
                isScrolled 
                  ? 'bg-white/95 backdrop-blur-md border-gray-200' 
                  : 'bg-white/95 backdrop-blur-md border-white/20'
              } overflow-hidden`}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block w-full text-left px-6 py-4 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  } hover:text-cyan-500 hover:bg-cyan-50/50 font-medium transition-colors border-b border-gray-100 last:border-b-0 active:bg-cyan-100/50`}
                >
                  {getNavLabel(item)}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  );
}