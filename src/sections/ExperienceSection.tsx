import React from 'react';
import styles from './ExperienceSection.module.css';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import TimelineEntry from '../components/Timeline/TimelineEntry';
import { experiences } from '../data/experiences';
import { sectionIndex } from '../data/sections';

const ExperienceSection: React.FC = () => (
  <section id="experience" className={styles.section}>
    <div className={styles.inner}>
      <SectionHeading index={sectionIndex('experience')} title="Work Experience" />
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <TimelineEntry
            key={exp.id}
            date={exp.date}
            title={exp.role}
            subtitle={exp.company}
            bullets={exp.bullets}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
