import React from 'react';
import styles from './Reveal.module.css';
import { useInView } from '../../hooks/useInView';

type Direction = 'up' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  /** Slide-in direction (default 'up') */
  direction?: Direction;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
}

/**
 * Scroll-triggered reveal wrapper. Wrap any block in <Reveal> to give it a
 * one-time fade/slide entrance when it scrolls into view. Use `delay` to
 * stagger siblings. This is the standard way to animate new sections —
 * don't hand-roll IntersectionObserver logic.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const [ref, isVisible] = useInView<HTMLDivElement>(0.12);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${isVisible ? styles.visible : ''} ${className}`}
      /* transitionDelay is dynamic per-instance — the one sanctioned inline style */
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
