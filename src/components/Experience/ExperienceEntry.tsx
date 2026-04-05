import React from 'react';
import styles from './ExperienceEntry.module.css';
import { useInView } from '../../hooks/useInView';
import { ExperienceItem } from '../../data/experiences';

interface Props {
  experience: ExperienceItem;
}

const ExperienceEntry: React.FC<Props> = ({ experience }) => {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.dotColumn}>
        <div className={styles.dot} />
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{experience.date}</div>
        <div className={styles.role}>{experience.role}</div>
        <div className={styles.company}>{experience.company}</div>
        {experience.bullets.length > 0 && (
          <ul className={styles.points}>
            {experience.bullets.map((bullet, i) => (
              <li key={`${experience.id}-${i}`}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceEntry;
