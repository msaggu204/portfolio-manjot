import React from 'react';
import styles from './Hero.module.css';
import gitlogo from '../Logos/github.svg';
import linkedin from '../Logos/linkedin.svg';
import email from '../Logos/email.svg';
import cv from '../Logos/cv.svg';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <p className={styles.greeting}>{'> Hi there, I\'m'}</p>
        <h1 className={styles.name}>MANJOT SAGGU</h1>
        <div className={styles.divider} />
        <p className={styles.role}>Compliance Engineer, EIT&nbsp;&nbsp;·&nbsp;&nbsp;Manitoba Hydro</p>
        <p className={styles.bio}>
          Computer Engineering graduate from the University of Alberta (Spring 2025).
          Experience spanning silicon validation at Meta, natural gas engineering at ATCO,
          and software development. I bring a systems-level perspective to every challenge.
          Outside of work: personal finance, guitar, MMA, and golf.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/msaggu204"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <img src={gitlogo} alt="GitHub" className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/manjotsaggu/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <a
            href="mailto:msaggu@ualberta.ca"
            className={styles.socialLink}
            aria-label="Email"
          >
            <img src={email} alt="Email" className={styles.socialIcon} />
          </a>
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
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>scroll</span>
        <span className={styles.arrow}>↓</span>
      </div>
    </section>
  );
};

export default Hero;
