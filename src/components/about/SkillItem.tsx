'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types/skills';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

export default function SkillItem({ skill, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
    >
      <h4 className="text-lg font-semibold text-cyan-400 mb-2">{skill.name}</h4>
      <div className="space-y-2">
        {skill.points.map((point, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
            <p className="text-gray-300 flex-1">{point}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}