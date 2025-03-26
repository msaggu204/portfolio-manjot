import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-black flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;