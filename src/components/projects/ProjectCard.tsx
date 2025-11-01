'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  index: number;
}

export default function ProjectCard({ title, description, image, tech, github, demo, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10" />
          <Image 
            src={image} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          <div className="absolute bottom-4 right-4 flex space-x-3 z-30">
            <motion.a 
              href={github}
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            {demo && (
              <motion.a 
                href={demo}
                className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.a>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm text-cyan-300 text-sm rounded-full border border-cyan-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}