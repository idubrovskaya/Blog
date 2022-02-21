import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { SubscriptionTitle } from '../SubscriptionTitle/SubscriptionTitle';
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
      <div>
        <SubscriptionTitle />
      </div>
      <div className={styles.form}>
        <Input type='email' label='Email' value='' onChange={() => {}} />
        <Input type='password' label='Password' value='' onChange={() => {}} />
        <Button text='Login' onClick={() => {}} />
        <p className={styles.info}>
          Forgot your password?
          <NavLink to='/reset_password' className={styles.password}>
            {' '}
            Reset password{' '}
          </NavLink>
        </p>
      </div>
    </div>
  );
};
