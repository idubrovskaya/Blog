import { NavLink } from 'react-router-dom';
import styles from './SubscriptionTitle.module.css';

export const SubscriptionTitle = () => {
  return (
    <div className={styles.subscriptionTitle}>
      <p className={styles.inactive}>
        <NavLink to='/login' activeStyle={{ color: '#016efc' }}>
          Login
        </NavLink>
        <span className={styles.borderline}>|</span>
        <NavLink to='/registration' activeStyle={{ color: '#016efc' }}>
          Registration
        </NavLink>
      </p>
    </div>
  );
};
