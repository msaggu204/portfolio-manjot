export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  date: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'manitoba-hydro',
    company: 'Manitoba Hydro',
    role: 'Compliance Engineer, EIT',
    date: 'May 2025 - Present',
    bullets: [],
  },
  {
    id: 'meta-hcl',
    company: 'Meta (Contingent Worker via HCL Technologies)',
    role: 'Software Engineer Intern',
    date: 'June 2024 - December 2024',
    bullets: [
      'Improved silicon test accuracy by implementing log-level validation with Python, enhancing detection of hidden errors in logs with zero-return codes and reducing false positives by 20%',
      'Optimized AutoVal\'s randomization and concurrency testing frameworks for PCIe and memory test plans, improving scalability and stability by 10% through Agile collaboration and Git/Sapling version control',
      'Developed deep learning algorithms and automated silicon workflows using Python in Linux, boosting efficiency by 5% and throughput by 8% through improved logging and categorization',
      'Designed and validated next-gen silicon systems by enhancing infrastructure readiness and triaging tools, reducing pre-silicon validation time by 10%',
    ],
  },
  {
    id: 'atco',
    company: 'ATCO',
    role: 'Natural Gas Engineering Intern',
    date: 'January 2023 - August 2023',
    bullets: [
      'Managed and executed 3 Integrity pipeline projects with a total value of $360K, delivering on-time completion and within budget, ensuring compliance with safety regulations and reducing leak risks by 75%',
      'Ensured successful completion of Integrity pipeline projects, worth $1.25M, utilizing software for in-depth analysis, data-driven decision-making, and cross-functional team collaboration for risk mitigation',
      'Developed and implemented a streamlined communication plan to convey technical information to multi-disciplinary teams, resulting in a 15% reduction in project delays',
      'Implemented a comprehensive file and database management system for engineering projects, utilizing SQL and Python programming, resulting in a 30% increase in data accuracy and efficiency',
    ],
  },
  {
    id: 'university',
    company: 'University of Alberta',
    role: 'Engineering Academic Cohort Leader',
    date: 'September 2021 - April 2022',
    bullets: [
      'Developed and led academic resources for 105 first year and upper year University of Alberta engineering students living in on-campus residence',
      'Promoted and tracked student success through coordinating instructor-led study sessions, faculty-specific resources, and mental health initiatives',
      'Implemented and managed peer mentorship program to foster a collaborative environment through supportive communication and developing study skills',
    ],
  },
  {
    id: 'cra',
    company: 'Canada Revenue Agency',
    role: 'Assessment & Benefits Processing Clerk',
    date: 'April 2018 - August 2020',
    bullets: [
      'Verified, analysed, and assessed forms, documents, and claims; collaborated with a 20-person team to ensure case deadlines were met',
      'Identified and processed thousands of discrepancies each tax-filing season to ensure income tax claims and benefit returns were filed correctly',
      'Facilitated annual technical and communications training to 15+ new and current colleagues',
    ],
  },
];
