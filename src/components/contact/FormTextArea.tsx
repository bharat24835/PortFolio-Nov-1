'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextArea({ label, name, value, onChange }: FormTextAreaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        name={name}
        className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors h-32"
        value={value}
        onChange={onChange}
        required
      />
    </motion.div>
  );
}