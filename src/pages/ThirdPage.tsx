import React, { useState, useMemo, useCallback } from 'react';
import styles from './ThirdPage.module.css';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectModal from '../components/Projects/ProjectModal';
import { projects, ProjectItem } from '../data/projects';

const CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const ThirdPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  // Stable reference — prevents ProjectModal useEffect from re-running on every render
  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Projects</h2>
        </div>

        {/* Category filter */}
        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterPill} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleClose}
        />
      )}
    </section>
  );
};

export default ThirdPage;
