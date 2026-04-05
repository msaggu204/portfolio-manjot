import React, { useState, useEffect } from 'react';
import styles from './Splash.module.css';

const Splash: React.FC = () => {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2600);
    const goneTimer = setTimeout(() => setGone(true), 3200);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`${styles.splash} ${exiting ? styles.exiting : ''}`} aria-hidden="true">
      <div className={styles.content}>
        <div className={styles.monogram}>{'<MS />'}</div>
        <div className={styles.name}>MANJOT SAGGU</div>
        <div className={styles.barTrack}>
          <div className={styles.barFill} />
        </div>
        <div className={styles.tagline}>Compliance Engineer · EIT</div>
      </div>
    </div>
  );
};

export default Splash;
