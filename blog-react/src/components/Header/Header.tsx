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
        alt='burger-menu'
        onClick={() => setIsActive(true)}
      />

      <img className={styles.icon} src='img/icon.svg' alt='icon' />
      <h2 className={styles.username}>Username</h2>
    </nav>
  );
};
