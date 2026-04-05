import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      Ⓒ {year} Manjot Saggu. All Rights Reserved.
    </footer>
  );
};

export default Footer;
