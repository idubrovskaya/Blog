import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { WaveTemplate } from '../Templates/WaveTemplate';
import { SubscriptionTitle } from '../SubscriptionTitle/SubscriptionTitle';
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../App';

export const Login = () => {
  const { theme } = useContext(Context);
  return (
    <div>
      <WaveTemplate>
        <div>
          <SubscriptionTitle />
        </div>
        <div className={styles.form}>
          <Input
            type='email'
            label='Email'
            value=''
            onChange={() => {}}
            onKeyDown={() => {}}
          />
          <Input
            type='password'
            label='Password'
            value=''
            onChange={() => {}}
            onKeyDown={() => {}}
          />
          <Button text='Login' onClick={() => {}} />
          <p className={styles.info}>
            Forgot your password?
            <NavLink
              to='/reset_password'
              className={styles.password}
              style={{ color: theme.textNavigation }}
            >
              {' '}
              Reset password{' '}
            </NavLink>
          </p>
        </div>
      </WaveTemplate>
    </div>
  );
};
