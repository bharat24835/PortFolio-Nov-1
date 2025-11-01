'use client';

import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

export default function ResumeButton() {
  return (
    <motion.a
      href="https://drive.google.com/file/d/1brsZcr-OxoV3kZtsmWeyJ9U0DH2NDkfb/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500 group-hover:scale-110 animate-gradient" />

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      {/* Button content */}
      <div className="relative flex items-center space-x-2">
        <FileDown className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-1" />
        <span className="text-white font-medium">Download Resume</span>
      </div>
    </motion.a>
  );
}
