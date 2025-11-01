'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Timer, Trophy } from 'lucide-react';
import MachineCodingCard from './MachineCodingCard';
import { machineCodingProjects } from '../../data/machineCoding';

export default function MachineCodingSection() {
  return (
    <section id="machine-coding" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
              <Code2 className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-white font-semibold">Machine Coding Rounds</span>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            Coding Challenge Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Real-world coding challenges solved under time constraints. Each project demonstrates 
            problem-solving skills, clean code practices, and ability to deliver functional 
            applications within tight deadlines.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{machineCodingProjects.length}</div>
            <div className="text-gray-300">Challenges Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
            <Timer className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">95%</div>
            <div className="text-gray-300">On-Time Delivery</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
            <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">15+</div>
            <div className="text-gray-300">Technologies Used</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineCodingProjects.map((project, index) => (
            <MachineCodingCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Your Next Challenge?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to tackle new coding challenges and build innovative solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}