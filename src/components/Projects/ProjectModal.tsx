import React, { useEffect, useRef } from 'react';
import styles from './ProjectModal.module.css';
import { ProjectItem } from '../../data/projects';

interface Props {
  project: ProjectItem;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = `modal-title-${project.id}`;

  useEffect(() => {
    // Lock scroll and focus the modal
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap — cycle Tab within modal
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => !el.closest('[aria-hidden="true"]'));

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close dialog">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="2" y1="2" x2="16" y2="16" />
            <line x1="16" y1="2" x2="2" y2="16" />
          </svg>
        </button>

        <div className={styles.header}>
          {project.logo ? (
            <img src={project.logo} alt={`${project.title} logo`} className={styles.logo} loading="lazy" />
          ) : (
            <span className={styles.emoji} aria-hidden="true">{project.emoji}</span>
          )}
          <div className={styles.meta}>
            {project.featured && (
              <span className={styles.featuredBadge} aria-label="Featured project">★ Featured</span>
            )}
            <h2 id={titleId} className={styles.title}>{project.title}</h2>
            <span className={styles.category}>{project.category}</span>
          </div>
        </div>

        <div className={styles.divider} role="separator" />

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.skills} aria-label="Technologies used">
          {project.skills.map((skill) => (
            <li key={skill} className={styles.skill}>{skill}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewBtn}
            >
              View Project <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className={styles.comingSoon}>Link coming soon</span>
          )}
          <button className={styles.cancelBtn} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
