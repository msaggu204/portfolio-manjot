import { ventures } from './ventures';

/**
 * Single source of truth for homepage section order. Nav links, section
 * numbers ("01 //"), and valid anchor hashes all derive from this list —
 * add or reorder here and everything stays consistent.
 */
export interface SectionDef {
  id: string;
  label: string;
}

const ALL_SECTIONS: SectionDef[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'ventures', label: 'Ventures' }, // hidden until ventures.ts has entries
  { id: 'involvement', label: 'Involvement' },
  { id: 'contact', label: 'Contact' },
];

export const sections: SectionDef[] = ALL_SECTIONS.filter(
  (s) => s.id !== 'ventures' || ventures.length > 0,
);

/** Zero-padded position of a section ("01", "02", …) based on visible order. */
export function sectionIndex(id: string): string {
  return String(sections.findIndex((s) => s.id === id) + 1).padStart(2, '0');
}
