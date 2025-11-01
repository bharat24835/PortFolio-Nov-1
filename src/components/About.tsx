import React from 'react';
import { motion } from 'framer-motion';
import SkillsSection from './about/SkillsSection';
import AboutContent from './about/AboutContent';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <AboutContent />
        <SkillsSection />
      </div>
    </section>
  );
}