import React, { useState, useMemo, useCallback } from 'react';
import styles from './ProjectsSection.module.css';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Reveal from '../components/Reveal/Reveal';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectModal from '../components/Projects/ProjectModal';
import { projects, ProjectItem } from '../data/projects';
import { spheres, getSphere } from '../data/spheres';
import { sectionIndex } from '../data/sections';

const ALL_SPHERES = 'all';

// Only offer sphere filters that actually have projects
const SPHERE_FILTERS = spheres.filter((s) =>
  projects.some((p) => p.sphereId === s.id),
);

const ProjectsSection: React.FC = () => {
  const [activeSphere, setActiveSphere] = useState(ALL_SPHERES);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const sphereFiltered = useMemo(
    () =>
      activeSphere === ALL_SPHERES
        ? projects
        : projects.filter((p) => p.sphereId === activeSphere),
    [activeSphere],
  );

  // Categories derive from the active sphere, so combos are never empty
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(sphereFiltered.map((p) => p.category)))],
    [sphereFiltered],
  );

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? sphereFiltered
        : sphereFiltered.filter((p) => p.category === activeCategory),
    [sphereFiltered, activeCategory],
  );

  const selectSphere = (id: string) => {
    setActiveSphere(id);
    setActiveCategory('All'); // avoid stale category from another sphere
  };

  // Stable reference — prevents ProjectModal useEffect from re-running on every render
  const handleClose = useCallback(() => setSelectedProject(null), []);

  const activeSphereData = getSphere(activeSphere);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading index={sectionIndex('projects')} title="Projects" />

        <Reveal>
          <div className={styles.sphereFilters} role="group" aria-label="Filter projects by area of life">
            <button
              className={`${styles.spherePill} ${activeSphere === ALL_SPHERES ? styles.active : ''}`}
              onClick={() => selectSphere(ALL_SPHERES)}
              aria-pressed={activeSphere === ALL_SPHERES}
            >
              Everything
            </button>
            {SPHERE_FILTERS.map((sphere) => (
              <button
                key={sphere.id}
                className={`${styles.spherePill} ${activeSphere === sphere.id ? styles.active : ''}`}
                onClick={() => selectSphere(sphere.id)}
                aria-pressed={activeSphere === sphere.id}
              >
                {sphere.logo ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${sphere.logo}`}
                    alt=""
                    className={styles.sphereLogo}
                  />
                ) : (
                  <span aria-hidden="true">{sphere.emoji}</span>
                )}
                {sphere.label}
              </button>
            ))}
          </div>

          <p className={styles.sphereBlurb} aria-live="polite">
            {activeSphereData?.blurb ?? 'Everything I\'ve built, across all parts of life.'}
          </p>

          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
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
        </Reveal>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90}>
              <ProjectCard project={project} onClick={setSelectedProject} />
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </section>
  );
};

export default ProjectsSection;
