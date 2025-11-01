import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Atom, Code2, Layout, Server, Network, DivideIcon as LucideIcon } from 'lucide-react';
import { NoteCategory } from '../../types/notes';

interface NoteCategoryCardProps {
  category: NoteCategory;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Binary,
  Atom,
  Code2,
  Layout,
  Server,
  Network
};

export default function NoteCategoryCard({ 
  category, 
  index, 
  isSelected, 
  onClick 
}: NoteCategoryCardProps) {
  const IconComponent = iconMap[category.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`
        relative overflow-hidden rounded-xl p-6 transition-all duration-300
        ${isSelected 
          ? 'bg-white/20 backdrop-blur-md border-2 border-cyan-400 transform scale-105' 
          : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:transform hover:scale-105'
        }
      `}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-center mb-4">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center
              bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300
            `}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <div className="text-sm text-cyan-400 font-semibold">
                {category.totalNotes} Notes
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {category.name}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {category.description}
          </p>

          {/* Selection indicator */}
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}