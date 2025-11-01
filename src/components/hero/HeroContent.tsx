"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import ResumeButton from "./ResumeButton";

export default function HeroContent() {
  return (
    <motion.div
      className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left pt-4 md:pt-8 lg:pt-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4 md:space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-center lg:text-left">
          Hi, I&apos;m 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Bharat
          </span>
        </h1>
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 text-center lg:text-left leading-relaxed">
          <span className="block sm:inline">Software Developer Intern</span>
          <span className="inline sm:inline"> </span>
          <span className="text-white/60 font-normal">@</span>
          <span className="inline sm:inline"> </span>
          <a
            href="https://pocketfm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group/link"
          >
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              PocketFM
            </span>
            <svg
              className="w-4 h-4 text-cyan-300 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </h2>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-white/70 max-w-md mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Building scalable applications with Next.js 15, React 19, and
        TypeScript. Passionate about optimizing performance, creating
        exceptional UX, and solving complex problems. Solved 960+ coding
        problems on LeetCode and GeeksForGeeks.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex justify-center lg:justify-start"
      >
        <ResumeButton />
      </motion.div>

      <SocialLinks />
    </motion.div>
  );
}
