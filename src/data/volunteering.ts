export interface VolunteeringItem {
  id: string;
  role: string;
  date: string;
  org: string;
  sphereId: string;   // life bucket — see spheres.ts
  bullets: string[];
}

export const volunteering: VolunteeringItem[] = [
  {
    id: 'fire-warden',
    role: 'Fire Warden',
    date: 'June 2026 - Present',
    org: 'Manitoba Hydro',
    sphereId: 'manitoba-hydro',
    bullets: [
      'Designated fire warden for the workplace — lead calm, orderly evacuations and sweep the floor during fire drills and building alarms to ensure everyone gets out safely',
      'Maintain and restock workplace first aid kits, auditing contents and replacing expired supplies to keep every station inspection-ready',
      'Perform readiness checks on AED (defibrillator) units, verifying pads and batteries are in date and units are rescue-ready',
      'Hold Level 1 first aid certification, supporting day-to-day emergency response readiness in the office',
    ],
  },
  {
    id: 'peer-mentor',
    role: 'Peer Mentor',
    date: 'January 2024 - May 2025',
    org: 'Engineering Students\' Society — Academic Guidance Program',
    sphereId: 'uofa',
    bullets: [
      'Provided academic guidance and mentorship to first- and second-year engineering students through the ESS Academic Guidance Program',
      'Offered one-on-one support with study strategies, course selection, and university life adaptation',
      'Collaborated with fellow mentors to host group workshops and Q&A sessions addressing common academic challenges',
      'Actively promoted a supportive, inclusive environment that encourages student engagement and success',
    ],
  },
  {
    id: 'competitions-coordinator',
    role: 'Competitions and Sporting Coordinator',
    date: 'August 2021 - April 2022',
    org: 'Engineering Students\' Society',
    sphereId: 'uofa',
    bullets: [
      'Facilitated a programming challenge for the University of Alberta Engineering Competition, in which 8 teams create a coding program to solve a presented problem',
      'Scheduled, budgeted, and coordinated the yearly engineering students\' ski trip for ~50 students',
    ],
  },
  {
    id: 'vp-toastmasters',
    role: 'Vice President of Public Relations',
    date: 'February 2019 - August 2020',
    org: 'Toastmasters International',
    sphereId: 'community',
    bullets: [
      'Developed and directed the publicity and recruitment program, which informed members and the public about Toastmasters International through email newsletters, posters, professional guest speakers, and open house events',
      'Coordinated the development and opening of a second Toastmasters club to accommodate membership increase from 8 to 25 active members',
      'Facilitated weekly club meetings and recruitment events',
    ],
  },
  {
    id: 'tax-backup-lead',
    role: 'Back-up Lead',
    date: 'August 2019 - August 2020',
    org: 'Community Volunteer Income Tax Program',
    sphereId: 'community',
    bullets: [
      'Supervised and scheduled 4 volunteer tax preparers during clinic hours',
      'Prepared and filed ~50 tax returns for low-income families and taxpayers',
    ],
  },
];
