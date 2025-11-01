import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, Zap } from 'lucide-react';
import { MachineCodingProject } from '../../types/machineCode';

interface MachineCodingCardProps extends MachineCodingProject {
  index: number;
}

const difficultyColors = {
  Easy: 'from-green-400 to-green-600',
  Medium: 'from-yellow-400 to-orange-500',
  Hard: 'from-red-400 to-red-600'
};

export default function MachineCodingCard({ 
  title, 
  description, 
  image, 
  tech, 
  github, 
  demo, 
  difficulty, 
  timeLimit, 
  features, 
  index 
}: MachineCodingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-white/20">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Difficulty Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>

          {/* Time Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-3 py-1">
              <Clock className="w-3 h-3 text-white mr-1" />
              <span className="text-xs text-white">{timeLimit}</span>
            </div>
          </div>

          {/* Action Buttons */}
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
            <motion.a 
              href={demo}
              className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:from-cyan-500 hover:to-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center mb-3">
            <Zap className="w-5 h-5 text-cyan-400 mr-2" />
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
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