import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import { sections, sectionIndex } from '../../data/sections';

// Nav links derive from the section registry — one source of truth
const NAV_LINKS = sections;

const MOBILE_NAV_ID = 'mobile-nav';

const Nav: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId]     = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section in view
  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        aria-label="Primary navigation"
      >
        <a href="#home" className={styles.brand}>
          {'<MS />'}
        </a>

        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
              >
                <span className={styles.linkIndex} aria-hidden="true">{sectionIndex(id)}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburgerBtn}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_NAV_ID}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <nav
        id={MOBILE_NAV_ID}
        aria-label="Mobile navigation"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.mobileLink}
            onClick={closeMobile}
            tabIndex={mobileOpen ? 0 : -1}
          >
            <span className={styles.linkIndex} aria-hidden="true">{sectionIndex(id)}.</span>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Nav;
