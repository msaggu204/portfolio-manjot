import React from 'react';
import styles from './Footer.module.css';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand} aria-label="Back to top">
          {'<MS />'}
        </a>
        <p className={styles.tagline}>{profile.tagline}</p>
        <nav className={styles.links} aria-label="Footer links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href={`mailto:${profile.email}`} className={styles.link}>Email</a>
        </nav>
        <p className={styles.copyright}>
          © {year} {profile.name} · Built with React + TypeScript · {profile.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
