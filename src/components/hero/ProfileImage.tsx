'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div 
      className="w-full lg:w-1/2 flex justify-center lg:justify-end"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
        <Image 
          src="https://avatars.githubusercontent.com/u/97047293?v=4"
          alt="Profile"
          width={500}
          height={500}
          className="relative w-full h-full object-cover rounded-2xl shadow-lg border-2 border-white/20 backdrop-blur-sm"
          loading="eager"
          priority
        />
      </motion.div>
    </motion.div>
  );
}