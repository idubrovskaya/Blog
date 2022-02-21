import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';
import { SwitchThemeToggle } from '../SwitchThemeToggle/SwitchThemeToggle';
import styles from './NavBar.module.css';

export interface INavbar {
  closeNavbar: () => void;
}

export const Navbar = ({ closeNavbar }: INavbar) => {
  const { isDark, changeIsDark } = useContext(Context);
  return (
    <div className={styles.navbar}>
      <img
        className={styles.close}
        src='img/cross_copy.svg'
        onClick={closeNavbar}
        alt='close'
      />
      <div className={styles.navigation}>
        <ul>
          <li>
            {' '}
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
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
              exact
              to='/registration'
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </div>
      <SwitchThemeToggle onClick={changeIsDark} />{' '}
    </div>
  );
};
