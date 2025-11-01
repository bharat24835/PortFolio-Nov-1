import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import ResumeButton from "./ResumeButton";

export default function HeroContent() {
  return (
    <motion.div
      className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left pt-20 md:pt-24 lg:pt-0"
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Bharat
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white/80">
          Full Stack Developer
        </h2>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-white/70 max-w-md mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I build full-stack web apps using Next.js, Nest.js , Django.
        I focus on clean design, performance, and scalable deployments using AWS
        and Docker.
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
