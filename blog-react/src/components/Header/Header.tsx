import styles from './Header.module.css';
import { useState } from 'react';
import { Navbar } from '../NavBar/NavBar';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const closeNavbar = () => {
    setIsActive(false);
  };
  return (
    <nav className={styles.header}>
      {isActive ? <Navbar closeNavbar={closeNavbar} /> : null}

      <img
        className={styles.menu}
        src='img/Menu.svg'
        onClick={() => setIsActive(true)}
      />

      <img className={styles.icon} src='img/icon.svg' />
      <h2 className={styles.username}>Username</h2>
    </nav>
  );
};
