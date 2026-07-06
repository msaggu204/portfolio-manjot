import React from 'react';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.card}>
      <div className={styles.code}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>
        Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <a href={import.meta.env.BASE_URL} className={styles.homeLink}>← Return Home</a>
    </div>
  </div>
);

export default NotFound;
