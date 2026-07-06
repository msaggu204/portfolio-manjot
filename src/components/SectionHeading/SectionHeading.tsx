import React from 'react';
import styles from './SectionHeading.module.css';
import Reveal from '../Reveal/Reveal';

interface SectionHeadingProps {
  /** Zero-padded index shown in mono, e.g. "01" */
  index: string;
  title: string;
}

/** Standard numbered section heading — use for every top-level section. */
const SectionHeading: React.FC<SectionHeadingProps> = ({ index, title }) => (
  <Reveal>
    <div className={styles.wrapper}>
      <span className={styles.index} aria-hidden="true">{index}</span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  </Reveal>
);

export default SectionHeading;
