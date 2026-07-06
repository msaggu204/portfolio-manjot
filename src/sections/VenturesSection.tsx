import React from 'react';
import styles from './VenturesSection.module.css';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Reveal from '../components/Reveal/Reveal';
import SphereBadge from '../components/SphereBadge/SphereBadge';
import { ventures, VentureStatus } from '../data/ventures';
import { sectionIndex } from '../data/sections';

const STATUS_LABELS: Record<VentureStatus, string> = {
  active: 'Active',
  building: 'In the works',
  paused: 'On ice',
};

/**
 * Ongoing ventures — side hustles, businesses, apps with users.
 * Renders nothing until src/data/ventures.ts has entries; then this section,
 * its nav link, and its section number all appear automatically.
 */
const VenturesSection: React.FC = () => {
  if (ventures.length === 0) return null;

  return (
    <section id="ventures" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading index={sectionIndex('ventures')} title="Ventures" />

        <div className={styles.grid}>
          {ventures.map((venture, i) => (
            <Reveal key={venture.id} delay={(i % 2) * 90}>
              <article className={styles.card}>
                <div className={styles.header}>
                  {venture.logo ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${venture.logo}`}
                      alt={`${venture.name} logo`}
                      className={styles.logo}
                      loading="lazy"
                    />
                  ) : (
                    <span className={styles.emoji} aria-hidden="true">{venture.emoji}</span>
                  )}
                  <div className={styles.meta}>
                    <h3 className={styles.name}>{venture.name}</h3>
                    <p className={styles.tagline}>{venture.tagline}</p>
                  </div>
                  <span className={`${styles.status} ${styles[venture.status]}`}>
                    <span className={styles.statusDot} aria-hidden="true" />
                    {STATUS_LABELS[venture.status]}
                  </span>
                </div>

                <p className={styles.description}>{venture.description}</p>

                <div className={styles.cardFooter}>
                  <SphereBadge sphereId={venture.sphereId} />
                  {venture.link && (
                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Visit <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
