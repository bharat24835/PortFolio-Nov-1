import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './hero/HeroContent';
import ProfileImage from './hero/ProfileImage';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 mix-blend-overlay" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          <HeroContent />
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}