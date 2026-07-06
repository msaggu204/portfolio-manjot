import rwcLogo from '../components/Projects/RogueWave/RWC.png';
import formulaLogo from '../components/Projects/FormulaSAE/formulaSAE.png';
import androidLogo from '../components/Projects/CMPUT301/android.png';
import websiteLogo from '../components/Projects/Website/manjot1.png';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;      // undefined = coming soon
  logo?: string;      // image src
  emoji?: string;     // emoji character (used when no logo image)
  category: string;   // tech category (Hardware, Mobile, …)
  sphereId: string;   // life bucket — see spheres.ts
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'rogue-wave',
    title: 'Rogue Wave Coffee',
    logo: rwcLogo,
    description:
      'An embedded system built for Rogue Wave Coffee to automate and optimize the roasting process using a PyTorch-based ML model. The system collects and analyzes real-time data to deliver consistent roasting results, reducing variability by 15%. It features a web-based dashboard for remote monitoring and smart, ML-driven recommendations with a 5-second response time.',
    skills: ['PyTorch', 'Embedded Systems', 'Raspberry Pi', 'Data Analysis', 'Sensors', 'Python', 'UI/UX', 'Microcontrollers', 'Client Work'],
    category: 'Embedded Systems',
    sphereId: 'uofa',
    featured: true,
  },
  {
    id: 'formula-sae',
    title: 'Formula SAE',
    logo: formulaLogo,
    description:
      'Supported electrical system upgrades and helped lead the team\'s transition to electric vehicle design. Contributed to testing and performance improvements, and developed an internal SharePoint interface to streamline communications and team operations.',
    skills: ['Electrical Systems', 'EV Design', 'PCB Debugging', 'Performance Testing', 'SharePoint Development', 'UI/UX Design', 'Team Collaboration', 'Project Coordination', 'Python'],
    category: 'Hardware',
    sphereId: 'uofa',
    featured: true,
  },
  {
    id: 'eventsync',
    title: 'EventSync',
    logo: androidLogo,
    description:
      'EventSync is an Android app for managing event check-ins and notifications. It supports multiple user roles—admins, owners, and guests—allowing owners to create events and send alerts, while guests can check in using QR codes and stay updated through in-app notifications. Designed with object-oriented principles and UML-driven architecture to ensure maintainability and scalability.',
    skills: ['Java', 'Android Studio', 'UML', 'OOP', 'QR Code Integration', 'Unit Testing', 'Git', 'Team Collaboration', 'UI/UX Design'],
    link: 'https://github.com/CMPUT301W24T26/OOPs-I-Pushed-To-Main',
    category: 'Mobile',
    sphereId: 'uofa',
    featured: true,
  },
  {
    id: 'stock-picker',
    title: 'Stock Picker',
    emoji: '📈',
    description:
      'Stock Picker is a Python-based tool for analyzing financial health and growth metrics of top tech companies. It uses real-time data from Yahoo Finance to calculate EPS, P/E ratio, ROE, revenue growth, and more, offering insights into both performance and long-term viability.',
    skills: ['Python', 'Pandas', 'yFinance', 'Financial Analysis', 'Data Visualization', 'OOP', 'API Integration', 'Error Handling'],
    link: 'https://github.com/msaggu204/StockPicker',
    category: 'Software',
    sphereId: 'personal',
    featured: false,
  },
  {
    id: '8-bit-cpu',
    title: '8-bit CPU',
    emoji: '🖥️',
    description:
      'Designed and implemented an 8-bit CPU in VHDL using a controller-datapath architecture on a Zybo Z7 board. Integrated components structurally and executed custom instructions through a finite state machine. Verified logic through simulation and real-time board interaction.',
    skills: ['VHDL', 'FSM Design', 'Datapath & Control', 'Zybo Z7-10', 'Testbenches', 'Digital Logic', 'Simulation', 'Modular Design'],
    link: 'https://github.com/msaggu204/8-bit-CPU/tree/main',
    category: 'Hardware',
    sphereId: 'uofa',
    featured: false,
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    logo: websiteLogo,
    description:
      'This site — a responsive personal portfolio built with React and TypeScript, designed as an expanding hub for everything I work on. Features a canvas power-grid animation, a token-driven design system, scroll-triggered reveals, and fully data-driven content.',
    skills: ['React', 'TypeScript', 'CSS Modules', 'Responsive Design', 'GitHub Pages', 'Accessibility', 'Animations'],
    link: 'https://msaggu204.github.io/portfolio-manjot/',
    category: 'Web',
    sphereId: 'personal',
    featured: false,
  },
];
