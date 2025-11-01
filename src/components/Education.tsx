import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    year: "2025",
    degree: "Bachelor of Technology in Computer Science",
    school: "Galgotia College of Eng and Technology",
    description: "6.7 CGPA"
  },
  {
    year: "2019",
    degree: "12th CBSE",
    school: "Dr Kiran Saujiya Academy",
    description: "90.8%"
  },
  {
    year: "2017",
    degree: "10th CBSE",
    school: "Dr Kiran Saujiya Academy",
    description: "9.6 CGPA"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="ml-4 text-cyan-400 font-semibold">{item.year}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
              <h4 className="text-gray-300 mb-2">{item.school}</h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}