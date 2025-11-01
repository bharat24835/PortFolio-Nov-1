'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, ExternalLink } from 'lucide-react';

interface ProjectTimelineItemProps {
  date: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  index: number;
  isLeft: boolean;
}

export default function ProjectTimelineItem({
  date,
  title,
  description,
  tech,
  github,
  demo,
  index,
  isLeft
}: ProjectTimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-12`}
    >
      <div className="flex-1">
        <div className={`flex items-center ${isLeft ? 'md:justify-end' : 'md:justify-start'} mb-4`}>
          <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
          <span className="text-gray-600">{date}</span>
        </div>
        <div className={`bg-white p-6 rounded-xl shadow-md ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {item}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a 
              href={github}
              className="flex items-center text-cyan-600 hover:text-cyan-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-4 h-4 mr-1" />
              Code
            </a>
            {demo && (
              <a 
                href={demo}
                className="flex items-center text-cyan-600 hover:text-cyan-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block w-px bg-gray-200 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
        </div>
      </div>
      <div className="flex-1" />
    </motion.div>
  );
}