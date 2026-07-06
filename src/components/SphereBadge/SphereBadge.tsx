import React from 'react';
import styles from './SphereBadge.module.css';
import { getSphere } from '../../data/spheres';

interface SphereBadgeProps {
  sphereId: string;
}

/** Small chip identifying which life bucket an item belongs to (see spheres.ts). */
const SphereBadge: React.FC<SphereBadgeProps> = ({ sphereId }) => {
  const sphere = getSphere(sphereId);
  if (!sphere) return null;

  return (
    <span className={styles.badge} title={sphere.label}>
      {sphere.logo ? (
        <img
          src={`${import.meta.env.BASE_URL}${sphere.logo}`}
          alt=""
          className={styles.logo}
          loading="lazy"
        />
      ) : (
        <span aria-hidden="true">{sphere.emoji}</span>
      )}
      {sphere.shortLabel}
    </span>
  );
};

export default SphereBadge;
