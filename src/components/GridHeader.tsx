import React, { useState, useEffect } from 'react';
import styles from './GridHeader.module.css';

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Experience',  href: '#workexperience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Involvement', href: '#volunteering' },
  { label: 'Contact',     href: '#contact' },
] as const;

const MOBILE_NAV_ID = 'mobile-nav';

const GridHeader: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 550) setMobileOpen(false);
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
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
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
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} className={styles.mobileLink} onClick={closeMobile} tabIndex={mobileOpen ? 0 : -1}>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default GridHeader;
