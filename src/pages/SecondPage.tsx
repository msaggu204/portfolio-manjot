import React from 'react';
import styles from './SecondPage.module.css';
import ExperienceEntry from '../components/Experience/ExperienceEntry';
import { experiences } from '../data/experiences';

const SecondPage: React.FC = () => {
  return (
    <section id="workexperience" className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Work Experience</h2>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <ExperienceEntry key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
