import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedCard from './motion/AnimatedCard';
import AnimatedSection from './motion/AnimatedSection';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with collaborative features",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com",
    demo: "https://example.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Projects</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-700 hover:text-cyan-500 text-sm md:text-base"
                    >
                      <Github className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center text-gray-700 hover:text-cyan-500 text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}