import React from 'react';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack E-Commerce solution with real-time cart Updates, Role Based Authorization , and Order management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tech: ["React","React-Redux", "Node.js", "MongoDB", "JWT" , "OAuth2"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with animations, responsive design, and dynamic content management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com/bharat24835"
  }
];

export default function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
}