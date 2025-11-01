import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter, Search } from 'lucide-react';
import NoteCategoryCard from './NoteCategoryCard';
import NoteCard from './NoteCard';
import { noteCategories, studyNotes } from '../../data/notes';
import { Note } from '../../types/notes';

export default function NotesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredNotes = studyNotes.filter(note => {
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDifficulty = selectedDifficulty === 'all' || note.difficulty === selectedDifficulty;
    
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  return (
    <section id="notes" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
              <BookOpen className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="text-white font-semibold">Study Materials</span>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            Comprehensive Study Notes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Curated study materials covering essential topics in software development. 
            From data structures to modern web technologies, these notes are designed 
            to help you master key concepts with practical examples and clear explanations.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noteCategories.map((category, index) => (
              <NoteCategoryCard 
                key={category.id} 
                category={category} 
                index={index}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notes or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  {noteCategories.map(category => (
                    <option key={category.id} value={category.id} className="bg-gray-800">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="all">All Levels</option>
                <option value="Beginner" className="bg-gray-800">Beginner</option>
                <option value="Intermediate" className="bg-gray-800">Intermediate</option>
                <option value="Advanced" className="bg-gray-800">Advanced</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Notes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Notes' : 
               noteCategories.find(cat => cat.id === selectedCategory)?.name + ' Notes'}
            </h3>
            <div className="text-gray-300">
              {filteredNotes.length} note{filteredNotes.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredNotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNotes.map((note, index) => (
                <NoteCard key={note.id} note={note} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No notes found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want More Study Materials?
            </h3>
            <p className="text-gray-300 mb-6">
              I regularly update these notes and add new topics. Follow me for the latest updates!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}