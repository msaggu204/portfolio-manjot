import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-4 bottom-0 z-40">
      <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-white/50">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FileText size={20} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;