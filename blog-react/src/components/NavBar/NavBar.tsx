import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';
import { SwitchThemeToggle } from '../SwitchThemeToggle/SwitchThemeToggle';
import styles from './NavBar.module.css';

export interface INavbar {
  closeNavbar: () => void;
}

export const Navbar = ({ closeNavbar }: INavbar) => {
  const { theme, isDark, changeIsDark } = useContext(Context);
  return (
    <div
      className={styles.navbar}
      style={{ background: theme.backgroundNavbar }}
    >
      <div className={styles.navigation}>
        <img
          className={styles.close}
          style={{ filter: theme.menu }}
          src='img/cross_copy.svg'
          onClick={closeNavbar}
          alt='close'
        />
        <ul>
          <li>
            {' '}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              style={{ color: theme.textNavigation }}
              exact
              to='/'
            >
              All posts
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              style={{ color: theme.textNavigation }}
              exact
              to='/login'
            >
              Login
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              style={{ color: theme.textNavigation }}
              exact
              to='/registration'
            >
              Registration
            </NavLink>
          </li>
        </ul>
        <SwitchThemeToggle
          inputChecked={isDark ? true : false}
          onClick={changeIsDark}
        />{' '}
      </div>
    </div>
  );
};
