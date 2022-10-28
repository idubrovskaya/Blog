import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { Button } from '../Button/Button';
import { WaveTemplate } from '../Templates/WaveTemplate';
import styles from './RegisterConfirmation.module.css';
import { IState } from '../../redux/store';

export const RegisterConfirmation = () => {
  const { theme } = useContext(Context);
  const history = useHistory();
  const email = useSelector((state: IState) => state.authReducer.email);
  return (
    <div className={styles.container}>
      <WaveTemplate>
        <div className={styles.wrapper}>
          <h1 className={styles.title} style={{ color: theme.contentTitle }}>
            Registration Confirmation
          </h1>
          <p className={styles.text}>
            Please activate your account with the activation link in the email
            {email}. Please, check your email
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
