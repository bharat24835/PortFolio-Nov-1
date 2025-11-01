import React from 'react';
import AnimatedSection from './motion/AnimatedSection';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
  index: number;
}

function TimelineItem({ year, title, description, isLeft, index }: TimelineItemProps) {
  return (
    <div className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center justify-center w-full`}>
      <motion.div 
        className="w-full md:w-5/12 mb-4 md:mb-0"
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <div className={`p-4 rounded shadow-md bg-white ${isLeft ? 'md:text-right' : ''} text-center md:text-left`}>
          <span className="font-bold text-cyan-500">{year}</span>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
      <motion.div 
        className="w-2 md:w-2/12 h-16 md:h-auto flex justify-center items-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
      >
        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
      </motion.div>
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Experience</h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          <div className="space-y-8 md:space-y-12">
            <TimelineItem
              index={0}
              year="2023"
              title="Senior Software Engineer at Tech Corp"
              description="Led development of enterprise applications using React and Node.js"
            />
            <TimelineItem
              index={1}
              year="2021"
              title="Software Engineer at StartupX"
              description="Full-stack development with focus on scalable architecture"
              isLeft
            />
            <TimelineItem
              index={2}
              year="2019"
              title="Junior Developer at DevCo"
              description="Frontend development using React and TypeScript"
            />
          </div>
        </div>
      </div>
    </section>
  );
}