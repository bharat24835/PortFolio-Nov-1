import React from "react";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
      <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        I'm a full-stack developer with hands-on experience in building scalable
        web applications using technologies like{" "}
        <strong>React, Next.js, and TypeScript</strong> for modern, responsive
        frontends. I use <strong>Tailwind CSS</strong> and{" "}
        <strong>Mantine</strong> for clean, component-driven UI design. On the
        backend, I’ve worked extensively with{" "}
        <strong>Node.js, Express.js, and NestJS</strong> to create robust APIs
        and microservices. <br />
        <br />
      </p>
    </motion.div>
  );
}
