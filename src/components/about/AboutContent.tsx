"use client";

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
        I&apos;m a Software Developer Intern at Pocket FM, working with{" "}
        <strong>Next.js 15</strong>, <strong>React 19</strong>, and{" "}
        <strong>TypeScript</strong> to build scalable web applications.
        I&apos;ve contributed to migrating PocketFM&apos;s architecture,
        implementing reusable components in the Aural Design System, and
        shipping UX improvements that resulted in a 36% increase in experience
        scores. <br />
        <br />
        Previously at Cybermindworks, I integrated LinkedIn Share API and
        developed 15+ UI pages supporting 100k+ users. I&apos;m passionate about
        creating performant applications with clean code, optimizing API calls
        with debouncing and throttling, and building secure authentication
        systems using JWT and OAuth2.
      </p>
    </motion.div>
  );
}
