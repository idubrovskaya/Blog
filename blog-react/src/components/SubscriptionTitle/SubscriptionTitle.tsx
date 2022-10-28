import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';
import styles from './SubscriptionTitle.module.css';

export const SubscriptionTitle = () => {
  const { theme } = useContext(Context);

  return (
    <div className={styles.subscriptionTitle}>
      <p className={styles.inactive}>
        <NavLink to='/login' activeStyle={{ color: theme.contentTitle }}>
          Login
        </NavLink>
        <span className={styles.borderline}>|</span>
        <NavLink to='/registration' activeStyle={{ color: theme.contentTitle }}>
          Registration
        </NavLink>
      </p>
    </div>
  );
};
