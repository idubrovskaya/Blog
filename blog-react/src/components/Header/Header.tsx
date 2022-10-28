import styles from './Header.module.css';
import { useState } from 'react';
import { Navbar } from '../NavBar/NavBar';
import { useContext } from 'react';
import { Context } from '../../App';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { theme } = useContext(Context);

  const { isLoggedIn, username } = useSelector(
    (state: IState) => state.authReducer
  );

  const closeNavbar = () => {
    setIsActive(false);
  };

  return (
    <nav className={styles.headerContainer}>
      {isActive ? <Navbar closeNavbar={closeNavbar} /> : null}
      <div className={styles.header}>
        <img
          className={styles.menu}
          src='img/Menu.svg'
          alt='burger-menu'
          onClick={() => setIsActive(!isActive)}
          style={{ filter: theme.menu }}
        />

        <img
          className={styles.icon}
          src='img/icon.svg'
          alt='icon'
          style={{ filter: theme.menu }}
        />
        {isLoggedIn ? (
          <p className={styles.username} style={{ color: theme.username }}>
            {username}
          </p>
        ) : null}
      </div>
    </nav>
  );
};
