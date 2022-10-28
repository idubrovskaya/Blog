import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { Button } from '../Button/Button';
import { WaveTemplate } from '../Templates/WaveTemplate';
import styles from './ResetConfirm.module.css';

export const ResetConfirm = () => {
  const { theme } = useContext(Context);
  const history = useHistory();
  return (
    <div className={styles.container}>
      <WaveTemplate>
        <div className={styles.wrapper}>
          <h1 className={styles.title} style={{ color: theme.contentTitle }}>
            Reset password
          </h1>
          <p className={styles.text}>
            You will receive an email{' '}
            <a
              href='mailto:test@gmail.com'
              style={{ color: theme.textNavigation }}
            >
              test@gmail.com
            </a>{' '}
            with a link to reset your password
          </p>
          <Button
            text='Home'
            onClick={() => {
              history.push('/');
            }}
          />
        </div>
      </WaveTemplate>
    </div>
  );
};
