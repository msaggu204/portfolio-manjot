/**
 * Spheres are the top-level buckets of Manjot's life that portfolio items
 * belong to — student era, personal side quests, community work, future
 * businesses, etc. Projects, volunteering entries, and ventures each carry
 * a `sphereId` pointing here.
 *
 * To add a new sphere (e.g. music, a business): add an entry below, then tag
 * items with its id. Filters and badges pick it up automatically.
 */
export interface Sphere {
  id: string;
  /** Full name, used in filters and blurbs */
  label: string;
  /** Compact name for badges on cards/timelines */
  shortLabel: string;
  /** Fallback glyph when there's no logo */
  emoji: string;
  /** Optional logo filename in public/ */
  logo?: string;
  /** One-liner shown when this sphere's filter is active */
  blurb: string;
}

export const spheres: Sphere[] = [
  {
    id: 'uofa',
    label: 'University of Alberta',
    shortLabel: 'U of A',
    emoji: '🎓',
    logo: 'UofA_Eng.png',
    blurb: 'Built during my Computer Engineering degree at the University of Alberta (2020–2025).',
  },
  {
    id: 'personal',
    label: 'Personal',
    shortLabel: 'Personal',
    emoji: '🚀',
    blurb: 'Self-directed side quests — tools, experiments, and whatever I\'m currently into.',
  },
  {
    id: 'community',
    label: 'Community',
    shortLabel: 'Community',
    emoji: '🤝',
    blurb: 'Volunteering and community leadership outside of school and work.',
  },
  {
    id: 'manitoba-hydro',
    label: 'Manitoba Hydro',
    shortLabel: 'Manitoba Hydro',
    emoji: '⚡',
    logo: 'MH_logo.jpeg',
    blurb: 'Workplace involvement at Manitoba Hydro, beyond the day job.',
  },
];

export function getSphere(id: string): Sphere | undefined {
  return spheres.find((s) => s.id === id);
}
