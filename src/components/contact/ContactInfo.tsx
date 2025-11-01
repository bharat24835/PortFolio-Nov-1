'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  { Icon: Mail, text: 'bharat248350@gmail.com' },
  { Icon: Phone, text: '+91-9627925287' },
  { Icon: MapPin, text: 'Greater Noida, India' }
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-lg"
          >
            <item.Icon className="w-6 h-6 text-cyan-400" />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}