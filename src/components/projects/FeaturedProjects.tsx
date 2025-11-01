import React from 'react';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: "E-Commerce Website",
    description: "Full-stack e-commerce platform with JWT authentication, OAuth2 integration, and role-based access control. Enhanced performance by 21% using debouncing, throttling, and lazy loading. Utilized Redux for state management and integrated Gmail API for OTP verification.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tech: ["ReactJS", "React-Redux", "MongoDB", "ExpressJS", "NodeJS", "OAuth2", "JWT"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
  },
  {
    title: "Real Time Chatting Application",
    description: "Real-time chat application with optimized performance achieving 26% increase through lazy loading and memoization. Implemented MongoDB for user information and chat history management. Secured with JWT-based authentication.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tech: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "JWT"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
  },
  {
    title: "Form Builder",
    description: "Drag-and-drop form builder platform that simplifies communication of requirements between customers and developers, minimizing iteration cycles. Utilized React State and Context for efficient form data handling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["ReactJS", "React-Beautiful-DND", "JavaScript", "CSS"],
    github: "https://github.com/bharat24835",
    demo: "https://demo.com"
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