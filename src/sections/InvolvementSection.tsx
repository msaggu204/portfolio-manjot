import React from 'react';
import styles from './InvolvementSection.module.css';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import TimelineEntry from '../components/Timeline/TimelineEntry';
import SphereBadge from '../components/SphereBadge/SphereBadge';
import { volunteering } from '../data/volunteering';
import { sectionIndex } from '../data/sections';

const InvolvementSection: React.FC = () => (
  <section id="involvement" className={styles.section}>
    <div className={styles.inner}>
      <SectionHeading index={sectionIndex('involvement')} title="Leadership & Involvement" />
      <div className={styles.timeline}>
        {volunteering.map((entry) => (
          <TimelineEntry
            key={entry.id}
            date={entry.date}
            title={entry.role}
            subtitle={entry.org}
            bullets={entry.bullets}
            badge={<SphereBadge sphereId={entry.sphereId} />}
          />
        ))}
      </div>
    </div>
  </section>
);

export default InvolvementSection;
