import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, BookOpen } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/bharat24835', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/bharat24835', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:bharat24835@gmail.com', label: 'Email' },
  { icon: Code2, href: 'https://leetcode.com/bharat24835/', label: 'LeetCode' },
  { icon: BookOpen, href: 'https://auth.geeksforgeeks.org/user/bharat24835', label: 'GeeksForGeeks' }
];

export default function SocialLinks() {
  return (
    <motion.div 
      className="flex space-x-6 justify-center lg:justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {socialLinks.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon className="w-5 h-5 text-white" />
          <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
}