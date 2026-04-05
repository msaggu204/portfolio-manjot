import React from 'react';
import styles from './VolunteeringEntry.module.css';
import { useInView } from '../../hooks/useInView';
import { VolunteeringItem } from '../../data/volunteering';

interface Props {
  entry: VolunteeringItem;
}

const VolunteeringEntry: React.FC<Props> = ({ entry }) => {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.dotColumn}>
        <div className={styles.dot} />
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{entry.date}</div>
        <div className={styles.role}>{entry.role}</div>
        <div className={styles.org}>{entry.org}</div>
        <ul className={styles.points}>
          {entry.bullets.map((bullet, i) => (
            <li key={`${entry.id}-${i}`}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VolunteeringEntry;
