/**
 * Ventures are ongoing things Manjot runs or is building — side hustles,
 * businesses, apps with users, a music project, etc. Distinct from
 * `projects.ts` (finished, showcase-style work).
 *
 * The Ventures section and its nav link stay hidden while this array is
 * empty. Add the first entry and the section, nav item, and section
 * numbering all appear automatically — no component changes needed.
 * If a venture outgrows this site (own brand/customers), give it its own
 * site and set `link` to it here.
 */
export type VentureStatus = 'active' | 'building' | 'paused';

export interface VentureItem {
  id: string;
  name: string;
  /** Short punchy one-liner shown under the name */
  tagline: string;
  description: string;
  status: VentureStatus;
  /** Which part of life this belongs to — see spheres.ts */
  sphereId: string;
  /** External URL (live site, store page, channel, …) */
  link?: string;
  /** Filename in public/ */
  logo?: string;
  emoji?: string;
}

export const ventures: VentureItem[] = [];
