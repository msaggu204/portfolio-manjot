export interface ProfileData {
  name: string;
  role: string;
  company: string;
  location: string;
  /** Short line under the hero name */
  tagline: string;
  /** Rotating descriptors shown in the hero */
  descriptors: string[];
  bio: string;
  /** Quick-fact chips shown in the About section */
  facts: string[];
  /** Core toolbox shown in the About section */
  skills: string[];
  email: string;
  github: string;
  linkedin: string;
  /** Filename in public/ — drop in a new image to update the About photo */
  headshot: string;
}

export const profile: ProfileData = {
  name: 'Manjot Saggu',
  role: 'Compliance Engineer, EIT',
  company: 'Manitoba Hydro',
  location: 'Winnipeg, MB',
  tagline: 'Keeping the grid reliable — and building software along the way.',
  descriptors: [
    'NERC Compliance',
    'Power Systems',
    'Software Development',
    'Embedded Systems',
  ],
  bio: "I'm a Compliance Engineer (EIT) at Manitoba Hydro, where I help keep the province's bulk electric system aligned with NERC reliability standards — supporting audits, coordinating evidence, and building tooling that makes compliance work smarter. Before that: silicon validation at Meta, natural gas engineering at ATCO, and a Computer Engineering degree from the University of Alberta (2025). I bring a systems-level perspective to every problem, whether it's a regulatory standard or a stack trace.",
  facts: [
    '📍 Winnipeg, MB',
    '🎓 UAlberta CompE ’25',
    '⚡ NERC Compliance',
    '🎸 Guitar',
    '🥋 MMA',
    '⛳ Golf',
  ],
  skills: [
    'NERC Reliability Standards',
    'Python',
    'TypeScript / React',
    'SQL',
    'Embedded Systems',
    'Data Analysis',
    'Git',
    'Linux',
  ],
  email: 'msaggu@ualberta.ca',
  github: 'https://github.com/msaggu204',
  linkedin: 'https://www.linkedin.com/in/manjotsaggu/',
  headshot: 'headshot.jpg',
};
