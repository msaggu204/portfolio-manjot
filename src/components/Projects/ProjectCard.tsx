import React from 'react';
import styles from './ProjectCard.module.css';
import SphereBadge from '../SphereBadge/SphereBadge';
import { ProjectItem } from '../../data/projects';

interface Props {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') { onClick(project); }
    if (e.key === ' ')     { e.preventDefault(); onClick(project); }
  };

  // Track the pointer so the border spotlight follows the cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <article
      className={styles.card}
      onClick={() => onClick(project)}
      onMouseMove={handleMouseMove}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={handleKeyDown}
    >
      {project.featured && (
        <div className={styles.featuredBadge} aria-label="Featured project">★ Featured</div>
      )}

      <div className={styles.header}>
        {project.logo ? (
          <img src={project.logo} alt={`${project.title} logo`} className={styles.logo} loading="lazy" />
        ) : (
          <span className={styles.emoji} aria-hidden="true">{project.emoji}</span>
        )}
        <div className={styles.title}>{project.title}</div>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{project.description}</p>
      </div>

      <ul className={styles.skills} aria-label="Technologies">
        {project.skills.slice(0, 6).map((skill) => (
          <li key={skill} className={styles.skill}>{skill}</li>
        ))}
      </ul>

      <div className={styles.cardFooter}>
        <span className={styles.meta}>
          <SphereBadge sphereId={project.sphereId} />
          <span className={styles.category}>{project.category}</span>
        </span>
        <span className={styles.cta} aria-hidden="true">View details →</span>
      </div>
    </article>
  );
};

export default ProjectCard;
