import React, { useState, useEffect } from 'react';
import styles from './Splash.module.css';
import { profile } from '../../data/profile';

const SEEN_KEY = 'splash-seen';

/**
 * Intro splash — shown once per browser session, then skipped so returning
 * visitors (and in-site navigation) get straight to the content.
 */
const Splash: React.FC = () => {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(() => {
    try {
      return sessionStorage.getItem(SEEN_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (gone) return;
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode — splash just replays next visit */
    }
    const exitTimer = setTimeout(() => setExiting(true), 1600);
    const goneTimer = setTimeout(() => setGone(true), 2250);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(goneTimer);
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div className={`${styles.splash} ${exiting ? styles.exiting : ''}`} aria-hidden="true">
      <div className={styles.content}>
        <div className={styles.monogramWrap}>
          <span className={styles.ring} />
          <span className={styles.monogram}>{'<MS />'}</span>
        </div>
        <div className={styles.name}>{profile.name.toUpperCase()}</div>
        <div className={styles.barTrack}>
          <div className={styles.barFill} />
        </div>
        <div className={styles.tagline}>{profile.role} · {profile.company}</div>
      </div>
    </div>
  );
};

export default Splash;
