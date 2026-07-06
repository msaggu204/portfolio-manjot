import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import PowerGrid from '../PowerGrid/PowerGrid';
import { profile } from '../../data/profile';
import gitlogo from '../Logos/github.svg';
import linkedin from '../Logos/linkedin.svg';
import email from '../Logos/email.svg';
import cv from '../Logos/cv.svg';

const CYCLE_MS = 2600;

/** Rotating descriptor words under the hero name. */
const Cycler: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      CYCLE_MS,
    );
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className={styles.cycler} aria-live="off">
      <span key={index} className={styles.cyclerWord}>{words[index]}</span>
    </span>
  );
};

const SOCIALS = [
  { href: profile.github, icon: gitlogo, label: 'GitHub', external: true },
  { href: profile.linkedin, icon: linkedin, label: 'LinkedIn', external: true },
  { href: `mailto:${profile.email}`, icon: email, label: 'Email', external: false },
] as const;

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <PowerGrid />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.greeting}>{'> Hi there, I\'m'}</p>
        <h1 className={styles.name}>{profile.name}</h1>

        <p className={styles.roleLine}>
          <Cycler words={profile.descriptors} />
          <span className={styles.cursor} aria-hidden="true">_</span>
        </p>

        <p className={styles.bio}>
          {profile.role} @ {profile.company} — {profile.tagline}
        </p>

        <div className={styles.actions}>
          <a href="#experience" className={styles.btnPrimary}>
            View Experience
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get in Touch
          </a>
        </div>

        <div className={styles.socialLinks}>
          {SOCIALS.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              className={styles.socialLink}
              aria-label={label}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <img src={icon} alt={label} className={styles.socialIcon} />
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
            aria-label="Resume"
          >
            <img src={cv} alt="Resume" className={styles.socialIcon} />
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scrollIndicator} aria-label="Scroll to About section">
        <span>scroll</span>
        <span className={styles.arrow} aria-hidden="true">↓</span>
      </a>
    </section>
  );
};

export default Hero;
