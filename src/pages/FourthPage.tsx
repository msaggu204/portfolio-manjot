import React from 'react';
import styles from './FourthPage.module.css';
import VolunteeringEntry from '../components/Volunteering/VolunteeringEntry';
import { volunteering } from '../data/volunteering';

const FourthPage: React.FC = () => {
  return (
    <section id="volunteering" className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Leadership &amp; Involvement</h2>
        </div>
        <div className={styles.timeline}>
          {volunteering.map((entry) => (
            <VolunteeringEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthPage;
