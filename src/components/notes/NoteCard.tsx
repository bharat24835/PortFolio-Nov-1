import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Eye, 
  Calendar, 
  FileText, 
  Clock,
  Star,
  ExternalLink
} from 'lucide-react';
import { Note } from '../../types/notes';

interface NoteCardProps {
  note: Note;
  index: number;
}

const difficultyColors = {
  Beginner: 'from-green-400 to-green-600',
  Intermediate: 'from-yellow-400 to-orange-500',
  Advanced: 'from-red-400 to-red-600'
};

const formatColors = {
  PDF: 'text-red-400',
  MD: 'text-blue-400',
  DOC: 'text-green-400'
};

export default function NoteCard({ note, index }: NoteCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-white/20 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${difficultyColors[note.difficulty]}`}>
                {note.difficulty}
              </div>
              <div className={`text-xs font-semibold ${formatColors[note.format]}`}>
                {note.format}
              </div>
            </div>
            
            <div className="flex items-center text-gray-400 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(note.lastUpdated)}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            {note.title}
          </h3>
          
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {note.description}
          </p>

          {/* Topics */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {note.topics.slice(0, 4).map((topic, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-white/5 backdrop-blur-sm text-cyan-300 text-xs rounded-full border border-cyan-500/20"
                >
                  {topic}
                </span>
              ))}
              {note.topics.length > 4 && (
                <span className="px-2 py-1 bg-white/5 backdrop-blur-sm text-gray-400 text-xs rounded-full border border-gray-500/20">
                  +{note.topics.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-gray-400 text-xs mb-6">
            {note.pages && (
              <div className="flex items-center">
                <FileText className="w-3 h-3 mr-1" />
                {note.pages} pages
              </div>
            )}
            <div className="flex items-center">
              <Star className="w-3 h-3 mr-1 text-yellow-400" />
              4.8/5
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 pt-0">
          <div className="flex space-x-3">
            <motion.a
              href={note.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </motion.a>
            
            {note.previewUrl && (
              <motion.a
                href={note.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}