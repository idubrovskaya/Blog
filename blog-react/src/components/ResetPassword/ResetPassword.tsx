import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { WaveTemplate } from '../Templates/WaveTemplate';
import styles from './ResetPassword.module.css';

export const ResetPassword = () => {
  const { theme } = useContext(Context);

  const history = useHistory();

  return (
    <div>
      <WaveTemplate>
        <div className={styles.wrapper}>
          <h1 className={styles.title} style={{ color: theme.contentTitle }}>
            Reset password
          </h1>
          <p className={styles.text}>Please enter the email for your account</p>
          <Input
            type='email'
            label='Email'
            value=''
            onChange={() => {}}
            onKeyDown={() => {}}
          />
          <Button
            text='Reset'
            onClick={() => {
              history.push('/reset_confirm');
            }}
          />
          <p className={styles.info}>
            Return to{' '}
            <NavLink
              to='/login'
              className={styles.login}
              style={{ color: theme.textNavigation }}
            >
              login
            </NavLink>
          </p>
        </div>
      </WaveTemplate>
    </div>
  );
};
