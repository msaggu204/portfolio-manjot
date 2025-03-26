import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Example Corp",
      date: "2021 - Present",
      description: [
        "Led development of key features resulting in 40% user growth",
        "Architected and implemented scalable backend solutions",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc",
      date: "2019 - 2021",
      description: [
        "Developed full-stack applications using React and Node.js",
        "Improved application performance by 60%",
        "Collaborated with design team on UI/UX improvements"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-purple-500">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.company} | {exp.date}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;