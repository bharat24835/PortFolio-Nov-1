import React from 'react';
import { Code2, Terminal, Palette } from 'lucide-react';
import SkillCard from './SkillCard';

const skills = [
  {
    Icon: Code2,
    title: 'Frontend Development',
    description: 'Expertise in React, Redux, and modern JavaScript. Skilled in building responsive, performant web applications with focus on user experience.'
  },
  {
    Icon: Terminal,
    title: 'Backend Development',
    description: 'Proficient in Node.js , with experience in building RESTful APIs, database design, and server architecture.'
  }
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} index={index} />
      ))}
    </div>
  );
}