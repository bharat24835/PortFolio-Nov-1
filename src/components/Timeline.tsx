'use client';

import React from 'react';
import AnimatedSection from './motion/AnimatedSection';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  points: string[];
  isLeft?: boolean;
  index: number;
  companyColor?: string;
}

function TimelineItem({ year, title, points, isLeft, index, companyColor = 'from-indigo-500 to-purple-500' }: TimelineItemProps) {
  return (
    <div className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center justify-center w-full`}>
      <motion.div 
        className="w-full md:w-5/12 mb-4 md:mb-0"
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <div className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${companyColor} text-white ${isLeft ? 'md:text-right' : ''} text-left group hover:shadow-xl transition-all duration-300`}>
          <span className="font-bold text-cyan-200 text-sm mb-2 block">{year}</span>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <ul className={`space-y-2 ${isLeft ? 'md:ml-auto md:max-w-[90%]' : ''}`}>
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + idx * 0.1 }}
                className="flex items-start gap-2 text-sm leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div 
        className="w-2 md:w-2/12 h-16 md:h-auto flex justify-center items-center relative z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
      >
        <div className={`w-6 h-6 bg-gradient-to-br ${companyColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
}

export default function Timeline() {
  const experiences = [
    {
      index: 0,
      year: "Jul 2025 - Present",
      title: "Software Developer Intern at Pocket FM",
      points: [
        "Working with Next.js 15 (App Router), React 19 (Server Actions), TypeScript, TanStack Query, Aural UI, and Zustand",
        "Contributed to migrating PocketFM, routing client requests via server to avoid exposed APIs",
        "Implemented reusable components in the Aural Design System, cutting dev time by 30%",
        "Shipped UX improvements: +36% experience score, 83% task findability, 66% user satisfaction",
        "Supported PRD-driven launches that contributed to a 12% increase in app downloads"
      ],
      isLeft: false,
      companyColor: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      index: 1,
      year: "Sep 2024 - May 2025",
      title: "Software Developer Intern at Cybermindworks",
      points: [
        "Built scalable applications with Next.js, TanStack Query, TypeScript, Tailwind, Mantine, and NestJS",
        "Integrated LinkedIn Share API for automatic certificate posting, engaging 100K+ students",
        "Implemented 15+ UI pages in Next.js with pixel-perfect fidelity and consistent styling",
        "Contributed to applications supporting 100k+ users with exceptional performance and reliability"
      ],
      isLeft: true,
      companyColor: "from-cyan-500 via-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50"></div>
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp) => (
            <TimelineItem
                key={exp.index}
                index={exp.index}
                year={exp.year}
                title={exp.title}
                points={exp.points}
                isLeft={exp.isLeft}
                companyColor={exp.companyColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}