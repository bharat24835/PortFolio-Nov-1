'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SkillItem from './SkillItem';
import { Skill } from '../../types/skills';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

export default function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-colors"
    >
      <h3 className="text-2xl font-bold mb-6 text-white text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <SkillItem key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}