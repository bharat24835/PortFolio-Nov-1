'use client';

import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Gradient decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development,
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <FeaturedProjects />
      </div>
    </section>
  );
}