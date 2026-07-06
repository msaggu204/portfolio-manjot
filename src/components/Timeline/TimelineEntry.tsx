import React from 'react';
import styles from './TimelineEntry.module.css';
import { useInView } from '../../hooks/useInView';

interface TimelineEntryProps {
  date: string;
  title: string;
  subtitle: string;
  bullets: string[];
  /** Optional chip rendered beside the subtitle (e.g. a SphereBadge) */
  badge?: React.ReactNode;
}

/**
 * One entry on a vertical timeline (used by both Experience and
 * Involvement). The connector line draws itself in and the node
 * pulses when the entry scrolls into view.
 */
const TimelineEntry: React.FC<TimelineEntryProps> = ({ date, title, subtitle, bullets, badge }) => {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.rail} aria-hidden="true">
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{date}</div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subtitle}>
          {subtitle}
          {badge && <span className={styles.badgeSlot}>{badge}</span>}
        </div>
        {bullets.length > 0 && (
          <ul className={styles.points}>
            {bullets.map((bullet, i) => (
              <li key={i} className={styles.point}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineEntry;
