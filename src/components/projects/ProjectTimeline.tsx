import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';

interface TimelineProject {
  date: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: TimelineProject[] = [
  {
    date: "Dec 2023",
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce platform with advanced features like real-time cart updates and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
  },
  {
    date: "Oct 2023",
    title: "Task Management System",
    description: "Developed a collaborative task management system with real-time updates and team features.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
  },
  {
    date: "Aug 2023",
    title: "Portfolio Website",
    description: "Created a modern portfolio website with animations and responsive design.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/bharat24835"
  }
];

export default function ProjectTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h3 className="text-2xl font-semibold mb-8 text-center">Project Timeline</h3>
      </AnimatedSection>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200"></div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={`flex items-center mb-4 md:mb-0 ${
              index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8 md:ml-auto'
            }`}>
              <div className="flex items-center md:ml-auto">
                <Calendar className="w-5 h-5 text-cyan-500 mr-2" />
                <span className="text-sm text-gray-600">{project.date}</span>
              </div>
            </div>
            <div className={`relative flex-1 ${
              index % 2 === 0 ? 'md:w-1/2 md:pl-8' : 'md:w-1/2 md:pr-8'
            }`}>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-sm text-cyan-600 hover:text-cyan-800">
                    View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="text-sm text-cyan-600 hover:text-cyan-800">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}