import React, { useState } from 'react';
import styles from './AboutSection.module.css';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Reveal from '../components/Reveal/Reveal';
import { profile } from '../data/profile';
import { sectionIndex } from '../data/sections';

const AboutSection: React.FC = () => {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading index={sectionIndex('about')} title="About Me" />

        <div className={styles.grid}>
          <Reveal direction="left" className={styles.photoCol}>
            <div className={styles.photoFrame}>
              {photoMissing ? (
                <div className={styles.photoFallback} aria-hidden="true">
                  <span className={styles.fallbackMonogram}>{'<MS />'}</span>
                  <span className={styles.fallbackHint}>headshot coming soon</span>
                </div>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}${profile.headshot}`}
                  alt={`${profile.name} headshot`}
                  className={styles.photo}
                  loading="lazy"
                  onError={() => setPhotoMissing(true)}
                />
              )}
            </div>
          </Reveal>

          <div className={styles.textCol}>
            <Reveal delay={100}>
              <p className={styles.bio}>{profile.bio}</p>
            </Reveal>

            <Reveal delay={200}>
              <ul className={styles.facts} aria-label="Quick facts">
                {profile.facts.map((fact) => (
                  <li key={fact} className={styles.fact}>{fact}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <div className={styles.toolbox}>
                <span className={styles.toolboxLabel}>// toolbox</span>
                <ul className={styles.skills} aria-label="Core skills">
                  {profile.skills.map((skill) => (
                    <li key={skill} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
