import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import { frontendSkills, backendSkills } from '../../data/skills';

export default function SkillsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <SkillCategory 
        title="Frontend Development"
        skills={frontendSkills}
        index={0}
      />
      <SkillCategory 
        title="Backend Development"
        skills={backendSkills}
        index={1}
      />
    </div>
  );
}