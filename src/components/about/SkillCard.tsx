'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function SkillCard({ Icon, title, description, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Icon className="w-12 h-12 text-cyan-500 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}